import {
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Header = () => {
  const { logOut, user } = use(AuthContext);

  const name = user?.data?.name;

  return (
    <div
      className="navbar min-h-32 bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage:
          "url('https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/more/15.jpg')",
      }}
    >
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <img
          src="https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/more/logo1.png"
          width="75px"
          height="40px"
        />
        <Link to={"/"}>
          <p className="text-3xl md:text-6xl ">Espresso Emporium</p>
        </Link>
      </div>

      <div className="navbar-end">
        {name ? (
          <>
            <button className="btn btn-ghost btn-circle text-xl md:text-2xl border border-amber-50 mr-1">
              <FontAwesomeIcon icon={faUser} />
            </button>
            <p>{name}</p>
            <button
              className="btn btn-ghost btn-circle text-xl md:text-2xl ml-2"
              title="Log out"
              onClick={() => logOut()}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
