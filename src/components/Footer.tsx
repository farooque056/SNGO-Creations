import { motion } from "motion/react";
import { Instagram, Twitter, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] pt-12 pb-12 px-6 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
           
           <div className="space-y-4">
              <div className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20">Studio Philosophy</div>
              <p className="text-[10px] font-light text-white/40 uppercase tracking-widest leading-relaxed max-w-xs italic">
                Exploring the boundaries of synthetic reality and high-fidelity emotional resonance.
              </p>
           </div>
           
           <div className="flex flex-wrap gap-12">
             <div className="space-y-4">
                <div className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20">Directory</div>
                <div className="flex gap-6 text-[10px] uppercase font-bold tracking-widest">
                   <a href="#home" className="hover:text-white transition-all text-white/40">Home</a>
                   <a href="#work" className="hover:text-white transition-all text-white/40">Work</a>
                   <a href="#studio" className="hover:text-white transition-all text-white/40">Studio</a>
                    <a href="#connect" className="hover:text-white transition-all text-white/40">Connect</a>
                </div>
             </div>

             <div className="space-y-4">
                <div className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20">Channels</div>
                <div className="flex gap-6 text-[10px] uppercase font-bold tracking-widest">
                   <a href="https://www.instagram.com/sngocreations/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all text-white/40">IG</a>
                   <a href="https://www.linkedin.com/company/sngo-creations/about/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all text-white/40">LI</a>
                   <a href="#" className="hover:text-white transition-all text-white/40">BE</a>
                </div>
             </div>
           </div>

           <motion.button 
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             onClick={scrollToTop}
             className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all group lg:self-center"
           >
             <ArrowUpRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" size={16} />
           </motion.button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-white/10 uppercase tracking-[0.4em]">
          <div>© 2023 By SNGO Creations. All Rights Reserved.</div>
          <div className="flex gap-6">
            <div>Ver 4.0.2</div>
            <div>Phase: Production</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
