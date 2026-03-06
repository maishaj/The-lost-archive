import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-[#F5F2ED] p-8 lg:p-16 animate-pulse">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <header className="flex justify-between items-end border-b border-stone-300 pb-8 mb-10">
          <div>
            <div className="h-10 w-64 bg-stone-300 mb-4"></div>
            <div className="h-3 w-48 bg-stone-200"></div>
          </div>
          <div className="h-12 w-32 bg-stone-300"></div>
        </header>

        {/* Table Skeleton */}
        <div className="overflow-x-auto bg-white border border-stone-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="p-5 h-12 bg-stone-100"></th>
                <th className="p-5 h-12 bg-stone-100 hidden md:table-cell"></th>
                <th className="p-5 h-12 bg-stone-100 hidden lg:table-cell"></th>
                <th className="p-5 h-12 bg-stone-100"></th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="border-b border-stone-100">
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-stone-200"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-32 bg-stone-300"></div>
                        <div className="h-3 w-20 bg-stone-200"></div>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 hidden md:table-cell">
                    <div className="h-4 w-24 bg-stone-200"></div>
                  </td>
                  <td className="p-5 hidden lg:table-cell">
                    <div className="h-4 w-28 bg-stone-100 font-mono"></div>
                  </td>
                  <td className="p-5">
                    <div className="flex justify-end gap-4">
                      <div className="w-8 h-8 bg-stone-200 rounded"></div>
                      <div className="w-8 h-8 bg-stone-200 rounded"></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Loading;