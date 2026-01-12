import React from 'react';
import { Link, NavLink } from 'react-router';
import { RiAddCircleFill } from "react-icons/ri";


const Navbar = () => {
    return (
        <div className="navbar px-28">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink to="">My-Bookings</NavLink>
      </li>
      <li><NavLink>Blogs</NavLink></li>
      <li><NavLink>Contact Us</NavLink></li>
      </ul>
    </div>
    <Link className='hidden md:flex items-center gap-1' to="/"><span><img src="/src/assets/logo.png" alt="logo" /></span> <span className='text-xl font-medium'>Phudu</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/bookings">My-Bookings</NavLink>
      </li>
      <li><NavLink to="/blogs">Blogs</NavLink></li>
      <li><NavLink to="/contacts">Contact Us</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#176AE5] text-[#fffffff8] rounded-3xl hover:bg-[#3686ff]">Emergency</a>
  </div>
</div>
    );
};

export default Navbar;