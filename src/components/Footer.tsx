import { Bot } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#000a0f] py-12 border-t border-[#00dbff]/10 text-sm">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="text-center md:text-left flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#00dbff]/10 flex items-center justify-center border border-[#00dbff]/20">
                           <Bot className="w-5 h-5 text-[#00dbff]" />
                        </div>
                        <div>
                            <span className="text-xl font-bold tracking-wide font-display text-white block">
                                Gia<span className="text-[#00dbff]">.</span>
                            </span>
                            <p className="text-gray-500 text-xs mt-1">Inteligência Operacional Imobiliária.</p>
                        </div>
                    </div>

                    <div className="flex gap-8 text-gray-400">
                        <a href="#" className="hover:text-[#00dbff] transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-[#00dbff] transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-[#00dbff] transition-colors">Suporte</a>
                    </div>

                    <div className="text-gray-600">
                        &copy; 2026 Gia AI. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
}
