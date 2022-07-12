import React from "react";
import Tilt from "react-vanilla-tilt";
import { Grid, Box } from "@mui/material";
import MyProjects from "../../Data/Projects";
import DilogBox from "../../Components/DilogBox/DilogBox";

const Projects = () => {
  const [open, setOpen] = React.useState(false);
  const [RowData, setRowData] = React.useState([]);

  const handleClickOpen = (row_data) => {
    setRowData(row_data);
    setOpen(true);
  };
  const handleClose = () => {
    setRowData([]);
    setOpen(false);
  };

  return (
    <>
      <Box id='Projects'>
        <Box className='Outer'>
          <Grid>
            <h1 id='Title'>Projects</h1>
          </Grid>
          <hr />
          <div id='ProjectOut'>
            <div className='Mycontainer'>
              {MyProjects.map((project) => (
                <Box id='Cardcase' key={project.title}>
                  <Tilt
                    className='Tilt_Card cursor'
                    style={{
                      background: "rgb(0, 0, 0,0)",
                      width: "100%",
                      backdropFilter: "blur(15px)",
                      borderRadius: "10px",
                      margin: "50px 0",
                      boxShadow: "0px 0px 0px 0px",
                    }}
                  >
                    <div id='box' data-aos='slide-up'>
                      <div className='imgBx'>
                        <img
                          src={project.files[0].imgpath}
                          alt='Profile_Image'
                          id='project_Img'
                        />
                        <div>
                          <h2>{project.title}</h2>
                        </div>
                      </div>
                      <div className='content'>
                        <h2>{project.title}</h2>
                        <h4>Tech Used</h4>
                        <p>{project.skills}</p>
                        <h5
                          onClick={() => {
                            handleClickOpen(project);
                          }}
                          className='Read_More'
                        >
                          Read More
                        </h5>
                        <a
                          href={project.site_link}
                          rel='noreferrer'
                          target='_blank'
                          id='viewlink'
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </Tilt>
                </Box>
              ))}
            </div>
          </div>
        </Box>
      </Box>
      <DilogBox RowData={RowData} handleClose={handleClose} open={open} />
    </>
  );
};

export default Projects;
