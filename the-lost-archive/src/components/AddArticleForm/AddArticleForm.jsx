"use client"
import { postArticles } from '@/actions/server/article';
import { uploadImageToImgBB } from '@/lib/upload';
import { Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddArticleForm = () => {

    const [loading,setLoading]=useState(false);
    const {data:session}=useSession();

    const router=useRouter();

    const handleSubmit=async(e)=>{
       e.preventDefault();
       setLoading(true);

       const formData=new FormData(e.target);
       const imageFile=formData.get("image");

       try{
          //upload image
          const imageUrl=await uploadImageToImgBB(imageFile);

          //create article object
          const articleData={
            title: formData.get("title"),
            userEmail:session.user.email,
            slug: formData.get("title").toLowerCase().replace(/ /g, '-'),
            headline: formData.get("headline"),
            subtitle: formData.get("subtitle"),
            description: formData.get("description"),
            excerpt: formData.get("excerpt"),
            category: formData.get("category"),
            period: formData.get("period"),
            accessionNumber: formData.get("accessionNumber"),
            cta: formData.get("cta") || "Examine Documents",
            image: imageUrl,
            isTrending: "false"
          }

          //post to db
          const success=await postArticles(articleData);
          if(success){
            toast.success("Your article is added to archive successfully!");
            e.target.reset();
          }

       }
       catch(error){
          toast.error(error);
       }
       finally{
        setLoading(false);
       }
    }

    return (
      <div className="w-10/12 md:max-w-4xl lg:max-w-4xl mx-auto bg-white border border-stone-200 p-5 sm:p-10 shadow-xl mb-20">
            <header className="mb-8 sm:mb-10 border-b border-stone-100 pb-6">
                <h2 className="text-2xl sm:text-3xl font-serif italic text-stone-900">New Archive Entry</h2>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-stone-400 font-bold mt-2">Log a discovered artifact</p>
            </header>

           
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                
                {/* Left Column */}
                <div className="space-y-6">
                    <div>
                        <label className="text-[9px] sm:text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Artifact Title</label>
                        <input name="title" required className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif text-sm sm:text-base" placeholder="The Rosetta Tablet" />
                    </div>
                    
                    <div>
                        <label className="text-[9px] sm:text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Headline</label>
                        <input name="headline" required className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif text-sm sm:text-base" placeholder="Whispers of the Nile" />
                    </div>
                    
                    <div>
                        <label className="text-[9px] sm:text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Subtitle</label>
                        <input name="subtitle" required className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif text-sm sm:text-base" placeholder="A key to ancient tongues..." />
                    </div>

                   
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-[9px] sm:text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Accession Number</label>
                            <input name="accessionNumber" required className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif text-sm sm:text-base" placeholder="ARC-2026-001" />
                        </div>
                        <div>
                            <label className="text-[9px] sm:text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Call to Action</label>
                            <input name="cta" className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif text-sm sm:text-base" placeholder="Decipher Script" />
                        </div>
                    </div>

                    <div>
                        <label className="text-[9px] sm:text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-2 block">Upload Visual Evidence</label>
                        <input type="file" name="image" required className="file-input file-input-sm sm:file-input-md file-input-bordered w-full rounded-none border-stone-300 font-serif text-sm" />
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-[9px] sm:text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Period</label>
                            <input name="period" required className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif text-sm sm:text-base" placeholder="Bronze Age" />
                        </div>
                        <div>
                            <label className="text-[9px] sm:text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Category</label>
                            <input name="category" required className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif text-sm sm:text-base" placeholder="Linguistics" />
                        </div>
                    </div>
                    
                    <div>
                        <label className="text-[9px] sm:text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Brief Excerpt</label>
                        <input name="excerpt" required className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif text-sm sm:text-base" placeholder="Traces of lost voices etched in stone..." />
                    </div>

                    <div>
                        <label className="text-[9px] sm:text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Detailed Description</label>
                        <textarea name="description" rows="5" required className="w-full bg-stone-50 border border-stone-200 p-3 focus:outline-none focus:border-amber-700 font-serif text-sm" placeholder="Provide context..."></textarea>
                    </div>

                    <button 
                        disabled={loading}
                        className="w-full bg-stone-900 text-[#F5F2ED] py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-amber-950 transition-all flex justify-center items-center gap-2 mt-10"
                    >
                        {loading ? <><Loader2 className="animate-spin" size={16} /> Adding...</> : "Submit to Archives"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddArticleForm;