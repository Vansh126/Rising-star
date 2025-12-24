import React from 'react';

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen bg-[#1b1b1b] flex flex-col items-center justify-center px-6 py-16 text-white"
        >
            <div className="bg-[#111111] border-2 border-cyan-400/80 rounded-2xl shadow-2xl p-8 md:p-12 max-w-3xl text-center hover:shadow-cyan-400/40 transition-all duration-500">
                <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 drop-shadow-lg">
                    About Us
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    Rising Star Badminton Academy has trained over <span className="text-cyan-400 font-semibold">2500+</span> players under the guidance of <span className="text-cyan-400 font-semibold">10+ expert coaches</span>.
                    <br /><br />
                    Our mission is to nurture young talent, build discipline, and develop the champions of tomorrow —
                    empowering every player to reach their true potential on and off the court.
                </p>
            </div>
        </section>
    );
};

export default About;
