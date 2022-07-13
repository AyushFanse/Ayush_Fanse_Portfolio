import React from "react";
import { Grid } from "@mui/material";
import Footer from "../../Components/NavIcons/NavIcon";
import Blob from "../../Components/ImageBlob/Blob";
import './intro.css'

const HomeComp = () => {
  return (
    <>
      <Grid id='Home' className='Outer HomePage cursor'>
        <div id='HomeLayout'>
          <div id='homeLeft'>
            <h1 data-aos='slide-up'>
              A<span id='Home_icons'>y</span>ush F<span id='Home_icons'>a</span>
              nse
            </h1>
            <h2 data-aos='slide-up'>
              Full <span id='Home_icons'>Stack</span> Developer
            </h2>
            <div data-aos='slide-up' id='footerOut'>
              <Footer />
            </div>
          </div>
          <div id='homeRight'>
            <Blob />
          </div>
        </div>
      </Grid>
    </>
  );
};

export default HomeComp;
