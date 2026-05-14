import { useState, useRef } from "react";
import { motion } from "motion/react";

interface SliderProps {
  before: string;
  after: string;
  className?: string;
}

export const BeforeAfterSlider = ({ before, after, className }: SliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const relativeX = x - containerRect.left;
    
    const newPosition = Math.max(0, Math.min(100, (relativeX / containerRect.width) * 100));
    setPosition(newPosition);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden cursor-ew-resize select-none border border-white/10 rounded-2xl ${className}`}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <img src={after} alt="After" className="w-full aspect-video object-cover" referrerPolicy="no-referrer" />
      
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={before} alt="Before" className="w-full aspect-video object-cover" referrerPolicy="no-referrer" />
      </div>

      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-white z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
          <div className="flex gap-1">
            <div className="w-[1px] h-3 bg-black/40" />
            <div className="w-[1px] h-3 bg-black/40" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 px-3 py-1 bg-black/50 backdrop-blur-md rounded text-[10px] uppercase tracking-widest text-white/80">Before</div>
      <div className="absolute bottom-6 right-6 px-3 py-1 bg-black/50 backdrop-blur-md rounded text-[10px] uppercase tracking-widest text-white/80">After</div>
    </div>
  );
};
