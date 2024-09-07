"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between lg:p-4 px-4 py-2 border-b border-gray-200 bg-white">
      <div className="flex items-center ">
        <Link href="/" legacyBehavior>
          <a>
            <img src="/ai.png" alt="logo" className="h-14" />
          </a>
        </Link>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:block lg:hidden">
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> */}
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>

      <div className="lg:flex items-center space-x-8 hidden">
        <Link href="/" legacyBehavior>
          <a className="text-gray-600 font-bold text-lg hover:text-green-500">Home</a>
        </Link>
        <div className="relative group">
          <Link href="/about-us" legacyBehavior>
            <a className="text-gray-600 font-bold text-lg hover:text-green-500 flex items-center">About us</a>
          </Link>
        </div>
        <div className="relative group text-gray-600 font-bold text-lg " >
          <Menu setActive={setActive} >
            <MenuItem setActive={setActive} active={active} item="Solutions"  className="text-gray-600 font-bold text-lg hover:text-green-500">
              <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
                <div onClick={()=>{setActive(false)}}><ProductItem
                  title="Performance Monitoring (OEE)"
                  href="/performance_monitoring"
                  src="/perfff.webp"
                  description="Continuous Monitoring and Immediate Data Analysis for Real-time Insights."
                /></div>
                <div onClick={()=>{setActive(false)}}><ProductItem
                  title="Predictive Analytics"
                  href="/predictive_analytics"
                  src="/new03.svg"
                  description="Unlock the Future with Predictive Analytics: Where Data Meets Destiny."
                /></div>
                <div onClick={()=>{setActive(false)}}><ProductItem
                  title="Customised Solutions"
                  href="/customised_solutions"
                  src="/Monitoring02.png"
                  description="Your Vision, Our Precision: Custom Solutions Redefined."
                /></div>
              </div>
            </MenuItem>
          </Menu>
        </div>
        {/* <Link href="/" legacyBehavior>
          <a className="text-gray-600 font-bold text-lg hover:text-green-500">Courses</a>
        </Link> */}
      </div>

      <div className="lg:flex items-center space-x-8 hidden">
        <Link href="/contact" legacyBehavior>
          <a className="px-4 py-2 text-green-600 border border-green-500 hover:bg-green-50 hover:text-black font-bold">Contact Us</a>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:block absolute top-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-20 ">
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
            {/* <span className="text-lg font-bold">Opsight <span className="text-green-500">AI</span></span> */}
              <div onClick={()=>{setActive(false);toggleMenu()}}>
                <Link href="/" legacyBehavior><img src="/ai.png" alt="logo" className="h-14" /></Link>
              </div>
              
            
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-2 p-2">
            <Link href="/" legacyBehavior>
              <a onClick={toggleMenu} className="text-gray-600 font-bold text-lg hover:text-green-500">Home</a>
            </Link>
            <Link href="/about-us" legacyBehavior>
              <a onClick={toggleMenu} className="text-gray-600 font-bold text-lg hover:text-green-500 flex items-center">About us</a>
            </Link>
            <div className="relative group text-gray-600 font-bold text-lg">
              <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Solutions" className="text-gray-600 font-bold text-lg hover:text-green-500">
                  <div className="text-sm grid grid-cols-1 gap-10 p-4">
                    <div onClick={()=>{setActive(false);toggleMenu();}}><ProductItem
                      title="Performance Monitoring (OEE)"
                      href="/performance_monitoring"
                      src="/perfff.webp"
                      description="Continuous Monitoring and Immediate Data Analysis for Real-time Insights."
                    /></div>
                    <div onClick={()=>{setActive(false);toggleMenu();}}><ProductItem
                      title="Predictive Analytics"
                      href="/predictive_analytics"
                      src="/new03.svg"
                      description="Unlock the Future with Predictive Analytics: Where Data Meets Destiny."
                    /></div>
                    <div onClick={()=>{setActive(false);toggleMenu();}}><ProductItem
                      title="Customised Solutions"
                      href="/customised_solutions"
                      src="/Monitoring02.png"
                      description="Your Vision, Our Precision: Custom Solutions Redefined."
                    /></div>
                  </div>
                </MenuItem>
              </Menu>
            </div>
            {/* <Link href="/" legacyBehavior>
              <a onClick={toggleMenu} className="text-gray-600 font-bold text-lg hover:text-green-500">Courses</a>
            </Link> */}
            <Link href="/contact" legacyBehavior>
              <a onClick={toggleMenu} className="px-4 py-2 text-green-600 border border-green-500 hover:bg-green-50 hover:text-black font-bold">Contact Us</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
