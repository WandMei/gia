import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server } from 'lucide-react';

export default function Security() {
    return (
        <section id="security" className="py-24 relative overflow-hidden bg-[#001a26]">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00dbff]/5 to-transparent opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">Segurança Fundamental <span className="text-gray-500 text-2xl block mt-2 font-normal">(Trust Battery)</span></h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {[
                        {
                            icon: ShieldCheck,
                            title: "Criptografia de Ponta",
                            desc: "Seus dados viajam blindados. Utilizamos protocolos de criptografia militar (AES-256) em todas as transações."
                        },
                        {
                            icon: Lock,
                            title: "Conformidade LGPD",
                            desc: "Respeito absoluto à privacidade. Nossa arquitetura foi desenhada desde o dia zero para estar em conformidade com a LGPD."
                        },
                        {
                            icon: Server,
                            title: "Servidores Isolados",
                            desc: "Infraestrutura robusta com backups automáticos e redundância geográfica para garantir 99.9% de uptime."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-[#00dbff]/10 flex items-center justify-center mb-6 border border-[#00dbff]/20">
                                <item.icon className="w-10 h-10 text-[#00dbff]" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
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
                        "Seus dados e os de seus clientes protegidos com a mais alta tecnologia de segurança da informação."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
