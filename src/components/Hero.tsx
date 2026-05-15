import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToChat = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('chat');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#002233]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#00dbff]/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#007799]/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00dbff]/10 border border-[#00dbff]/20 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-[#00dbff]" />
          <span className="text-sm font-medium text-[#00dbff]">A Evolução do Atendimento Imobiliário</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto"
        >
          O Fim do Gargalo Operacional: <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00dbff] to-[#00aacc]">Venda e Alugue 24/7</span>{' '}
          <span className="text-white">sem sobrecarregar a sua equipe</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Da qualificação de leads à emissão de contratos e 2ª via de boletos.
          <br />A <span className="text-white font-semibold">gIA</span> assume o trabalho manual para que seus corretores foquem em fechar negócios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#chat"
            onClick={scrollToChat}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00dbff] hover:bg-[#00aacc] text-[#002233] font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-[#00dbff]/25 flex items-center justify-center gap-2 group"
          >
            Ver a gIA em Ação
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00dbff0a_1px,transparent_1px),linear-gradient(to_bottom,#00dbff0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
    </section>
  );
}
