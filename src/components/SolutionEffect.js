"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useScroll } from "framer-motion";
import "./css/solutionEffect.css";

const SolutionEffect = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const toggleButton = useRef(null);

  const [sliderStyle, setSliderStyle] = useState({
    left: "2%",
    background: "#b22222",
    opacity: "1",
  });

  const [sliderHeading, setSetsliderHeading] = useState("Market Challenges");
  const [sliderDesc, setSetsliderDesc] = useState(
    "Challenges like Lack of Operations Insights, Low OEE, Higher Rejections, Unprecedented Downtime, and Delayed Decision Making impact companies and industries, causing inefficiency, increased costs, and reduced competitiveness."
  );

  const handleToggleEffect = () => {
    if (toggleButton.current.checked) {
      setSliderStyle({
        left: "48%",
        background: "rgb(41 111 105)",
      });
      setSetsliderHeading("Our Solutions");
      setSetsliderDesc(
        "Opsight.ai provides real-time insights, predictive maintenance, quality control, and decision support through advanced analytics and AI. By leveraging Opsight.ai's capabilities, companies can enhance operations, boost OEE, reduce rejections, minimize downtime, and streamline decision-making, ultimately ensuring greater efficiency and competitiveness in their industries."
      );
    } else {
      setSliderStyle({
        left: "2%",
        background: "#b22222",
        opacity: "1",
      });
      setSetsliderHeading("Market Challenges");
      setSetsliderDesc(
        "Challenges like Lack of Operations Insights, Low OEE, Higher Rejections, Unprecedented Downtime, and Delayed Decision Making impact companies and industries, causing inefficiency, increased costs, and reduced competitiveness."
      );
    }
  };

  return (
    <div ref={ref}>
      <div className="solutionsContainer mt-10">
        <div className="divider"></div>
        <div className="effectsHeading  ">
          <div className="text-gray-800">Industry Challenges</div>
          <div className="text-gray-800">Our Offerings</div>
        </div>
        <div className="solutionEffectSection">
          <div className="solution-right text-xs sm:text-base md:text-xl lg:text-2xl">
            <div className="beforeEffects effect1 !py-8 px-2 w-[70%]  ">Lack of Operational Insights</div>
            <div className="beforeEffects effect2 !py-8 px-2 w-[70%] ">Low OEE</div>
            <div className="beforeEffects effect3 !py-8 px-2 w-[70%]">Higher Rejections</div>
            <div className="beforeEffects effect4 !py-8 px-2 w-[70%]">Unprecedented Downtime</div>
            <div className="beforeEffects effect5 !py-8 px-2 w-[70%]">Delayed Decision Making</div>
          </div>
          <div className="mid">
            <video className="background-video" autoPlay loop muted>
              <source src="/video01.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img className=" w-[40px] md:w-[100px] lg:w-[150px] aspect-square object-cover" src="/logo.jpg"  alt="Logo"  />
          </div>
          <div className="solution-left text-xs sm:text-base md:text-xl lg:text-2xl">
            <div className="effects effect1 !py-8 px-2 w-[70%]">Real-Time Production Insights</div>
            <div className="effects effect2 !py-8 px-2 w-[70%]">Higher OEE</div>
            <div className="effects effect3 !py-8 px-2 w-[70%]">Lower Rejections</div>
            <div className="effects effect4 !py-8 px-2 w-[70%]">Preventive Maintenance</div>
            <div className="effects effect5 !py-8 px-2 w-[70%]">Data-Driven Operations</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionEffect;
