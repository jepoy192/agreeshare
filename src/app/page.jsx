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




export default function Home() {
  return (
    <main>
    
      {/* Navbar */}
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
