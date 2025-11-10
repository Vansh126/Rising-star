import React from 'react';

const CardsBack = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
                Our Achievements
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
                {/* Card 1 */}
                <div className="bg-gray-900/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg text-center w-72 hover:scale-105 hover:shadow-yellow-500/30 transition-all duration-300">
                    <div className="text-4xl mb-3 animate-bounce">🏸</div>
                    <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                        Trained <span className="text-white font-bold">2500+</span> Players
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Empowering future champions with world-class badminton training.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-900/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg text-center w-72 hover:scale-105 hover:shadow-orange-400/30 transition-all duration-300">
                    <div className="text-4xl mb-3 animate-pulse">👨‍🏫</div>
                    <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                        <span className="text-white font-bold">10+</span> Expert Coaches
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Learn from national-level mentors who bring passion and skill to the court.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-900/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg text-center w-72 hover:scale-105 hover:shadow-red-400/30 transition-all duration-300">
                    <div className="text-4xl mb-3">🏆</div>
                    <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                        <span className="text-white font-bold">100%</span> Success Rate
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Our players consistently perform and achieve success in every competition.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardsBack;
