import React from 'react';
import Footer from './Footer';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import { Grid, Box } from '@mui/material';

function Home() {
return (
    <Box id="HomeOut">
        <Header/>
        <Grid id="Home" className="Outer HomePage">
            <div id="HomeLayout">           
                <div id="homeLeft">
                    <h1 data-aos="slide-up" >A<span id="Home_icons">y</span>ush F<span id="Home_icons">a</span>nse</h1>
                    <h2 data-aos="slide-up" >Full <span id="Home_icons">Stack</span> Developer</h2>
                    <div data-aos="slide-up" ><Footer/></div>
                </div>
                <div id="homeRight">
                    <div className="main" data-aos="slide-left" >
                        <div className="blob_new"></div>
                    </div>
                </div> 
            </div>
        </Grid> 
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </Box>
);
}

export default Home;

