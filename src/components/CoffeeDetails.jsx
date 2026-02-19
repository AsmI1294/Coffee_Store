import React from "react";
import { Link, useLoaderData } from "react-router";
import ScrollToTop from "../layouts/ScrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const CoffeeDetails = () => {
  const coffeeDetails = useLoaderData();
  const { details, name, photo, price, quantity, supplier, taste } =
    coffeeDetails;
  return (
    <div className="max-w-5/6 lg:max-w-3/6 mx-auto my-10">
      <ScrollToTop></ScrollToTop>
      <Link
        className="btn join-item bg-[#331A15] border-amber-300 hover:bg-amber-300 hover:text-black text-lg md:text-xl my-3"
        to={"/"}
      >
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        Back to Home
      </Link>
      <div
        className="card card-side shadow-sm flex flex-col md:flex-row border p-4 "
        style={{
          backgroundImage:
            "url('https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/more/7.png')",
        }}
      >
        <figure className="m-2 ">
          <img src={photo} alt="Broken link" />
        </figure>
        <div className="w-5/6 lg:w-4/6  border lg:m-10 m-6 mx-auto">
          <div className="flex flex-col justify-center p-3 space-y-2">
            <h2 className="card-title text-2xl lg:text-3xl">{name}</h2>
            <p className="text-lg lg:text-xl">Price: {price}</p>
            <p className="text-lg lg:text-xl">Quantity: {quantity}</p>
            <p className="text-lg lg:text-xl">Taste: {taste}</p>
            <p className="text-lg lg:text-xl">Supplier: {supplier}</p>
            <p className="text-lg lg:text-xl">Details: {details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
