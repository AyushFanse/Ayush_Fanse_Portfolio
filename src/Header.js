import React from 'react';
import {AppBar,Box,Toolbar,IconButton,Typography,Menu,Container,Button,Tooltip,MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
  
const [anchorElUser, setAnchorElUser] = React.useState(null);

React.useEffect(()=>{
  Indicator();
})


window.addEventListener('DOMContentLoaded', event => {

  const navbarShrink = ()=>{
      const navbarCollapsible = document.body.querySelector('#appBar');
      let marker =  document.querySelector('#marker');
      const About = document.body.querySelector('.About');
      const Skills = document.body.querySelector('.Skills');
      const Projects = document.body.querySelector('.Projects');
      const Contact = document.body.querySelector('.contact');  
      const Home = document.body.querySelector('.nav_active');
      
      if (!navbarCollapsible) {
          return;
      }
      if(window.scrollY>=0 && window.scrollY<=550 ){
        Default_indicator(Home);
      }
      if(window.scrollY>=3300){
        indicator(Contact);
      }
      if(window.scrollY>=2300 && window.scrollY<=3200){
        indicator(Projects);
      }
      if(window.scrollY>=1200 && window.scrollY<=2200  ){
        indicator(Skills);
      }
      if(window.scrollY>=550 && window.scrollY<=1300 ){
        indicator(About);
      }
      
      function indicator(e){
        marker.style.left = e.offsetLeft+"px";
        marker.style.width = e.offsetWidth+"px";
      }
      function Default_indicator(e){
        marker.style.left = e.offsetLeft+"px";
        marker.style.width = 193+"px";
      }

      if (window.scrollY <=8) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }  
  };

  navbarShrink();

  document.addEventListener('scroll', navbarShrink);
});

const Indicator = ()=>{
    
  let marker =  document.querySelector('#marker');
  let item =  document.querySelectorAll('.menu_list');
  function indicator(e){
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
  }

  item.forEach((link)=>{
    link.addEventListener('click', (e)=>{
      indicator(e.target);
    })
  })
}

const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};

return (
    <Box>
    <AppBar id="appBar">
    <Container>
      <Toolbar>         
      <p id="marker" data-aos="slide-left" ></p> 
        <Box sx={{ flexGrow: 1 }}> 
          <a href="#HOME" className="links" rel="noreferrer">
            <Typography
              variant="h6"
              component="div"
              id="font"
              className="nav_active"    
              data-aos="slide-left"            
            >
            PROTFOLIO
            </Typography>
          </a>
        </Box>
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} className="menu_list">                    
                 
            <a href="#About" className="links" rel="noreferrer" >
              <Button
              onClick={handleCloseUserMenu}
              sx={{ display: 'block', }}
              id="fonts"
               data-aos="slide-left" 
              className=" About"
              >
                  About
              </Button>
            </a>
            <a href="#Skills" className="links" rel="noreferrer">
              <Button
              onClick={handleCloseUserMenu}
              sx={{ display: 'block', }}
              id="fonts"
               data-aos="slide-left" 
              className=" Skills"
              >
                Skills
              </Button>
            </a>
            <a href="#Projects" className="links" rel="noreferrer">
              <Button
              onClick={handleCloseUserMenu}
              sx={{ display: 'block', }}
              id="fonts"
               data-aos="slide-left" 
              className=" Projects"
              >
                Projects
              </Button>
            </a>
            <a href="#contact" className="links" rel="noreferrer">
              <Button
              onClick={handleCloseUserMenu}
              sx={{ display: 'block', }}
              id="fonts"
               data-aos="slide-left" 
              className=" contact"
              >
                Contact Me
              </Button>
            </a>
            </Box>  
        <Box >
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <MenuIcon  sx={{ display: { xs: 'flex', md: 'none' } }}/>
            </IconButton>
          </Tooltip>
          <Menu
            id="menu-appbar"
            className="menu_list"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >  
            <MenuItem className="Nav_Item About" onClick={handleCloseUserMenu}>
              <a href="#About" className="links" rel="noreferrer"><Typography id="Nav_links" textAlign="center">About</Typography></a> 
            </MenuItem>
            <MenuItem className="Nav_Item Skills" onClick={handleCloseUserMenu}>
              <a href="#Skills" className="links" rel="noreferrer"><Typography id="Nav_links" textAlign="center">Skills</Typography></a>
            </MenuItem>
            <MenuItem className="Nav_Item Projects" onClick={handleCloseUserMenu}>
              <a href="#Projects" className="links" rel="noreferrer"><Typography id="Nav_links" textAlign="center">Projects</Typography></a>
            </MenuItem>
            <MenuItem className="Nav_Item contact" onClick={handleCloseUserMenu}>
              <a href="#contact" className="links" rel="noreferrer"><Typography id="Nav_links" textAlign="center">Contact Me</Typography></a>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
    </Box>
)
}

export default Header;