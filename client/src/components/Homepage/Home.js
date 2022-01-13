import React from "react";
import AboutHome from "./About/AboutHome";
import Companies from "./Companies/Companies";
import CountHome from "./Counts/CountHome";
import Courses from "./Courses/Courses";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Testimonials from "./Testimonials/Testimonials";
import JobPosting from "./JobPosting/JobPosting";
import LearnMore from "./LearnMore/LearnMore";
import DailyQuestion from "./DailyQuestion/DailyQuestion";

const Home = () => {
  return (
    <>
      <LearnMore />
      <DailyQuestion />
      <JobPosting />
      <AboutHome />
      <CountHome />
      <Skills />
      <Testimonials />
      <Companies />
      <Courses />
      <Footer />
    </>
  );
};

export default Home;
