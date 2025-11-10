import React from "react";
import Slider from "../Slider";
import About from "../About";
import WhyUs from "../Courses";
import LiveTraining from "../LiveTraining";
import IntershipPlacement from "../IntershipPlacement";
import PaymentSection from "../PaymentSection";
import Contact from "../Contact";
import Courses from "../Courses";

function HomePage() {
  return (
    <div>
      <Slider />
      <WhyUs />
      <Courses />
      <LiveTraining />
      <IntershipPlacement />
      <PaymentSection />
      <About />
      {/* <Feedback /> */}
      <Contact />
    </div>
  );
}

export default HomePage;
