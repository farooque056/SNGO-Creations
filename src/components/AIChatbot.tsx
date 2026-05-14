import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Welcome to SNGO Creations. I’m your AI assistant. How can I help you visualize your next project?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error("Failed to get AI response");
      }

      const data = await response.json();
      const text = data.text || "I'm sorry, I couldn't process that.";
      setMessages((prev) => [...prev, { role: "bot", text }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [...prev, { role: "bot", text: "I'm having a slight technical glitch. Feel free to contact our human team!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-white text-black rounded-full shadow-2xl flex items-center justify-center z-[5000]"
      >
        <MessageSquare size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-28 right-8 w-96 max-w-[calc(100vw-4rem)] h-[500px] glass rounded-3xl z-[5000] overflow-hidden flex flex-col shadow-2xl shadow-black"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.05]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                   <Bot size={20} />
                </div>
                <div>
                   <div className="text-sm font-bold tracking-tight">SNGO AI Assistant</div>
                   <div className="text-[10px] uppercase tracking-widest text-[#25D366]">Online</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                    m.role === "user" 
                      ? "bg-white text-black font-medium rounded-tr-none" 
                      : "glass border border-white/10 rounded-tl-none font-light"
                  }`}>
                    <div className="prose prose-invert prose-sm leading-relaxed">
                      <ReactMarkdown>
                        {m.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="p-4 rounded-2xl glass border border-white/10 rounded-tl-none flex gap-1">
                     <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
                     <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                     <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white/[0.02] border-t border-white/10 flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask our AI something..."
                className="flex-1 bg-transparent border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-white/40 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center hover:bg-white/80 transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
