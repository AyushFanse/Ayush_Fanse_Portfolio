import React from "react";
import { Grid, Box } from "@mui/material";
import MyProjects from "../../Data/Projects";
import DialogBox from "../../Components/DialogBox/DialogBox";
import './project.css';

const Projects = () => {
  const [open, setOpen] = React.useState(false);
  const [RowData, setRowData] = React.useState('');

  const handleClickOpen = (row_data) => {
    setRowData(row_data);
    setOpen(true);
  };
  const handleClose = () => {
    setRowData('');
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
          <div className='ProjectOut flex'>
            {MyProjects.map((project) => (
              <div className="CardOut" key={project.title}>
                <div className="Card">
                  <img
                    src={project.files[0].imgpath}
                    alt=""
                  />
                  <div className="CardData flex">
                    <h1>{project.title}</h1>
                    <h6>{project.date}</h6>
                    <div className="Navigation flex">
                      <h3
                        className='Timeline_underline'
                        onClick={() => {
                          handleClickOpen(project);
                        }}>Read More</h3>
                      <a
                        title='Website'
                        href={project.site_link}
                        rel='noreferrer'
                        target='_blank'
                        className="material-symbols-rounded" aria-label="Website">
                        ads_click
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Box>
      <DialogBox RowData={RowData} handleClose={handleClose} open={open} />
    </>
  );
};

export default Projects;
