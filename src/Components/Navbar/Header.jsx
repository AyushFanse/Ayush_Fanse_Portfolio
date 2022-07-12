import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@mui/material";
import MDnav from ".//MDnav";

const Header = () => {
  React.useEffect(() => {
    Indicator();
  });

  window.addEventListener("DOMContentLoaded", (event) => {
    const navbarShrink = () => {
      const navbarCollapsible = document.body.querySelector("#appBar");
      let marker = document.querySelector("#marker");
      const About = document.body.querySelector(".About");
      const Skills = document.body.querySelector(".Skills");
      const Projects = document.body.querySelector(".Projects");
      const Contact = document.body.querySelector(".contact");
      const Home = document.body.querySelector(".nav_active");

      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY >= 0 && window.scrollY <= 550) {
        Default_indicator(Home);
        document.title =  ` Home | Portfolio`;
      }
      if (window.scrollY >= 3150) {
        indicator(Contact);
        document.title =  ` Contact | Portfolio`;
      }
      if (window.scrollY >= 2500 && window.scrollY <= 3150) {
        indicator(Projects);
        document.title =  ` Project | Portfolio`;
      }
      if (window.scrollY >= 1400 && window.scrollY <= 2600) {
        indicator(Skills);
        document.title =  ` Skills | Portfolio`;
      }
      if (window.scrollY >= 550 && window.scrollY <= 1500) {
        indicator(About);
        document.title =  ` About | Portfolio`;
      }

      function indicator(e) {
        marker.style.left = e.offsetLeft + "px";
        marker.style.width = e.offsetWidth + "px";
      }
      function Default_indicator(e) {
        marker.style.left = e.offsetLeft + "px";
        marker.style.width = 193 + "px";
      }

      if (window.scrollY <= 8) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };

    navbarShrink();

    document.addEventListener("scroll", navbarShrink);
  });

  const Indicator = () => {
    let marker = document.querySelector("#marker");
    let item = document.querySelectorAll(".menu_list");
    function indicator(e) {
      marker.style.left = e.offsetLeft + "px";
      marker.style.width = e.offsetWidth + "px";
    }

    item.forEach((link) => {
      link.addEventListener("click", (e) => {
        indicator(e.target);
      });
    });
  };

  return (
    <Box>
      <AppBar id='appBar'>
        <Container>
          <Toolbar>
            <p id='marker' data-aos='slide-left'></p>
            <Box sx={{ flexGrow: 1 }}>
              <a href='#HOME' className='links' rel='noreferrer'>
                <Typography
                  variant='h6'
                  component='div'
                  id='font'
                  className='nav_active'
                >
                  PORTFOLIO
                </Typography>
              </a>
            </Box>
            <Box
              sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
              className='menu_list'
            >
              <a href='#About' className='links' rel='noreferrer'>
                <Button
                  sx={{ display: "block" }}
                  id='fonts'
                  className='XLnav About'
                >
                  About
                </Button>
              </a>
              <a href='#Skills' className='links' rel='noreferrer'>
                <Button
                  sx={{ display: "block" }}
                  id='fonts'
                  className='XLnav Skills'
                >
                  Skills
                </Button>
              </a>
              <a href='#Projects' className='links' rel='noreferrer'>
                <Button
                  sx={{ display: "block" }}
                  id='fonts'
                  className='XLnav Projects'
                >
                  Projects
                </Button>
              </a>
              <a href='#contact' className='links' rel='noreferrer'>
                <Button
                  sx={{ display: "block" }}
                  id='fonts'
                  className='XLnav contact'
                >
                  Contact Me
                </Button>
              </a>
            </Box>
            <MDnav sx={{ display: { xs: "flex", md: "none", lg: "none" } }} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
