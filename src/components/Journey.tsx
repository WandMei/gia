import { motion } from 'framer-motion';
import { Clock, Frown, Bot, Zap } from 'lucide-react';

export default function Journey() {
  return (
    <section id="jornada" className="py-24 bg-[#00111a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            A dor da <span className="text-[#00dbff]">Gestão Imobiliária Manual</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Um processo lento custa dinheiro. O gManager transforma a burocracia em inteligência operacional.
          </p>
        </div>

        <div className="flex flex-col max-w-5xl mx-auto relative pt-8">

          {/* Card: Problema */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 0.4, scale: 0.95 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full md:w-[65%] bg-[#001a26] p-8 md:p-10 rounded-3xl border border-red-500/10 relative z-0 origin-top-left"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-xl -mr-10 -mt-10"></div>
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
              <Frown className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Realidade Atual (Sem gManager)</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 items-start">
                <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Dependência extrema de planilhas desconexas para gestão financeira.</span>
              </li>
              <li className="flex gap-3 text-gray-400 items-start">
                <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Retrabalho na conciliação de pagamentos e repasses manuais.</span>
              </li>
              <li className="flex gap-3 text-gray-400 items-start">
                <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Burocracia excessiva e lentidão na emissão de contratos e notas fiscais.</span>
              </li>
            </ul>
          </motion.div>

          {/* Card: Solução */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              boxShadow: "0 30px 60px -15px rgba(0,219,255,0.25)",
              borderColor: "rgba(0,219,255,0.7)"
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="w-full md:w-[70%] bg-gradient-to-br from-[#002233]/90 to-[#00334d]/90 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-[#00dbff]/30 z-10 self-end -mt-16 md:-mt-32 relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00dbff]/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="w-14 h-14 rounded-2xl bg-[#00dbff]/20 flex items-center justify-center mb-6 border border-[#00dbff]/40 shadow-lg shadow-[#00dbff]/20">
              <Bot className="w-7 h-7 text-[#00dbff]" />
            </div>
            <h3 className="text-2xl font-bold text-[#00dbff] mb-6">Com a Inteligência do gManager</h3>
            <ul className="space-y-5">
              <li className="flex gap-4 text-gray-200 items-start text-lg">
                <Zap className="w-6 h-6 text-[#00dbff] shrink-0 mt-0.5" />
                <span>Gestão contratual unificada da emissão à rescisão.</span>
              </li>
              <li className="flex gap-4 text-gray-200 items-start text-lg">
                <Zap className="w-6 h-6 text-[#00dbff] shrink-0 mt-0.5" />
                <span>Pagamentos e conciliação bancária 100% automatizados.</span>
              </li>
              <li className="flex gap-4 text-gray-200 items-start text-lg">
                <Zap className="w-6 h-6 text-[#00dbff] shrink-0 mt-0.5" />
                <span>Previsibilidade com dashboards de fluxo de caixa em tempo real.</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
