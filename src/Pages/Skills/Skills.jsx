import React from "react";
import { Grid, Box } from "@mui/material";
import My_Skills from "../../Data/Skills";
import './skills.css';

const Skills = () => {
  return (
    <Box className='Outer' id='Skills'>
      <div>
        <h1 id='Title'>Skills</h1>
      </div>
      <hr />
      <div id='skill-container'>
        <Grid id='inner-skill-container'>
          {My_Skills.map((skill) => (
            <div id='contSkills' key={skill.name} data-aos='slide-up'>
              <a href={skill.link} rel='noreferrer' target='_blank'>
                  <img
                    id='skillIcons'
                    style={{width:'100px', height:'100px'}}
                    src={skill.skill_img}
                    alt='skill'
                  />
              </a>
              <a
                id='skillName'
                href={skill.link}
                rel='noreferrer'
                target='_blank'
              >
                {skill.name}
              </a>
            </div>
          ))}
        </Grid>
      </div>
    </Box>
  );
}

export default Skills;
