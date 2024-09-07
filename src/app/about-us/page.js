"use client";

import React, { useState } from "react";
// import Image from "next/image";
// import "@/app/about-us/about.css";
import AboutProfile from "@/components/AboutProfile";
import AboutVision from "@/components/AboutVision";
import AboutMission from "@/components/AboutMision";
import AboutTeam from "@/components/AboutTeam";
import SpeakerSection01 from "@/components/SpeakerSection01"
import SpeakerSection02 from "@/components/SpeakerSection02"


// import bannergif from "@/media/banner.gif";

const About = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabClickHandler = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="overflow-hidden">
        <AboutProfile />
        <AboutVision />
        <AboutMission />
      
      
        <SpeakerSection01 />
        <SpeakerSection02 />
        <AboutTeam />
        
      </div>
    </>
  );
};

export default About;
