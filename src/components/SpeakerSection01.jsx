import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SpeakerSection01 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-green-600 p-6 md:p-12 lg:p-16 space-y-6 md:space-y-0">
      <div className="flex justify-center md:justify-start md:w-1/3">
        <img
          src="pulak.jpg" // Replace this URL with the actual image URL
          alt="Opsight.AI"
          className="rounded-xl w-48 h-48 object-cover md:w-64 md:h-64 lg:w-80 lg:h-80"
        />
      </div>
      <div className="text-white text-center md:text-left md:w-2/3 space-y-4 px-4 md:px-0">
        <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
          “INCREASED CAPACITY WITHOUT EXPANDING OUR MACHINE FLEET”
        </blockquote>
        <p className="text-base md:text-lg lg:text-xl">
          <span className="font-semibold">Mr. Pulak Rijwani,</span> Founder & CEO - Opsight AI
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <a 
            href="https://www.linkedin.com/in/pulak-rijhwani-65180a56/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl md:text-2xl hover:text-gray-300" />
          </a>
          <a 
            href="mailto:pulakrijhwani@opsight.ai" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl md:text-2xl hover:text-gray-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpeakerSection01;
