"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}) => {
  const timer = useRef(null);

  const handleMouseEnter = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setActive(item);
  };

  const handleMouseLeave = () => {
    timer.current = setTimeout(() => {
      setActive(null);
    }, 200); // Delay before hiding the submenu
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="text-gray-600 font-bold text-lg hover:text-green-500 hover:underline"
      >
        {item}
      </motion.p>
      {active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              transition={transition}
              layoutId="active" // layoutId ensures smooth animation
              className="bg-white dark:bg-white  rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-sm"
            >
              <motion.div
                layout // layout ensures smooth animation
                className="w-max h-full lg:p-4 sm:p-2"
              >
                {children}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}) => {
  const timer = useRef(null);

  const handleMouseEnter = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  };

  const handleMouseLeave = () => {
    timer.current = setTimeout(() => {
      setActive(null);
    }, 200); // Delay before hiding the submenu
  };

  return (
    <nav
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-full border border-transparent dark:border-white/[0.2] bg-white shadow-input flex justify-center"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="lg:text-xl sm:text-base font-bold mb-1 text-green-600">
          {title}
        </h4>
        <p className="text-gray-600 lg:text-sm sm:text-xs max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </Link>
  );
};
