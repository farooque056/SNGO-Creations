import { motion, useScroll, useTransform } from "motion/react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { ArrowUpRight, Maximize2, ShieldCheck, Activity } from "lucide-react";
import { useRef } from "react";

interface WorkItem {
  id: string;
  title: string;
  category: string;
  video?: string;
  img?: string;
  meta: string;
  status: string;
}

const works: WorkItem[] = [
  {
    id: "ARCH-77",
    title: "OUR LATEST SHOWREEL",
    category: "VFX / CORE SYSTEM",
    video: "https://play.gumlet.io/embed/6a05602e0179daa0a3babadb?background=true&autoplay=true&loop=true&disable_player_controls=true",
    meta: "LAT: 37.5665° N | LON: 126.9780° E",
    status: "STABLE",
  },
  {
    id: "SYN-SOC",
    title: "PRECISION IN MOTION",
    category: "SOCIAL / MOTION",
    video: "https://play.gumlet.io/embed/6a0569610179daa0a3bb8ad0?background=true&autoplay=true&loop=true&disable_player_controls=true",
    meta: "RATIO: 9:16 | MOB_SYS_V2",
    status: "ENCRYPTED",
  },
  {
    id: "SYN-FLX",
    title: "CRAFTED FOR IMPACT",
    category: "AI / CINEMATICS",
    video: "https://www.youtube-nocookie.com/embed/pVEiQ-CFXxs?autoplay=1&mute=1&controls=0&loop=1&playlist=pVEiQ-CFXxs&start=6",
    meta: "NEURAL_RENDER_09",
    status: "SYNCED",
  },
  {
    id: "ARCH-GL",
    title: "BEYOND VISUALS",
    category: "VFX / SYSTEM",
    video: "https://www.youtube-nocookie.com/embed/79phlhutGLg?autoplay=1&mute=1&controls=0&loop=1&playlist=79phlhutGLg&start=6",
    meta: "LAT: 35.6762° N | LON: 139.6503° E",
    status: "STABLE",
  },
];

export const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollX = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section id="work" ref={containerRef} className="py-40 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Editorial Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-40 items-start">
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 mb-16"
            >
              <div className="text-[10px] uppercase font-black tracking-[1em] text-white/30 whitespace-nowrap">Archive_Index / Vol. 24</div>
              <div className="w-full h-[1px] bg-linear-to-r from-white/10 to-transparent" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-8xl md:text-[14vw] font-display font-black tracking-tightest leading-[0.7] uppercase transition-all"
            >
              Visual <br /> 
              <span className="font-serif italic font-light text-white/20 lowercase -ml-[0.05em] block mt-4">Intelligence.</span>
            </motion.h2>
          </div>
          
          <div className="lg:col-span-3 lg:pt-32">
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="space-y-8"
             >
                <div className="flex gap-2">
                   {[...Array(4)].map((_, i) => (
                     <div key={i} className={`w-8 h-[1px] ${i === 0 ? 'bg-white' : 'bg-white/10'}`} />
                   ))}
                </div>
                <p className="text-[11px] uppercase font-bold tracking-[0.3em] text-white/30 leading-relaxed max-w-[200px]">
                  A rigorous selection of commercial artifacts and technical experiments designed to challenge sensory perception.
                </p>
                <div className="pt-8 flex items-center gap-6">
                   <div className="w-2 h-2 rounded-full bg-[#00ffc3] shadow-[0_0_15px_#00ffc3]" />
                   <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Global_Server_Up</span>
                </div>
             </motion.div>
          </div>
        </div>

        {/* The Technical Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {works.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[80px] md:rounded-[120px] bg-[#0a0a0a] border border-white/5 transition-all duration-1000 ${
                i === 0 ? "md:col-span-8 md:h-[850px]" : 
                i === 1 ? "md:col-span-4 md:h-[850px]" :
                i === 2 ? "md:col-span-5 md:h-[650px]" :
                "md:col-span-7 md:h-[650px]"
              } ${i === 0 ? "border-white/20 shadow-[0_0_200px_rgba(255,255,255,0.05)]" : ""}`}
            >
              {/* Media Layer */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                {work.video ? (
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-all duration-[1.5s]">
                    <iframe
                      src={work.video}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-[200vh] min-h-[56.25vw] pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-125 group-hover:scale-100 opacity-60 group-hover:opacity-100"
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write;"
                      referrerPolicy="origin"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-colors duration-1000" />
                  </div>
                ) : (
                  <div className="absolute inset-0">
                    <img 
                      src={work.img} 
                      alt={work.title} 
                      className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.2] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[2.5s] ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000" />
                  </div>
                )}
                
                {/* Micro-scanning UI Overlay */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10 animate-scanline pointer-events-none opacity-0 group-hover:opacity-100" />
              </div>
              
              {/* Cinematic Gradient Fade */}
              <div className="absolute inset-x-0 bottom-0 top-[40%] bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-90 transition-opacity duration-1000" />

              <div className="absolute inset-0 p-16 md:p-24 flex flex-col justify-between z-10">
                 {/* Top Controls: Meta Data */}
                 <div className="flex justify-between items-start pointer-events-none">
                    <div className="space-y-6">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl group-hover:bg-white transition-all duration-700">
                             <Maximize2 size={16} className="text-white/40 group-hover:text-black transition-colors" />
                          </div>
                          <span className="text-[10px] font-mono font-black text-white/40 uppercase tracking-[0.5em] group-hover:text-white transition-colors">
                             ID_{work.id}
                          </span>
                       </div>
                       <div className="text-[9px] font-mono text-white/10 uppercase tracking-widest hidden md:block">COORD_LOC: {work.meta}</div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-3">
                       <div className="px-4 py-1.5 rounded-full border border-white/10 bg-black/20 backdrop-blur-md flex items-center gap-3">
                          <Activity size={10} className="text-[#00ffc3] animate-pulse" />
                          <span className="text-[8px] font-mono font-black text-[#00ffc3] uppercase tracking-widest">{work.status}</span>
                       </div>
                    </div>
                 </div>
                 
                 {/* Bottom Typography: Title & Action */}
                 <div className="max-w-4xl space-y-12 translate-y-10 group-hover:translate-y-0 transition-transform duration-1000">
                    <div className="flex items-center gap-6">
                       <div className="h-[1px] w-20 bg-white/20 group-hover:w-32 transition-all duration-700" />
                       <span className="text-[11px] font-mono uppercase font-black tracking-[0.4em] text-white/60">{work.category}</span>
                    </div>

                    <div className={`flex flex-col ${i === 0 || i === 2 || i === 3 ? "lg:flex-row lg:items-end" : ""} justify-between gap-12`}>
                       <h3 className={`${i === 1 || i === 2 || i === 3 ? "text-4xl md:text-6xl" : "text-6xl md:text-8xl"} font-display font-black tracking-tightest uppercase leading-[0.8] group-hover:italic transition-all duration-1000 group-hover:tracking-tighter`}>
                          {work.title}
                       </h3>
                       
                       <motion.a 
                          href="https://www.instagram.com/sngocreations/"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 flex items-center justify-center hover:bg-white group/btn transition-all duration-700 pointer-events-auto cursor-pointer shrink-0"
                       >
                          <ArrowUpRight size={32} className="text-white/40 group-hover/btn:text-black group-hover:scale-125 transition-all duration-700" />
                       </motion.a>
                    </div>
                 </div>
              </div>

              {/* Edge Glitch effect on hover */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* The New "Alchemical" Split View Case Study */}
        <div className="mt-60 grid grid-cols-1 xl:grid-cols-12 gap-20 items-center">
           <div className="xl:col-span-8 relative group">
             <div className="absolute -top-10 left-10 flex gap-4 text-[10px] font-mono text-white/20 uppercase tracking-widest z-10">
                <span className="group-hover:text-white transition-colors duration-500">RAW_CAPTURE_V1</span>
                <span>/</span>
                <span className="text-white/40">FINAL_SYNTH_V9</span>
             </div>
             
             <div className="relative rounded-[120px] overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
               <BeforeAfterSlider 
                 before="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1600"
                 after="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1600"
                 className="h-[60vh] lg:h-[85vh] scale-[1.01]"
               />
               
               {/* UI Corners */}
               <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/20 p-4">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping" />
               </div>
               <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/20" />
             </div>
           </div>

           <div className="xl:col-span-4 space-y-16 lg:px-12">
              <div className="space-y-4">
                 <div className="flex items-center gap-4">
                    <ShieldCheck size={16} className="text-white/20" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/20">Case_Study_Ref_032</span>
                 </div>
                 <h4 className="text-5xl font-display font-black uppercase tracking-tightest leading-[0.9]">
                   The Alchemical <br /> Process.
                 </h4>
              </div>
              
              <div className="space-y-10">
                 <p className="text-[11px] uppercase font-bold tracking-[0.2em] text-white/30 leading-relaxed">
                   Deconstructing traditional lighting physics to rebuild them within a synthetic environment. Achieving hyper-organic realism through iterative procedural chaos.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-10">
                    <div className="space-y-2">
                       <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Render_Time</div>
                       <div className="text-xl font-display font-black">1.2ms / px</div>
                    </div>
                    <div className="space-y-2">
                       <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Complexity</div>
                       <div className="text-xl font-display font-black">94.2% ARCH</div>
                    </div>
                 </div>

                 <a 
                   href="https://www.instagram.com/sngocreations/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group/explore flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-white transition-all cursor-pointer"
                 >
                   <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/explore:bg-white group-hover/explore:border-white transition-all">
                      <ArrowUpRight size={18} className="text-white/40 group-hover/explore:text-black transition-colors" />
                   </div>
                   Deep Dive Archive
                 </a>
              </div>
           </div>
        </div>
      </div>
      
      {/* Background Cinematic Text */}
      <motion.div 
        style={{ y: scrollX }}
        className="absolute top-1/4 right-[2%] hidden 2xl:block writing-vertical-lr text-[18vw] font-display font-black tracking-tightest uppercase text-white/[0.015] pointer-events-none select-none"
      >
        DETERMINISTIC
      </motion.div>
    </section>
  );
};

