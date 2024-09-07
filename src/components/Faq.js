// Faq.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const isAccordionActive = (index) => {
    return activeAccordion === index;
  };

  const questionAnswers = [
    {
      title: "What is industry 4.0?",
      content:
        "Industry 4.0 is the integration of digital technologies like IoT, AI, and data analytics into manufacturing. It aims to create smart factories for enhanced efficiency and flexibility. This revolutionizes production with real-time data-driven insights and predictive maintenance, empowering industries to adapt swiftly, customize products, and stay competitive globally.",
    },
    {
      title: "What are Key Technologies of Industry 4.0 ?",
      content:
        "In Industry 4.0, key technologies include the Internet of Things (IoT), artificial intelligence (AI), big data analytics, and robotics. These innovations converge to bolster automation, communication, and data analytics capabilities in manufacturing, supporting our dedication to harnessing cutting-edge technologies for enhanced efficiency and productivity",
    },
    {
      title: "What is the significance of IIoT in industry 4.0 ?",
      content:
        "In Industry 4.0, IIoT links physical devices equipped with sensors to collect real-time data. This data enables controllers to monitor production processes, predict maintenance needs, and optimize operations. This integration enhances automation, efficiency, and decision-making, enabling industries to respond quickly to market demands while boosting productivity and cutting operational costs.",
    },
    {
      title: "What is the signifance of Data Analytics in IoT 4.0?",
      content:
        "Data analytics in Industry 4.0 drives efficiency, innovation, and informed decision-making processes. It leverages insights from vast datasets to enhance competitiveness and operational performance in dynamic industrial environments.",
    },
    {
      title: "How does IIoT improve operational efficiency?",
      content:
        "IIoT improves operational efficiency by providing data-driven insights through real-time monitoring of equipment and predictive maintenance. These capabilities help industries optimize processes, minimize downtime, and enhance overall efficiency by proactively managing assets and streamlining operations.",
    },
    {
      title: "How does IIoT contribute to predictive maintenance?",
      content:
        " IIoT sensors collect real-time data from equipment, providing continuous monitoring. Analytics tools analyze this data to predict potential failures, enabling proactive maintenance strategies. This approach reduces downtime and extends machinery lifespan by addressing issues before they escalate into critical failures.",
    },
  ];

  return (
    <div className="mt-20 px-4 md:px-8 lg:px-16 ">
      <div className="flex items-center justify-center font-bold mb-10">
        <button className="text-gray-600 py-2 px-3 rounded-3xl bg-green-100">
          FAQ
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[100vh] bg-white">
        <div className="flex flex-col justify-center md:justify-normal space-y-8">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            Frequently <span className="text-green-600">Asked</span> Questions
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
            Welcome to our FAQ section for machine monitoring services. If you have more questions, feel free to contact our team.
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <i className="fa-solid fa-check mr-2 text-green-600"></i>
              Real-Time Insights
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-check mr-2 text-green-600"></i>
              24/7 Data Monitoring
            </div>
          </div>
          <Link href="/about-us">
            <button className="border border-green-600 text-white py-2 px-4 bg-green-600 hover:bg-gray-700  transition duration-300">
              MORE ABOUT US
            </button>
          </Link>
          
        </div>
        <div className="space-y-4 overflow-auto lg:overflow-visible">
          {questionAnswers.map((item, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-green-600">
              <h2>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full py-4 font-medium text-left transition-colors duration-300 ${
                    isAccordionActive(index)
                      ? "text-green-600"
                      : "text-gray-800"
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.title}</span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${
                      isAccordionActive(index) ? "transform rotate-0" : "transform rotate-180"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                className={`transition-all duration-300 ${
                  isAccordionActive(index) ? "py-4" : "h-0 overflow-hidden"
                }`}
              >
                <p className="mb-2 text-gray-500">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
