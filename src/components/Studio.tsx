import { motion } from "motion/react";

const team = [
  {
    name: "Akhif",
    role: "Founder & Creative Director",
    description: "Meet Akhif, Founder and Creative Director of SNGO Creations, where vision meets execution. He shapes each project with a deep cinematic sensibility and technical excellence.",
    image: "https://i.ibb.co/MkxGQ6Cp/ak.png",
    code: "DIR // 01"
  },
  {
    name: "Farooque",
    role: "Head of Business Operations",
    description: "Meet Farooque, the strategic force behind our client relationships and studio growth. He ensures every collaboration runs smoothly—from pitch to final delivery.",
    image: "https://i.ibb.co/xqg1bmTQ/fpp.jpg",
    code: "OPS // 02"
  }
];

export const Studio = () => {
  return (
    <section id="studio" className="py-24 bg-black overflow-hidden border-t border-white/5 selection:bg-white selection:text-black">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Section 01: About */}
        <div className="relative mb-24 md:mb-32 flex flex-col items-center text-center">
          <div className="max-w-3xl space-y-8 md:space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase font-black tracking-[0.5em] text-white/40 block">About US</span>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-display font-black tracking-tightest uppercase leading-[0.8]">
                Visual <br />
                <span className="text-white/20">Storytellers</span>
              </h2>
            </div>
            
            <div className="max-w-xl mx-auto px-4 md:px-0">
              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed font-light tracking-tight">
                SNGO Creations is a creative agency and visual effects studio crafting compelling visuals for motion pictures, branded content, advertising, and immersive storytelling. Rooted in a legacy of precision and artistry, and powered by AI innovation, we deliver world-class visual effects from concept to post—elevating narratives and captivating audiences.
              </p>
            </div>
          </div>
        </div>

        {/* Section 02: Team */}
        <div className="relative max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-20">
             <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase font-black tracking-[0.5em] text-white/40 block">The team</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tightest uppercase leading-[0.85]">
                The People <br />
                <span className="text-white/20">Of SNGO</span>
              </h2>
            </div>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {team.map((member, i) => (
                <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="relative aspect-square overflow-hidden bg-white/5 mb-8 border border-white/5 group-hover:border-white/20 transition-colors max-w-[260px] mx-auto md:mx-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity" />
                  </div>
                  
                  <div className="space-y-6 text-center md:text-left">
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl font-display font-black tracking-tighter uppercase leading-tight group-hover:italic transition-all">
                        {member.name}
                      </h3>
                      <p className="text-[10px] font-mono uppercase font-black tracking-[0.4em] text-white/60">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed max-w-[280px] mx-auto md:mx-0 font-light">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>

      </div>
    </section>
  );
};

