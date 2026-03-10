import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { use, useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValid =
    emailRegex.test(email) &&
    password === confirmPass &&
    password != "" &&
    password >= 6;

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    let userType = "user";
    try {
      const res = await fetch("http://localhost:3000/adminVerification");
      const data = await res.json();

      if (data[0].admin_key == userData.key) {
        userType = "admin";
      }
    } catch (error) {
      console.log("Error fetching admin key:", error);
    }

    const user = {
      name: userData.name,
      email: userData.email,
      userType,
    };
    createUser(userData.email, userData.password)
      .then((userCredential) => {
        // Signed up
        console.log("firebase user created", userCredential);
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Info",
                text: "Successfully Added",
              });
            }
          });
        navigate("/", { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.code,
        });
        e.target.reset();
      });
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
          <h1 className="text-5xl font-bold text-center">Register</h1>
          <form onSubmit={handleRegister}>
            <label className="label text-lg">Name</label>
            <input
              type="text"
              className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black mb-4"
              placeholder="Name"
              name="name"
              required
            />
            <label className="label text-lg">Email</label>
            <input
              type="email"
              className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black mb-4"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {!emailRegex.test(email) && email && (
              <p className="text-red-500">Invalid email</p>
            )}
            <label className="label text-lg">Password</label>
            <input
              type="password"
              className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black mb-4"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label text-lg">Confirm Password</label>
            <input
              type="password"
              className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black mb-4"
              placeholder="Re-enter Password"
              name="confirmPassword"
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            {password !== confirmPass && confirmPass && (
              <p className="text-red-500">Passwords don't match</p>
            )}
            {password.length < 6 && confirmPass < 6 && (
              <p className="text-blue-200">
                Passwords should be more than 6 characters
              </p>
            )}
            <label className="label text-lg">Security Key</label>
            <input
              type="password"
              className="input w-full text-lg py-3 lg:py-6 hover:bg-amber-100 hover:text-black mb-4"
              placeholder="Only for Admin"
              name="key"
            />
            <button
              disabled={!isValid}
              type="submit"
              className="btn bg-[#331A15] border-amber-300 block text-xl m-6 hover:px-6 justify-self-center"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
