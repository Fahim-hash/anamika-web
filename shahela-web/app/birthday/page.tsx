"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, X, Star, Crown, PartyPopper } from "lucide-react";

/** * SHAHELA'S BIRTHDAY - CROSS-DEVICE MASTERPIECE
 * Built by: RelaxStudio (2026)
 * Effects: Floating Aurora, Dynamic Glass, Smart Scale
 */

export default function GlobalAestheticBirthday() {
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showWish, setShowWish] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const galleryImages = [
    { id: 1, src: "/images/shahela1.jpg", title: "The Muse", span: "md:col-span-2 md:row-span-2" },
    { id: 2, src: "/images/shahela2.jpg", title: "Noir Essence", span: "col-span-1" },
    { id: 3, src: "/images/shahela3.jpg", title: "Soft Halo", span: "col-span-1" },
    { id: 4, src: "/images/shahela4.jpg", title: "Infinite", span: "col-span-1" },
    { id: 5, src: "/images/shahela5.png", title: "Pure Silk", span: "col-span-1" },
    { id: 6, src: "/images/a5.png", title: "Timeless", span: "md:col-span-2" },
  ];

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen w-full bg-[#050002] text-white selection:bg-rose-500/40 overflow-x-hidden">
      
      {/* 🌌 Device-Friendly Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Floating Aurora Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[100vw] h-[70vh] bg-rose-900/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[60vh] bg-rose-800/5 blur-[100px] rounded-full"></div>
        
        {/* Grainy Texture Overlay for high-end look */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10">
        
        {/* --- Unified Header --- */}
        <header className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Crown Icon Above Name */}
            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="flex justify-center mb-6"
            >
              <Crown className="text-rose-500/40" size={40} />
            </motion.div>

            <h1 className="text-[18vw] md:text-[15vw] font-black italic tracking-tighter leading-none mix-blend-screen select-none">
              SHAH<span className="text-rose-600/80">ELA</span>
            </h1>

            <div className="mt-8 md:mt-12 overflow-hidden">
              <motion.p 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-['Noto_Serif_Bengali'] text-lg md:text-3xl font-light italic text-rose-100/40"
              >
                — এই মহাবিশ্বের সবচেয়ে উজ্জ্বল জন্মদিনের নায়ক —
              </motion.p>
            </div>
          </motion.div>

          {/* Scroll Down Hint */}
          <motion.div 
            animate={{ opacity: [0.2, 0.5, 0.2], y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 flex flex-col items-center gap-2"
          >
            <span className="text-[8px] tracking-[0.4em] uppercase text-white/20">Scroll to Explore</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-rose-600 to-transparent"></div>
          </motion.div>
        </header>

        {/* --- Interactive Bento Gallery --- */}
        <main className="max-w-6xl mx-auto px-6 py-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                layoutId={`image-${img.src}`}
                onClick={() => setSelectedImage(img.src)}
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.95 }}
                className={`${img.span} relative group overflow-hidden rounded-[30px] md:rounded-[60px] cursor-pointer border border-white/5 bg-white/[0.02] shadow-2xl`}
              >
                {/* Overlay with unique glass effect */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/90 group-hover:to-rose-950/80 transition-all duration-700"></div>
                
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s]" 
                />

                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-[1px] w-4 bg-rose-500 opacity-0 group-hover:opacity-100 transition-all"></div>
                    <span className="text-[9px] font-bold tracking-widest text-rose-500">MOMENT {i + 1}</span>
                  </div>
                  <h3 className="text-xl md:text-3xl font-black italic tracking-tighter uppercase">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- The Magic Button --- */}
          <div className="mt-48 flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowWish(true)}
              className="relative group p-[2px] rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 via-amber-400 to-rose-600 animate-spin-slow opacity-70"></div>
              <div className="relative px-12 py-6 bg-black rounded-full flex items-center gap-4 transition-all group-hover:bg-transparent">
                <PartyPopper size={20} className="text-rose-500" />
                <span className="text-[10px] font-black tracking-[0.5em] uppercase">একটি জাদুকরী বার্তা</span>
              </div>
            </motion.button>
          </div>
        </main>

        {/* --- Interactive Lightbox --- */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[200] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 md:p-20 cursor-zoom-out"
            >
              <motion.div layoutId={`image-${selectedImage}`} className="relative max-w-5xl w-full aspect-square md:aspect-video rounded-[30px] md:rounded-[50px] overflow-hidden border border-white/10">
                <img src={selectedImage} className="w-full h-full object-cover md:object-contain" alt="Selected" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Luxury Wish Modal --- */}
        <AnimatePresence>
          {showWish && (
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-[200] flex items-center justify-center bg-rose-950/20 backdrop-blur-[40px] p-6"
            >
              <motion.div 
                className="bg-zinc-950/80 border border-white/10 p-12 md:p-24 rounded-[50px] md:rounded-[80px] max-w-4xl w-full text-center relative shadow-[0_0_100px_rgba(225,29,72,0.2)]"
              >
                <button onClick={() => setShowWish(false)} className="absolute top-10 right-10 text-white/20 hover:text-white transition-colors"><X /></button>
                <Star className="text-amber-400 mx-auto mb-10 animate-pulse" size={48} fill="currentColor" />
                
                <h2 className="text-xs tracking-[1em] uppercase text-rose-500 font-bold mb-10">Dedicated to Shahela Apu</h2>
                <div className="font-['Noto_Serif_Bengali'] text-2xl md:text-4xl text-white/90 leading-relaxed italic font-light">
                  "তোমার এই শুভ জন্মদিনে রিল্যাক্সস্টুডিওর পক্ষ থেকে অনেক অনেক ভালোবাসা। তোমার জীবন হোক বসন্তের মতো রঙিন, আর তোমার হাসি থাকুক সূর্যের মতো উজ্জ্বল। তোমার প্রতিটি স্বপ্ন ডানা মেলুক নীল আকাশে!"
                </div>
                
                <div className="mt-16 flex justify-center gap-2">
                  {[...Array(3)].map((_, i) => <Heart key={i} size={14} className="text-rose-600 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} fill="currentColor" />)}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Footer Signature --- */}
        <footer className="mt-64 py-24 text-center border-t border-white/5 relative">
          <div className="flex flex-col items-center gap-6">
             <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 opacity-20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 opacity-50"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 opacity-20"></div>
             </div>
             <p className="text-[9px] tracking-[1.5em] text-white/10 uppercase">RelaxStudio Archive</p>
             <div className="text-[12vw] font-black italic tracking-tighter text-white/[0.03] select-none leading-none">2026 EDITION</div>
          </div>
        </footer>

      </motion.div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;700&family=Noto+Serif+Bengali:wght@300;400;700&family=Tiropi:ital,wght@1,400;1,700&display=swap');
        
        ::-webkit-scrollbar { display: none; }
        body { 
          background: #050002; 
          scrollbar-width: none; 
          overflow: ${selectedImage || showWish ? 'hidden' : 'auto'};
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
