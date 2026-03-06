import React from 'react';
import { Archive, ShieldCheck, Search, Users } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="min-h-screen text-stone-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-stone-300">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66" 
            alt="Old Library" 
            fill 
            className="object-cover opacity-20 grayscale"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">The Lost Archive</h1>
          <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed">
            A digital sanctuary dedicated to preserving the artifacts, stories, and ciphers that time tried to forget.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-10/12 mx-auto py-24 container px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-amber-800 font-bold mb-4">Our Purpose</h2>
            <h3 className="text-4xl font-serif mb-6">Preserving Yesterday for Tomorrow.</h3>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Founded in 2024, The Lost Archive serves as a decentralized ledger for historians, 
                collectors, and curious minds. We believe every artifact has a voice, and every 
                discovery deserves a permanent place in the record.
              </p>
              <p>
                Whether it's a centuries-old cipher or a forgotten relic of the digital age, 
                our platform provides the tools to document, categorize, and protect these 
                historical assets from being lost to the void.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-8 border border-stone-200 shadow-sm flex flex-col items-center text-center">
              <Archive className="text-amber-800 mb-4" size={32} />
              <h4 className="font-serif font-bold italic">Curate</h4>
            </div>
            <div className="bg-stone-900 p-8 text-white shadow-sm flex flex-col items-center text-center">
              <ShieldCheck className="text-amber-400 mb-4" size={32} />
              <h4 className="font-serif font-bold italic">Protect</h4>
            </div>
            <div className="bg-stone-200 p-8 shadow-sm flex flex-col items-center text-center">
              <Search className="text-stone-600 mb-4" size={32} />
              <h4 className="font-serif font-bold italic">Discover</h4>
            </div>
            <div className="bg-white p-8 border border-stone-200 shadow-sm flex flex-col items-center text-center">
              <Users className="text-amber-800 mb-4" size={32} />
              <h4 className="font-serif font-bold italic">Connect</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Section */}
      <section className="bg-stone-900 py-20 text-white">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <div className="text-4xl font-serif italic text-amber-400">12k+</div>
            <div className="text-[10px] uppercase tracking-widest mt-2">Artifacts Logged</div>
          </div>
          <div>
            <div className="text-4xl font-serif italic text-amber-400">850</div>
            <div className="text-[10px] uppercase tracking-widest mt-2">Active Curators</div>
          </div>
          <div>
            <div className="text-4xl font-serif italic text-amber-400">140</div>
            <div className="text-[10px] uppercase tracking-widest mt-2">Lost Ciphers</div>
          </div>
          <div>
            <div className="text-4xl font-serif italic text-amber-400">24/7</div>
            <div className="text-[10px] uppercase tracking-widest mt-2">Archive Security</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center container mx-auto px-6">
        <h3 className="text-3xl font-serif mb-8">Ready to contribute to the ledger?</h3>
        <a 
          href="/AddArticle" 
          className="inline-block bg-stone-900 text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-amber-900 transition-colors shadow-xl"
        >
          Begin Documentation
        </a>
      </section>
    </div>
  );
};

export default AboutPage;