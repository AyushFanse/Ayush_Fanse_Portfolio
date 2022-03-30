import React from 'react';
import { Grid, Box } from '@mui/material';

function About() {
    return (
        <Box className="Outer" id="About">
            <Grid>
                <h1 id="Title">About</h1>
            </Grid>
            <hr/>
            <Box id="TimeLine">
                <Grid id="TimeLine_Out">
                    <ul className="timeline">
                        <li className="timeline_list cursor" data-aos="slide-right">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3 className=" Timeline_underline timeline_Date cursor">2017 - 2021</h3>
                                    <h4 className="subheading">Graduation</h4>
                                </div>
                                <div className="timeline_body"><p className="text-muted">I have completed my <span className="hightlight ">Bachelor Of Engineering</span> In <span className="hightlight ">Electronics and Telecommunication</span> under <span className="hightlight Timeline_underline">Savitribai Phule Pune University</span>.</p></div>
                            </div>
                        </li>
                        <br/>
                        <hr/>
                        <br/>
                        <li className="timeline_list cursor" data-aos="slide-right">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3 className=" Timeline_underline timeline_Date">2021 - 2022</h3>
                                    <h4 className="subheading">Present</h4>
                                </div>
                                <div className="timeline_body"><p className="text-muted">I have completed the  <span className="hightlight Timeline_underline">Full Stack (MERN) Web Development</span>, course at  <span className="hightlight">GUVI (IIT Madras)</span>. Now I am certified  <span className="hightlight">Full Stack Developer</span>, ready to explore the new phase of my career.</p></div>
                            </div>
                        </li>
                        <br/>
                        <hr/>
                        <br/>
                        <li className="timeline_list cursor" data-aos="slide-right">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3 className=" Timeline_underline timeline_Date">More tech</h3>
                                    <h4 className="subheading">Known and learning tech</h4>
                                </div>
                                <div className="timeline_body"><p className="text-muted">Amazon Web Services, Redux, Python, Angular, Kotlin, C++, C, Java, Matlab.</p></div>
                            </div>
                        </li>
                        <br/>
                        <hr/>
                        <br/>
                        <li className="timeline_list cursor" data-aos="slide-right">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3 className=" Timeline_underline timeline_Date">Softwares and tools</h3>
                                    <h4 className="subheading">Used softwares and tools</h4>
                                </div>
                                <div className="timeline_body"><p className="text-muted">Visual Studio Code, Postman, Android Studio, Google Sheets, Microsoft Office.</p></div>
                            </div>
                        </li>
                    </ul>
                </Grid>
            </Box>
        </Box>
    );
}

export default About;
