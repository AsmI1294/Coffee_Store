import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Restriction from "../components/Restriction";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);

  if (!user) {
    return <Restriction></Restriction>;
  }

  return children;
};

export default PrivateRoute;
