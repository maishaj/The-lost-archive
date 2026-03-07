import { getSingleArticle } from '@/actions/server/article';
import { Lock, Share2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArticleDetails = async({params}) => {

    const {id}=await params;
    const article=await getSingleArticle(id);

    return (
        <div className="min-h-screen bg-[#F5F2ED] py-12 px-6 lg:px-24">
        {/* Breadcrumb / Category */}
        <div className="max-w-7xl mx-auto mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-800 font-bold">
            {article.category}  {article.period}
            </span>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Image Exhibit */}
        <div className="lg:col-span-7">
          <div className="relative border border-stone-300 p-2 bg-white shadow-sm">
            <Image 
              src={article.image} 
              alt={article.title}
              width={500}
              height={500}
              className="w-full h-auto grayscale-20% hover:grayscale-0 transition-all duration-700"
            />
            {/* Accession Tag Overlay */}
            <div className="absolute top-6 right-6 bg-stone-900 text-[#F5F2ED] px-4 py-2 text-[10px] tracking-widest uppercase">
              Ref: {article.accessionNumber}
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-stone-200 pt-8">
            <div className="flex gap-3 text-stone-500 justify-center items-center">
              <ShieldCheck size={18} />
              <span className="text-xs uppercase tracking-wider font-serif italic">Authenticity Verified</span>
            </div>
            <div className="flex justify-center items-center gap-3 text-stone-500">
              <Lock size={18} />
              <span className="text-xs uppercase tracking-wider font-serif italic">Classified Content</span>
            </div>
          </div>
        </div>

        {/* Right Column: Documentation */}
        <div className="lg:col-span-5 flex flex-col">
          <header className="border-b border-stone-300 pb-8 mb-8">
            <h1 className="text-5xl font-serif text-stone-900 mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-amber-900 font-serif italic mb-6">
              {article.headline}
            </p>
            <h2 className="text-sm font-bold uppercase tracking-widest text-stone-600">
              {article.subtitle}
            </h2>
          </header>

          <div className="grow space-y-8">
            <div>
              <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-3">Narrative Summary</h3>
              <p className="text-stone-800 font-serif leading-relaxed text-lg italic">
                {article.excerpt}
              </p>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-3">Technical Description</h3>
              <p className="text-stone-700 font-serif leading-relaxed text-justify">
                {article.description}
              </p>
            </div>
          </div>

          {/* Action Area */}
          <div className="mt-12 mb-5 pt-8 border-t border-stone-300 space-y-4">
           <Link href={"/ExploreArticles"}>
              <button className="w-full bg-stone-900 text-[#F5F2ED] py-4 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-amber-950 transition-all shadow-xl">
              Back to Explore
              </button>
           </Link>
            <div className="flex justify-between items-center px-2">
              <p className="text-[10px] text-stone-800 uppercase tracking-widest mt-2">
                Acquired: {new Date(article.datePublished).getFullYear()}
              </p>
            </div>
          </div>
        </div>

        </div>
        </div>
    );
};

export default ArticleDetails;