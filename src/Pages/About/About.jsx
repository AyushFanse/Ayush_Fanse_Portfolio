import React from "react";
import { Grid, Box } from "@mui/material";
import './about.css';

const About = () => {
  return (
    <Box className='Outer' id='About'>
      <Grid>
        <h1 id='Title'>About</h1>
      </Grid>
      <hr />
      <Box id='TimeLine' className='container'>
        <Grid id='TimeLine_Out'>
          <ul className='timeline'>
            <li className='timeline_list cursor' data-aos='slide-right'>
              <div className='timeline-panel'>
                <div className='timeline-heading flex'>
                  <h4 className='subheading Timeline_underline'>Course</h4>
                  <h3 className='timeline_Date'>
                    Aug, 2021 - May, 2022
                  </h3>
                </div>
                <div className='timeline_body'>
                  <p className='text-muted'>
                    I have completed the{" "}
                    <span className='highlight Timeline_underline'>
                      Full Stack Web Development (MERN)
                    </span>
                    , course at{" "}
                    <span className='highlight Timeline_underline'>
                      Zen classes, GUVI geek networks, IITM Research Park
                    </span>
                    . Now I am certified{" "}
                    <span className='highlight'>Full Stack Developer</span>,
                    ready to explore the new phase of my career.
                  </p>
                </div>
              </div>
            </li>
            <br />
            <hr />
            <br />
            <li className='timeline_list cursor' data-aos='slide-right'>
              <div className='timeline-panel'>
                <div className='timeline-heading flex'>
                  <h4 className='subheading Timeline_underline'>Graduation</h4>
                  <h3 className='timeline_Date cursor'>
                    2017 - 2021
                  </h3>
                </div>
                <div className='timeline_body'>
                  <p className='text-muted'>
                    I have completed{" "}
                    <span className='highlight Timeline_underline'>Bachelor Of Engineering</span>{" "}
                    in{" "}
                    <span className='highlight '>
                      Electronics and Telecommunication
                    </span>{" "}
                    under{" "}
                    <span className='highlight Timeline_underline'>
                      Savitribai Phule Pune University
                    </span>
                    .
                  </p>
                </div>
              </div>
            </li>
            <br />
            <hr />
            <br />
            <li className='timeline_list cursor' data-aos='slide-right'>
              <div className='timeline-panel'>
                <h3 className=' Timeline_underline subheading'>
                  Skills
                </h3>
                <div className='timeline-heading'>
                  <h4 className='timeline_Date Timeline_underline'>Languages</h4>
                </div>
                <div className='timeline_body'>
                  <p className='text-muted'>
                    HTML, CSS, JavaScript, Python, C, C++, Kotlin, Java, etc.
                  </p>
                </div>
                <div className='timeline-heading'>
                  <h4 className='timeline_Date Timeline_underline'>Freamworks</h4>
                </div>
                <div className='timeline_body'>
                  <p className='text-muted'>
                    ReactJS, NodeJS, ExpressJS, Bootstrap, Material Design Bootstrap, Material Ui, etc.
                  </p>
                </div>
                <div className='timeline-heading'>
                  <h4 className='timeline_Date Timeline_underline'>Database</h4>
                </div>
                <div className='timeline_body'>
                  <p className='text-muted'>
                    MongoDB, MySql, etc.
                  </p>
                </div>
                <div className='timeline-heading'>
                  <h4 className='timeline_Date Timeline_underline'>Tools</h4>
                </div>
                <div className='timeline_body'>
                  <p className='text-muted'>
                    Visual Studio Code, Postman, AWS, Adobe Photoshop, Canva, etc.
                  </p>
                </div>
                <div className='timeline-heading'>
                  <h4 className='timeline_Date Timeline_underline'>Other</h4>
                </div>
                <div className='timeline_body'>
                  <p className='text-muted'>
                    OOP, Microsoft Office, Matlab, Android Studio, Google Sheets, Atmel Studio, etc.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
