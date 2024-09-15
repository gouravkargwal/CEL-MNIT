import React from "react";
import AboutHome from "./About/AboutHome";
import Companies from "./Companies/Companies";
import CountHome from "./Counts/CountHome";
import Courses from "./Courses/Courses";
import Skills from "./Skills/Skills";
import Testimonials from "./Testimonials/Testimonials";
import JobPosting from "./JobPosting/JobPosting";
import LearnMore from "./LearnMore/LearnMore";
import { useSpring, animated } from "react-spring";
import DailyQuestion from "./DailyQuestion/DailyQuestion";

const Home = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });
  return (
    <animated.div style={props}>
      <LearnMore />
      <DailyQuestion />
      <JobPosting />
      <AboutHome />
      <CountHome />
      <Skills />
      <Testimonials />
      <Companies />
      <Courses />
    </animated.div>
  );
};

export default Home;
