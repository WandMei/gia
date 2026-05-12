import Header from './components/Header';
import Hero from './components/Hero';
import ChatWidget from './components/ChatWidget';
import Journey from './components/Journey';
import Solutions from './components/Solutions';
import Security from './components/Security';
import CtaWhatsApp from './components/CtaWhatsApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#002233] text-white">
      <Header />
      <main>
        <Hero />
        <ChatWidget />
        <Journey />
        <Solutions />
        <Security />
        <CtaWhatsApp />
      </main>
      <Footer />
    </div>
  );
}

export default App;
