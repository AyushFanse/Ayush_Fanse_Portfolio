import React from "react";
import Intro from "../Introduction/Intro";
import Header from "../../Components/Navbar/Header";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Copy from "../../Components/Copyright/Copyright";
import Contact from "../../Pages/Contact/Contact";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box id='HomeOut'>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Copy />
    </Box>
  );
};

export default Home;
