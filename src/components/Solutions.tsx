import { motion } from 'framer-motion';
import { FileText, Target, Smartphone, Users } from 'lucide-react';

// Platform logo SVGs (inline for zero external dependency)
const WhatsAppLogo = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="24" fill="#25D366"/>
    <path d="M34.5 13.5C31.9 10.9 28.4 9.4 24.7 9.4C17 9.4 10.8 15.6 10.8 23.3C10.8 25.9 11.5 28.4 12.8 30.6L10.7 38.3L18.6 36.2C20.7 37.4 23.2 38.1 24.7 38.1C32.4 38.1 38.6 31.9 38.6 24.2C38.6 20.5 37.1 17 34.5 13.5Z" fill="white"/>
    <path d="M24.7 35.8C23 35.8 20.9 35.2 19.1 34.1L18.6 33.8L14.1 35L15.3 30.6L15 30.1C13.8 28.2 13.1 26 13.1 23.7C13.1 17 18.7 11.7 25.1 11.7C28.1 11.7 31 12.9 33.2 15.1C35.4 17.3 36.5 20.2 36.5 23.2C36.1 29.9 30.9 35.8 24.7 35.8Z" fill="#25D366"/>
    <path d="M30.3 26.1C29.9 25.9 28 25 27.7 24.9C27.4 24.8 27.2 24.7 27 25C26.8 25.3 26.1 26.1 25.9 26.3C25.7 26.5 25.6 26.6 25.3 26.4C24.9 26.2 23.7 25.8 22.3 24.5C21.2 23.5 20.5 22.3 20.3 21.9C20.1 21.5 20.3 21.3 20.5 21.1C20.7 20.9 20.9 20.7 21.1 20.5C21.3 20.3 21.3 20.1 21.5 19.9C21.7 19.7 21.6 19.4 21.5 19.2C21.4 19 20.7 17.2 20.4 16.4C20.2 15.7 19.9 15.8 19.7 15.8C19.5 15.8 19.3 15.8 19 15.8C18.7 15.8 18.3 15.9 17.9 16.3C17.6 16.7 16.7 17.5 16.7 19.3C16.7 21.1 18 22.8 18.2 23.1C18.4 23.4 20.7 26.8 24.1 28.4C24.9 28.7 25.6 29 26.1 29.1C26.9 29.4 27.6 29.3 28.2 29.2C28.8 29.1 30.1 28.4 30.4 27.6C30.7 26.8 30.7 26.2 30.6 26.1C30.7 26.1 30.6 26.1 30.3 26.1Z" fill="white"/>
  </svg>
);

const InstagramLogo = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ig-grad" cx="30%" cy="107%" r="130%">
        <stop offset="0%" stopColor="#fdf497"/>
        <stop offset="5%" stopColor="#fdf497"/>
        <stop offset="45%" stopColor="#fd5949"/>
        <stop offset="60%" stopColor="#d6249f"/>
        <stop offset="90%" stopColor="#285AEB"/>
      </radialGradient>
    </defs>
    <rect width="48" height="48" rx="12" fill="url(#ig-grad)"/>
    <rect x="14" y="14" width="20" height="20" rx="6" stroke="white" strokeWidth="2.5" fill="none"/>
    <circle cx="24" cy="24" r="5" stroke="white" strokeWidth="2.5" fill="none"/>
    <circle cx="31" cy="17" r="1.5" fill="white"/>
  </svg>
);

const MessengerLogo = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="msn-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0099FF"/>
        <stop offset="100%" stopColor="#A033FF"/>
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="24" fill="url(#msn-grad)"/>
    <path d="M24 9C15.7 9 9 15.2 9 22.9C9 27.2 11.1 31.1 14.4 33.7V39L19.5 36.3C21 36.7 22.5 36.9 24 36.9C32.3 36.9 39 30.7 39 22.9C39 15.2 32.3 9 24 9ZM25.5 27.4L21.6 23.3L14.2 27.4L22.3 18.8L26.4 22.9L33.6 18.8L25.5 27.4Z" fill="white"/>
  </svg>
);

const TelegramLogo = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="24" fill="#29B6F6"/>
    <path d="M10.5 23.5L35.5 13.5C36.3 13.2 37.1 13.8 36.8 14.7L32.5 34.8C32.3 35.6 31.3 35.9 30.7 35.3L24.5 29.5L21.2 32.7C20.8 33.1 20.1 32.9 20 32.3L18.6 26.5L10.5 23.5Z" fill="white"/>
    <path d="M18.6 26.5L30.2 18.2C30.5 18 30.8 18.4 30.6 18.7L21.2 29L20 32.3L18.6 26.5Z" fill="#B0BEC5"/>
  </svg>
);

const solutions = [
  {
    icon: FileText,
    title: "Automação de Serviços",
    description: "Emissão de 2ª via de boletos, envio de contratos e consulta de extratos — a gIA integra com seu ERP para fornecer dados em segundos"
  },
  {
    icon: Target,
    title: "Prospecção Inteligente",
    description: "Qualificação de leads automática — a gIA entende se o cliente busca alugar ou comprar e faz as perguntas certas antes de transferir"
  },
  {
    icon: Smartphone,
    title: "Omnichannel Integrado",
    description: "O atendimento acontece onde seu cliente está — seja no WhatsApp, Instagram, Messenger ou Telegram, a gIA mantém o contexto",
    platforms: [
      { Logo: WhatsAppLogo, name: "WhatsApp" },
      { Logo: InstagramLogo, name: "Instagram" },
      { Logo: MessengerLogo, name: "Messenger" },
      { Logo: TelegramLogo, name: "Telegram" },
    ]
  },
  {
    icon: Users,
    title: "Transbordo Híbrido",
    description: "A IA resolve o operacional 24/7, mas quando a negociação exige o toque humano, o atendimento é repassado ao corretor certo — na hora certa",
    highlight: true
  }
];

export default function Solutions() {
  return (
    <section id="recursos" className="py-24 relative overflow-hidden bg-[#002233]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Tudo que uma <span className="text-[#00dbff]">Imobiliária Moderna</span> precisa</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">A gIA não é um chatbot comum — é uma inteligência operacional treinada para o setor imobiliário</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`p-8 rounded-2xl group cursor-pointer relative overflow-hidden flex flex-col items-start transition-all shadow-lg ${
                solution.highlight
                  ? 'bg-gradient-to-br from-[#002f45] to-[#001a26] border border-[#00dbff]/40 hover:border-[#00dbff]/70 hover:shadow-[#00dbff]/10'
                  : 'bg-[#00111a] hover:bg-[#001a26] border border-[#00dbff]/10 hover:border-[#00dbff]/30 hover:shadow-[#00dbff]/5'
              }`}
            >
              {solution.highlight && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#00dbff]/20 border border-[#00dbff]/40 text-[#00dbff] text-xs font-semibold tracking-wide">
                  Diferencial
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border ${
                solution.highlight
                  ? 'bg-[#00dbff]/20 border-[#00dbff]/40'
                  : 'bg-[#00dbff]/10 border-[#00dbff]/20'
              }`}>
                <solution.icon className="w-7 h-7 text-[#00dbff] group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00dbff] transition-colors">{solution.title}</h3>
              <p className="text-gray-400 leading-relaxed transition-colors flex-1">
                {solution.description}
              </p>

              {/* Platform logos for Omnichannel card */}
              {solution.platforms && (
                <div className="mt-6 flex items-center gap-3">
                  {solution.platforms.map(({ Logo, name }) => (
                    <div key={name} title={name} className="opacity-90 hover:opacity-100 hover:scale-110 transition-all">
                      <Logo />
                    </div>
                  ))}
                </div>
              )}

              {/* Hybrid handoff visual cue */}
              {solution.highlight && (
                <div className="mt-6 w-full flex items-center gap-2 text-xs text-[#00dbff]/80 font-medium border-t border-[#00dbff]/15 pt-4">
                  <span className="w-2 h-2 rounded-full bg-[#00dbff] animate-pulse inline-block"></span>
                  IA → Corretor humano quando necessário
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
