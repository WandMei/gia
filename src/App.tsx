import Header from './components/Header';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Solutions from './components/Solutions';
import Security from './components/Security';
import CtaWhatsApp from './components/CtaWhatsApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#00111a] text-white relative overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#00dbff]/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] right-[-10%] w-[50%] h-[70%] bg-[#007799]/[0.03] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-20%] left-[10%] w-[60%] h-[60%] bg-[#00dbff]/[0.02] rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Hero />
          <Journey />
          <Solutions />
          <Security />
          <CtaWhatsApp />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
