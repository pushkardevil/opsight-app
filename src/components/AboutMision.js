import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const AboutMission = () => {
  const originalContent = useRef(null);
  const visContainer = useRef(null);
  const visHead = useRef(null);
  const visImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateElement = (element, animationConfig) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: visContainer.current,
          toggleActions: "restart none none reset",
          start: "top 60%",
          end: "top 20%",
        },
        ...animationConfig,
      });
    };

    animateElement(visImage.current, { y: "10px", opacity: 1, duration: 1.5 });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: visContainer.current,
        toggleActions: "restart none none reset",
        start: "top 60%",
        end: "top 20%",
      },
    });

    t1.to(originalContent.current, { y: "10px", opacity: 1, duration: 1, color: "#021d41" })
      .to(visHead.current, { y: "10px", opacity: 1, duration: 1 });

  }, []);

  return (
    <div className="missionContainer px-4 sm:px-6 lg:px-8 py-8" id="mission">
      <div ref={visContainer} className="flex flex-col lg:flex-row items-center lg:justify-between">
        {/* For larger screens: Image on left and content on right */}
        <div className="lg:w-1/2 flex items-center justify-center lg:justify-start mt-4 lg:mt-0 order-2 lg:order-1">
          <Image
            ref={visImage}
            className="translate-y-36 opacity-0 rounded-2xl w-full h-auto"
            src="/mission01.png"
            width={1000}
            height={500}
            alt="Our Mission"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:ml-10 mt-6 lg:mt-0 order-1 lg:order-2">
          <h1
            ref={originalContent}
            className="text-green-600 font-bold -translate-y-10 opacity-0 text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left bg-white"
          >
            Our Mission
          </h1>
          <h3
            ref={visHead}
            className="mt-4 text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 lg:mt-6 text-justify px-4 lg:px-0 bg-white"
          >
            Empowering manufacturers with real-time production insights 
            and predictive analytics to optimize productivity, equipment 
            downtime, and rework costs through advanced AI and machine learning. 
            Transforming manufacturing operations with AI 
            and machine learning-driven real-time production 
            insights and predictive analytics, enhancing productivity 
            and minimizing equipment downtime and rework costs.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
