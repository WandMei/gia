import { motion } from 'framer-motion';
import { Building2, RefreshCcw, CreditCard, Receipt } from 'lucide-react';

const solutions = [
  {
    id: "gmanager",
    icon: Building2,
    title: "gManager",
    description: "Gestão completa de locação e vendas. Centraliza contratos e automatiza processos.",
    className: "md:col-span-1"
  },
  {
    id: "gflow",
    icon: RefreshCcw,
    title: "gFlow",
    description: "Infraestrutura financeira. Gerencia cobranças, recebimentos e repasses de forma automatizada.",
    className: "md:col-span-2"
  },
  {
    id: "gpay",
    icon: CreditCard,
    title: "gPay",
    description: "Gateway de pagamentos nativo. Automação de recebíveis via Pix, boletos e múltiplas formas de cobrança.",
    highlight: true,
    className: "md:col-span-2"
  },
  {
    id: "gnfse",
    icon: Receipt,
    title: "gNFSE",
    description: "Automação de notas fiscais de serviços. Integração com mais de 70 municípios.",
    className: "md:col-span-1"
  }
];

export default function Solutions() {
  return (
    <section id="recursos" className="py-24 relative overflow-hidden bg-[#001a26]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00dbff05_1px,transparent_1px),linear-gradient(to_bottom,#00dbff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ecossistema <span className="text-[#00dbff]">Guess One</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">A infraestrutura definitiva para centralizar a gestão e modernizar a sua operação imobiliária.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              id={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`p-8 rounded-3xl group cursor-pointer relative overflow-hidden flex flex-col items-start transition-all shadow-xl backdrop-blur-2xl ${solution.className} ${solution.highlight
                ? 'bg-gradient-to-br from-[#00dbff]/10 to-[#002f45]/40 border border-[#00dbff]/40 hover:border-[#00dbff]/80 hover:shadow-[#00dbff]/20'
                : 'bg-white/[0.02] hover:bg-white/[0.04] border border-[#00dbff]/20 hover:border-[#00dbff]/40 hover:shadow-[#00dbff]/10'
                }`}
            >
              {solution.highlight && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#00dbff]/20 border border-[#00dbff]/40 text-[#00dbff] text-xs font-semibold tracking-wide">
                  Diferencial
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border ${solution.highlight
                ? 'bg-[#00dbff]/20 border-[#00dbff]/40'
                : 'bg-[#00dbff]/10 border-[#00dbff]/20'
                }`}>
                <solution.icon className="w-7 h-7 text-[#00dbff] group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00dbff] transition-colors">{solution.title}</h3>
              <p className="text-gray-400 leading-relaxed transition-colors flex-1 text-lg">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
