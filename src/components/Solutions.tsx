import { motion } from 'framer-motion';
import { FileText, Target, Smartphone } from 'lucide-react';

const solutions = [
  {
    icon: FileText,
    title: "Automação de Serviços",
    description: "Emissão de 2ª via de boletos, envio de contratos e consulta de extratos. A Gia integra com seu ERP para fornecer dados em segundos."
  },
  {
    icon: Target,
    title: "Prospecção Inteligente",
    description: "Qualificação de leads automática. A Gia entende se o cliente busca alugar ou comprar e faz as perguntas certas antes de transferir."
  },
  {
    icon: Smartphone,
    title: "Omnichannel Integrado",
    description: "O atendimento acontece onde seu cliente está. Seja no WhatsApp, Direct do Instagram ou Facebook Messenger, a Gia mantém o contexto."
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
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">A Gia não é um chatbot comum. É uma inteligência operacional treinada para o setor imobiliário.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#00111a] p-8 rounded-2xl group hover:bg-[#001a26] cursor-pointer relative overflow-hidden flex flex-col items-start border border-[#00dbff]/10 hover:border-[#00dbff]/30 transition-all shadow-lg hover:shadow-[#00dbff]/5"
            >
              <div className="w-14 h-14 bg-[#00dbff]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#00dbff]/20">
                <solution.icon className="w-7 h-7 text-[#00dbff] group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00dbff] transition-colors">{solution.title}</h3>
              <p className="text-gray-400 leading-relaxed transition-colors">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
