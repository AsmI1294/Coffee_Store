import React, { use } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
const SignIn = () => {
  const { loginUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    try {
      const userCredential = await loginUser(userData.email, userData.password);

      // reload forces Firebase to refresh metadata including lastSignInTime
      await userCredential.user.reload();
      const lastLoginGMT = userCredential.user.metadata.lastSignInTime;
      const lastLogin = new Date(lastLoginGMT).toLocaleString();

      await fetch(`http://localhost:3000/lastSignIn/${userData.email}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lastLogin }),
      });

      navigate("/", { replace: true });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.code,
      });
    }
  };

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
          <form onSubmit={handleSignIn}>
            <label className="label text-lg">Email</label>
            <input
              type="email"
              className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black mb-4"
              placeholder="Email"
              name="email"
            />
            <label className="label text-lg">Password</label>
            <input
              type="password"
              className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black"
              placeholder="Password"
              name="password"
            />
            <div>
              <p className=" text-white hover:text-amber-400 mt-2">
                <Link to={"/register"}>Not an User? Register here</Link>
              </p>
            </div>
            <button
              type="submit"
              className="btn bg-[#331A15] border-amber-300 block text-xl m-6 hover:px-6 justify-self-center"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
