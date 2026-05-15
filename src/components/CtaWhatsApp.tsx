import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const WA_NUMBER = '5514998552220';
const WA_MESSAGE = encodeURIComponent(
  'Olá! Tenho interesse em conhecer o ecossistema Guess One e agendar uma demonstração.'
);
const WA_LINK = `https://api.whatsapp.com/send?phone=${WA_NUMBER}&text=${WA_MESSAGE}`;

export default function CtaWhatsApp() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#001a26]">
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
            O futuro da sua gestão imobiliária começa agora.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Fale com nossos especialistas e descubra como o{' '}
            <span className="text-white font-semibold">gManager</span> pode transformar
            a sua imobiliária — centralizando sua operação financeira e de contratos.
          </p>

          <motion.div
            animate={{ 
              scale: [1, 1.03, 1], 
              boxShadow: ["0px 0px 0px 0px rgba(37,211,102,0)", "0px 0px 25px 10px rgba(37,211,102,0.2)", "0px 0px 0px 0px rgba(37,211,102,0)"] 
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block rounded-2xl"
          >
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 px-12 py-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xl transition-colors shadow-xl group"
            >
              <MessageCircle className="w-7 h-7" />
              Agendar Minha Demonstração
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <p className="mt-6 text-sm text-gray-500">
            Nenhum compromisso. Apenas uma conversa sem pressão.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
