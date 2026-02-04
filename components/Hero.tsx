
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full"></div>
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-semibold mb-8 animate-bounce-slow">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          NEW: AI-POWERED DRIFT RECONCILIATION
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.05] mb-8">
          The Future of Cloud is <br />
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Visually Driven.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Bridge the gap between design and production. Deploy-N transforms your architectural diagrams into production-ready Terraform code in real-time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-lg rounded-full transition-all flex items-center justify-center gap-2 group">
            Start Deploying Free
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-lg rounded-full transition-all flex items-center justify-center gap-2">
            <Play className="w-5 h-5 fill-current" />
            Watch Demo
          </button>
        </div>
      </div>

      {/* Floating Elements / Decorative Scroll Indicator */}
      <div className="mt-20 animate-pulse">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
