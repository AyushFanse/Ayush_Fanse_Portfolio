import React from "react";
import HomeComp from "./Pages/HomeComp";
import Header from "./Pages/Header";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Copy from "./Pages/Copy";
import Contact from "./Pages/Contact";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box id='HomeOut'>
      <Header />
      <HomeComp />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Copy />
    </Box>
  );
};

export default Home;
