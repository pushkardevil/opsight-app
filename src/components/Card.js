import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faChartLine, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const { name, desc, cardImg, icon1, link } = props.item;

  return (
    <div className="p-4 w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 max-w-sm">
      <div className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 border border-green-600 h-full flex flex-col">
        {link ? (
          <Link href={link} passHref>
            <div className="cursor-pointer flex flex-col h-full">
              <div className="relative flex-shrink-0">
                <Image
                  className="cardImage"
                  src={cardImg}
                  alt={name}
                  width={1000}
                  height={1000}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={icon1} className="w-6 h-6 mr-2 text-green-600" />
                    <span className="block text-lg font-bold">{name}</span>
                  </div>
                  <h3 className="text-gray-700 mb-4">{desc}</h3>
                </div>
                <span className="border border-green-600 text-white py-2 px-2 bg-green-600 hover:bg-gray-700 flex justify-center items-center mt-auto">
                  Know more
                </span>
              </div>
            </div>
          </Link>
        ) : (
          <div className="flex flex-col h-full">
            <div className="relative flex-shrink-0">
              <Image
                className="cardImage"
                src={cardImg}
                alt={name}
                width={900}
                height={900}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={icon1} className="w-6 h-6 mr-2 text-green-600" />
                  <span className="block text-lg font-bold">{name}</span>
                </div>
                <h3 className="text-gray-700 mb-4">{desc}</h3>
              </div>
              <span className="border border-green-600 text-white py-2 px-2 bg-green-600 hover:bg-gray-700 flex justify-center items-center mt-auto">
                Know more
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
