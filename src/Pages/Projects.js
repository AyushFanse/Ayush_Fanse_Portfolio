import React from "react";
import Tilt from "react-vanilla-tilt";
import {
  Grid,
  Box,
  Dialog,
  DialogContent,
  Typography,
  DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MyProjects from "../Data/Projects";
import BootstrapDialogTitle from "../Components/BootstrapDialogTitle";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function Projects(props) {
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

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        sx={{ backdropFilter: "blur(5px)" }}
      >
        <BootstrapDialogTitle onClose={handleClose}>
          {RowData.title}
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "0.7rem", lineHeight: 0.7 }}>
            {RowData.date}
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom sx={{ p: 1, fontFamily: "Montserrat" }}>
            {RowData.discription}
          </Typography>
          {RowData.skills ? (
            <div>
              <strong>Skills</strong>
              <Typography gutterBottom sx={{ p: 1, fontFamily: "Montserrat" }}>
                {RowData.skills}
              </Typography>
            </div>
          ) : null}
          {RowData.features ? (
            <div>
              <strong>Features</strong>
              <Typography gutterBottom sx={{ p: 1, fontFamily: "Montserrat" }}>
                {RowData.features}
              </Typography>
            </div>
          ) : null}
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {RowData.frontend ? (
            <a
              href={RowData.frontend}
              target='_blank'
              rel='noreferrer'
              className='DilogButton'
              id='viewlinkCard'
            >
              FrontEnd
            </a>
          ) : null}
          {RowData.admin ? (
            <a
              href={RowData.admin}
              target='_blank'
              rel='noreferrer'
              className='DilogButton'
              id='viewlinkCard'
            >
              AdminPage
            </a>
          ) : null}
          {RowData.backend ? (
            <a
              href={RowData.backend}
              target='_blank'
              rel='noreferrer'
              className='DilogButton'
              id='viewlinkCard'
            >
              BackEnd
            </a>
          ) : null}
          {RowData.site_link ? (
            <a
              href={RowData.site_link}
              target='_blank'
              rel='noreferrer'
              className='DilogButton'
              id='viewlinkCard'
            >
              Visit Website
            </a>
          ) : null}
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
}

export default Projects;
