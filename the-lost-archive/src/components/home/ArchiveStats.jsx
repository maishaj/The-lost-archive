import React from 'react';

export const ArchiveStats = () => {
  const stats = [
    { label: "Rediscovered Records", value: "1,204", detail: "Verified Artifacts" },
    { label: "Deciphered Ciphers", value: "82", detail: "Cryptographic Wins" },
    { label: "Active Expeditions", value: "14", detail: "Global Dig Sites" },
    { label: "Years of Lore", value: "350+", detail: "Historical Depth" },
  ];

  return (
    <div className="w-11/12 mx-auto py-10 relative overflow-hidden border-y border-stone-200">
    
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none">
         <div className="w-600 h-600 border border-stone-900 rounded-full flex items-center justify-center">
            <div className="w-580 h-580 border border-stone-400 rounded-full" />
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white border-2 border-stone-900">
          
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-12 flex flex-col items-center text-center transition-all duration-500 group
                border-stone-100"
            >
              
              <div className="mb-6 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-px bg-stone-400" />
                <div className="w-2 h-2 rotate-45 border border-amber-700 bg-white" />
                <div className="w-8 h-px bg-stone-400" />
              </div>

              <span className="text-5xl font-serif text-stone-900 mb-2 tracking-tighter italic">
                {stat.value}
              </span>
              
              <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-amber-900 mb-4">
                {stat.label}
              </h4>

              <p className="text-stone-400 font-serif italic text-xs">
                {stat.detail}
              </p>

              <div className="mt-8 w-1.5 h-1.5 rounded-full bg-stone-800" />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ArchiveStats;