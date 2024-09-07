"use client";
import Solutions from '@/components/Solutions';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faChartLine, faTachometerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const Performance_monitoring = () => {
  const data = {
    headImage: "/Perf.png",
    headImageMobile: "/Performance_Monitoring_heading_mobile1.png",
    contentImage: "/manage.png",
    heading: "Performance Monitoring (OEE)",
    desc: "Continuous Monitoring and Immediate Data Analysis for Real-time Insights.",
    bullets: [
      {
        icon: faCog,
        heading: "Real-Time Data Tracking",
        desc: "Track production data in real-time with our OEE system for immediate insights into machine performance."
      },
      {
        icon: faChartLine,
        heading: "Historical Data Analysis",
        desc: "Analyze historical data to uncover trends, inform decisions, streamline workflows, and enhance long-term manufacturing performance."
      },
      {
        icon: faTachometerAlt,
        heading: "Visual Dashboard & Reporting",
        desc: "Use our intuitive OEE dashboard to create custom reports and share performance insights with your team and stakeholders."
      },
      {
        icon: faClock,
        heading: "Root Cause Analysis",
        desc: "Thoroughly analyze performance issues to pinpoint root causes, solve underlying problems, and avoid future recurrences, fostering continuous enhancement."
      },
    ]
  };

  return (
    <>
      <section className="bg-white flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-4 lg:px-10 py-10 lg:py-20 mt-20">
        <div className="container mx-auto px-4 lg:px-10 h-full flex flex-col-reverse lg:flex-row items-center justify-between mt-10 lg:mt-20">
          <div className="lg:w-1/2 order-1 mb-10 lg:mb-0 lg:mr-20 flex justify-center lg:justify-end">
            <img src="perfff.webp" alt="Dashboard" className="w-full max-w-xs lg:max-w-none rounded-xl" />
          </div>
          <div className="lg:w-1/2 order-2 lg:order-2 mb-10 lg:mb-0 lg:ml-20 text-center lg:text-left">
            <h1 className='text-4xl lg:text-6xl font-bold mb-4 lg:mb-6'>
              <span className="text-gray-800">PERFORMANCE </span>
              <span className="text-gray-800">MONITORING</span>
              <span className="text-green-600"> (OEE)</span>
            </h1>
            <h2 className="text-lg lg:text-4xl font-bold text-gray-600 mb-4 lg:mb-6">
              Continuous Monitoring and Immediate <span className="text-green-600">Data Analysis</span><br/> for Real-time Insights.
            </h2>
          </div>
        </div>
      </section>
      <Solutions data={data}/>
    </>
  )
}

export default Performance_monitoring;
