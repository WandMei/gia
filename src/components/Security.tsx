import { motion } from 'framer-motion';
import { CheckCircle, FileSignature, BarChart3, TrendingUp } from 'lucide-react';

export default function Security() {
    return (
        <section id="security" className="py-24 relative overflow-hidden bg-[#001a26]">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00dbff05_1px,transparent_1px),linear-gradient(to_bottom,#00dbff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none z-0"></div>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00dbff]/5 to-transparent opacity-20 pointer-events-none z-0"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">Diferenciais Competitivos <span className="text-gray-500 text-2xl block mt-2 font-normal">(Value Proposition)</span></h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[
                        {
                            icon: CheckCircle,
                            title: "Conciliação Zero-Touch",
                            desc: "Pix e boletos automáticos via G-Pay."
                        },
                        {
                            icon: FileSignature,
                            title: "Jornada Contratual 360º",
                            desc: "Da emissão à rescisão."
                        },
                        {
                            icon: BarChart3,
                            title: "Visão Estratégica em Real-Time",
                            desc: "Dashboards de fluxo de caixa, MRR e DRE."
                        },
                        {
                            icon: TrendingUp,
                            title: "Escalabilidade Real",
                            desc: "Cresça a carteira sem inchar a equipe."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="flex flex-col items-start text-left p-8 rounded-2xl bg-[#00111a]/50 backdrop-blur-md border border-[#00dbff]/20 hover:border-[#00dbff]/40 hover:bg-[#00111a]/70 transition-all shadow-lg"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#00dbff]/10 flex items-center justify-center mb-6 border border-[#00dbff]/20">
                                <item.icon className="w-7 h-7 text-[#00dbff]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-[#002233] to-[#00334d] border border-[#00dbff]/20 inline-block shadow-lg shadow-[#00dbff]/5"
                >
                    <p className="text-lg font-medium text-[#00dbff]">
                        "Transforme a gestão da sua imobiliária com inteligência, previsibilidade e automação financeira."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
