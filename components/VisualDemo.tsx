
import React, { useState, useEffect } from 'react';
import { Database, Server, Globe, Lock, Cpu } from 'lucide-react';

const VisualDemo: React.FC = () => {
  const [codeIndex, setCodeIndex] = useState(0);
  const codeSnippets = [
    `resource "aws_vpc" "main" {\n  cidr_block = "10.0.0.0/16"\n}`,
    `resource "aws_instance" "app" {\n  ami           = "ami-0c55b159"\n  instance_type = "t2.micro"\n}`,
    `resource "aws_db_instance" "db" {\n  engine         = "postgres"\n  instance_class = "db.t3.micro"\n}`,
    `module "vpc_peering" {\n  source = "./modules/peering"\n  peer_region = "us-east-1"\n}`
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="platform" className="py-24 px-6 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">You draw. <br/><span className="text-emerald-500">We code.</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Stop writing thousands of lines of boilerplate. Our AI-driven engine listens to your visual intent and generates high-compliance, secure Terraform code instantly. 
            </p>
            
            <ul className="space-y-4">
              {[
                "Instant multi-cloud provider support",
                "Automated security group optimization",
                "Dynamic variable injection based on context",
                "Real-time syntax validation"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            {/* Visual Editor Mockup */}
            <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden aspect-video flex">
              {/* Left: Diagram View */}
              <div className="flex-1 p-6 relative bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] bg-[size:20px_20px]">
                 <div className="flex flex-wrap gap-4 items-center justify-center h-full">
                    <div className={`p-4 rounded-xl border-2 transition-all duration-500 ${codeIndex === 0 ? 'border-emerald-500 bg-emerald-500/10 scale-110' : 'border-white/10 bg-black'}`}>
                      <Globe className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="w-12 h-0.5 bg-white/10"></div>
                    <div className={`p-4 rounded-xl border-2 transition-all duration-500 ${codeIndex === 1 ? 'border-blue-500 bg-blue-500/10 scale-110' : 'border-white/10 bg-black'}`}>
                      <Server className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="w-12 h-0.5 bg-white/10"></div>
                    <div className={`p-4 rounded-xl border-2 transition-all duration-500 ${codeIndex === 2 ? 'border-amber-500 bg-amber-500/10 scale-110' : 'border-white/10 bg-black'}`}>
                      <Database className="w-8 h-8 text-amber-400" />
                    </div>
                 </div>
              </div>

              {/* Right: Code View */}
              <div className="w-72 border-l border-white/10 bg-[#050505] p-4 font-mono text-xs overflow-hidden">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                  <span className="text-gray-500 uppercase tracking-widest text-[10px]">main.tf</span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                  </div>
                </div>
                <div className="text-emerald-500/80 leading-loose animate-in fade-in duration-500" key={codeIndex}>
                  <pre>{codeSnippets[codeIndex]}</pre>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-black px-4 py-2 rounded-lg font-bold text-sm shadow-xl flex items-center gap-2 animate-bounce-slow">
              <Cpu className="w-4 h-4" />
              AI Generating...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualDemo;
