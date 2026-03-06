"use client";
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Swal from 'sweetalert2';
import { useSession } from 'next-auth/react';
import { postMessages } from '@/actions/server/article';
import toast from 'react-hot-toast';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {data:session}=useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData=new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("msg"),
      createdAt: new Date(),
    };
    const success=await postMessages(data);
    if(success){
      toast.success("Your message is sent successfully!");
      e.target.reset();
      setLoading(false);
    }
    
  };

  return (
    <div className="min-h-screen bg-[#F5F2ED] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-amber-800 font-bold mb-4">Inquiries</h2>
          <h1 className="text-5xl font-serif italic text-stone-900">Contact the Archive</h1>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="font-serif text-xl mb-6 italic">Registry Office</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-amber-800 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider">Location</p>
                    <p className="text-stone-600 text-sm">51 Udoyon,Shibgonj,Sylhet<br />Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-amber-800 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider">Electronic Mail</p>
                    <p className="text-stone-600 text-sm">curator@lostarchive.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-amber-800 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider">Dispatch</p>
                    <p className="text-stone-600 text-sm">+880 1789055789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 border border-stone-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[12px] uppercase tracking-widest font-bold mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name='name'
                    required 
                    className="w-full bg-stone-50 border text-[16px] border-stone-200 p-2 focus:outline-none focus:border-amber-800 transition-colors"
                    placeholder="Maisha Jannath"
                  />
                </div>
                <div>
                  <label className="block text-[12px] uppercase tracking-widest font-bold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name='email'
                    readOnly
                    defaultValue={session?.user?.email || ""}
                    className="w-full bg-stone-50 border border-stone-200 text-[16px] p-2 focus:outline-none focus:border-amber-800 transition-colors"
                    placeholder="maishajannat388@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] uppercase tracking-widest font-bold mb-2">Subject of Inquiry</label>
                <select name='subject' className="w-full bg-stone-50 border border-stone-200 text-[16px] p-2 focus:outline-none focus:border-amber-800 transition-colors appearance-none">
                  <option>Artifact Verification</option>
                  <option>Cipher Submission</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[12px] uppercase tracking-widest font-bold mb-2">Your Message</label>
                <textarea 
                  rows="6" 
                  required 
                  name='msg'
                  className="w-full bg-stone-50 border border-stone-200 text-[16px] p-2 focus:outline-none focus:border-amber-800 transition-colors resize-none"
                  placeholder="Describe the artifact or inquiry in detail..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="flex items-center justify-center gap-3 bg-stone-900 text-white w-full py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-amber-900 transition-all disabled:opacity-50"
              >
                {loading ? "Sending Dispatch..." : (
                  <>
                    Send Message <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;