import React from 'react';

const About = () => {
    return (
        <section id="about" className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                About Us
            </h2>
            <p className="max-w-3xl text-lg md:text-xl text-gray-600 leading-relaxed">
                Rising Star Badminton Academy has trained over 2500 players with 10+ expert coaches.
                Our mission is to nurture talent, build discipline, and produce champions in badminton.
            </p>
        </section>
    );
};

export default About;
