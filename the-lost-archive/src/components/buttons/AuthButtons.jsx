"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const AuthButtons = () => {

    const session=useSession(); 

    return (
        <div>
            {
                session.status=="authenticated"? (
                <>
                 <button onClick={()=>signOut()} className='my-btn my-btn:hover'>Logout</button>
                </> 
                ):(
                <>
                  <Link href={"/login"} className='my-btn my-btn:hover'>Login</Link>
                </>
            )}
        </div>
    );
};

export default AuthButtons;