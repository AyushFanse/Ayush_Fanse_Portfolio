import React from 'react';
import { Grid, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

function Footer(props) {
    return (
        <Box id="footerBody">
            <Grid id="footerOut">
                <ul>
                    <li>
                        <div>
                            <a className="links" rel="noreferrer" href="https://github.com/AyushFanse" target="_blank">
                                <GitHubIcon id="icons"/>
                            </a>
                        </div>
                        <h6 id="FooterName">
                            GitHub
                        </h6>
                    </li>
                    <li>
                        <div>
                            <a className="links" rel="noreferrer" href="https://www.linkedin.com/in/ayush-fanse-4987a21b3" target="_blank">
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
                            <a className="links" rel="noreferrer" download="download" href="https://drive.google.com/file/d/1C25JOP3SEw2kRbsJ9XKBWtyAZiuqpBHL/view?usp=sharing" target="_blank">
                                <ArticleIcon id="icons"/>
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