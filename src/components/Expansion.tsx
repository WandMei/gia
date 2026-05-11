import { motion } from 'framer-motion';
import { Layers, ShoppingCart, Stethoscope, Briefcase } from 'lucide-react';

export default function Expansion() {
    return (
        <section id="expansion" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                            <Layers className="w-4 h-4 text-violet-400" />
                            <span className="text-sm font-medium text-violet-200">Além do Imobiliário</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Sua empresa não é imobiliária? <br />
                            <span className="text-violet-500">Nossa tecnologia se adapta.</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            O núcleo de inteligência da Alcateia é agnóstico. Nossos algoritmos de processamento de linguagem natural e automação de fluxos podem ser calibrados para qualquer setor que exija escala e precisão.
                        </p>

                        <button className="px-8 py-4 rounded-lg bg-transparent border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 hover:border-violet-500 font-semibold transition-all">
                            Consultar Viabilidade para meu Setor
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {[
                            { icon: Stethoscope, title: "Clínicas & Saúde", desc: "Triagem de pacientes e agendamento." },
                            { icon: ShoppingCart, title: "E-commerce", desc: "Recuperação de carrinho e suporte." },
                            { icon: Briefcase, title: "Corporativo", desc: "Automação de processos internos." },
                            { icon: Layers, title: "Logística", desc: "Rastreio e comunicação com motoristas." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors">
                                <item.icon className="w-8 h-8 text-violet-500 mb-4" />
                                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
