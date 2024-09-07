"use client";
import React, { useState } from "react";
import Spinner from "@/components/Spinner"; // Ensure you update the path as per your project structure
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);

    // Send form data to the spreadsheet
    fetch("https://api.apispreadsheets.com/data/66y5X9hsZBU5zYyC", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert(
            "Thank you for contacting us! Our team will get in touch with you shortly 🙂!"
          );
          setIsLoading(false);
          e.target.reset();
        } else {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        setIsLoading(false);
      });

    // Send email using EmailJS
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from_name: formData.get("from_name"),
        last_name: formData.get("last_name"),
        user_email: formData.get("user_email"),
        message: formData.get("message"),
      }),
    });
    const resData = await res.json(); // Parse the JSON response
    console.log(resData);

    if (resData.success === true) {
      console.log("Email sent successfully");
      setIsLoading(false);
    } else {
      console.log("Email sending failed");
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-gray-800">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/vodeo05.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative w-full max-w-4xl p-6 md:p-12 bg-opacity-75 rounded-2xl shadow-lg z-1 mt-24 bg-zinc-800">
        <div className="text-green-600 w-full mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in <span className="text-green-500">touch</span> with us!
          </h1>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex items-center mb-4 md:mb-0">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-6 h-6 mr-3 text-green-500"
              />
              <a
                href="mailto:connect@opsight.ai"
                className="text-white hover:text-green-500"
              >
                connect@opsight.ai
              </a>
            </div>
            <div className="flex items-center mb-4 md:mb-0">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="w-6 h-6 mr-3 text-green-500"
              />
              <a
                href="https://www.linkedin.com/company/opsight-ai-pvt-ltd/"
                className="text-white hover:text-green-600"
              >
                Opsight AI Pvt. Ltd.
              </a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="w-6 h-6 mr-3 text-green-500"
              />
              <span className="text-white">
                A3/603, Priyadarshini Adhishthan Bawadia Kalan, Bhopal (M.P.),
                462026
              </span>
            </div>
          </div>
        </div>

        <div className="w-full">
          <form onSubmit={submitForm} className="text-gray-700">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-500 mb-4">
              Send Message
            </h3>
            <div className="grid gap-4 mb-4">
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="from_name"
                  id="floating_first_name"
                  className="block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="last_name"
                  id="floating_last_name"
                  className="block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="email"
                name="user_email"
                id="floating_email"
                className="block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-4 group">
              <textarea
                name="message"
                id="floating_message"
                className="block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="floating_message"
                className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Send
            </button>
            {isLoading && <Spinner />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
