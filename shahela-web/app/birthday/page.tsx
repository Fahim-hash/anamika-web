"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Cake, Heart, Sparkles, X, Star, MousePointer2 } from "lucide-react";

/** * SHAHELA'S BIRTHDAY - ULTIMATE LUXE EDITION
 * Built by: RelaxStudio (2026)
 */

export default function LuxuryBirthday() {
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showWish, setShowWish] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const galleryImages = [
    { id: 1, src: "/images/shahela1.jpg", title: "Eternal Glow", span: "md:col-span-2 md:row-span-2", color: "rose" },
    { id: 2, src: "/images/shahela2.jpg", title: "Midnight Muse", span: "col-span-1", color: "zinc" },
    { id: 3, src: "/images/shahela3.jpg", title: "Serene Aura", span: "col-span-1", color: "rose" },
    { id: 4, src: "/images/shahela4.jpg", title: "Dreamscape", span: "col-span-1", color: "zinc" },
    { id: 5, src: "/images/shahela5.png", title: "Velvet Touch", span: "col-span-1", color: "rose" },
    { id: 6, src: "/images/a5.png", title: "Archive Legacy", span: "md:col-span-2", color: "zinc" },
  ];

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-[#020202] text-white selection:bg-rose-500/30 overflow-x-hidden">
      
      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-600/10 blur-[180px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-600/5 blur-[150px] rounded-full"></div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10">
        
        {/* --- Minimalist Float Nav --- */}
        <nav className="fixed top-10 left-0 w-full z-[100] px-8">
          <div className="max-w-6xl mx-auto flex justify-between items-center bg-white/[0.02] border border-white/10 backdrop-blur-3xl px-10 py-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-rose-600 animate-ping"></div>
              <div className="text-xl font-black tracking-tighter uppercase italic">
                Shahela<span className="text-rose-600 opacity-50">.</span>Universe
              </div>
            </div>
            <div className="flex items-center gap-8 text-[9px] font-bold tracking-[0.5em] text-white/40 uppercase">
              <span className="hidden md:inline">Established 2026</span>
              <div className="h-4 w-[1px] bg-white/10 hidden md:inline"></div>
              <Sparkles className="text-amber-400" size={14} />
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-8">
          
          {/* --- Parallax Hero --- */}
          <header className="h-screen flex flex-col justify-center items-center text-center relative pt-20">
            <motion.div style={{ y: textY, opacity }} className="relative z-20">
              <motion.span 
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, letterSpacing: "1em" }}
                transition={{ duration: 1.5 }}
                className="text-rose-500 text-[10px] md:text-xs font-black uppercase mb-12 block ml-[1em]"
              >
                Chapter: Three March
              </motion.span>
              <h1 className="text-8xl md:text-[240px] font-black italic tracking-tighter leading-[0.75] mix-blend-difference">
                SHAH<br />ELA.
              </h1>
              <div className="mt-16 flex flex-col items-center gap-6">
                <p className="font-['Noto_Serif_Bengali'] text-xl md:text-3xl font-light italic text-white/60 tracking-wide">
                  "সময়ের পাতায় খোদাই করা এক মায়াবী উদযাপন।"
                </p>
                <div className="h-20 w-[1px] bg-gradient-to-b from-rose-600 to-transparent mt-8"></div>
              </div>
            </motion.div>
          </header>

          {/* --- The Reveal Section --- */}
          <section className="py-48 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={() => setShowWish(true)}
                className="group relative overflow-hidden px-20 py-8 bg-transparent border border-white/10 rounded-full transition-all hover:border-rose-600"
              >
                <div className="absolute inset-0 bg-rose-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 text-[11px] font-black tracking-[0.6em] uppercase group-hover:text-white">
                  গোপন বার্তাটি খুলুন
                </span>
              </button>
            </motion.div>
          </section>

          {/* --- Grid: The Visual Archive --- */}
          <section className="pb-64">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 auto-rows-[300px] md:auto-rows-[450px]">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  layoutId={`luxe-img-${img.src}`}
                  onClick={() => setSelectedImage(img.src)}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`${img.span} group relative cursor-none overflow-hidden rounded-[40px] md:rounded-[80px] border border-white/5 bg-zinc-900 shadow-2xl`}
                >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 ease-out" />
                  
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="p-4 bg-white/10 border border-white/20 rounded-full backdrop-blur-xl">
                      <MousePointer2 size={24} className="text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-12 left-12 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                    <p className="text-rose-500 text-[10px] font-black tracking-widest uppercase mb-2">Ref: {i + 1}</p>
                    <h3 className="text-3xl font-black tracking-tighter italic font-['Tiropi'] uppercase">{img.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* --- Message Modal --- */}
          <AnimatePresence>
            {showWish && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-3xl p-6"
              >
                <motion.div 
                  initial={{ scale: 0.8, rotate: -2 }} 
                  animate={{ scale: 1, rotate: 0 }}
                  className="bg-[#080808] border border-white/10 p-16 md:p-32 rounded-[80px] max-w-4xl w-full text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 blur-[100px] rounded-full"></div>
                  <Star className="text-amber-400 mx-auto mb-12 animate-spin-slow" size={50} fill="currentColor" />
                  
                  <div className="font-['Noto_Serif_Bengali'] text-2xl md:text-4xl text-white/90 leading-[1.8] italic font-light">
                    "শুভ জন্মদিন শাহেলা আপু! তোমার প্রতিটা দিন হোক এক একটি সফলতার গল্প, আর তোমার ওই স্নিগ্ধ হাসিটি যেন মহাবিশ্বের সবথেকে দামি অলঙ্কার হয়ে চিরকাল উজ্জ্বল থাকে। রিল্যাক্সস্টুডিওর পক্ষ থেকে শ্রদ্ধা ও ভালোবাসা!"
                  </div>
                  
                  <button 
                    onClick={() => setShowWish(false)} 
                    className="mt-20 px-10 py-4 border border-white/20 rounded-full text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all"
                  >
                    Close Archive
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* --- Lightbox --- */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 z-[200] flex items-center justify-center bg-black/98 p-6 cursor-zoom-out"
              >
                <motion.div layoutId={`luxe-img-${selectedImage}`} className="relative max-w-6xl w-full aspect-square md:aspect-video rounded-[60px] overflow-hidden shadow-[0_0_100px_rgba(225,29,72,0.2)]">
                  <img src={selectedImage} className="w-full h-full object-cover" alt="Focus" />
                </motion.div>
                <div className="absolute top-12 right-12 text-white/20 text-[10px] tracking-widest uppercase">Tap anywhere to close</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* --- Footer --- */}
          <footer className="mt-64 pb-32 flex flex-col items-center">
             <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-32"></div>
             <motion.div
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 3 }}
               className="mb-12"
             >
               <Heart size={30} className="text-rose-600/30" fill="currentColor" />
             </motion.div>
             <p className="text-[10px] tracking-[2em] text-white/5 uppercase mb-8 ml-[2em]">Premium Experience</p>
             <h4 className="text-[15vw] font-black italic tracking-tighter text-white/[0.02] select-none leading-none">SHAHELA</h4>
          </footer>

        </main>
      </motion.div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;700&family=Noto+Serif+Bengali:wght@300;400;700&family=Tiropi:ital,wght@1,400;1,700&display=swap');
        
        ::-webkit-scrollbar { display: none; }
        body { 
          background: #020202; 
          -ms-overflow-style: none; 
          scrollbar-width: none; 
          overflow: ${selectedImage || showWish ? 'hidden' : 'auto'};
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
