import React from "react";
import Slider from "./Slider";
import About from "./About";
import WhyUs from "./WhyUs";
import LiveTraining from "./LiveTraining";
import IntershipPlacement from "./IntershipPlacement";
import PaymentSection from "./PaymentSection";
import Contact from "./Contact";
import Courses from "./Courses";
import PDFCard from "./PdfCard";

function HomePage() {
  const files = [
    // Use the local uploaded image path you provided earlier (the system will transform path to a URL)
    {
      name: "React Promo Banner",
      url: "/mnt/data/A_promotional_digital_graphic_design_image_feature.png",
      type: "image",
    },

    // Another generated infographic (if available)
    {
      name: "Async Infographic",
      url: '/mnt/data/A_2D_digital_educational_infographic_titled_"ASYNC.png',
      type: "image",
    },

    // Example PDF (replace with your hosted PDF path)
    { name: "Async JavaScript.pdf", url: "/docs/async-js.pdf", type: "pdf" },

    // Example PPTX/DOCX (replace with your hosted paths)
    { name: "React Course.pptx", url: "/docs/react-course.pptx", type: "ppt" },
    { name: "Course Details.docx", url: "/docs/details.docx", type: "doc" },
  ];
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
      <PDFCard fileUrl="a.pdf" />

      <Contact />
    </div>
  );
}

export default HomePage;
