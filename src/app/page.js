'use client';
import Herosection from "@/components/Herosection";
import NavBar from "@/components/Navbar";
import Faq from "@/components/Faq";
import React, { useEffect, useRef } from "react";
import OurProducts from "@/components/OurProducts";
import SolutionEffect from "@/components/SolutionEffect";
import Partners from "@/components/Partners";
const HomePage = () => {

  const scrollContainer = useRef(null)

  return (
    <div className="pb-0">
      <Herosection />
      <OurProducts />
      
      <SolutionEffect />
      <Faq />
      <Partners />
    </div>
  );
};

export default HomePage;
