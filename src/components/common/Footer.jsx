import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <div className="space-x-6">
          <a href="#" className="hover:text-accent">About</a>
          <a href="#" className="hover:text-accent">Contact</a>
          <a href="#" className="hover:text-accent">Privacy Policy</a>
          <a href="#" className="hover:text-accent">Terms</a>
        </div>

        <div className="flex justify-center space-x-6 text-xl">
          <FaFacebook className="hover:text-accent cursor-pointer" />
          <FaTwitter className="hover:text-accent cursor-pointer" />
          <FaInstagram className="hover:text-accent cursor-pointer" />
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Regional OTT. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;