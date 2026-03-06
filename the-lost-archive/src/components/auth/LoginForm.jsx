"use client"
import { KeyRound, Loader2 } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import SocialButton from './SocialButton';
import { signIn } from "next-auth/react"
import Swal from 'sweetalert2';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

const LoginForm = () => {

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");

    const params=useSearchParams();
    const callBack=params.get("callbackUrl") || "/"

    const handleSubmit=async(e)=>{

       e.preventDefault();
       setLoading(true);
       setError("");

       const formData=new FormData(e.target);

       const email=formData.get("email");
       const password=formData.get("password");

       const result=await signIn('credentials', { 
         email:email,
         password:password,
         callbackUrl:params.get("callbackUrl") || "/"
       });

       if (!result.ok) {
            toast.error("You provided wrong credentials!");
            setLoading(false);
        } else {
            toast.success("You logged in successfully!");
            setLoading(false);
        }
    }

    return (
        <div className="bg-white border border-stone-200 p-15 shadow-xl relative mt-10 mb-10">
        
        <header className="mb-8 text-center border-b border-stone-100 pb-6">
            <h2 className="text-3xl font-serif text-stone-900 italic">Login Now</h2>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mt-5">
            Authorize Your Credentials
            </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5 max-w-md mx-auto">
            <div>
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">
                Email
                </label>
                <input 
                name="email" 
                type="email" 
                required 
                className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif transition-colors" 
                />
            </div>

            <div>
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">
                Password
                </label>
                <input 
                name="password" 
                type="password" 
                required 
                placeholder="••••••••"
                className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif transition-colors" 
                />
            </div>
            </div>

            <button 
            disabled={loading}
            className="w-full bg-stone-900 text-[#F5F2ED] py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-amber-950 transition-all flex justify-center items-center gap-2"
            >
            {loading ? (
                <>
                <Loader2 className="animate-spin" size={16} /> Verifying...
                </>
            ) : (
                "Authorize Access"
            )}
            </button>

            {error && (
            <p className="text-center text-sm font-serif italic text-red-600 bg-red-50 p-2 border border-red-100">
                {error}
            </p>
            )}

            <footer className="mt-8 pt-6 border-t border-stone-100 text-center">
            <p className="text-xs text-stone-500 font-serif">
                New explorer?{" "}
                <Link 
                href={`/register?callbackUrl=${callBack}`} 
                className="text-amber-800 hover:text-stone-900 underline underline-offset-4 transition-colors font-bold"
                >
                Register Now
                </Link>
            </p>
            </footer>
            <SocialButton></SocialButton>
        </form>
        </div>
    );
};

export default LoginForm;