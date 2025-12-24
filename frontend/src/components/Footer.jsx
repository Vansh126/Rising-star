import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900/50 backdrop-blur-md rounded-t-2xl text-white py-6 flex flex-col md:flex-row items-center justify-between px-6 md:px-12">

            {/* Left: Text */}
            <div className="mb-4 md:mb-0 text-center md:text-left">
                <span className="text-lg md:text-xl font-semibold">2024 All Rights Reserved</span>
            </div>

            {/* Right: Instagram */}
            <div className="flex items-center space-x-3">
                <span className="text-lg font-semibold">Follow us on Instagram</span>
                <a
                    href="https://www.instagram.com/newrisingstar_badmintonacademy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
                >
                    <FaInstagram size={28} />
                </a>
            </div>

        </footer>
    );
};

export default Footer;
