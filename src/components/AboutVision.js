import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const AboutVision = () => {
  const originalContent = useRef(null);
  const visContainer = useRef(null);
  const visHead = useRef(null);
  const visImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(visImage.current, {
      scrollTrigger: {
        trigger: visContainer.current,
        toggleActions: "restart none none reset",
        start: "top 60%",
        end: "top 20%",
      },
      y: "10px",
      opacity: 1,
      duration: 1.5,
    });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: visContainer.current,
        toggleActions: "restart none none reset",
        start: "top 60%",
        end: "top 20%",
      },
    });

    t1.to(originalContent.current, {
      y: "10px",
      opacity: 1,
      duration: 1,
      color: "#021d41"
    })
    .to(visHead.current, {
      y: "10px",
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <div className="visionContainer bg-white py-10 sm:py-20" id="vision">
      <div ref={visContainer} className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0 px-4 sm:px-0 text-center lg:text-left">
          <h1
            ref={originalContent}
            className="text-green-600 font-bold -translate-y-10 opacity-0 text-3xl lg:text-5xl bg-white"
          >
            Our Vision
          </h1>
          <h3
            ref={visHead}
            className="mt-4 text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 lg:mt-6 text-justify px-4 lg:px-0 bg-white"
          >
            Creating affordable indigenous solutions for Indian manufacturers in 
            vital emerging technologies like Edge Computing, IIoT, AI/ML, and Big Data 
            Analytics. This empowers them to enhance global competitiveness, harness edge 
            location advantages, and transition to data-driven operations.
          </h3>
        </div>
        <div className="lg:w-1/2 mt-4 lg:mt-0 px-4 sm:px-0 flex justify-center lg:justify-end ">
          <Image
            ref={visImage}
            className="translate-y-36 opacity-0 rounded-2xl w-full h-auto"
            src={"/ourVision.svg"}
            width={1000}
            height={500}
            alt="Our Vision"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
