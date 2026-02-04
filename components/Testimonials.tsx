
import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="integrations" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-emerald-950/20 rounded-[40px] border border-emerald-500/10 p-12 md:p-24 relative">
          <Quote className="absolute top-10 right-10 w-20 h-20 text-emerald-500/5" />
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-8">
              <img 
                src={TESTIMONIALS[activeIndex].avatar} 
                alt={TESTIMONIALS[activeIndex].author}
                className="w-20 h-20 rounded-full border-2 border-emerald-500 p-1 object-cover"
              />
            </div>
            
            <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 italic">
              "{TESTIMONIALS[activeIndex].content}"
            </p>
            
            <div>
              <h4 className="text-xl font-bold">{TESTIMONIALS[activeIndex].author}</h4>
              <p className="text-emerald-500 font-medium">{TESTIMONIALS[activeIndex].role} @ {TESTIMONIALS[activeIndex].company}</p>
            </div>

            <div className="flex items-center justify-center gap-4 mt-12">
              <button 
                onClick={prev}
                className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={next}
                className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
