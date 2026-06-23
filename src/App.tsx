import { lazy, Suspense } from 'react';
import Header from './components/Header';

const Hero = lazy(() => import('./components/Hero'));
const ChatWidget = lazy(() => import('./components/ChatWidget'));
const Journey = lazy(() => import('./components/Journey'));
const Solutions = lazy(() => import('./components/Solutions'));
const Security = lazy(() => import('./components/Security'));
const CtaWhatsApp = lazy(() => import('./components/CtaWhatsApp'));
const Footer = lazy(() => import('./components/Footer'));

// Simple loading indicator for lazy loaded sections
const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center bg-[#002233]">
    <div className="w-8 h-8 border-2 border-[#00dbff]/10 border-t-[#00dbff] rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-[#002233] text-white">
      <Header />
      <main>
        <Suspense fallback={<SectionLoader />}>
          <Hero />
          <ChatWidget />
          <Journey />
          <Solutions />
          <Security />
          <CtaWhatsApp />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
