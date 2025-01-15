"use-client";
import AboutUs from "@/components/Homepage/AboutUs";
import BusinessProcess from "@/components/Homepage/BusinessProcess";
import Headers from "@/components/Homepage/Header";
import Mainpage from "@/components/Homepage/Mainpage";
import Partner from "@/components/Homepage/Partner";
import Project from "@/components/Homepage/Project";
import Services from "@/components/Homepage/Services";
import Footer from "@/components/Homepage/Footer";
import Testimonial from "@/components/Homepage/Testimonial";


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
      <Testimonial />
      <Footer />
    </div>
  );
}
