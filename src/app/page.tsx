import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Project from "@/components/Project/Project";
import Skills from "@/components/Skills/Skills";
import Testimonial from "@/components/Testimonial/Testimonial";
import WorkDetail from "@/components/WorkDetail/WorkDetail";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <WorkDetail/>
    <About/>
    <Testimonial/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  );
}
