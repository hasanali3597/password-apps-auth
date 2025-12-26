import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 mx-auto h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
