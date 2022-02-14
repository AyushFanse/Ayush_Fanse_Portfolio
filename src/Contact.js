import React from 'react';
import { Grid, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import MyData from './Data/ConnectMe_data';

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
                        {
                            MyData.map(( mydata )=>(
                                <Box id="Contact_footerBody" className="cursor">
                                    <Grid id="Contact_Info">
                                        <p className="contactDetails" id="FooterName" data-aos="slide-up"><span>Email :</span> &nbsp; <span>{mydata.email}</span></p>
                                        <p className="contactDetails" id="FooterName" data-aos="slide-up"> <span>Contact No. :</span>&nbsp;<span>{mydata.number}</span></p>
                                        <p className="contactDetails" id="FooterName" data-aos="slide-up"> <span>Address :</span>&nbsp;<span> {mydata.address}</span></p>
                                    </Grid>
                                    <Grid id="Contact_footerOut">
                                        <ul>
                                            <li data-aos="slide-right">
                                                <div>
                                                    <a className="links hover" rel="noreferrer" href={mydata.github} target="_blank">
                                                        <GitHubIcon id="Contact_icons" />
                                                    </a>
                                                </div>
                                                <h6 id="FooterName">
                                                    GitHub
                                                </h6>
                                            </li>
                                            <li data-aos="slide-right">
                                                <div>
                                                    <a className="links hover" rel="noreferrer" href={mydata.linked_in} target="_blank">
                                                        <LinkedInIcon id="Contact_icons" />
                                                    </a>
                                                </div>
                                                <h6 id="FooterName">
                                                    LinkedIn
                                                </h6>
                                            </li>
                                            <li data-aos="slide-right">
                                                <div>
                                                    <a className="links hover" rel="noreferrer" download="download" href={mydata.resume} target="_blank">
                                                        <ArticleIcon id="Contact_icons" />
                                                    </a>
                                                </div>
                                                <h6 id="FooterName">
                                                    Resume
                                                </h6>
                                            </li>
                                        </ul>
                                    </Grid>
                                </Box>
                            ))
                        }
                    </Grid>
                </Grid>
            </div>
        </Box>
    </Box>
    );
}

export default Contact;
