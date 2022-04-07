import React from 'react';
import { Grid, Box } from '@mui/material';
import { GitHub, LinkedIn, Article, ConnectWithoutContact } from '@mui/icons-material';
import MyData from '../Data/ConnectMe_data';


function Footer(props) {
    return (
        <Box id="footerBody">
            <Grid id="footerOut">
                <ul>
                    <li>
                        <div>
                            <a className="links" rel="noreferrer" href={MyData[0].github} target="_blank">
                                <GitHub id="icons"/>
                            </a>
                        </div>
                        <h6 id="FooterName">
                            GitHub
                        </h6>
                    </li>
                    <li>
                        <div>
                            <a className="links" rel="noreferrer" href={MyData[0].linked_in} target="_blank">
                                <LinkedIn id="icons"/>
                            </a>
                        </div>
                        <h6 id="FooterName">
                            LinkedIn
                        </h6>
                    </li>
                    <li>
                        <div>
                            <a className="links" rel="noreferrer" href="#contact">
                                <ConnectWithoutContact id="icons"/>
                            </a>
                        </div>
                        <h6 id="FooterName">
                            Contact Me
                        </h6>
                    </li>
                    <li>
                        <div>
                            <a className="links" rel="noreferrer" download="Resume" href={'mailto:ayush.fanse@gmail.com'} target="_blank">
                                <Article id="icons"/>
                            </a>
                        </div>
                        <h6 id="FooterName">
                            Resume
                        </h6>
                    </li>
                </ul>
            </Grid>
        </Box>
    );
}

export default Footer;