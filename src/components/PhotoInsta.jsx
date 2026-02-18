import React from "react";

const PhotoInsta = () => {
  return (
    <div className=" px-6 md:px-20 py-6">
      <p className="text-2xl md:text-4xl text-center mb-6">
        Follow on Instagram
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
        <img
          src="https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/cups/Rectangle 9.png"
          alt="broken"
        />
        <img
          src="https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/cups/Rectangle 10.png"
          alt="broken"
        />
        <img
          src="https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/cups/Rectangle 11.png"
          alt="broken"
        />
        <img
          src="https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/cups/Rectangle 12.png"
          alt="broken"
        />
        <img
          src="https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/cups/Rectangle 13.png"
          alt="broken"
          className="hidden md:block"
        />
        <img
          src="https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/cups/Rectangle 14.png"
          alt="broken"
          className="hidden md:block"
        />
        <img
          src="https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/cups/Rectangle 15.png"
          alt="broken"
          className="hidden md:block"
        />
        <img
          src="https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/cups/Rectangle 16.png"
          alt="broken"
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default PhotoInsta;
