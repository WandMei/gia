import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#002233]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#00dbff]/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#007799]/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">

          {/* Coluna Esquerda: Textos e CTA */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00dbff]/10 border border-[#00dbff]/20 mb-8 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-[#00dbff]" />
              <span className="text-sm font-medium text-[#00dbff]">Infraestrutura Financeira e Dados</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              gManager: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00dbff] to-[#00aacc]">A Evolução Inteligente</span>{' '}
              <span className="text-white">da Gestão Imobiliária</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
            >
              Sua imobiliária cresceu, mas planilhas e processos manuais ainda travam sua equipe?
              <br /> Transforme a burocracia em inteligência operacional. <span className="text-white font-semibold">
                <br />O gManager</span> centraliza contratos, finanças e pagamentos em uma única plataforma estruturada para escala.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-start gap-3"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00dbff] hover:bg-[#00aacc] text-[#002233] font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-[#00dbff]/25 flex items-center justify-center gap-2 group"
              >
                Agendar Minha Demonstração
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-sm text-gray-400 font-medium ml-2">Sem fidelidade abusiva. Setup guiado por especialistas.</span>
            </motion.div>
          </div>

          {/* Coluna Direita: Mockup Isométrico */}
          <div className="relative mt-16 lg:mt-0 perspective-[2000px]">
            <motion.div
              initial={{ opacity: 0, rotateY: 0, rotateX: 0, scale: 1 }}
              animate={{ opacity: 1, rotateY: -15, rotateX: 10, scale: 1.15 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-full max-w-3xl mx-auto lg:ml-auto"
            >
              {/* Intense Glow Behind Mockup */}
              <div className="absolute inset-0 bg-[#00dbff] blur-[100px] opacity-20 rounded-[3rem] scale-90 pointer-events-none transform -translate-z-20"></div>

              <div className="relative aspect-[16/9] rounded-2xl border border-[#00dbff]/30 shadow-2xl overflow-hidden z-10 bg-[#00111a]/50 backdrop-blur-xl group">
                <img 
                  src="/dashboard-mockup.jpg" 
                  alt="gManager Dashboard" 
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
                {/* Overlay gradient for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00111a]/40 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Grid Overlay - Padrão de Engenharia/Dados */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00dbff08_1px,transparent_1px),linear-gradient(to_bottom,#00dbff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
    </section>
  );
}
