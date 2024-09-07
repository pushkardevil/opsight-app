"use client";

import React from "react";
import Solutions from "@/components/Solutions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faChartPie, faArrowsAlt, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const Customised_Solutions = () => {
  const data = {
    headImage: "/Customised_Solutions_heading.jpg",
    headImageMobile: "/Customised_Solutions_heading_mobile.jpg",
    contentImage: "/custtt_01.png",
    heading: "Customised Solutions",
    desc: "Your Vision, Our Precision: Custom Solutions Redefined!",
    bullets: [
      {
        icon: faCog,
        heading: "Precision and Efficiency",
        desc: "Our customized solutions seamlessly integrate with your infrastructure, ensuring smooth and efficient operations, free from disruptions or complications."
      },
      {
        icon: faChartPie,
        heading: "Improved Productivity",
        desc: "Tailored solutions optimize workflow with intuitive tools, boosting productivity and reducing learning curve challenges."
      },
      {
        icon: faArrowsAlt,
        heading: "Scalability and Flexibility",
        desc: "Our solutions are designed to scale with your business, providing flexibility to adapt to evolving needs and accommodate growth seamlessly."
      },
      {
        icon: faHandsHelping,
        heading: "Comprehensive Support and Training",
        desc: "We provide extensive support and training to facilitate a seamless transition to customized solutions, empowering your team to fully leverage tailored features."
      },
    ]
  };

  return (
    <>
      <section className="bg-white flex items-center py-10 sm:py-20 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 order-1 mb-10 lg:mb-0 lg:order-1 lg:mr-10 xl:mr-20">
            <img src="Monitoring02.png" alt="Dashboard" className="w-full rounded-xl" />
          </div>
          <div className="lg:w-1/2 order-2 mb-10 lg:mb-0 lg:ml-10 xl:ml-20 text-center lg:text-left">
            <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold mb-6'>
              <span className="text-gray-800 group-hover:text-blue-500 transition-colors duration-300">CUSTOMISED </span>
              <span className="text-green-600 group-hover:text-purple-600 transition-colors duration-300">SOLUTIONS</span>
            </h1>
            <h1 className="text-lg sm:text-xl lg:text-4xl font-bold text-gray-600 mb-6 animate-fadeInSlideUp">
              Your Vision,<span className="text-green-600">Our Precision:</span>  <br/>Custom Solutions Redefined!
            </h1>
          </div>
        </div>
      </section>
      <Solutions data={data} />
    </>
  );
};

export default Customised_Solutions;
