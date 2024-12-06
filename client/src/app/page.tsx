"use-client";
// import { motion } from "framer-motion";
import AboutUs from "@/Components/Homepage/AboutUs";
import BusinessProcess from "@/Components/Homepage/BusinessProcess";
import Headers from "@/Components/Homepage/Header";
import Mainpage from "@/Components/Homepage/Mainpage";
import Partner from "@/Components/Homepage/Partner";
import Project from "@/Components/Homepage/Project";
import Services from "@/Components/Homepage/Services";
import Footer from "@/Components/Homepage/Footer";
import Testimonial from "@/Components/Homepage/Testimonial";

// import MotionWrapper from '@/Components/motion/MotionWrapper';

export default function Home() {
  return (
    <div>
      <Headers />
      <Mainpage />
      <Partner />
      <AboutUs />
      <Project />
      <Services />
      <BusinessProcess />
      {/* <Tes /> */}
      {/* <TestimonialHeader /> */}
      <Testimonial />
      <Footer />
      {/* </MotionWrapper> */}
    </div>
  );
}
