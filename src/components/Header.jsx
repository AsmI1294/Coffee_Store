import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div
      className="min-h-32 bg-cover bg-center bg-no-repeat flex justify-center items-center py-2"
      style={{
        backgroundImage:
          "url('https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/more/15.jpg')",
      }}
    >
      <img
        src="https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/more/logo1.png"
        width="75px"
        height="40px"
      />
      <Link to={"/"}>
        <p className="text-3xl md:text-6xl ">Espresso Emporium</p>
      </Link>
    </div>
  );
};

export default Header;
