import "./css/team.css";
// import pulak from "../media/pulak3.jpeg";
// import devansha from "../media/devansha.png";
// import harsh from "../media/harsh.png";
// import abhijeet from "../media/abhijeet.jpg";
// import sahil from "../media/Sahil4.jpeg";
import Image from "next/image";
import Link from "next/link";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useEffect, useState, useRef } from "react";
// import { SplitText } from "gsap-trial/SplitText";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const AboutTeam = () => {


  const founder = useRef(null);
  const ceoImage = useRef(null);
  const ceoDes = useRef(null);


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.registerPlugin(SplitText);

    // const text = new SplitText(founder.current, {
    //   type: "chars",
    // });

    // gsap.to(text.chars, {
    //   scrollTrigger: {
    //     trigger: founder.current,
    //     // scroller: "#main",
    //     start: "top 70%",
    //     end: "top 40%",
    //     scrub: true,
    //     // markers: true,
    //   },
    //   y: 0,
    //   stagger: 0.1,
    //   // opacity: 1,
    //   // scale: 2,
    //   delay: 0.2,
    //   color: "#000000",
    // });



    gsap.to(ceoImage.current, {
      scrollTrigger: {
        trigger: founder.current,
        // scroller: "#main",
        start: "top 50%",
        // end: "top 40%",
        // scrub: true,
        // markers: true,
      },
      x: 0,
      // stagger: 0.1,
      opacity: 1,
      duration: 1,
      // scale: 2,
      delay: 0.2,
      // color: "#000000",
    });

    gsap.to(ceoDes.current, {
      scrollTrigger: {
        trigger: founder.current,
        // scroller: "#main",
        start: "top 50%",
        // end: "top 40%",
        // scrub: true,
        // markers: true,
      },
      x: 0,
      // stagger: 0.1,
      opacity: 1,
      duration: 1,
      // scale: 2,
      delay: 0.2,
      // color: "#000000",
    });

    
  }, []);


  return (
    <div className="teamContainer flex flex-col" id="team" >
      {/* <div className="flex flex-col gap-5">
        <div className="team-ceointro flex flex-col ">
          <h3 className="text-xl tracking-widest text-orange-300 font-semibold">
            Introducing
          </h3>
          <h1 ref={founder} className="text-3xl tracking-widest font-bold">
            Our Founder
          </h1>
        </div>
        <div className="team-ceosection relative">
          <Image
            ref={ceoImage}
            className="team-ceoimg -translate-x-40 opacity-0"
            src={"/pulak3.jpeg"}
            width={360}
            height={971}
          />
          <div
            ref={ceoDes}
            className="team-ceodetail text-justify px-6 py-4 tracking-wider flex flex-col gap-2 translate-x-40 opacity-0"
          >
            <h1 className="text-2xl font-bold border-b tracking-widest">
              Pulak Rijhwani
            </h1>
            <ul className="flex gap-4 text-l">
              <li>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/pulak-rijhwani-65180a56/"
                  className="fa-brands fa-linkedin"
                  aria-hidden="true"
                ></Link>
              </li>

              <li>
                <Link
                  target="_blank"
                  href="mailto:connect@opsight.ai"
                  className="fa-solid fa-envelope"
                  aria-hidden="true"
                ></Link>
              </li>
            </ul>
            <h4>
              Pulak is an experienced professional with more than 11 years of
              cross-functional experience in the manufacturing industry.
            </h4>
            <h4>
              Having worked extensively in shop floors & with MSMEs, he is well
              versed with the unique constraints faced by the Indian
              manufacturers.
            </h4>
            <h4>
              His passion towards Industry 4.0 & Manufacturing Analytics,
              propelled him to pursue entrepreneurship in this domain through
              Opsight AI Pvt Ltd - Transforming Operations Data into Actionable
              Insights !
            </h4>
          </div>
        </div>
      </div> */}

      {/* <div className="team-pm flex">
        <div className="team-pm-left">
          <h1 className="text-2xl tracking-widest text-orange-300">
            Project Manager
          </h1>
          <div className="flex items-center justify-center gap-4">
            <Image className="team-pmimg" src={devansha} />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h2 className="text-xl tracking-wider text-[#f7f7f7cf]">
                Devansha Shrivastava
              </h2>
              <ul className="social flex gap-3 text-[#f7f7f7cf] text-xl">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa-brands fa-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>

                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa-solid fa-envelope"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="team-pm-right flex items-center justify-center p-20">
          <h1 className="text-[#002a38]">
            As a Project Manager, I'm dedicated to transforming ideas into
            market-ready products that delight users and drive business growth.
            I thrive on understanding customer needs, collaborating with
            cross-functional teams, and making data-driven decisions to deliver
            exceptional solutions. Let's build products that make a real impact
            together!
          </h1>
        </div>
      </div> */}

      <div className="team-teamsection ">
        {/* <div className="team-heading">
          <h1 className="tracking-wider text-[#002a38] font-bold mb-4">
            Our Team
          </h1>
        </div> */}


        <div className="team-container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 cardSection">
              <div className="our-team">
                <div className="picture">
                  <Image
                    className="img-fluid"
                    src={"/devansha.png"}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Devansha Shrivastava</h3>
                  <h4>Project Manager</h4>
                  {/* <h4 className="workTitle">IIoT & ML</h4> */}
                </div>
                <ul className="social">
                  <li>
                    
                    <Link
                      
                      target="_blank"
                      href="https://www.linkedin.com/in/devansha-shrivastava/"
                      // className="fa-brands fa-linkedin"
                      aria-hidden="true"
                    ><FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6 mr-3 text-green-600" />
                    </Link>
                  </li>
                  <li>
                    
                    <Link
                      target="_blank"
                      href="mailto:Devansha@opsight.ai"
                      // className="fa-solid fa-envelope"
                      aria-hidden="true"
                    ><FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mr-3 text-green-600" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 cardSection">
              <div className="our-team">
                <div className="picture">
                  <Image
                    className="img-fluid"
                    src={"/ram.jpg"}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Ramkaran Sherawat</h3>
                  <h4>Embedded System Engineer</h4>
                  {/* <h4 className="workTitle">IIoT & ML</h4> */}
                </div>
                <ul className="social">
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/ramkaran-sherawat-16514621b/"
                      // className="fa-brands fa-linkedin"
                      aria-hidden="true"
                    ><FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6 mr-3 text-green-600" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="mailto:ramsherawat@opsight.ai"
                      // className="fa-solid fa-envelope"
                      aria-hidden="true"
                    ><FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mr-3 text-green-600" /></Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 cardSection">
              <div className="our-team bg-green-600">
                <div className="picture">
                  <Image
                    className="img-fluid"
                    src={"/prakash.jpg"}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Prakash Jadhav</h3>
                
                  <h4>ML Project Intern</h4>
                </div>
                <ul className="social">
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/prakashjadhav0210/"
                      // className="fa-brands fa-linkedin"
                      aria-hidden="true"
                    ><FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6 mr-3 text-green-600" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      target="_blank"
                      href="mailto:prakash.jadhav@opsight.ai "
                      // className="fa-solid fa-envelope"
                      aria-hidden="true"
                    ><FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mr-3 text-green-600" /></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
