import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo/Miracle.png";
import darkLogo from "../assets/logo/Dark Logo 02.png";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="mt-2 z-10 py-10 bg-white dark:bg-gradient-to-br from-[#09161c] to-[#173948]"


    >
      <div className="h-[200px] flex flex-col justify-center items-center text-center space-y-6">
        <div className="z-50 ">
          <Image
            alt="miraclesoft"
            className="z-50 dark:hidden"
            src={logo}
            height={180}
            width={180}
          />
          <Image
            alt="miraclesoft"
            className="z-50 hidden dark:flex"
            src={darkLogo}
            height={180}
            width={180}
          />
        </div>
        <div className="flex space-x-4 transform transition-transform duration-700 ease-in-out group-hover:translate-y-0">
          <FaFacebookF className="text-gray-800 dark:text-gray-300 border  border-gray-800 dark:border-gray-300 p-3 h-10 w-10 rounded-full cursor-pointer  dark:hover:text-gray-800  hover:bg-gray-300 hover:border-transparent transition-colors duration-300 ease-in-out" />
          <FaLinkedin className="text-gray-800 dark:text-gray-300 border  border-gray-800 dark:border-gray-300 p-3 h-10 w-10 rounded-full cursor-pointer  dark:hover:text-gray-800 hover:bg-gray-300 hover:border-transparent transition-colors duration-300 ease-in-out" />
          <FaTwitter className="text-gray-800 dark:text-gray-300 border  border-gray-800 dark:border-gray-300 p-3 h-10 w-10 rounded-full cursor-pointer  dark:hover:text-gray-800 hover:bg-gray-300 hover:border-transparent transition-colors duration-300 ease-in-out" />
        </div>

        <p className="text-sm text-gray-400">
          © {currentYear} Miraclesoft. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
