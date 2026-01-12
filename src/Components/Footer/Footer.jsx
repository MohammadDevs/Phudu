import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-white mt-1 grid justify-center py-10 md:py-20'>
           <span className='flex items-center justify-center'>
                <img sizes='' src="/src/assets/logo.png" alt="" />
                <p className='text-4xl font-bold'>Phudu</p>
           </span>
           <div className='flex gap-6 mt-4 max-w-2xl border-b-2 border-red-50 px-12 pb-4'> 
                <a href="/">Home</a>
                <a href="/">My-Bookings</a>
                <a href="/">Blogs</a>
                <a href="/">Contact Us</a>
           </div>
           <div className='flex gap-5 justify-center mt-5'>
                <FaFacebook color='#176AE5'/>
                <FaTwitter color='black'/>
                <FaLinkedin color='#176AE5'/>
                <FaYoutube color='red'/>
           </div>
        </div>
    );
};

export default Footer;