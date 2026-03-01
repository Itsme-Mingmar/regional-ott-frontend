import { Link } from "react-router-dom";
import { Play } from "lucide-react";


const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="group flex items-center gap-2 text-2xl font-extrabold tracking-wide"
        >
          {/* Play Icon Circle */}
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
            <Play
              size={18}
              className="text-white fill-white transition-transform duration-300 group-hover:scale-125"
            />
          </div>

          {/* Text */}
          <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider">
            RPlay
          </span>
        </Link>

        <Link
          to="/signin"
          className="px-5 py-2 bg-purple-700 hover:bg-purple-500 rounded-lg transition duration-300"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;