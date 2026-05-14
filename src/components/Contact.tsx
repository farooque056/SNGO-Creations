import { motion } from "motion/react";
import { Send, MessageCircle, ArrowRight, Globe } from "lucide-react";

export const Contact = () => {
  return (
    <section id="connect" className="py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Narrative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-white/10 via-transparent to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-white/10 via-transparent to-transparent" />
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-white/30 uppercase">Node_Protocol / Phase_04</span>
              </motion.div>
              
              <h2 className="text-6xl md:text-8xl font-display font-black tracking-tightest leading-[0.9] uppercase">
                Establish <br />
                <span className="text-white/20 italic font-light">Global</span> Base.
              </h2>
            </div>
            
            <div className="hidden lg:block text-right">
              <div className="text-[10px] font-mono text-white/10 leading-relaxed uppercase tracking-widest">
                Lat: 25.0441° N <br />
                Lon: 55.2152° E <br />
                Status: Operational
              </div>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* LARGE CONTACT FORM CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-16 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000 pointer-events-none">
                <Send size={300} strokeWidth={0.5} />
              </div>

              <div className="relative z-10 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Full_Identity</label>
                    <input 
                      type="text" 
                      placeholder="Transmission Name"
                      className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-colors text-2xl font-display font-black tracking-tight placeholder:text-white/5"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Digital_Loc</label>
                    <input 
                      type="email" 
                      placeholder="Receiver Address"
                      className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-colors text-2xl font-display font-black tracking-tight placeholder:text-white/5"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Core_Message</label>
                  <textarea 
                    placeholder="Describe the objective..."
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-colors text-xl font-light tracking-wide placeholder:text-white/5 h-40 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-10 pt-8">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0a0a0a] bg-white/5 flex items-center justify-center overflow-hidden">
                        <img 
                          src={`https://i.pravatar.cc/100?u=${i + 10}`} 
                          alt="Team" 
                          className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
                        />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-[#0a0a0a] bg-white/10 flex items-center justify-center text-[10px] font-black tracking-tighter text-white/40">
                      +12
                    </div>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-12 py-6 bg-white text-black rounded-full text-xs font-black tracking-[0.5em] uppercase overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-4">
                      Initiate Protocol
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </span>
                    <div className="absolute inset-0 bg-stone-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* SECONDARY INFO CARDS (Right Column) */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              
              {/* LOCATION CARD */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em] font-bold">Physical_Base</div>
                  <Globe className="text-white/20 group-hover:rotate-12 transition-transform duration-700" size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-black text-white mb-6 uppercase tracking-tight">Dubai_SC</h3>
                  <p className="text-sm text-white/30 font-light leading-relaxed tracking-wider uppercase">
                    Studio City, Bldg 4, 4th Floor<br />
                    Office 410, Dubai, UAE
                  </p>
                </div>
              </motion.div>

              {/* CHANNELS CARD */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 group hover:border-white/20 transition-all"
              >
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em] font-bold mb-10">Direct_Frequency</div>
                <div className="space-y-8">
                  <div>
                    <span className="text-[8px] font-mono text-white/10 uppercase tracking-widest block mb-2 font-bold">Encrypted_Mail</span>
                    <a href="mailto:production@sngocreations.com" className="text-lg font-display font-black text-white/60 hover:text-white transition-colors italic">
                      production@sngocreations.com
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <span className="text-[8px] font-mono text-white/10 uppercase tracking-widest block mb-2 font-bold">Primary_UAE</span>
                      <span className="text-base font-display font-black text-white/40 hover:text-white transition-colors cursor-pointer tracking-tighter">
                        +971 503507879
                      </span>
                    </div>
                    <div>
                      <span className="text-[8px] font-mono text-white/10 uppercase tracking-widest block mb-2 font-bold">Secondary_IND</span>
                      <span className="text-base font-display font-black text-white/40 hover:text-white transition-colors cursor-pointer tracking-tighter">
                        +91 9645005457
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* SOCIAL CONNECT CARD */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/[0.05] rounded-[40px] p-8 flex items-center justify-between group hover:bg-white transition-all duration-700 overflow-hidden relative"
              >
                <div className="flex gap-4 relative z-10">
                   <a href="https://www.instagram.com/sngocreations/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-white/40 group-hover:text-black hover:italic transition-all px-2 uppercase">IG</a>
                   <a href="https://www.linkedin.com/company/sngo-creations/about/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-white/40 group-hover:text-black/40 hover:italic transition-all px-2 uppercase">LI</a>
                   <a href="#" className="text-[10px] font-black text-white/40 group-hover:text-black/40 transition-colors px-2 uppercase">BE</a>
                </div>
                <a href="https://www.instagram.com/sngocreations/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 relative z-10">
                  <span className="text-[10px] font-black text-white group-hover:text-black uppercase tracking-widest">Connect</span>
                  <ArrowRight size={20} className="text-white group-hover:text-black group-hover:translate-x-2 transition-all duration-500" />
                </a>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
