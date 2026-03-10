import React from "react";
import { Link } from "react-router";

const Restriction = () => {
  return (
    <div className="max-w-5/6 mx-auto backdrop-blur-sm bg-black/30 min-h-[60lvh] p-6 flex items-center">
      <div className="card bg-neutral text-neutral-content w-96 lg:w-1/2 min-h-[25lvh] mx-auto">
        <div className="card-body items-center text-center ">
          <p className="card-title text-2xl">
            Please Login or Create an Account to Access items!
          </p>

          <div className="card-actions flex-col md:flex-row ">
            <button className="btn bg-[#331A15] border-amber-300 block text-2xl mx-auto hover:px-6">
              <Link to={"/signIn"}>Log In</Link>
            </button>
            <button className="btn bg-[#331A15] border-amber-300 block text-2xl  hover:px-6">
              <Link to={"/register"}>Register</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restriction;
