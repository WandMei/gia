import logoGia from '../assets/logo-gia.png';

export default function Footer() {
    return (
        <footer className="bg-[#000a0f] py-12 border-t border-[#00dbff]/10 text-sm">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="text-center md:text-left flex flex-col gap-1">
                        <img
                            src={logoGia}
                            alt="Gia — Inteligência Artificial Imobiliária"
                            className="h-8 w-auto object-contain"
                        />
                        <p className="text-gray-500 text-xs mt-1">Inteligência Operacional Imobiliária.</p>
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
