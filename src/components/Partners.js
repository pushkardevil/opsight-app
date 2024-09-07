// Partners.js
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Partners = () => {
  const headingDiv = useRef(null);
  const divRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: headingDiv.current,
        start: "top 70%",
        end: "top 50%",
        toggleActions: "restart none none reset",
      },
    });

    divRefs.forEach((ref, index) => {
      t1.to(ref.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
      });
    });
  }, []);

  return (
    <div ref={headingDiv} className="bg-green-500 mt-4 p-6 sm:p-8 min-h-[55vh]">
      <div className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-widest text-center mb-6 sm:mb-8">
        RECOGNISED BY
      </div>
      <div className="flex flex-wrap justify-center items-center bg-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 gap-6">
        {[
          { src: "/startup_india.png", alt: "Startup India", tooltip: "Fuelled by innovation, proudly endorsed by Startup India. Unleash your potential with our recognized solution." },
          { src: "/mp_startup.png", alt: "MP Startup", tooltip: "Embark on a journey of innovation with confidence, as we proudly carry the recognition of MP Startup. Elevate your endeavours with Opsight AI." },
          { src: "/mathworks.svg", alt: "MathWorks", tooltip: "Innovation thrives with support from MathWorks Accelerator program." },
          { src: "/seedfund.png", alt: "SeedFund Ventures", tooltip: "Fueled by the passion for nurturing groundbreaking concepts, proudly cultivated by SeedFund Ventures. Empowering dreams to blossom into tangible innovations." },
          { src: "/img02.png", alt: "AIC RNTU Incubation Centre", tooltip: "Powered by the spirit of education and innovation, proudly incubated by RNTU Incubation Centre. Transforming ideas into reality." }
        ].map((item, index) => (
          <div
            key={index}
            ref={divRefs[index]}
            className="relative flex flex-col items-center opacity-0 transform translate-y-5 transition-all duration-300 max-w-[150px] sm:max-w-[200px] flex-shrink-0 p-4 m-4  rounded-lg"
          >
            <Image
              src={item.src}
              width={150}
              height={150}
              alt={item.alt}
              className="w-full h-auto object-contain"
            />
            <div className="absolute left-1/2 top-full transform -translate-x-1/2 w-48 sm:w-64 p-2 bg-gray-700 text-white text-xs sm:text-sm font-semibold rounded text-center opacity-0 transition-opacity duration-300 mt-2">
              {item.tooltip}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
