"use client"
import React from 'react';

const Newsletter = () => {

    return (
      <div className="w-11/12 mx-auto container px-6 py-10">
        <div className="bg-[#1C1917] border border-stone-800 p-12 md:p-20 relative overflow-hidden shadow-2xl">
          
          <div className="absolute -right-10 -bottom-10 text-[12rem] font-serif text-amber-900/10 select-none pointer-events-none uppercase -rotate-12 italic">
            Archive
          </div>

          <div className="relative z-10 text-center space-y-8">
            <h3 className="text-4xl md:text-5xl font-serif text-[#F5F2ED] tracking-tight">
                Join the <span className="italic text-amber-600">Expedition</span>
            </h3>
            
            <p className="text-stone-400 font-serif italic max-w-lg mx-auto leading-relaxed">
              Direct intelligence from our latest archaeological finds and 
              cryptographic breakthroughs, delivered to your station once a month.
            </p>
            
            <form id='newsletter-form' className="flex flex-col md:flex-row gap-6 max-w-md mx-auto pt-4">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="grow bg-transparent border-b border-stone-700 py-3 px-2 text-[#F5F2ED] focus:outline-none focus:border-amber-600 font-serif transition-all placeholder:text-stone-600"
              />
              <button className="bg-amber-700 text-[#F5F2ED] px-6 py-2 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-amber-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-950/20">
                Submit
              </button>
            </form>

            <p className="text-[10px] uppercase tracking-widest text-stone-600 font-bold">
                Privacy Guaranteed • Secure Frequency
            </p>
          </div>
        </div>
      </div>
  );
};
export default Newsletter;