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
                        <li className="timeline_list" data-aos="slide-right">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3 className=" Timeline_underline timeline_Date">2017 - 2021</h3>
                                    <h4 className="subheading">Graduation</h4>
                                </div>
                                <div className="timeline_body"><p className="text-muted">I have Completed My <span className="hightlight ">Bachelor Of Engineering</span> In <span className="hightlight ">Electronincs and Telecommunication</span> from <span className="hightlight Timeline_underline">Sinhgad Institute of Thechnology and Science, Narhe</span>.</p></div>
                            </div>
                        </li>
                        <br/>
                        <hr/>
                        <br/>
                        <li className="timeline_list" data-aos="slide-right">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3 className=" Timeline_underline timeline_Date">2021 - 2022</h3>
                                    <h4 className="subheading">Present</h4>
                                </div>
                                <div className="timeline_body"><p className="text-muted">I Have Completed the  <span className="hightlight Timeline_underline">Full (MERN) Stack Web Development</span> course at  <span className="hightlight">GUVI</span>. Now I am certified  <span className="hightlight">Full Stack Developer</span>, ready to explore the new phase of my career.</p></div>
                            </div>
                        </li>
                        <br/>
                        <hr/>
                        <br/>
                        <li className="timeline_list" data-aos="slide-right">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3 className=" Timeline_underline timeline_Date">More</h3>
                                    <h4 className="subheading">Keen Interest in</h4>
                                </div>
                                <div className="timeline_body"><p className="text-muted">Python, Angular, Kotlin, C++, C, Java, Android Studio.</p></div>
                            </div>
                        </li>
                    </ul>
                </Grid>
            </Box>
        </Box>
    );
}

export default About;