import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="mt-2 z-10 py-10"
      style={{
        background: "linear-gradient(-350deg, #09161c, #173948)",
      }}
    >
      <div className="h-[200px] flex flex-col justify-center items-center text-center space-y-6">
        <h1 className="text-4xl font-bold text-white tracking-wide">
          miraclesoft
        </h1>

        <div className="flex space-x-4 transform transition-transform duration-700 ease-in-out group-hover:translate-y-0">
          <FaFacebookF className="text-gray-300 border border-gray-300 p-3 h-10 w-10 rounded-full cursor-pointer hover:text-white hover:bg-gray-300 hover:border-transparent transition-colors duration-300 ease-in-out" />
          <FaLinkedin className="text-gray-300 border border-gray-300 p-3 h-10 w-10 rounded-full cursor-pointer hover:text-white hover:bg-gray-300 hover:border-transparent transition-colors duration-300 ease-in-out" />
          <FaTwitter className="text-gray-300 border border-gray-300 p-3 h-10 w-10 rounded-full cursor-pointer hover:text-white hover:bg-gray-300 hover:border-transparent transition-colors duration-300 ease-in-out" />
        </div>

        <p className="text-sm text-gray-400">
          © {currentYear} Miraclesoft. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
