import React from 'react';
import Tilt from 'react-vanilla-tilt';
import { Grid, Box, Dialog, DialogTitle, DialogContent,Typography, DialogActions, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import MyProjects from './Data/Projects';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ mr: 7, p: 2, pl:3, fontFamily:'Montserrat', textTransform: "uppercase", fontWeight:700 }} {...other}>
      {children}
      {
          onClose 
        ? 
        ( 
          <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 10,
            top: 10,
            color: (theme) => theme.palette.grey[500],
          }}
          >
            <CloseIcon />
          </IconButton>
        ) 
      : 
        null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
      

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
    <Box id="Projects">
        <Box className="Outer">
            <Grid>
                <h1 id="Title">Projects</h1>
            </Grid>
            <hr/>
            <div id="ProjectOut"> 
                <div className="Mycontainer">
                {
                    MyProjects.map((project)=>(
                      <Box id="Cardcase" key={project.title}>
                        <Tilt className="Tilt_Card cursor" style={{ background: 'rgb(0, 0, 0,0)',width: "100%",backdropFilter: "blur(15px)" ,borderRadius: "10px", margin: "30px 0",boxShadow: '0px 0px 0px 0px'}}>
                            <div id="box"  data-aos="slide-up">
                                <div className="imgBx">                                
                                    <img src={"Media/" + project.files[0].imgpath} alt="Profile_Image" id="project_Img"/>
                                    <div><h2>{project.title}</h2></div>
                                </div>
                                <div className="content">
                                    <h2>{project.title}</h2>
                                    <h4>Tech Used</h4>
                                    <p>
                                        {project.tools}.
                                    </p>
                                    <h5 onClick={()=>{handleClickOpen(project)}} className="Read_More">Read More</h5>
                                    <a href={project.site_link} rel="noreferrer" target="_blank" id="viewlink">Visit Website</a>
                                </div>
                            </div>  
                        </Tilt> 
                        </Box>
                    ))
                }
                </div>
            </div>
        </Box> 
        
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            sx={{backdropFilter: "blur(5px)"}}
          >
            <BootstrapDialogTitle onClose={handleClose}>
              {RowData.title}
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom sx={{ p:1, fontFamily:'Montserrat'}}>
                {RowData.discription}
              </Typography>
            </DialogContent>
            <DialogActions sx={{display:'flex', justifyContent: 'space-evenly'}} >                
              { RowData.frontend ? <a href={RowData.frontend} target="_blank"  rel="noreferrer" className="DilogButton" id="viewlink">FrontEnd</a> : null }
              { RowData.backend ? <a href={RowData.backend} target="_blank"  rel="noreferrer" className="DilogButton" id="viewlink">BackEnd</a> : null }
              { RowData.site_link ? <a href={RowData.site_link} target="_blank"  rel="noreferrer" className="DilogButton" id="viewlink">Visit Website</a> : null }
            </DialogActions>
        </BootstrapDialog>
    </Box>
);
}


export default Projects;

