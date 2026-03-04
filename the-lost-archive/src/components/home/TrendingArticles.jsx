import { getArticles } from '@/actions/server/article';
import Image from 'next/image';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const TrendingArticles = async() => {
    const articles=await getArticles();
    const slicedArticles=articles.slice(0,6);

    return (
        <div className="py-24  text-stone-900 border-t border-stone-200">
            <div className="container mx-auto px-6 lg:px-12">
                
                
                <div className="max-w-4xl mb-20">
                <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-6">
                    The Master Index
                </h2>
                <div className="w-24 h-px bg-stone-400 mb-8" />
                <p className="text-xl font-serif italic text-stone-600 leading-relaxed max-w-2xl">
                    A curated selection of primary sources and rediscovered chronicles, 
                    cataloging the echoes of 18th-century industry and lore.
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                {slicedArticles.map((item) => (
                    <div key={item._id} className="flex flex-col group">
                    
                    
                    <div className="relative aspect-4/3 overflow-hidden mb-8 bg-stone-200 shadow-sm border border-stone-200">
                        <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-all duration-1000 ease-in-out transform group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>

                    
                    <div className="flex flex-col grow">
                        <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">
                            {item.accessionNumber}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-stone-300" />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-amber-800">
                            {item.period}
                        </span>
                        </div>

                        <h3 className="text-2xl font-serif mb-4 leading-snug group-hover:text-amber-900 transition-colors">
                        {item.title}
                        </h3>

                        <p className="text-stone-500 font-serif italic text-sm leading-relaxed mb-8 line-clamp-3">
                        {item.excerpt}
                        </p>

                       
                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-stone-100">
                        <span className="text-xs uppercase tracking-widest font-bold group-hover:tracking-[0.25em] transition-all duration-300">
                            {item.cta}
                        </span>
                        <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all duration-300">
                            <ArrowUpRight size={16} />
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
  );
};

export default TrendingArticles;