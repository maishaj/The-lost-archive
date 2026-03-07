"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AuthButtons = () => {

    const {data:session}=useSession(); 

    if (session && session?.user) {
        return (
            <div className="dropdown dropdown-end">
            
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-stone-300">
                    <div className="w-10 rounded-full">
                        <Image
                            alt="User Profile" 
                            src={session.user?.image || `https://ui-avatars.com/api/?name=${session.user?.name}&background=random`} 
                            width={40} 
                            height={40} 
                        />
                    </div>
                </div>

                
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-xl bg-base-100 rounded-box w-45 border border-stone-100">
                   
                    <li className="font-bold mb-1">
                        <p className="text-sm truncate">{session.user?.name}</p>
                    </li>

                    <li>
                        <Link href="/AddArticle" onClick={() => document.activeElement.blur()}>
                            Add Product
                        </Link>
                    </li>

                    <li>
                        <Link href="/ManageArchive" onClick={() => document.activeElement.blur()}>
                            Manage Products
                        </Link>
                    </li>

                    <div className="divider my-0"></div>
                    <li>
                        <button onClick={() => signOut()} className="text-red-600">
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        );
    }

    return (
        <div className="flex gap-2">
            <Link href="/login" className="my-btn my-btn:hover">Login</Link>
        </div>
    );
};

export default AuthButtons;