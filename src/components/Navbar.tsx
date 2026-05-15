import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      {/* Structural Backdrop */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`} />

      <div className="container mx-auto px-5 md:px-10 relative z-10 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center group cursor-pointer"
        >
          <img 
            src="https://i.ibb.co/Xr4WFV7m/11-removebg-preview.png" 
            alt="SNGO Logo" 
            className="h-10 md:h-16 w-auto object-contain transition-all duration-500 group-hover:brightness-125"
          />
        </motion.div>

        <div className="hidden md:flex items-center gap-12">
          {["Home", "Services", "Work", "Studio", "Connect"].map((item, i) => (
            <motion.a
              key={item}
              href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] uppercase tracking-[0.6em] font-black text-white/40 hover:text-white transition-all transform hover:translate-y-[-1px] relative group px-4 py-2"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute top-0 left-0 w-1 h-1 rounded-full bg-white/0 group-hover:bg-white/20 transition-all" />
              <div className="absolute bottom-0 right-0 w-1 h-1 rounded-full bg-white/0 group-hover:bg-white/20 transition-all" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex flex-col items-end font-mono text-[8px] text-white/10 tracking-[0.2em] leading-tight text-right">
            <div>SEC: ENCRYPTED</div>
            <div>UP: 99.9%</div>
          </div>
          
          <button 
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} className="group-hover:rotate-90 transition-transform duration-500" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-0 bg-black z-[100] flex flex-col p-12 overflow-hidden ${
          !menuOpen ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <div className="flex justify-between items-center mb-20">
          <img 
            src="https://i.ibb.co/Xr4WFV7m/11-removebg-preview.png" 
            alt="SNGO Logo" 
            className="h-16 w-auto object-contain"
          />
          <button 
            onClick={() => setMenuOpen(false)}
            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-6 md:gap-10">
          {["Home", "Services", "Work", "Studio", "Connect"].map((item, i) => (
            <motion.a
              key={item}
              href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
              initial={{ opacity: 0, x: -50 }}
              animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setMenuOpen(false)}
              className="text-4xl sm:text-6xl md:text-8xl font-display font-black uppercase tracking-tightest hover:italic hover:text-white/40 transition-all flex items-center gap-6 md:gap-8 group"
            >
              <span className="text-xl sm:text-2xl md:text-3xl text-white/5 group-hover:text-white transition-colors">0{i + 1}</span>
              {item}
            </motion.a>
          ))}
        </div>

         <div className="mt-auto border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between gap-10">
            <div className="text-[10px] font-black tracking-widest text-white/20 uppercase">
              Dubai Studio City <br />
              Building 4, Office 410.
            </div>
            <div className="flex gap-8">
              <a href="https://www.instagram.com/sngocreations/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-white/40 hover:text-white transition-colors">IG</a>
              <a href="#" className="text-[10px] font-black tracking-widest text-white/40 hover:text-white transition-colors">IN</a>
              <a href="https://www.linkedin.com/company/sngo-creations/about/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-white/40 hover:text-white transition-colors">LI</a>
            </div>
         </div>

        {/* Decorative Background Text */}
        <div className="absolute -bottom-20 -right-20 text-[30vw] font-display font-black text-white/[0.01] pointer-events-none uppercase italic leading-none">
          SNGO
        </div>
      </motion.div>
    </nav>
  );
};
