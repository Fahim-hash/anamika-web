"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Star, ChevronDown } from "lucide-react";

/** * SHAHELA'S BIRTHDAY - IMMERSIVE CANVAS EDITION
 * No Grids. No Albums. Just pure Full-Screen Visuals.
 * Built by: RelaxStudio (2026)
 */

const FullScreenSlide = ({ src, title, sub, delay = 0 }: { src: string; title: string; sub: string; delay?: number }) => (
  <section className="relative h-[100dvh] w-full overflow-hidden snap-start">
    <motion.div 
      initial={{ scale: 1.2, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0"
    >
      <img src={src} className="w-full h-full object-cover" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
    </motion.div>

    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-24 pb-32">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="text-rose-500 font-black text-[10px] tracking-[0.8em] uppercase mb-4 block">
          Visual Verse
        </span>
        <h2 className="text-5xl md:text-[120px] font-black italic tracking-tighter text-white leading-[0.85] mb-8 uppercase">
          {title}
        </h2>
        <p className="font-['Noto_Serif_Bengali'] text-xl md:text-3xl text-white/50 max-w-2xl font-light italic border-l-2 border-rose-600/30 pl-6">
          {sub}
        </p>
      </motion.div>
    </div>
  </section>
);

export default function ImmersiveBirthday() {
  return (
    <div className="bg-black text-white h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      
      {/* 🎭 Scene 1: The Intro (Hero) */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center snap-start overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/shahela1.jpg" className="w-full h-full object-cover opacity-40 blur-[2px]" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="relative z-10 text-center px-6"
        >
          <div className="flex justify-center mb-10">
             <div className="p-1 rounded-full bg-gradient-to-r from-rose-600 to-amber-500">
                {/* তোমার সেই রিফায়েন্স ইমেজটি এখানে বসাতে পারো */}
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-black">
                   <img src="/images/shahela5.png" className="w-full h-full object-cover" />
                </div>
             </div>
          </div>
          <h1 className="text-[18vw] md:text-[14vw] font-black italic tracking-tighter leading-none mix-blend-screen mb-4">
            SHAH<span className="text-rose-600">ELA</span>
          </h1>
          <p className="text-[10px] md:text-xs tracking-[1.5em] uppercase text-white/30 ml-[1.5em]">Birthday Experience • 2026</p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 flex flex-col items-center gap-2"
        >
          <span className="text-[8px] uppercase tracking-widest font-black">Scroll Down</span>
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* 📽️ Scene 2: The Muse */}
      <FullScreenSlide 
        src="/images/shahela2.jpg" 
        title="Noir Magic" 
        sub="দৃষ্টির সীমানায় যখন শুধু মায়া খেলা করে।" 
      />

      {/* 📽️ Scene 3: The Aura */}
      <FullScreenSlide 
        src="/images/shahela3.jpg" 
        title="Pure Spirit" 
        sub="স্নিগ্ধতা যখন গল্পের প্রতিটি অক্ষরে মিশে যায়।" 
      />

      {/* 📽️ Scene 4: The Archive (Ref: image_ca4b27) */}
      <FullScreenSlide 
        src="/images/shahela4.jpg" 
        title="Eternal Flow" 
        sub="সময়ের স্রোতে ভাসমান কিছু অমলিন স্মৃতি।" 
      />

      {/* 💌 Scene 5: The Final Wish */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center snap-start bg-[#050505]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900/10 via-transparent to-transparent opacity-50" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center px-8 relative z-10"
        >
          <Heart className="mx-auto text-rose-600 mb-12 animate-pulse" size={50} fill="currentColor" />
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-12 uppercase">Keep Smiling, <br/> Shahela Apu.</h2>
          
          <div className="font-['Noto_Serif_Bengali'] text-xl md:text-3xl font-light italic text-white/60 max-w-3xl leading-relaxed">
            "আজকের এই বিশেষ ক্ষণে আমাদের একটাই চাওয়া—তোমার হাসিটা যেন এভাবেই চিরকাল অমলিন থাকে। শুভ জন্মদিন!"
          </div>
          
          <div className="mt-20">
             <p className="text-[10px] tracking-[1em] uppercase text-rose-500 font-bold">RelaxStudio Production</p>
          </div>
        </motion.div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@300;400;700&display=swap');
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        body { 
          background: black;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}
