import React from 'react';
import '../index.css';
import CardsBack from './CardsBack';
import Footer from './Footer';

const Background = () => {
    return (
        <>

            {/* Hero Section */}
            <section
                className="relative w-full min-h-screen bg-cover bg-center bg-fixed pt-24"
                style={{
                    backgroundImage: `url('https://wallpaperaccess.com/full/2244772.jpg')`,
                }}
            >
                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg text-white">
                        <span className="text-white">Welcome to <br /> </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-300 to-red-500 animate-pulse">
                            New Rising Star
                        </span>
                    </h1>

                    {/* Subheading */}
                    <h2 className="text-2xl md:text-4xl font-semibold mb-4 drop-shadow-md text-white">
                        Badminton Academy
                        🏸
                    </h2>

                    {/* Typewriter */}
                    <h3 className="text-2xl md:text-3xl font-semibold mt-6 mb-8">
                        <span className="block text-[#ec003f]">A Place Where</span>
                        <span className="flex items-baseline text-white">
                            <span className="mr-2">We</span>
                            <span className="typewriter bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 font-bold">
                                {/* Typewriter text goes here */}

                            </span>
                        </span>
                    </h3>

                    {/* Paragraph */}
                    <p className="max-w-2xl text-lg md:text-xl font-extrabold leading-relaxed mb-8 bg-gradient-to-r from-[#00d3f2] to-[#e60076] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]">
                        Train with passion, play with excellence — where every player rises to become a star.
                    </p>

                    {/* Cards BEFORE Join Button */}
                    <CardsBack />

                    {/* CTA Button */}
                    <button className="relative z-20 mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-3 rounded-full hover:scale-110 hover:shadow-2xl transition-all duration-300">
                        <a href="http://localhost:5173/joinus">Join The Academy</a>
                    </button>
                    <br />
                    <br />
                    <Footer />

                </div>
            </section>
        </>
    );
};

export default Background;
