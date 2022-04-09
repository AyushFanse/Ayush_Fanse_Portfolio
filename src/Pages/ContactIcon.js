import React from 'react';
import {GitHub, LinkedIn, Article, WhatsApp, AlternateEmail }  from '@mui/icons-material';
import MyData from '../Data/ConnectMe_data';

function ContactIcon(props) {
    return (
        <>
            <ul>
                <li data-aos="slide-right">
                    <div>
                        <a className="links hover" rel="noreferrer" href={MyData[0].github} target="_blank">
                            <GitHub id="Contact_icons" />
                        </a>
                    </div>
                    <h6 id="FooterName">
                        GitHub
                    </h6>
                </li>
                <li data-aos="slide-right">
                    <div>
                        <a className="links hover" rel="noreferrer" href={MyData[0].linked_in} target="_blank">
                            <LinkedIn id="Contact_icons" />
                        </a>
                    </div>
                    <h6 id="FooterName">
                        LinkedIn
                    </h6>
                </li>
                <li data-aos="slide-right">
                    <div>
                        <a className="links hover" rel="noreferrer" download="download" href={MyData[0].resume} target="_blank">
                            <Article id="Contact_icons" />
                        </a>
                    </div>
                    <h6 id="FooterName">
                        Resume
                    </h6>
                </li>
                <li data-aos="slide-right">
                    <div>
                        <a className="links hover" rel="noreferrer" download="download" href={MyData[0].whatsapp} target="_blank">
                            <WhatsApp id="Contact_icons" />
                        </a>
                    </div>
                    <h6 id="FooterName">
                        WhatsApp
                    </h6>
                </li>
                <li data-aos="slide-right" id="desktop">
                    <div>
                        <a className="links hover" rel="noreferrer" download="download" href={MyData[0].email} target="_blank">
                            <AlternateEmail id="Contact_icons" />
                        </a>
                    </div>
                    <h6 id="FooterName">
                        Email
                    </h6>
                </li>
            </ul>
        </>
    );
}

export default ContactIcon;