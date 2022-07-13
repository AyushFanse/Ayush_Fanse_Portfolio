import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container
} from "@mui/material";
import LDnav from "./LDnav";
import MDnav from "./MDnav";
import './navbar.css'

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
            <LDnav className='menu_list_lg' />
            <MDnav className='menu_list_sm' />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
