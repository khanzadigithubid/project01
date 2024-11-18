"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import { FiDownload } from "react-icons/fi";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-20 top-0 left-0 border-b border-gray-700">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-8"
            loading="lazy"
          />
          <span className="text-xl font-bold">Personal</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center w-10 h-10 text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Centered Menu */}
          <ul className="flex items-center justify-center flex-grow space-x-8">
            <li>
              <Link href="#about" className="hover:text-gray-300">
                About Me
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-gray-300">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-gray-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gray-300">
                Contact Me
              </Link>
            </li>
          </ul>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="bg-black px-4 py-2 rounded-md hover:bg-gray-700 flex items-center space-x-2"
          >
            <span>Resume</span>
            <FiDownload className="text-white" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-6 rounded-md mx-4 mt-2 shadow-lg border-2 border-slate-600 mb-5">
          <ul className="flex flex-col items-start space-y-4">
            <li>
              <Link
                href="#about"
                onClick={toggleMenu}
                className="block text-lg hover:text-gray-300"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                onClick={toggleMenu}
                className="block text-lg hover:text-gray-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                onClick={toggleMenu}
                className="block text-lg hover:text-gray-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={toggleMenu}
                className="block text-lg hover:text-gray-300"
              >
                Contact Me
              </Link>
            </li>
            <li>
              <a
                href="/resume.pdf"
                download
                className="bg-black px-4 py-2 rounded-md hover:bg-gray-700 flex items-center space-x-2"
              >
                <span>Resume</span>
                <FiDownload className="text-white" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
