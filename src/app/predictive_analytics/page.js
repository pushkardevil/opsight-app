"use client";
import React from 'react';
import Solutions from '@/components/Solutions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faChartLine, faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons';

const PredictiveAnalysis = () => {
  const data = {
    headImage: "/Predictive_Analytics_heading.png",
    headImageMobile: "/Predictive_Analytics_heading_mobile.png",
    contentImage: "/customer-data.jpg",
    heading: "Predictive Analytics",
    desc: "Unlock the Future with Predictive Analytics: Where Data Meets Destiny",
    bullets: [
      {
        icon: faCog,
        heading: "Asset Performance Monitoring",
        desc: "IIoT predictive analytics supports real-time tracking, facilitating proactive maintenance and enhancing asset utilization."
      },
      {
        icon: faChartLine,
        heading: "Quality Control and Process Optimization",
        desc: "IIoT predictive analytics enhances quality control, refining processes for cost-efficiency and delivering consistent high performance."
      },
      {
        icon: faDollarSign,
        heading: "Cost Savings",
        desc: "Proactive maintenance and streamlined operations help save costs by preventing unnecessary repairs and minimizing resource wastage."
      },
      {
        icon: faUser,
        heading: "Customer Relationship Management",
        desc: "Utilizing Predictive Analytics to predict customer behavior and personalize marketing efforts."
      },
    ]
  };

  return (
    <>
      <section className="bg-white flex items-center py-10 sm:py-20 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 order-2 lg:order-1 mb-10 lg:mb-0 lg:mr-10 xl:mr-20">
            <img src="new03.svg" alt="Dashboard" className="w-full rounded-xl" />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 mb-10 lg:mb-0 lg:ml-10 xl:ml-20 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-800">PREDICTIVE </span>
              <span className="text-green-600">ANALYTICS</span>
            </h1>
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-600 mb-6 animate-fadeInSlideUp">
              Unlock the Future with <span className="text-green-600">Predictive Analytics:</span> Where Data Meets Destiny.
            </h1>
            {/* <p className="text-lg text-gray-600 mb-6">
              Enabling companies to unlock their untapped manufacturing potential & achieve operational excellence through AI.
            </p> */}
            {/* <div className="flex justify-center lg:justify-start space-x-4 mb-6">
              <button className="border border-green-600 text-green-600 py-2 px-4 hover:bg-green-50">
                LEARN MORE
              </button>
            </div> */}
          </div>
        </div>
      </section>
      <Solutions data={data} />
    </>
  );
}

export default PredictiveAnalysis;
