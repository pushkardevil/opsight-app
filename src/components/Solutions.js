"use client";
import "./css/solutions.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

const Solutions = (props) => {
  const { headImage, headImageMobile, contentImage, heading, desc, bullets } = props.data;

  const imageDiv = useRef(null);
  const imageDiv2 = useRef(null);

  const pointsDiv1 = useRef(null);
  const pointsDiv2 = useRef(null);
  const pointsDiv3 = useRef(null);
  const pointsDiv4 = useRef(null);
  const pointsDiv5 = useRef(null);
  const pointsDiv6 = useRef(null);
  const pointsDiv7 = useRef(null);

  const pointsArr = [pointsDiv4, pointsDiv5, pointsDiv6, pointsDiv7];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();
    t1.to(pointsDiv1.current, {
      y: 0,
      opacity: 1,
      duration: 1,
    })
      .to(
        pointsDiv2.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.6"
      )
      .to(
        pointsDiv3.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.6"
      );

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: imageDiv2.current,
        start: "top center",
      },
    });
    t2.to(imageDiv2.current, {
      opacity: 1,
    }).to(pointsDiv4.current, {
      y: 0,
      opacity: 1,
      duration: 1,
    })
      .to(
        pointsDiv5.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.6"
      )
      .to(
        pointsDiv6.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.6"
      ).to(
        pointsDiv7.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.6"
      );

  }, []);

  return (
    <div className="solutionsSection pb-20 px-3">
      <h3 ref={pointsDiv3} className="bg-white checkpoints -translate-y-10 opacity-0 text-gray-800 text-center">How does Opsight help in {heading}?</h3>
      <div className="contentGrid">
        <div className="contentLeft">
          {bullets.map((e, i) => {
            return (
              <div key={i} ref={pointsArr[i]} className="bg-white solutionsDiv checkpoints -translate-y-10 opacity-0">
                <div className="flex justify-center items-center bg-green-500 text-green rounded-full w-12 h-12 mb-2">
                  <FontAwesomeIcon icon={e.icon} />
                </div>
                <h4 className="text-xl font-semibold mb-2 ">{e.heading}</h4>
                <p className="text-center">{e.desc}</p>
              </div>
            );
          })}
        </div>
        <div ref={imageDiv2} className="contentRight opacity-0">
          <Image src={contentImage} height={1000} width={1000} />
        </div>
      </div>
    </div>
  );
};

export default Solutions;