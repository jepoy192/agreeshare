import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Items from "../components/items";
import Vision from "../components/Vision";
import Howitworks from "../components/Howitworks";
import Latest from "../components/Latest";
import Email from "../components/Email";
import Footer from "../components/Footer";

// import AboutUs from "./LandingPage/AboutUs";
// import Header from "./LandingPage/Header";
// import Hero from "./LandingPage/Hero";
// import Mission from "./LandingPage/Mission";
// import Vision from "./LandingPage/Vision";

export default function Home() {
  return (
    <main>
  
      <Navbar />
      {/* HERO */}
      <Hero />
      {/* About us */}
      <About />
      {/* Items */}
      <Items />
      {/* Vision */}
      <Vision />
      {/* How it works */}
      <Howitworks />
      {/* Latest */}
      <Latest />
      {/* Email */}
      <Email/>

      {/* Footer */}
      <Footer/>



    </main>
  );
}
