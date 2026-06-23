import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const WA_NUMBER = '5514996902210';
const WA_MESSAGE = encodeURIComponent(
  'Olá! Estava verificando os recursos da gIA e tenho interesse em saber mais sobre a implementação.'
);
const WA_LINK = `https://api.whatsapp.com/send?phone=${WA_NUMBER}&text=${WA_MESSAGE}`;

export default function CtaWhatsApp() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#001a26]">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00dbff]/8 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 mb-8">
            <MessageCircle className="w-8 h-8 text-[#25D366]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto para escalar a sua operação?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Fale com nossos especialistas e descubra como a{' '}
            <span className="text-white font-semibold">gIA</span> pode transformar
            a sua imobiliária — sem fórmula mágica, sem promessas vazias
          </p>

          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg transition-colors shadow-xl shadow-[#25D366]/20 group"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com um Especialista
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <p className="mt-5 text-xs text-gray-600">
            Nenhum compromisso, apenas uma conversa sem pressão
          </p>
        </motion.div>
      </div>
    </section>
  );
}
