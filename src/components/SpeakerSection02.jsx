import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SpeakerSection02 = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center bg-gray-600 p-6 md:p-12 lg:p-16 space-y-6 md:space-y-0">
      {/* Image Section */}
      <div className="md:w-1/3 flex justify-center md:justify-end">
        <div className="relative">
          <img
            src="arun.jpeg" // Replace this URL with the actual image URL
            alt="Opsight.AI"
            className="rounded-xl w-48 h-48 object-cover md:w-64 md:h-64 lg:w-80 lg:h-80"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-white text-center md:text-left md:w-2/3 space-y-4 md:space-y-6 md:mr-8">
        <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
          “ENHANCED OUTPUT WITHOUT EXPANDING OUR EQUIPMENT FLEET”
        </blockquote>
        <p className="text-base md:text-lg lg:text-xl">
          <span className="font-semibold">Mr. Arun Kumar,</span> Co-Founder & CTO - Opsight AI
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <a 
            href="https://www.linkedin.com/in/arun-kumar-4b025015a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl md:text-3xl" />
          </a>
          <a 
            href="mailto:arunkumar@opsight.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl md:text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpeakerSection02;
