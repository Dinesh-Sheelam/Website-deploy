
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisualDemo from './components/VisualDemo';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { ChevronRight } from 'lucide-react';

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-emerald-500 selection:text-black">
      {/* Global Background Grid */}
      <div className="fixed inset-0 pointer-events-none -z-20 opacity-20">
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        ></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trusted By Section */}
        <div className="py-12 border-y border-white/5 bg-black/50 overflow-hidden whitespace-nowrap">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between opacity-40 grayscale group hover:grayscale-0 transition-all">
            <span className="text-xl font-bold tracking-tighter">CLOUDCORE</span>
            <span className="text-xl font-bold tracking-tighter">DATAWAVE</span>
            <span className="text-xl font-bold tracking-tighter">NEOSTREAM</span>
            <span className="text-xl font-bold tracking-tighter">FORGEAPPS</span>
            <span className="text-xl font-bold tracking-tighter">SKYNETWORKS</span>
          </div>
        </div>

        <VisualDemo />
        <Features />
        <Testimonials />

        {/* Final CTA Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto text-center py-20 px-8 rounded-[40px] bg-emerald-500 text-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Ready to build the future <br/>of your cloud?</h2>
              <p className="text-black/70 text-lg mb-10 max-w-xl mx-auto font-medium">
                Join 1,000+ infrastructure teams using Deploy-N to eliminate manual IaC bottlenecks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                  Get Started for Free
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-transparent border-2 border-black/10 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black/5 transition-colors">
                  Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Sticky Bottom-Right CTA (Only on mobile/small desktop if needed) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button className="w-14 h-14 bg-emerald-500 rounded-full shadow-2xl flex items-center justify-center text-black">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default App;
