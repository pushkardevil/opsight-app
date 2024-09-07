"use client";

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faBullseye, faRocket, faUsers, faCogs, faChartLine, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between ml-4 sm:ml-0">
          {/* Get In Touch With Us Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 flex flex-col">
            <h2 className="text-white font-extrabold text-xl mb-4">Get In Touch With Us</h2>
            <p className="mb-4">
              <a href="mailto:connect@opsight.ai" className="flex items-center hover:text-green-500">
                <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mr-3 text-green-600" /> connect@opsight.ai
              </a>
            </p>
            <p className="mb-4">
              <a href="https://www.linkedin.com/company/opsight-ai-pvt-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-green-500">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6 mr-3 text-green-600" /> LinkedIn
              </a>
            </p>
            <p className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 mr-3 text-green-600" /> A3/603, Priyadarshini Adhishthan Bawadia Kalan, Bhopal (M.P.), 462026
            </p>
          </div>

          {/* About us Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 flex flex-col">
            <h2 className="text-white font-extrabold text-xl mb-4">About us</h2>
            <ul>
              <li className="mb-4">
                <a href="/about-us#vision" className="flex items-center hover:text-green-500">
                  <FontAwesomeIcon icon={faBullseye} className="w-6 h-6 mr-3 text-green-600" /> Our Vision
                </a>
              </li>
              <li className="mb-4">
                <a href="/about-us#mission" className="flex items-center hover:text-green-500">
                  <FontAwesomeIcon icon={faRocket} className="w-6 h-6 mr-3 text-green-600" /> Our Mission
                </a>
              </li>
              <li className="mb-4">
                <a href="/about-us#team" className="flex items-center hover:text-green-500">
                  <FontAwesomeIcon icon={faUsers} className="w-6 h-6 mr-3 text-green-600" /> Team Overview
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 flex flex-col">
            <h2 className="text-white font-extrabold text-xl mb-4">Solutions</h2>
            <ul>
              <li className="mb-4">
                <a href="/performance_monitoring" className="flex items-center hover:text-green-500">
                  <FontAwesomeIcon icon={faCogs} className="w-6 h-6 mr-3 text-green-600" /> Performance Monitoring (OEE)
                </a>
              </li>
              <li className="mb-4">
                <a href="/predictive_analytics" className="flex items-center hover:text-green-500">
                  <FontAwesomeIcon icon={faChartLine} className="w-6 h-6 mr-3 text-green-600" /> Predictive Analytics
                </a>
              </li>
              <li className="mb-4">
                <a href="/customised_solutions" className="flex items-center hover:text-green-500">
                  <FontAwesomeIcon icon={faLightbulb} className="w-6 h-6 mr-3 text-green-600" /> Customised Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-green-500 pt-8 flex justify-center items-center">
          <span className="text-center text-lg">All Rights Reserved by Opsight AI @2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
