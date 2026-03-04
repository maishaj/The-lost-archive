import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const FeaturedRecord = () => {
    return (
        <div className=" w-11/12 mx-auto bg-[#1a1a1a] text-[#f5f2ed] py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-block px-3 py-1 border border-amber-900/50 text-amber-500 text-[10px] tracking-[0.4em] uppercase font-bold">
              Classified: Level IV
            </div>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              The Alchemist’s <br/> <span className="italic text-stone-400">Final Retort</span>
            </h2>
            <p className="text-lg text-stone-400 font-serif leading-relaxed max-w-xl">
              Recovered from a hidden compartment in a Prague laboratory, 
              this manuscript represents the dying gasp of Hermeticism. 
              A journey through cryptic symbols and the birth of modern chemistry.
            </p>
            <div className="pt-4">
              <button className="group flex items-center gap-4 text-sm uppercase tracking-widest font-bold border-b border-amber-800 pb-2 hover:text-amber-500 transition-colors">
                Begin the Decryption
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Image Side - Styled like a floating artifact */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square w-full max-w-md mx-auto group">
              <div className="absolute inset-0 bg-amber-900/20 blur-3xl rounded-full group-hover:bg-amber-800/30 transition-all duration-1000" />
              <div className="relative z-10 w-full h-full border border-stone-800 p-4 bg-stone-900/50 backdrop-blur-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000" 
                  alt="Alchemist Manuscript"
                  fill
                  className="object-cover sepia-[0.4] contrast-125"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
        </div>
    );
};

export default FeaturedRecord;