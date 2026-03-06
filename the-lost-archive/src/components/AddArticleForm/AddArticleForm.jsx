"use client"
import { postArticles } from '@/actions/server/article';
import { uploadImageToImgBB } from '@/lib/upload';
import { Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

const AddArticleForm = () => {

    const [loading,setLoading]=useState(false);
    const {data:session}=useSession();

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
            alert("Entry Digitized Successfully");
          }

       }
       catch(error){
          console.error(error);
         alert("Archive entry failed.");
       }
       finally{
        setLoading(false);
       }
    }

    return (
       <div className="max-w-4xl mx-auto bg-white border border-stone-200 p-10 shadow-xl mb-20">
        <header className="mb-10 border-b border-stone-100 pb-6">
            <h2 className="text-3xl font-serif italic text-stone-900">New Archive Entry</h2>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mt-2">Log a discovered artifact</p>
        </header>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
                <div>
                    <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Artifact Title</label>
                    <input name="title" required className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif" placeholder="The Rosetta Tablet" />
                </div>
                <div>
                    <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Headline</label>
                    <input name="headline" required className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif" placeholder="Whispers of the Nile" />
                </div>
                {/* Added Subtitle Field */}
                <div>
                    <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Subtitle</label>
                    <input name="subtitle" required className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif" placeholder="A key to ancient tongues..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Accession Number</label>
                        <input name="accessionNumber" required className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif" placeholder="ARC-2026-001" />
                    </div>
                    {/* Added CTA Field */}
                    <div>
                        <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Call to Action</label>
                        <input name="cta" required className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif" placeholder="Decipher Script" />
                    </div>
                </div>
                <div>
                    <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-2 block">Upload Visual Evidence</label>
                    <input type="file" name="image" required className="file-input file-input-bordered w-full rounded-none border-stone-300 font-serif text-sm" />
                </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Period</label>
                        <input name="period" required className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif" placeholder="Bronze Age" />
                    </div>
                    <div>
                        <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Category</label>
                        <input name="category" required className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif" placeholder="Linguistics" />
                    </div>
                </div>
                {/* Added Excerpt Field */}
                <div>
                    <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Brief Excerpt</label>
                    <input name="excerpt" required className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif" placeholder="Traces of lost voices etched in stone..." />
                </div>
                <div>
                    <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">Detailed Description</label>
                    <textarea name="description" rows="6" required className="w-full bg-stone-50 border border-stone-200 p-3 focus:outline-none focus:border-amber-700 font-serif text-sm" placeholder="Provide the full historical context..."></textarea>
                </div>
                <button 
                    disabled={loading}
                    className="w-full bg-stone-900 text-[#F5F2ED] py-3 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-amber-950 transition-all flex justify-center items-center gap-2"
                >
                    {loading ? <><Loader2 className="animate-spin" size={16} /> Adding...</> : "Submit to Archives"}
                </button>
            </div>
        </form>
       </div>
    );
};

export default AddArticleForm;