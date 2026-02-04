
import React from 'react';
import { Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-black">D</div>
                <span className="text-2xl font-bold tracking-tight">Deploy-N</span>
              </div>
              <p className="text-gray-400 mb-8 max-w-xs leading-relaxed">
                The AI platform for visual cloud design and automated infrastructure lifecycle management.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Github className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Architecture Designer</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Drift Detection</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Visual CI/CD</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Templates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Customers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-2 bg-white/[0.03] p-8 rounded-3xl border border-white/5">
            <h4 className="font-bold mb-4">Subscribe to our newsletter</h4>
            <p className="text-gray-400 text-sm mb-6">Get technical deep dives into modern infrastructure automation.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="you@company.com" 
                className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button className="bg-emerald-500 text-black px-4 py-2 rounded-xl text-sm font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-500 text-xs">
          <p>© 2024 Deploy-N Infrastructure Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
