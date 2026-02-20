import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-accent">
          Regional OTT
        </h1>

        <Link
          to="/login"
          className="px-5 py-2 bg-purple-700 hover:bg-purple-500 rounded-lg transition duration-300"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;