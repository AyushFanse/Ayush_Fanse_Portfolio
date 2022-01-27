import React from 'react';
import { Grid, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';

function Contact() {
    return (
    <Box id="contact" >
        <Box className="Outer">
            <div className="Contact">
                <Grid>
                    <h1 id="Title">Contact me</h1>
                </Grid>
                <hr/>
                <Grid  id="ContactData">
                    <Grid id="Contact_Footer">
                        <Box id="Contact_footerBody">
                            <Grid id="Contact_Info">
                                <p className="contactDetails" id="FooterName" data-aos="slide-left"><span>Email :</span> &nbsp; <span> ayush.fanse@gmail.com</span></p>
                                <p className="contactDetails" id="FooterName" data-aos="slide-left"> <span>Contact No. :</span>&nbsp;<span> +91-8483868279</span></p>
                                <p className="contactDetails" id="FooterName" data-aos="slide-left"> <span>Address :</span>&nbsp;<span> 3031, Fanse Building, near Somgiri Matth, Bhoi Lane, Yeola, Dist: Nashik. </span></p>
                                <p className="contactDetails" id="FooterName" data-aos="slide-left"> <span>Insta Id :</span>&nbsp;<span> __.prince_2.__ </span></p>
                            </Grid>
                            <Grid id="Contact_footerOut">
                            <ul>
                                <li>
                                    <div data-aos="slide-right">
                                        <a className="links hover" rel="noreferrer" href="https://github.com/AyushFanse" target="_blank">
                                            <GitHubIcon id="Contact_icons"/>
                                        </a>
                                    </div>
                                    <h6 id="FooterName">
                                        GitHub
                                    </h6>
                                </li>
                                <li>
                                    <div data-aos="slide-right">
                                        <a className="links hover" rel="noreferrer" href="https://www.linkedin.com/in/ayush-fanse-4987a21b3" target="_blank">
                                            <LinkedInIcon id="Contact_icons"/>
                                        </a>
                                    </div>
                                    <h6 id="FooterName">
                                        LinkedIn
                                    </h6>
                                </li>
                                <li>
                                    <div data-aos="slide-right">
                                        <a className="links hover" rel="noreferrer" download="download" href="https://drive.google.com/file/d/1C25JOP3SEw2kRbsJ9XKBWtyAZiuqpBHL/view?usp=sharing" target="_blank">
                                            <ArticleIcon id="Contact_icons"/>
                                        </a>
                                    </div>
                                    <h6 id="FooterName">
                                        Resume
                                    </h6>
                                </li>
                            </ul>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </Box>
    </Box>
    );
}

export default Contact;