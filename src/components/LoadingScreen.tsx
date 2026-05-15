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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1 + (progress / 1000), 
                opacity: 1,
                filter: `brightness(${0.5 + (progress / 100)}) contrast(${1 + (progress / 200)})`
              }}
              className="relative mb-12"
            >
              <img 
                src="https://i.ibb.co/Xr4WFV7m/11-removebg-preview.png" 
                alt="SNGO Logo" 
                className="h-24 md:h-32 w-auto object-contain"
              />
              {/* Pulsing Glow behind logo */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-white blur-3xl -z-10 rounded-full"
              />
            </motion.div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-6xl font-display font-black tracking-tight leading-none">
                  {Math.min(progress, 100)}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-white/20">/ 100</span>
              </div>
              
              <div className="w-[120px] md:w-[160px] h-[1px] bg-white/5 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="overflow-hidden h-4"
              >
                 <motion.div
                   animate={{ y: [0, -20, -40, -60] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className="text-[8px] uppercase tracking-[0.5em] text-white/20 text-center font-mono"
                 >
                   <div>SYS_INIT</div>
                   <div>CORE_PROC</div>
                   <div>VFX_RENDER</div>
                   <div>SYNC_COMPLETE</div>
                 </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
