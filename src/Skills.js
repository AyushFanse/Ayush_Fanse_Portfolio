import React from 'react';
import { Grid, Box } from '@mui/material';
import My_Skills from './Data/skills.json';

function Skills() {
    return (
        <Box className="Outer" id="Skills">
            <div>
                <h1 id="Title">Skills</h1>
            </div>
            <hr/>
            <div id="skill-container">
                <Grid id="inner-skill-container">
                {
                    My_Skills.map((skill)=>(
                        <div id="contSkills" key={skill.name} data-aos="slide-up">
                            <a href={skill.link} rel="noreferrer" target="_blank">
                                <img id="skillIcons" width="100" height="100" src={skill.skill_img} alt="skill"/>
                            </a>
                            <p id="skillName">{skill.name}</p>
                        </div>
                    ))
                }
                </Grid>
            </div>
        </Box>
    );
}

export default Skills;