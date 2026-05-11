import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2, ChevronDown, ChevronUp, Trash2 } from 'lucide-react';
import logoGia from '../assets/logo-gia.png';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: string[];
}

// ─── Debug Log Types ──────────────────────────────────────────────────────────
interface WebhookLog {
  id: string;
  timestamp: string;
  type: 'request' | 'response' | 'error';
  label: string;
  details: Record<string, unknown>;
}
// ─────────────────────────────────────────────────────────────────────────────

// ─── n8n Webhook Configuration ───────────────────────────────────────────────
const WEBHOOK_URL = 'https://gwebhook.guesstech.com.br/webhook/gia';

// Generates a unique session ID per browser tab to maintain conversation context
const SESSION_ID = crypto.randomUUID();
// ─────────────────────────────────────────────────────────────────────────────

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Olá! Eu sou a Gia, a Inteligência Artificial da sua imobiliária. Como posso te ajudar hoje?',
      options: ['Quero alugar um imóvel', 'Segunda via de boleto', 'Falar com corretor']
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // ── Debug state ────────────────────────────────────────────────────────────
  const [debugLogs, setDebugLogs] = useState<WebhookLog[]>([]);
  const [debugOpen, setDebugOpen] = useState(true);
  const debugContainerRef = useRef<HTMLDivElement>(null);
  // ──────────────────────────────────────────────────────────────────────────

  const addLog = (type: WebhookLog['type'], label: string, details: Record<string, unknown>) => {
    const entry: WebhookLog = {
      id: crypto.randomUUID(),
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour12: false, fractionalSecondDigits: 3 }),
      type,
      label,
      details,
    };
    setDebugLogs(prev => [...prev, entry]);
    // Auto-scroll debug panel
    setTimeout(() => {
      if (debugContainerRef.current) {
        debugContainerRef.current.scrollTop = debugContainerRef.current.scrollHeight;
      }
    }, 50);
  };

  // Scroll only inside the chat container — never the page
  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    const requestBody = { message: text, sessionId: SESSION_ID };

    // ── Log: Request ─────────────────────────────────────────────────────────
    addLog('request', '⬆ REQUEST enviado', {
      url: WEBHOOK_URL,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: requestBody,
    });
    // ─────────────────────────────────────────────────────────────────────────

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      // Capture all response headers
      const headersObj: Record<string, string> = {};
      response.headers.forEach((value, key) => { headersObj[key] = value; });

      // Read raw body text first so we can log it regardless of parse success
      const rawBody = await response.text();

      // ── Log: Response ──────────────────────────────────────────────────────
      addLog('response', `⬇ RESPONSE ${response.status} ${response.statusText}`, {
        status: response.status,
        statusText: response.statusText,
        headers: headersObj,
        rawBody,
      });
      // ──────────────────────────────────────────────────────────────────────

      if (!response.ok) {
        throw new Error(`Webhook returned status ${response.status}`);
      }

      // Parse the raw body
      let botReply = 'Não entendi sua solicitação. Por favor, tente novamente.';
      const contentType = headersObj['content-type'] ?? '';

      if (contentType.includes('application/json')) {
        try {
          const data = JSON.parse(rawBody);
          // ── Log: Parsed JSON ───────────────────────────────────────────────
          addLog('response', '📦 JSON parseado', { data });
          // ──────────────────────────────────────────────────────────────────

          // n8n AI Agent node returns an array: [{ output: "..." }]
          if (Array.isArray(data) && data.length > 0) {
            const first = data[0];
            botReply = first?.output ?? first?.text ?? first?.message ?? JSON.stringify(first);
          } else {
            botReply = data?.output ?? data?.text ?? data?.message ?? JSON.stringify(data);
          }
        } catch (parseErr) {
          addLog('error', '❌ Erro ao parsear JSON', { error: String(parseErr), rawBody });
          botReply = rawBody.trim() || botReply;
        }
      } else {
        botReply = rawBody.trim() || botReply;
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReply,
      }]);

    } catch (error) {
      const errMsg = error instanceof Error ? error.message : String(error);
      // ── Log: Error ────────────────────────────────────────────────────────
      addLog('error', `❌ ERRO: ${errMsg}`, { error: errMsg });
      // ─────────────────────────────────────────────────────────────────────
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: 'Desculpe, estou com dificuldade de me conectar agora. Por favor, tente novamente em instantes.',
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const logColors: Record<WebhookLog['type'], string> = {
    request:  'text-[#00dbff]',
    response: 'text-green-400',
    error:    'text-red-400',
  };

  const logBg: Record<WebhookLog['type'], string> = {
    request:  'border-[#00dbff]/30 bg-[#00dbff]/5',
    response: 'border-green-500/30 bg-green-500/5',
    error:    'border-red-500/30 bg-red-500/5',
  };

  return (
    <section id="chat" className="py-24 bg-gradient-to-b from-[#002233] to-[#001a26] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-4">

        {/* ── Chat Widget ────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl bg-[#00111a] border border-[#00dbff]/20 rounded-2xl shadow-2xl shadow-[#00dbff]/10 flex flex-col md:flex-row overflow-hidden"
        >
          {/* Chat Info / Sidebar */}
          <div className="w-full md:w-1/3 bg-[#001a26] p-8 border-b md:border-b-0 md:border-r border-[#00dbff]/10 flex flex-col justify-between">
            <div>
              <img
                src={logoGia}
                alt="Gia"
                className="h-10 w-auto object-contain mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-3">Experimente a Gia</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Interaja com o nosso componente de demonstração. A Gia pode ser integrada via n8n diretamente no seu site ou WhatsApp.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#00dbff]">
                <div className="w-2 h-2 rounded-full bg-[#00dbff] animate-pulse"></div>
                Gia Conectada
              </div>
              <div className="text-xs text-gray-500">Powered by n8n AI Agent</div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="w-full md:w-2/3 h-[500px] flex flex-col bg-[#000a0f]">
            {/* Header */}
            <div className="p-4 border-b border-[#00dbff]/10 bg-[#00111a] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00dbff]/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-[#00dbff]" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Gia AI</h4>
                <p className="text-xs text-[#00dbff]">Assistente Imobiliária</p>
              </div>
            </div>

            {/* Messages Area */}
            <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.sender === 'user' ? 'bg-[#007799]' : 'bg-[#00dbff]/20'}`}>
                      {msg.sender === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-[#00dbff]" />}
                    </div>
                    <div>
                      <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-[#007799] text-white rounded-tr-sm' : 'bg-[#001a26] text-gray-200 border border-[#00dbff]/10 rounded-tl-sm'}`}>
                        {msg.text}
                      </div>
                      {msg.options && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {msg.options.map((opt, i) => (
                            <button
                              key={i}
                              onClick={() => handleSend(opt)}
                              className="px-4 py-2 text-xs rounded-full border border-[#00dbff]/30 text-[#00dbff] hover:bg-[#00dbff]/10 transition-colors"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-full bg-[#00dbff]/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-[#00dbff]" />
                  </div>
                  <div className="bg-[#001a26] border border-[#00dbff]/10 p-4 rounded-2xl rounded-tl-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-[#00dbff] animate-spin" />
                    <span className="text-xs text-gray-400">Gia está processando...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#00111a] border-t border-[#00dbff]/10">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(inputText); }}
                className="flex items-center gap-3 bg-[#000a0f] border border-[#00dbff]/20 rounded-xl p-2 focus-within:border-[#00dbff] transition-colors"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Digite sua mensagem para a Gia..."
                  className="flex-1 bg-transparent border-none outline-none text-white text-sm px-3 placeholder-gray-500"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="w-10 h-10 rounded-lg bg-[#00dbff] text-[#002233] flex items-center justify-center hover:bg-[#00aacc] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* ── DEBUG PANEL ─────────────────────────────────────────────────────── */}
        <div className="w-full max-w-4xl rounded-xl border border-yellow-500/40 bg-[#0a0800] shadow-lg overflow-hidden font-mono text-xs">
          {/* Debug Header */}
          <div
            className="flex items-center justify-between px-4 py-3 bg-yellow-500/10 border-b border-yellow-500/20 cursor-pointer select-none"
            onClick={() => setDebugOpen(o => !o)}
          >
            <div className="flex items-center gap-2 text-yellow-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse inline-block" />
              🔍 DEBUG — Webhook Log
              <span className="ml-2 text-yellow-600 font-normal">
                {WEBHOOK_URL}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-yellow-600">{debugLogs.length} entradas</span>
              <button
                onClick={(e) => { e.stopPropagation(); setDebugLogs([]); }}
                className="text-yellow-600 hover:text-yellow-300 transition-colors"
                title="Limpar logs"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              {debugOpen ? <ChevronUp className="w-4 h-4 text-yellow-500" /> : <ChevronDown className="w-4 h-4 text-yellow-500" />}
            </div>
          </div>

          {/* Debug Body */}
          <AnimatePresence>
            {debugOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  ref={debugContainerRef}
                  className="max-h-64 overflow-y-auto p-4 space-y-3 custom-scrollbar"
                >
                  {debugLogs.length === 0 ? (
                    <p className="text-gray-600 italic">Aguardando comunicação com o webhook... Envie uma mensagem no chat acima.</p>
                  ) : (
                    debugLogs.map(log => (
                      <div key={log.id} className={`rounded-lg border p-3 space-y-1 ${logBg[log.type]}`}>
                        {/* Log header */}
                        <div className="flex items-center gap-3">
                          <span className="text-gray-500">[{log.timestamp}]</span>
                          <span className={`font-bold ${logColors[log.type]}`}>{log.label}</span>
                        </div>
                        {/* Log details */}
                        <pre className="text-gray-300 whitespace-pre-wrap break-all leading-relaxed text-[11px]">
                          {JSON.stringify(log.details, null, 2)}
                        </pre>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* ── END DEBUG PANEL ─────────────────────────────────────────────────── */}

      </div>
    </section>
  );
}
