import { motion } from "motion/react";
import { Sparkles, Video, Cpu, Box, ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Branding & Digital Content",
    desc: "Strategic visual identities and high-impact digital content for the modern era.",
    icon: Video,
  },
  {
    id: "02",
    title: "AI Powered Creative Solutions",
    desc: "Leveraging synthesis models with directorial precision for unique visual outcomes.",
    icon: Cpu,
  },
  {
    id: "03",
    title: "Visual Effects",
    desc: "Seamless photorealistic integration and world-building for feature and commercial.",
    icon: Sparkles,
  },
  {
    id: "04",
    title: "3D Animation & CGI",
    desc: "High-fidelity character design, motion systems, and immersive environmental CGI.",
    icon: Box,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-60 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40">
          <div className="lg:col-span-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase font-black tracking-[0.6em] text-white/30 mb-12 flex items-center gap-6"
            >
              <div className="w-12 h-[1px] bg-white/20" />
              Technical Directorship / Capabilities
            </motion.div>
            
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-8xl md:text-[12vw] font-display font-black tracking-tightest leading-[0.75] uppercase"
              >
                The <span className="font-serif italic font-light text-white/40 lowercase -ml-[0.1em]">Engine</span> <br />
                Of Sight.
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-xs space-y-8"
              >
                <div className="h-[1px] w-full bg-gradient-to-r from-white/40 to-transparent" />
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 leading-relaxed">
                  Systematic approach to visual chaos. We engineer experiences that bypass standard perception through obsessive technical execution.
                </p>
                <div className="flex gap-10">
                  <div className="space-y-1">
                    <div className="text-xl font-display font-black">8K</div>
                    <div className="text-[8px] uppercase tracking-widest text-white/20">Native Res</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xl font-display font-black">12-BIT</div>
                    <div className="text-[8px] uppercase tracking-widest text-white/20">Color Depth</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative aspect-[4/5] md:aspect-square lg:aspect-[4/3] glass bg-white/[0.005] border-white/5 rounded-[80px] p-12 md:p-20 flex flex-col justify-between cursor-pointer overflow-hidden transition-all duration-1000 ${
                i % 2 !== 0 ? "md:translate-y-32" : ""
              }`}
            >
              {/* Card Background Graphics - Drastically Reduced Opacity */}
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-1000">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/2 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/2 to-transparent" />
              </div>

              {/* Technical readout corner - Faded */}
              <div className="absolute top-12 right-12 flex flex-col items-end gap-1 font-mono text-[8px] text-white/5 uppercase tracking-widest group-hover:text-white/20 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#25D366] opacity-20 animate-pulse" />
                  ID_{service.id}_SYS
                </div>
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center mb-12 group-hover:bg-white group-hover:text-black transition-all duration-700">
                  <service.icon size={28} className="opacity-20 group-hover:opacity-100" />
                </div>
                
                <div className="space-y-4">
                  <span className="text-[10px] uppercase font-black tracking-[0.5em] text-white/10 group-hover:text-white/30 transition-colors">Module // 0{i + 1}</span>
                  <h3 className="text-5xl md:text-7xl font-display font-black tracking-tightest uppercase leading-[0.85] opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.title.split(' ')[0]} <br />
                    <span className="font-serif italic font-light text-white/20 lowercase group-hover:text-white/60 transition-colors">
                      {service.title.split(' ').slice(1).join(' ')}
                    </span>
                  </h3>
                </div>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-8 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000">
                <p className="max-w-[200px] text-[10px] uppercase font-bold tracking-widest text-white/20 leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex items-center gap-4 text-[9px] font-black tracking-[0.3em] text-white/20 group-hover:text-white/60 transition-colors group/btn">
                  EXPLORE <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Decorative "scanning" line - Subtlest opacity */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-full group-hover:animate-scan" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Refined Bottom Marquee */}
      <div className="mt-60 border-y border-white/5 h-[100px] flex items-center bg-[#080000] text-white/40 overflow-hidden relative">
         <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#080000] to-transparent z-10" />
         <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#080000] to-transparent z-10" />
         
         <motion.div 
           animate={{ x: [0, -2000] }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           className="flex gap-20 text-[1.5vw] font-display font-black tracking-tightest uppercase whitespace-nowrap"
         >
           {[...services, ...services].map((service, idx) => (
             <div key={idx} className="flex items-center gap-20">
               <span className="hover:text-white transition-colors cursor-default">{service.title}</span>
               <div className="w-4 h-4 rounded-full bg-white/10" />
             </div>
           ))}
         </motion.div>
      </div>
    </section>
  );
};
