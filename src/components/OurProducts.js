import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faChartLine, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const OurProducts = () => {
  const headingDiv = useRef(null);
  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: headingDiv.current,
        toggleActions: "restart none none reset",
        start: "top 70%",
        end: "top 40%",
      },
    });

    t1.to(div1.current, {
      y: 0,
      opacity: 1,
      duration: 1,
    })
      .to(
        div2.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.5"
      )
      .to(
        div3.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.5"
      );
  }, []);

  return (
    <div ref={headingDiv} className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center font-bold mt-10">
        <button className="text-gray-600 py-2 px-3 rounded-3xl bg-green-100">SERVICES</button>
      </div>

      <div ref={div1} className="flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-bold text-green-600 mt-10 bg-white">
        Solutions We Provide
      </div>
      <h1 ref={div2} className="bg-white translate-y-5 opacity-0 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 text-center mx-auto max-w-2xl font-bold mt-6">
        Coupled with our machine monitoring technology, our solutions pave the way for data-driven decision-making,
        predictive maintenance, and enhanced operational excellence.
      </h1>
      <div ref={div3} className="translate-y-5 opacity-0 mt-10 mx-auto flex flex-wrap justify-center gap-6 sm:gap-8">
        <div className="p-4 w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 max-w-sm">
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 border border-green-600 h-full flex flex-col">
            <a href="/performance_monitoring" className="cursor-pointer flex flex-col h-full">
              <div className="relative flex-shrink-0">
                <Image
                  className="cardImage"
                  src="/abc.webp"
                  alt="Performance Monitoring (OEE)"
                  width={1000}
                  height={1000}
                  layout="responsive"
                  objectFit="cover"
                  style={{ width: '100%' }}
                />
              </div>
              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faCogs} className="w-6 h-6 mr-2 text-green-600" />
                    <span className="block text-lg font-bold">Performance Monitoring (OEE)</span>
                  </div>
                  <h3 className="text-gray-700 mb-4 text-sm sm:text-base">OEE performance monitoring enhances industrial efficiency.</h3>
                </div>
                <span className="border border-green-600 text-white py-2 px-2 bg-green-600 hover:bg-gray-700 flex justify-center items-center mt-auto text-sm sm:text-base">
                  Know more
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="p-4 w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 max-w-sm">
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 border border-green-600 h-full flex flex-col">
            <a href="/predictive_analytics" className="cursor-pointer flex flex-col h-full">
              <div className="relative flex-shrink-0">
                <Image
                  className="cardImage"
                  src="/Statistics.jpg"
                  alt="Predictive Analytics"
                  width={1000}
                  height={1000}
                  layout="responsive"
                  objectFit="cover"
                  style={{ width: '100%' }}
                />
              </div>
              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faChartLine} className="w-6 h-6 mr-2 text-green-600" />
                    <span className="block text-lg font-bold">Predictive Analytics</span>
                  </div>
                  <h3 className="text-gray-700 mb-4 text-sm sm:text-base">Continuous Monitoring and Immediate Data Analysis for Real-time Insights.</h3>
                </div>
                <span className="border border-green-600 text-white py-2 px-2 bg-green-600 hover:bg-gray-700 flex justify-center items-center mt-auto text-sm sm:text-base">
                  Know more
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="p-4 w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 max-w-sm">
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 border border-green-600 h-full flex flex-col">
            <a href="/customised_solutions" className="cursor-pointer flex flex-col h-full">
              <div className="relative flex-shrink-0">
                <Image
                  className="cardImage"
                  src="/analyticss.jpg"
                  alt="Customised Solutions"
                  width={1000}
                  height={1000}
                  layout="responsive"
                  objectFit="cover"
                  style={{ width: '100%' }}
                />
              </div>
              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faLightbulb} className="w-6 h-6 mr-2 text-green-600" />
                    <span className="block text-lg font-bold">Customised Solutions</span>
                  </div>
                  <h3 className="text-gray-700 mb-4 text-sm sm:text-base">Customized solutions designed to meet your unique requirements.</h3>
                </div>
                <span className="border border-green-600 text-white py-2 px-2 bg-green-600 hover:bg-gray-700 flex justify-center items-center mt-auto text-sm sm:text-base">
                  Know more
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center font-bold mt-20 mb-16">
        <button className="text-gray-600 py-2 px-3 rounded-3xl bg-green-100">WORKFLOW</button>
      </div>
    </div>
  );
};

export default OurProducts;
