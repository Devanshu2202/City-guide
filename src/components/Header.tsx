import { Link } from "react-router-dom";
import Logo2 from "../assets/LogoImage2.png";


const Header = () => {
    return (
        <nav className="flex justify-between items-center px-4 py-3 
bg-black/30 backdrop-blur-md text-white absolute top-0 left-0 w-full z-20">

            {/* Logo */}
            <div className="h-16 w-28">
                <img src={Logo2} alt="logo" className="h-full w-full object-contain" />
            </div>

            {/* Nav Links */}
            <div className="space-x-6 hidden md:flex">
                <Link to="/" className="hover:text-orange-400">
                    Home
                </Link>
                <Link to="about" className="hover:text-orange-400">
                    About
                </Link>
                <Link to="buddies" className="hover:text-orange-400">
                    Find a Buddy
                </Link>
            </div>

            {/* Right Button */}
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold">
                Become a Host
            </button>
        </nav>
    );
};

export default Header;