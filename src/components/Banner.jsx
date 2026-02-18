import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="min-h-80 md:min-h-100 lg:min-h-150 bg-cover bg-bottom bg-no-repeat flex justify-end items-center px-1 md:pr-8 lg:pr-32"
        style={{
          backgroundImage:
            "url('https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/more/3.png')",
        }}
      >
        <div className="max-w-xs md:max-w-sm lg:max-w-lg space-y-2">
          <p className="text-2xl md:text-4xl">
            Would you like a Cup of Delicious Coffee?
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn btn-soft btn-warning max-w-32">
            Learn More
          </button>
        </div>
      </div>
      <div className="min-h-30 lg:min-h-60 bg-gray-400 grid grid-cols-2 md:grid-cols-4 justify-items-center p-4 lg:px-40 gap-4 ">
        <div className="max-w-xs">
          <img src="https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/icons/1.png" />
          <p className="text-lg md:text-2xl text-black font-black">
            Awesome Aroma
          </p>
          <p className="text-black">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="max-w-xs">
          <img src="https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/icons/2.png" />
          <p className="text-lg md:text-2xl text-black font-black">
            High Quality
          </p>
          <p className="text-black">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="max-w-xs">
          <img src="https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/icons/3.png" />
          <p className="text-lg md:text-2xl text-black font-black">
            Pure Grades
          </p>
          <p className="text-black">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="max-w-xs">
          <img src="https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/icons/4.png" />
          <p className="text-lg md:text-2xl text-black font-black">
            Proper Roasting
          </p>
          <p className="text-black">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
