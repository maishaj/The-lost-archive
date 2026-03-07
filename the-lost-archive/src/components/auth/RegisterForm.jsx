"use client";
import React, { Suspense, useState } from "react";
import { uploadImageToImgBB } from "@/lib/upload";
import { Camera, Loader2, UploadCloud } from "lucide-react";
import Image from "next/image";
import { postUser } from "@/actions/server/auth";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import SocialButton from "./SocialButton";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const RegisterContent = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", isError: false });
  const [preview, setPreview] = useState(null);

  //const router=useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    try {
      // 1. Upload to ImgBB
      const imageFile = formData.get("photo");
      let imageUrl = "";
      if (imageFile.size > 0) {
        imageUrl = await uploadImageToImgBB(imageFile);
      }

      // 2. Prepare Data
      const userData = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        image: imageUrl,
      };

      // 3. Save to MongoDB
      const result = await postUser(userData);
      if (result.insertedId) {
        const result = await signIn("credentials", {
          email: formData.get("email"),
          password: formData.get("password"),
          callbackUrl: callbackUrl,
        });
        toast.success("You registered successfully!")
      }
    } catch (err) {
        toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-stone-200 p-10 shadow-xl relative mt-10 mb-10">
      <header className="mb-8 text-center border-b border-stone-100 pb-6">
        <h2 className="text-3xl font-serif text-stone-900 italic mb-6">
          Register Now
        </h2>
        <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mt-2">
          New Entry into the Archives
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-5">
          {/* Name Input */}
          <div>
            <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">
              Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Maisha Jannath"
              className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="maishajannat388@gmail.com"
              className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 block">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 font-serif"
            />
          </div>

          {/* Image Input */}
          <div>
            <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-2 block">
              Your Photo
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              required
              className="file-input file-input-bordered w-full rounded-none border-stone-300 font-serif text-sm"
            />
          </div>
          </div>

        <button
          disabled={loading}
          className="w-full bg-stone-900 text-[#F5F2ED] py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-amber-950 transition-all flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={16} /> Digitizing...
            </>
          ) : (
            "Register"
          )}
        </button>

        {message.text && (
          <p
            className={`text-center text-sm font-serif italic ${message.isError ? "text-red-500" : "text-amber-700"}`}
          >
            {message.text}
          </p>
        )}

        <footer className="mt-4 pt-6 border-t border-stone-100 text-center">
          <p className="text-xs text-stone-500 font-serif">
            Already have credentials?{" "}
            <Link
              href="/login"
              className="text-amber-800 hover:text-stone-900 underline underline-offset-4 transition-colors font-bold"
            >
              Login
            </Link>
          </p>
        </footer>
        <SocialButton></SocialButton>
      </form>
    </div>
  );
};

const RegisterForm=()=>{
   <Suspense fallback={<div className="flex justify-center p-10"><span className="loading loading-ring loading-lg"></span></div>}>
       <RegisterContent></RegisterContent>
   </Suspense>
}

export default RegisterForm;
