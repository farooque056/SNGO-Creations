import { motion } from "motion/react";
import { Award, Users, Zap } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "87+" },
  { label: "Visual Shots delivered", value: "3000+" },
  { label: "Happy Clients", value: "30+" }
];

export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-40 px-6 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Matrix */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:60px_60px]" />
        
        {/* Abstract Light Leaks */}
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-white/[0.02] blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-white/[0.01] blur-[150px] rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section: High Fashion Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-12"
            >
              <div className="text-[10px] uppercase font-black tracking-[0.8em] text-white/30">Intelligence_Brief / 03</div>
              <div className="w-24 h-[1px] bg-white/10" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-7xl md:text-[9vw] font-display font-black leading-[0.8] tracking-tightest uppercase"
            >
              The <span className="font-serif italic font-light lowercase text-white/40">Architectural</span> <br />
              <span className="relative">
                Advantage.
                <div className="absolute -bottom-4 left-0 w-full h-[2px] bg-white/5" />
              </span>
            </motion.h2>
          </div>
          
          <div className="lg:col-span-4 lg:pb-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-[11px] text-white/30 uppercase tracking-[0.2em] font-light leading-relaxed max-w-sm">
                Deploying deterministic creative systems for <span className="text-white/60">high-velocity</span> production and absolute visual supremacy.
              </p>
              <div className="flex gap-4 items-center">
                <div className="w-2 h-2 rounded-full bg-[#ff3b3b] shadow-[0_0_15px_#ff3b3b]" />
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Core_Operational_Stable</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* The New Bento-System Stat Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/5 border border-white/5 overflow-hidden mb-32">
          
          {/* PRIMARY MODULE: VOLUME */}
          <div className="md:col-span-8 bg-[#0a0a0a] p-12 md:p-20 relative group">
            {/* Visual Scanline Effect */}
            <div className="absolute inset-0 bg-linear-to-b from-white/[0.02] to-transparent h-1/2 w-full animate-scanline opacity-10 pointer-events-none" />
            
            <div className="flex justify-between items-start mb-24">
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em]">Volume_Metrics</div>
                <div className="flex gap-1">
                  {[...Array(12)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                      className="w-2 h-0.5 bg-white/40" 
                    />
                  ))}
                </div>
              </div>
              <Users size={16} className="text-white/20 group-hover:text-white transition-colors duration-500" />
            </div>

            <div className="relative">
              <div className="flex items-end gap-4 mb-8">
                <span className="text-9xl md:text-[14vw] font-display font-black leading-none tracking-tightest group-hover:italic transition-all duration-700">
                  3000+
                </span>
                <span className="text-[10px] font-mono text-white/20 vertical-text py-4 border-l border-white/5 ml-4">DELIVERABLES_DELIVERED</span>
              </div>
              <div className="max-w-xl">
                 <h4 className="text-xl font-display font-black uppercase tracking-tight mb-4 text-white/80">Synthetic Deliverables</h4>
                 <p className="text-sm text-white/30 font-light leading-relaxed tracking-wide uppercase">
                   High-fidelity assets generated across <span className="text-white/60">32 distinct visual domains</span> using our proprietary synthesis pipeline.
                 </p>
              </div>
            </div>
          </div>

          {/* SECONDARY MODULES: EFFICIENCY & LOYALTY */}
          <div className="md:col-span-4 grid grid-cols-1 gap-px bg-white/5">
            <div className="bg-[#0a0a0a] p-12 hover:bg-white/[0.02] transition-colors group">
              <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
                < Award size={10} />
                Quality_Index
              </div>
              <div>
                <div className="text-7xl font-display font-black mb-4 group-hover:scale-110 transition-transform origin-left duration-700">87+</div>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Global Projects</p>
              </div>
            </div>
            <div className="bg-[#0a0a0a] p-12 hover:bg-white/[0.02] transition-colors group">
              <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
                < Zap size={10} />
                Client_Retention
              </div>
              <div>
                <div className="text-7xl font-display font-black mb-4 group-hover:scale-110 transition-transform origin-left duration-700">30+</div>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Base Partners</p>
              </div>
            </div>
          </div>
        </div>

        {/* CLient Logos: Styled Ticker */}
        <div className="mt-32 pt-20 border-t border-white/5">
           <div className="flex items-center gap-12 overflow-hidden relative">
              <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] shrink-0">Terminal_Client_Log:</div>
              <div className="flex animate-scroll whitespace-nowrap gap-24">
                {[...["FORD", "KIA", "HYUNDAI", "HBO", "WARNER"], ...["FORD", "KIA", "HYUNDAI", "HBO", "WARNER"]].map((client, i) => (
                  <span 
                    key={i} 
                    className="text-4xl md:text-5xl font-display font-black tracking-tighter text-white/10 hover:text-white/40 transition-colors cursor-default uppercase"
                  >
                    {client}
                  </span>
                ))}
              </div>
              {/* Overlay Gradient for Fade */}
              <div className="absolute inset-y-0 right-0 w-72 bg-linear-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
           </div>
        </div>
      </div>
    </section>
  );
};


