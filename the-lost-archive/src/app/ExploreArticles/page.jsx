import { getArticles } from '@/actions/server/article';
import { ArrowUpRight, Filter, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ExplorePage = async() => {

    const articles=await getArticles();

    return (
      <div className="bg-[#F9F7F2] min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* 1. Header Section */}
        <header className="mb-16 border-l-4 border-stone-900 pl-8">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 tracking-tight">
            The Master Index
          </h1>
          <p className="text-lg text-stone-500 font-serif italic max-w-2xl leading-relaxed">
            A curated selection of primary sources and rediscovered chronicles, 
            cataloging the echoes of 18th-century industry and maritime lore.
          </p>
        </header>

        {/* 2. Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative grow group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-700 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search by accession number or keyword..."
              className="w-full bg-white border border-stone-200 py-4 pl-12 pr-4 font-serif text-sm focus:outline-none focus:border-stone-900 transition-all shadow-sm"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-stone-100 border border-stone-200 px-8 py-4 text-[11px] uppercase tracking-widest font-bold hover:bg-stone-900 hover:text-white transition-all">
            <Filter size={14} />
            Category Filter
          </button>
        </div>

        {/* 3. The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((item) => (
            <div key={item._id} className="group bg-white border border-stone-200 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              
              {/* Card Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100 border-b border-stone-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover saturate-[0.7] sepia-[0.2] group-hover:saturate-100 group-hover:sepia-0 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-[#F5F2ED] text-[9px] uppercase tracking-[0.2em] px-2 py-1">
                  {item.period}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col grow">
                <span className="text-[10px] uppercase tracking-[0.3em] text-amber-800 font-bold mb-3">
                  {item.accessionNumber || "ARC-772-B"}
                </span>
                
                <h3 className="text-2xl font-serif text-stone-900 mb-3 group-hover:text-amber-900 transition-colors">
                  {item.title}
                </h3>

                <p className="text-stone-500 font-serif italic text-sm leading-relaxed mb-6 line-clamp-2">
                  {item.excerpt || item.description}
                </p>

                {/* Price */}
                <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">Rarity Score</span>
                    <span className="text-sm font-serif text-stone-900">Level </span>
                  </div>
                  
                  {/* Details Button */}
                 <Link href={`/ExploreArticles/${item._id}`}>
                    <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-amber-700 transition-all">
                    View Details
                    <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all">
                       <ArrowUpRight size={14} />
                    </div>
                  </button>
                 </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    );
};

export default ExplorePage;