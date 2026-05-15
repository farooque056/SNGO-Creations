import { motion, useScroll, useTransform } from "motion/react";
import { Play, ArrowRight, MousePointer2 } from "lucide-react";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const sideY = useTransform(scrollYProgress, [0, 1], ["0%", "100px"]);

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-[140vh] bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-[177.77vh] min-h-[56.25vw] opacity-60">
          <iframe
            loading="lazy" 
            title="Background Video"
            src="https://play.gumlet.io/embed/69fae4b35c890ee77b6570bc?background=true&autoplay=true&loop=true&disable_player_controls=true"
            className="absolute top-0 left-0 w-full h-full border-none"
            referrerPolicy="origin"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write;"
          />
        </div>
        {/* Gradient overlay to ensure text readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full border-l border-white/5 hidden lg:block" />
      
      <div className="container mx-auto px-6 pt-40 lg:pt-0 lg:h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
          
          {/* Main Title - Extreme Left */}
          <div className="lg:col-span-8 relative z-20">
            <div className="overflow-hidden mb-4">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 text-[10px] uppercase font-black tracking-[0.5em] text-white/40"
              >
                <span className="w-12 h-[1px] bg-white/20" />
                <span>Next-Gen Visual Studio</span>
              </motion.div>
            </div>

            <motion.div style={{ x: textX }} className="relative">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-[20vw] sm:text-[18vw] lg:text-[14vw] font-display font-black leading-[0.75] tracking-tightest uppercase mix-blend-difference"
              >
                SNGO<br />
                <span className="text-white/40 italic font-serif font-light lowercase lg:ml-[1.5em] block mt-4 lg:mt-0">Creations</span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12 lg:mt-16 flex flex-col md:flex-row items-start gap-12"
            >
              <div className="max-w-xs space-y-8">
                <p className="text-xs sm:text-sm font-light text-white/50 leading-relaxed uppercase tracking-wider">
                  Orchestrating visual emotions through high-end VFX, motion design, and synthetic intelligence.
                </p>
                <div className="flex gap-4 p-1.5 glass rounded-full w-full sm:w-fit">
                   <a href="#work" className="flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 bg-white text-black text-[10px] sm:text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-white/90 transition-all active:scale-95 text-center">
                     View Works
                   </a>
                   <a href="#connect" className="flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 text-white text-[10px] sm:text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 active:scale-95 border border-white/5 sm:border-none">
                     Contact <ArrowRight size={14} />
                   </a>
                </div>
              </div>

              <div className="hidden md:block w-[1px] h-20 bg-white/10" />

              <div className="flex flex-col gap-4 text-[9px] font-bold tracking-[0.3em] uppercase text-white/20">
                <div className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                   Currently Available
                </div>
                <div>Paris • LA • Virtual</div>
              </div>
            </motion.div>
          </div>

          {/* Side View Removed */}
          <div className="lg:col-span-4 relative h-full lg:h-[80vh] flex items-center justify-center">
            {/* Layer removed as per request */}
          </div>

        </div>
      </div>

      {/* Extreme Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex justify-between items-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="flex gap-8 md:gap-20"
        >
          {["Motion", "VFX", "AI"].map((tag) => (
            <div key={tag} className="flex items-center gap-2 md:gap-4 group">
               <span className="text-[7px] md:text-[8px] font-black text-white/20 group-hover:text-white transition-colors">0{tag === "Motion" ? 1 : tag === "VFX" ? 2 : 3}</span>
               <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-white/40 group-hover:text-white transition-colors">{tag}</span>
            </div>
          ))}
        </motion.div>

        <motion.a 
          href="#services"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-4 cursor-pointer group"
        >
           <div className="w-[1px] h-12 bg-white/10 overflow-hidden relative">
             <motion.div 
               animate={{ y: [-50, 50] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className="w-full h-full bg-white opacity-40 group-hover:opacity-100 transition-opacity"
             />
           </div>
           <span className="text-[8px] uppercase font-black text-white/20 tracking-[0.5em] group-hover:text-white transition-colors">Explore</span>
        </motion.a>
      </div>
    </section>
  );
};
