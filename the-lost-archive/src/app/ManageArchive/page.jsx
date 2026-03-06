import { getMyArticles } from "@/actions/server/article";
import DeleteButton from "@/components/buttons/DeleteButton";
import { authOptions } from "@/lib/authOption";
import { Eye, Plus } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ManageArchive = async () => {
  const session = await getServerSession(authOptions);
  const articles = await getMyArticles(session?.user?.email);
  console.log(session?.user?.email);

  return (
    <div className="min-h-screen bg-[#F5F2ED] p-8 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-end border-b border-stone-300 pb-8 mb-10">
          <div>
            <h1 className="text-4xl font-serif italic text-stone-900">
              Archive Management
            </h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold mt-2">
              Review and curate your discovered artifacts
            </p>
          </div>
          <Link
            href="/AddArticle"
            className="flex items-center gap-2 bg-stone-900 text-white px-6 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-amber-900 transition-all"
          >
            <Plus size={14} /> New Entry
          </Link>
        </header>

        {articles.length === 0 ? (
          <div className="py-20 text-center border-2 border-dashed border-stone-300">
            <p className="font-serif italic text-stone-500">
              No records found in your personal ledger.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white border border-stone-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200">
                  <th className="p-5 text-[12px] uppercase tracking-widest text-stone-500 font-bold">
                    Artifact
                  </th>
                  <th className="p-5 text-[12px] uppercase tracking-widest text-stone-500 font-bold hidden md:table-cell">
                    Period
                  </th>
                  <th className="p-5 text-[12px] uppercase tracking-widest text-stone-500 font-bold hidden lg:table-cell">
                    ID
                  </th>
                  <th className="p-5 text-[12px] uppercase tracking-widest text-stone-500 font-bold text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {articles.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b border-stone-100 hover:bg-stone-50 transition-colors group"
                  >
                    <td className="p-5">
                      <div className="flex items-center gap-4">
                        <Image
                          src={item.image}
                          alt=""
                          width={800}
                          height={500}
                          className="w-12 h-12 object-cover grayscale group-hover:grayscale-0 transition-all"
                        />
                        <div>
                          <p className="font-serif font-bold text-stone-900">
                            {item.title}
                          </p>
                          <p className="text-[10px] text-amber-800 uppercase tracking-tighter">
                            {item.category}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-5 text-md font-serif italic text-stone-600 hidden md:table-cell">
                      {item.period}
                    </td>
                    <td className="p-5 text-md font-mono text-stone-600 hidden lg:table-cell">
                      {item.accessionNumber}
                    </td>
                    <td className="p-5">
                      <div className="flex justify-end items-center gap-4">
                        <Link
                          href={`/ExploreArticles/${item._id}`}
                          className="p-2 text-stone-600 hover:text-stone-900 transition-colors"
                        >
                          <Eye size={18} className="hover:text-red-800" />
                        </Link>
                        <DeleteButton id={item._id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageArchive;
