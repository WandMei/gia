import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: string[];
}

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
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

    // Add user message to the chat
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    try {
      // ── Sends message to n8n webhook ────────────────────────────────────────
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          sessionId: SESSION_ID,
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook returned status ${response.status}`);
      }

      // Handles n8n AI Agent response formats:
      //   - Array:  [{ output: "..." }]  (most common from AI Agent node)
      //   - Object: { output: "..." } or { text: "..." } or { message: "..." }
      //   - Plain text body
      let botReply = 'Não entendi sua solicitação. Por favor, tente novamente.';
      const contentType = response.headers.get('content-type') ?? '';

      if (contentType.includes('application/json')) {
        const data = await response.json();
        // n8n AI Agent node returns an array: [{ output: "..." }]
        if (Array.isArray(data) && data.length > 0) {
          const first = data[0];
          botReply = first?.output ?? first?.text ?? first?.message ?? JSON.stringify(first);
        } else {
          botReply = data?.output ?? data?.text ?? data?.message ?? JSON.stringify(data);
        }
      } else {
        botReply = (await response.text()).trim() || botReply;
      }
      // ───────────────────────────────────────────────────────────────────────

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReply,
      }]);
    } catch (error) {
      console.error('[Gia Webhook Error]', error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: 'Desculpe, estou com dificuldade de me conectar agora. Por favor, tente novamente em instantes.',
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="chat" className="py-24 bg-gradient-to-b from-[#002233] to-[#001a26] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        
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
              <div className="w-16 h-16 bg-[#00dbff]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#00dbff]/30">
                <Bot className="w-8 h-8 text-[#00dbff]" />
              </div>
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
                      {/* Options */}
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
              <div ref={messagesEndRef} />
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
      </div>
    </section>
  );
}
