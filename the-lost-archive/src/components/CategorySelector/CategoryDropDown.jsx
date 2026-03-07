"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronDown, Filter, Check } from 'lucide-react';

const CategoryDropDown = ({ categories }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get('category') || "";

    const handleCategoryChange = (cat) => {
        const params = new URLSearchParams(searchParams);
        if (cat) params.set('category', cat);
        else params.delete('category');
        router.replace(`/ExploreArticles?${params.toString()}`);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full md:w-auto md:inline-block" onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setIsOpen(false)}>
            
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="border flex items-center justify-between gap-10 bg-transparent border-b border-stone-300 py-4 px-2 w-full md:min-w-65 lg:min-w-65 group hover:border-stone-900 transition-all duration-500"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-900 flex items-center gap-3">
                    <span className="text-amber-800 opacity-60">/</span>
                    {activeCategory || "All Categories"}
                </span>
                <ChevronDown size={14} className={`text-stone-400 transition-transform duration-500 ${isOpen ? 'rotate-180 text-stone-900' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute z-50 mt-2 w-full bg-[#FCFAF7] border border-stone-200 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                    <div className="flex flex-col py-2">
                        
                        
                        <button
                            onMouseDown={() => handleCategoryChange("")}
                            className="group flex items-center justify-between px-6 py-4 text-[9px] uppercase tracking-[0.25em] text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-all"
                        >
                            <span className='font-bold text-black text-[10px]'>All Categories</span>
                            {!activeCategory && <Check size={10} className="text-amber-800" />}
                        </button>

                       
                        {categories.map((cat, index) => (
                            <button
                                key={cat}
                                onMouseDown={() => handleCategoryChange(cat)}
                                className="group flex items-center justify-between px-6 py-4 text-[9px] uppercase tracking-[0.25em] text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-all border-t border-stone-100/50"
                            >
                                <div className="flex items-center gap-3">
                                    <span className='font-bold text-black text-[10px]'>{cat}</span>
                                </div>
                                {activeCategory === cat && <Check size={10} className="text-amber-800" />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
export default CategoryDropDown;