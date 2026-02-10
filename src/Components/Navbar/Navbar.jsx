import React from 'react';
import { Link, NavLink } from 'react-router';
import { RiAddCircleFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
        <div className="navbar px-28">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="lg:hidden text-blue-700 hover:text-blue-200">
        <GiHamburgerMenu size={26}  className='cursor-pointer rounded-2xl'/>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
        <NavLink className={({isActive})=>(isActive ? 'underline decoration-2 underline-offset-5': '')} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>(isActive ? 'underline decoration-2 underline-offset-5': '')} to="/bookings">My-Bookings</NavLink>
      </li>
      <li><NavLink className={({isActive})=>(isActive ? 'underline decoration-2 underline-offset-5': '')} to="/blogs">Blogs</NavLink></li>
      <li><NavLink className={({isActive})=>(isActive ? 'underline decoration-2 underline-offset-5': '')} to="/contacts">Contact Us</NavLink></li>
      </ul>
    </div>
    <Link className='hidden md:flex items-center gap-1' to="/"><span><img src="https://i.ibb.co.com/JRH9gVcb/logo.png" alt="logo" /></span> <span className='text-xl font-medium'>Phudu</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink className={({isActive})=>(isActive ? 'underline decoration-2 underline-offset-5 ': '')} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>(isActive ? 'underline decoration-2 underline-offset-5 ': '')} to="/bookings">My-Bookings</NavLink>
      </li>
      <li><NavLink className={({isActive})=>(isActive ? 'underline decoration-2 underline-offset-5 ': '')} to="/blogs">Blogs</NavLink></li>
      <li><NavLink className={({isActive})=>(isActive ? 'underline decoration-2 underline-offset-5 ': '')} to="/contacts">Contact Us</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/emergency" className="btn bg-[#176AE5] text-[#fffffff8] rounded-3xl hover:bg-[#3686ff]">Emergency</Link>
  </div>
</div>
    );
};

export default Navbar;