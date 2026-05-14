import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Alexander Vance",
    role: "CEO, TechSphere",
    content: "SNGO Creations didn't just deliver a video; they created a visual masterpiece that redefined our brand identity. Their attention to detail is world-class.",
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Director, Muse Media",
    content: "The level of precision in their VFX work is staggering. They seamlessly blended AI-generated assets with high-end motion graphics to create something truly unique.",
  },
  {
    name: "Marcus Thorne",
    role: "Founding Partner, Thorne & Co.",
    content: "Working with SNGO was a transformative experience. Their creative strategy is as strong as their execution. A true partner in premium storytelling.",
  },
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-12 -left-12 text-white/10">
            <Quote size={120} />
          </div>
          
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center"
              >
                <div className="text-2xl md:text-4xl font-display font-light leading-relaxed mb-12 italic">
                  "{testimonials[index].content}"
                </div>
                <div className="text-xl font-display font-medium tracking-tight mb-2">
                  {testimonials[index].name}
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  {testimonials[index].role}
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex items-center justify-center gap-12 mt-16">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <div 
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === index ? "bg-white w-6" : "bg-white/20"}`}
                  />
                ))}
              </div>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
