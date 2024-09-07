import React, { useRef } from 'react';

const AboutProfile = () => {
  const headingRef = useRef(null);

  return (
    <div className="flex flex-col lg:flex-row items-center bg-white p-4 sm:p-6 lg:p-12 xl:p-16 mt-10">
      <div className="lg:w-1/2 flex-shrink-0">
        <img 
          src="/industry.png" 
          alt="Industry" 
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center lg:pl-12 mt-8 lg:mt-0">
        <h1 
          ref={headingRef} 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-6 lg:mt-0 text-center lg:text-left px-4 lg:px-0 "
        >
          <span className="text-gray-700">About Opsight</span>
          <span className="text-green-600"> AI</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 mt-4 lg:mt-6 text-justify px-4 lg:px-0">
          Opsight AI Pvt Ltd is a pioneering manufacturing analytics startup specializing in Industrial 
          AI and SaaS solutions. Manufacturing generates the largest volume of data among all sectors, 
          yet much of this valuable information remains siloed on shop floors and goes unused. At 
          Opsight AI, we are committed to revolutionizing how manufacturing companies utilize their 
          data, enabling them to make smarter decisions, optimize operations, and significantly boost 
          overall efficiency.
        </p>
      </div>
    </div>
  );
};

export default AboutProfile;
