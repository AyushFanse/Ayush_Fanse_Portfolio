import React from 'react';
import { GitHub, LinkedIn, Article, ConnectWithoutContact } from '@mui/icons-material';
import MyData from '../Data/ConnectMe_data';


function Footer(props) {
    return (
            <ul>
                <li data-aos="slide-up">
                    <div>
                        <a className="links" rel="noreferrer" href={MyData[0].github} target="_blank">
                            <GitHub id="icons"/>
                        </a>
                    </div>
                    <h6 id="FooterName">
                        GitHub
                    </h6>
                </li>
                <li data-aos="slide-up">
                    <div>
                        <a className="links" rel="noreferrer" href={MyData[0].linked_in} target="_blank">
                            <LinkedIn id="icons"/>
                        </a>
                    </div>
                    <h6 id="FooterName">
                        LinkedIn
                    </h6>
                </li>
                <li data-aos="slide-up">
                    <div>
                        <a className="links" rel="noreferrer" href="#contact">
                            <ConnectWithoutContact id="icons"/>
                        </a>
                    </div>
                    <h6 id="FooterName">
                        Contact Me
                    </h6>
                </li>
                <li data-aos="slide-up">
                    <div>
                        <a className="links" rel="noreferrer" download="Resume" href={MyData[0].resume} target="_blank">
                            <Article id="icons"/>
                        </a>
                    </div>
                    <h6 id="FooterName">
                        Resume
                    </h6>
                </li>
            </ul>
        );
}

export default Footer;