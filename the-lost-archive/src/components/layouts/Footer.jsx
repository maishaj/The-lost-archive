import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-neutral text-neutral-content p-10">
            
            <div className="max-w-7xl mx-auto footer sm:footer-horizontal flex flex-col md:flex-row lg:flex-row justify-between items-start md:items-center lg:items-center">
                
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Links</h6>
                    <a href={"/"} className='link link-hover'>Home</a>
                    <a href={"/ExploreArticles"} className="link link-hover">Explore</a>
                    <a href={"/AboutPage"} className="link link-hover">About us</a>
                    <a href={"/Contact"} className="link link-hover">Contact</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className="flex flex-row gap-5 items-center justify-start mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#1877F2] transition-colors duration-300" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#FF0000] transition-colors duration-300" aria-label="YouTube">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                        </a>
                        <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300" aria-label="X (formerly Twitter)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                        </a>
                    </div>
                    
                    {/* Copyright Section */}
                    <aside className="border-t border-base-content/10 pt-6 text-center">
                        <p className="text-sm opacity-50 mt-1 font-serif italic text-center sm:text-left">
                            Copyright © {new Date().getFullYear()} - All rights reserved by
                            <span className="font-sm ml-1">The Lost Archive</span>
                        </p>
                        <p className="text-sm opacity-50 mt-1 font-serif italic text-center sm:text-left">
                            Preserving digital history since 2000.
                        </p>
                    </aside>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;