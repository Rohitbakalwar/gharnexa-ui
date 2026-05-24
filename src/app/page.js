import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Experts from "./components/Experts";
import Marketplace from "./components/Marketplace";
import WorkProcess from "./components/WorkProcess";
import BottomBar from "./components/BottomBar";

const page = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <Features />
        <Experts />
        <Marketplace />
        <WorkProcess />
        <BottomBar/>
      </main>
    </div>
  );
};

export default page;
