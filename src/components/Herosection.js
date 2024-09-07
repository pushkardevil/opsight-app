import React from 'react';
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-white  flex items-center py-10 pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6">
            <span className="text-gray-800">Opsight</span>
            <span className="text-green-600"> AI</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
            Transforming Operations <span className="text-green-600">Data</span> Into Actionable Insights!
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 lg:mb-6">
            Enabling companies to unlock their untapped manufacturing potential & achieve operational excellence through AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <Link href="/about-us" className="inline-block border border-green-600 text-green-600 py-2 px-4 rounded-lg hover:bg-green-50 transition-colors duration-300">
              LEARN MORE
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <Link href="/">
            <img src="/comppp.jpg" alt="Dashboard" className="w-full rounded-xl shadow-lg" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
