import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div
        style={{
          backgroundImage:
            "url('https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/more/1.png')",
        }}
      >
        <Outlet></Outlet>
      </div>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://coffee-image-bucket-demo.s3.us-east-2.amazonaws.com/images/more/13.jpg')",
        }}
      >
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
