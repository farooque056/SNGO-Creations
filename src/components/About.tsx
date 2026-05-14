import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <section id="studio" className="py-60 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-10 text-[20vw] font-display font-black text-white/[0.02] leading-none pointer-events-none uppercase">
        Studio
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase font-black tracking-[0.6em] text-white/30 mb-12 flex items-center gap-6"
            >
              <div className="w-12 h-[1px] bg-white/10" />
              Manifesto / 01
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-7xl md:text-9xl font-display font-black tracking-tightest leading-[0.85] uppercase mb-16"
            >
              Emotional <br />
              <span className="font-serif italic font-light text-white/40 lowercase ml-[0.5em]">Machines.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-10"
            >
               <p className="text-lg font-light text-white/60 leading-relaxed uppercase tracking-wider max-w-md">
                 We bridge the gap between technical impossibility and visceral human experience. Our work is the synthesis of light, physics, and raw instinct.
               </p>
               
               <div className="flex items-center gap-12 pt-10 border-t border-white/5">
                  <div className="space-y-2">
                     <div className="text-4xl font-display font-black tracking-tighter">008</div>
                     <div className="text-[8px] uppercase tracking-widest text-white/20 font-black">Global Awards</div>
                  </div>
                  <div className="space-y-2">
                     <div className="text-4xl font-display font-black tracking-tighter">24/7</div>
                     <div className="text-[8px] uppercase tracking-widest text-white/20 font-black">Render Cycle</div>
                  </div>
               </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="aspect-[4/5] md:aspect-video rounded-[80px] overflow-hidden glass relative group mb-12"
              >
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Studio Environment" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 flex items-center gap-6">
                   <div className="w-16 h-16 rounded-full glass flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                   </div>
                   <div className="text-[10px] uppercase font-black tracking-widest text-white/60">LIVE: 128 CORES ACTIVE</div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <motion.div 
                   whileHover={{ y: -10 }}
                   className="p-12 glass rounded-[60px] border-white/5 flex flex-col justify-between aspect-square"
                 >
                    <div className="text-[9px] uppercase font-black tracking-[0.4em] text-white/20">The Vision</div>
                    <div className="space-y-4">
                       <h3 className="text-2xl font-display font-black uppercase tracking-tight">Hyper Organic</h3>
                       <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 leading-relaxed">
                         Our belief is that digital art shouldn't look digital. It should feel like a memory captured in light.
                       </p>
                    </div>
                 </motion.div>

                 <motion.div 
                   whileHover={{ y: -10 }}
                   className="p-12 bg-white text-black rounded-[60px] flex flex-col justify-between aspect-square"
                 >
                    <div className="text-[9px] uppercase font-black tracking-[0.4em] text-black/40">The Craft</div>
                    <div className="space-y-6">
                       <h3 className="text-2xl font-display font-black uppercase tracking-tight">Technical Mastery</h3>
                       <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest group">
                         Read Story <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                       </button>
                    </div>
                 </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
