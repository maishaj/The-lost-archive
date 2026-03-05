import { Filter, Search } from 'lucide-react';
import React from 'react';

const ExploreLoading = () => {
  const skeletonCards = Array.from({ length: 8 });

  return (
    <div className="bg-[#F9F7F2] min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* 1. Header Section */}
        <header className="mb-16 border-l-4 border-stone-300 pl-8 animate-pulse">
          <div className="h-12 w-64 bg-stone-200 mb-4 rounded-sm" />
          <div className="h-4 w-full max-w-2xl bg-stone-200 mb-2 rounded-sm" />
          <div className="h-4 w-3/4 max-w-xl bg-stone-200 rounded-sm" />
        </header>

        {/* 2. Search & Filter Bar*/}
        <div className="flex flex-col md:flex-row gap-4 mb-12 opacity-50 pointer-events-none">
          <div className="relative grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
            <div className="w-full bg-white border border-stone-200 py-7 pl-12 pr-4 shadow-sm" />
          </div>
          <div className="w-40 bg-stone-100 border border-stone-200 py-4 shadow-sm" />
        </div>

        {/* 3. The Skeleton Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skeletonCards.map((_, idx) => (
            <div key={idx} className="bg-white border border-stone-200 flex flex-col h-450">
              
              <div className="relative aspect-16/10 bg-stone-200 animate-pulse" />

              <div className="p-8 flex flex-col grow space-y-4">

                <div className="h-3 w-20 bg-stone-100 animate-pulse rounded-full" />
                
                
                <div className="space-y-2">
                  <div className="h-6 w-full bg-stone-200 animate-pulse rounded-sm" />
                  <div className="h-6 w-2/3 bg-stone-200 animate-pulse rounded-sm" />
                </div>

               
                <div className="space-y-2 pt-2">
                  <div className="h-3 w-full bg-stone-100 animate-pulse rounded-sm" />
                  <div className="h-3 w-full bg-stone-100 animate-pulse rounded-sm" />
                </div>

                
                <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="h-2 w-16 bg-stone-100 animate-pulse rounded-full" />
                    <div className="h-4 w-12 bg-stone-200 animate-pulse rounded-sm" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-stone-100 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreLoading;