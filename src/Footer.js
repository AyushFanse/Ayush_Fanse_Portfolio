import React from 'react';
import { Grid, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MyData from './Data/ConnectMe_data';


function Footer(props) {
    return (
        <Box id="footerBody">
            {
                MyData.map((mydata)=>(
                    <Grid id="footerOut">
                        <ul>
                            <li>
                                <div>
                                    <a className="links" rel="noreferrer" href={mydata.github} target="_blank">
                                        <GitHubIcon id="icons"/>
                                    </a>
                                </div>
                                <h6 id="FooterName">
                                    GitHub
                                </h6>
                            </li>
                            <li>
                                <div>
                                    <a className="links" rel="noreferrer" href={mydata.linked_in} target="_blank">
                                        <LinkedInIcon id="icons"/>
                                    </a>
                                </div>
                                <h6 id="FooterName">
                                    LinkedIn
                                </h6>
                            </li>
                            <li>
                                <div>
                                    <a className="links" rel="noreferrer" href="#contact">
                                        <ConnectWithoutContactIcon id="icons"/>
                                    </a>
                                </div>
                                <h6 id="FooterName">
                                    Contact Me
                                </h6>
                            </li>
                            <li>
                                <div>
                                    <a className="links" rel="noreferrer" download="download" href={mydata.resume} target="_blank">
                                        <ArticleIcon id="icons"/>
                                    </a>
                                </div>
                                <h6 id="FooterName">
                                    Resume
                                </h6>
                            </li>
                        </ul>
                    </Grid>
                ))
            }
        </Box>
    );
}

export default Footer;
