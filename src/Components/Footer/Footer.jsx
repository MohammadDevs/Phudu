import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-white mt-1 grid justify-center py-10 md:py-20'>
           <span className='flex items-center justify-center'>
                <img sizes='' src="/src/assets/logo.png" alt="" />
                <p className='text-4xl font-bold'>Phudu</p>
           </span>
           <div className='flex gap-6 mt-4 max-w-2xl border-b-2 border-red-50 px-12 pb-4'> 
                <NavLink className={({isActive})=>(isActive ? 'text-indigo-600' : '')} to="/">Home</NavLink>
                <NavLink className={({isActive})=>(isActive ? 'text-indigo-600' : '')} to="/bookings">My-Bookings</NavLink>
                <NavLink className={({isActive})=>(isActive ? 'text-indigo-600' : '')} to="/blogs">Blogs</NavLink>
                <NavLink className={({isActive})=>(isActive ? 'text-indigo-600' : '')} to="/contacts">Contact Us</NavLink>
           </div>
           <div className='flex gap-5 justify-center mt-5'>
                <a href="https://www.facebook.com" target='blank' rel='noopener noreferrer'><FaFacebook color='#176AE5'/></a>
                <a href="https://x.com/" target='blank' rel='noopener noreferrer'><FaTwitter color='black'/></a>
                <a href="https://www.linkedin.com" target='blank' rel='noopener noreferrer'><FaLinkedin color='#176AE5'/></a>
                <a href="https://www.youtube.com" target='blank' rel='noopener noreferrer'><FaYoutube color='red'/></a>
           </div>
        </div>
    );
};

export default Footer;