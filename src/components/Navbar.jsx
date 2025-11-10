import React from 'react';
import logo from './risingstar.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-indigo-700/40 via-purple-700/40 to-pink-600/40 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-white/20 transition-all duration-500">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center space-x-3 cursor-pointer group">
                    <img
                        src={logo}
                        alt="Rising Star Logo"
                        className="w-14 h-14 rounded-full border-2 border-yellow-400/80 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <h1 className="text-white text-3xl font-extrabold tracking-wide group-hover:text-yellow-300 transition duration-300 drop-shadow-lg">
                        Rising Star <span className="text-yellow-400">Badminton</span> Academy
                    </h1>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-8 text-white font-semibold tracking-wide drop-shadow-md">
                    <li className="relative group cursor-pointer">
                        <Link to="/">Home</Link>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className="relative group cursor-pointer">
                        <Link to="/about">About</Link>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className="relative group cursor-pointer">
                        <Link to="/coaches">Coaches</Link>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className="relative group cursor-pointer">
                        <Link to="/contactus">Contact Us</Link>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className="relative group cursor-pointer">
                        <Link to="/images">Images</Link>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                    </li>


                </ul>


                {/* Join Button */}
                <button className="hidden md:block bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold px-6 py-2 rounded-full hover:from-yellow-300 hover:to-yellow-500 hover:scale-110 hover:shadow-2xl transition-all duration-300">
                    <Link to="/joinus">Join Us</Link>
                </button>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button className="text-white focus:outline-none hover:text-yellow-300 transition">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
