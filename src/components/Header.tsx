import { useState, useEffect } from 'react';
import { Bot, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#002233]/90 backdrop-blur-md py-4 border-b border-[#00dbff]/10' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#00dbff] to-[#007799] rounded-xl flex items-center justify-center shadow-lg shadow-[#00dbff]/20">
             <Bot className="w-6 h-6 text-[#002233]" />
          </div>
          <span className="text-2xl font-bold tracking-wide font-display text-white">
            Gia<span className="text-[#00dbff]">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#recursos" className="text-gray-300 hover:text-[#00dbff] transition-colors text-sm font-medium tracking-wide">RECURSOS</a>
          <a href="#jornada" className="text-gray-300 hover:text-[#00dbff] transition-colors text-sm font-medium tracking-wide">COMO FUNCIONA</a>
          <a href="#chat" className="text-gray-300 hover:text-[#00dbff] transition-colors text-sm font-medium tracking-wide">EXPERIMENTE</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a href="#chat" className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00dbff] to-[#00aacc] hover:from-[#00aacc] hover:to-[#007799] text-[#002233] font-bold transition-all shadow-lg shadow-[#00dbff]/20 hover:scale-105">
            Falar com a Gia
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#002233] border-b border-[#00dbff]/20 p-6 flex flex-col space-y-4 shadow-2xl">
           <a href="#recursos" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>RECURSOS</a>
           <a href="#jornada" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>COMO FUNCIONA</a>
           <a href="#chat" className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#00dbff] text-[#002233] font-bold w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
            Falar com a Gia
          </a>
        </div>
      )}
    </header>
  );
}
