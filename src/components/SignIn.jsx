import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
const SignIn = () => {
  return (
    <div>
      <div className="card bg-base-100 max-w-lg mx-auto shrink-0 shadow-2xl  my-4 ">
        <Link
          className="btn join-item bg-[#331A15] border-amber-300 hover:bg-amber-300 hover:text-black text-lg md:text-xl my-6 w-1/2"
          to={"/"}
        >
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          Back to Home
        </Link>
        <div className="card-body space-y-2">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form>
            <label className="label text-lg">Email</label>
            <input
              type="email"
              className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black mb-4"
              placeholder="Email"
            />
            <label className="label text-lg">Password</label>
            <input
              type="password"
              className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-[#331A15] border-amber-300 block text-xl m-6 hover:px-6 justify-self-center">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
