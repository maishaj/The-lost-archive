"use client"
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const SearchInput = () => {

    const router=useRouter();
    const searchParams=useSearchParams();

    const handleSearch=(term)=>{
        const params=new URLSearchParams(searchParams);

        if(term){
           params.set('query',term);
        }
        else{
            params.delete('query');
        }

        router.replace(`/ExploreArticles?${params.toString()}`);
    }

    return (
        <div className="relative grow group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-700 transition-colors" size={18} />
        <input 
            type="text" 
            placeholder="Search by accession number or keyword..."
            defaultValue={searchParams.get('query')}
            onChange={(e)=>{handleSearch(e.target.value)}}
            className="w-full bg-white border border-stone-200 py-4 pl-12 pr-4 font-serif text-sm focus:outline-none focus:border-stone-900 transition-all shadow-sm"
        />
        </div>
    );
};

export default SearchInput;