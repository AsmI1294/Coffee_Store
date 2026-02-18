import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-4 ">
        <div className="text-[#331A15]  space-y-2">
          <div>
            <img
              className="max-w-20"
              src="https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/more/logo1.png"
              alt="broken logo!"
            />
            <p className="text-2xl md:text-4xl font-medium ">
              Espresso Emporium
            </p>
            <p className="text-md md:text-lg">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
          </div>
          <div className="text-2xl md:text-4xl">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <p className="text-2xl md:text-4xl font-medium mt-4">Get in Touch</p>
          <div className="text-md md:text-lg">
            <div className="flex space-x-2 items-center">
              <FontAwesomeIcon icon={faPhone} />
              <p>+4901796538976</p>
            </div>
            <div className="flex space-x-2 items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>info@gmail.com</p>
            </div>
            <div className="flex space-x-2 items-center">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>72, Wall street, King Road, Dhaka</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-2 mt-10 md:mt-2 flex lg:justify-end">
          <form className="text-[#331A15]  space-y-3 flex flex-col w-full md:w-3/4">
            <p className="text-2xl md:text-4xl font-medium">Connect with Us</p>
            <input
              type="text"
              placeholder="Name"
              className="input bg-[#331A15] text-amber-50"
            />
            <input
              type="text"
              placeholder="mail@site.com"
              className="input bg-[#331A15] text-amber-50"
            />

            <textarea
              className="textarea bg-[#331A15] text-amber-50"
              placeholder="Bio"
            ></textarea>
            <button className="btn btn-outline hover:bg-[#331A15] hover:text-white border-2 w-1/4 text-lg">
              Send
            </button>
          </form>
        </div>
      </div>
      <div
        className="min-h-8 bg-cover bg-center bg-no-repeat flex justify-center items-center py-2"
        style={{
          backgroundImage:
            "url('https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/more/24.jpg')",
        }}
      >
        <p className="text-md md:text-lg ">
          @Copyright|Espresso Emporium Dhaka
        </p>
      </div>
    </>
  );
};

export default Footer;
