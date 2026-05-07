import { Link } from "react-router-dom";
import { RiUserLocationFill } from "react-icons/ri";
// import Logo2 from "../assets/LogoImage2.png";


const Header = () => {
    return (
        <nav className="flex justify-between items-center px-4 py-3 
bg-black/30 backdrop-blur-md text-white absolute top-0 left-0 w-full z-20">

            <Link to="/">

                <div className="flex items-center gap-2 group"><div className="bg-orange-400 p-2 rounded-xl shadow-sm
            group-hover:bg-orange-500 transition-colors duration-200">

                    <RiUserLocationFill />
                </div><span className="text-xl font-extrabold tracking-tight text-white">City Guide</span>
                </div>
            </Link>

            <div className="space-x-6 hidden md:flex">

                <Link to="host" className="hover:text-orange-400">
                    Host
                </Link>

                <Link to="about" className="hover:text-orange-400">
                    About
                </Link>
                <Link to="buddies" className="hover:text-orange-400">
                    Find a Buddy
                </Link>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold">
                Become a Host
            </button>
        </nav>
    );
};

export default Header;