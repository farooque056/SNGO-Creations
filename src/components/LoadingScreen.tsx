import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Background Panels */}
          <div className="absolute inset-0 flex">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1 * i, 
                  ease: [0.76, 0, 0.24, 1] 
                }}
                className="flex-1 bg-white/[0.02] border-r border-white/5 origin-top"
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-baseline gap-4 mb-2"
            >
              <span className="text-8xl md:text-[14rem] font-display font-black tracking-tighter leading-[0.7]">
                {Math.min(progress, 100)}
              </span>
              <span className="text-2xl font-serif italic text-white/40 font-light lowercase">percent</span>
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              className="h-[1px] bg-white/10 relative overflow-hidden"
            >
              <motion.div 
                className="absolute inset-y-0 left-0 bg-white"
                style={{ width: `${progress}%` }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 overflow-hidden h-4"
            >
               <motion.div
                 animate={{ y: [0, -20, -40, -60] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="text-[10px] uppercase tracking-[0.5em] text-white/40 text-center"
               >
                 <div>Initializing Core</div>
                 <div>Synthesizing Visuals</div>
                 <div>Rendering Excellence</div>
                 <div>Finalizing Assets</div>
               </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
