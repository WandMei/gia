import { motion } from 'framer-motion';
import { Clock, Frown, Bot, Zap, ArrowRight } from 'lucide-react';

export default function Journey() {
  return (
    <section id="jornada" className="py-24 bg-[#00111a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            A dor do <span className="text-[#00dbff]">Atendimento Manual</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Um atendimento lento custa contratos. A gIA transforma o caos em processos fluídos.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-center">
          
          {/* Card: Problema */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-[#002233] p-8 rounded-2xl border border-red-500/10 relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-xl -mr-10 -mt-10"></div>
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
              <Frown className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Sem a gIA (Realidade Atual)</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 items-start">
                <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Leads esperando horas por uma resposta básica no WhatsApp.</span>
              </li>
              <li className="flex gap-3 text-gray-400 items-start">
                <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Corretores perdendo tempo enviando 2ª via de boleto manualmente.</span>
              </li>
              <li className="flex gap-3 text-gray-400 items-start">
                <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Atendimento limitado ao horário comercial (clientes esfriam).</span>
              </li>
            </ul>
          </motion.div>

          {/* Seta */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="w-8 h-8 text-[#00dbff]/50" />
          </div>

          {/* Card: Solução gIA */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-gradient-to-br from-[#002233] to-[#00334d] p-8 rounded-2xl border border-[#00dbff]/30 relative shadow-2xl shadow-[#00dbff]/10"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00dbff]/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
            <div className="w-12 h-12 rounded-xl bg-[#00dbff]/20 flex items-center justify-center mb-6 border border-[#00dbff]/30">
              <Bot className="w-6 h-6 text-[#00dbff]" />
            </div>
            <h3 className="text-xl font-bold text-[#00dbff] mb-4">Com a Inteligência da gIA</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-300 items-start">
                <Zap className="w-5 h-5 text-[#00dbff] shrink-0 mt-0.5" />
                <span>Respostas instantâneas e humanizadas, 24 horas por dia, 7 dias por semana.</span>
              </li>
              <li className="flex gap-3 text-gray-300 items-start">
                <Zap className="w-5 h-5 text-[#00dbff] shrink-0 mt-0.5" />
                <span>Automação total de serviços: envio de extratos, boletos e contratos via PDF.</span>
              </li>
              <li className="flex gap-3 text-gray-300 items-start">
                <Zap className="w-5 h-5 text-[#00dbff] shrink-0 mt-0.5" />
                <span>Integração nativa com seu CRM. O corretor só entra na etapa de negociação final.</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
