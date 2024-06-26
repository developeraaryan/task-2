import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer
      className="
    bg-gray-800 text-white text-center py-10 bottom-0 w-full
    flex flex-col justify-center items-center gap-4
    "
    >
      <div className=" self-stretch flex justify-center items-center flex-col gap-10 md:flex-row">
        <div className="flex flex-col justify-center items-center w-full md:w-1/3">
          <p className="logo capitalize text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFC107] via-[#FF9800]  to-[#FF5722] w-full">
            <Link href="/">banao technologies</Link>
          </p>
        </div>
        <div className="flex justify-center items-center flex-col gap-10 md:flex-row w-2/3">
          <div className="quick-links flex flex-row justify-around w-full items-center md:justify-center gap-10">
            <Link
              className="transition-colors duration-1000 text-[#FF6752] hover:text-[#FF9800]"
              href="/"
            >
              Home
            </Link>
            <Link
              className="transition-colors duration-1000 text-[#FF6752] hover:text-[#FF9800]"
              href="/about"
            >
              About
            </Link>
          </div>
          <div className="socail flex flex-row justify-around w-full items-center md:justify-end md:mx-10 gap-10">
            <a
              href="https://instagram.com/bnao_technology"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="text-3xl transition-colors duration-700 text-[#fc2583] hover:text-pink-600" />
            </a>
            <a
              href="https://facebook.com/bnao_technology"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-3xl transition-colors duration-700 text-gray-400 hover:text-blue-500" />
            </a>
            <a
              href="https://twitter.com/bnao_technology"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-3xl transition-colors duration-700 hover:text-gray-600" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white text-center py-4 relative -bottom-8 w-full z-10">
        <p>&copy;2024 Shortlisted Users</p>
        <p>
          Created with ❤️ by{" "}
          <a
           href="https://www.linkedin.com/in/aryanji/" 
          target="_blank"
          className="text-[#FF9800] hover:text-[#FF5722] transition-colors duration-700"
          >
            Aryan Kumar
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
