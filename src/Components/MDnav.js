import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Menu,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MDnav = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box>
        <Tooltip title='Open settings'>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, display: { xs: "flex", md: "none", lg: "none" } }}>
            <MenuIcon sx={{ display: { color: "white" } }} />
          </IconButton>
        </Tooltip>
        <Menu
          id='menu-appbar'
          className='menu_list'
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem className='Nav_Item About' onClick={handleCloseUserMenu}>
            <a href='#About' className='links' rel='noreferrer'>
              <Typography id='Nav_links' textAlign='center'>
                About
              </Typography>
            </a>
          </MenuItem>
          <MenuItem className='Nav_Item Skills' onClick={handleCloseUserMenu}>
            <a href='#Skills' className='links' rel='noreferrer'>
              <Typography id='Nav_links' textAlign='center'>
                Skills
              </Typography>
            </a>
          </MenuItem>
          <MenuItem className='Nav_Item Projects' onClick={handleCloseUserMenu}>
            <a href='#Projects' className='links' rel='noreferrer'>
              <Typography id='Nav_links' textAlign='center'>
                Projects
              </Typography>
            </a>
          </MenuItem>
          <MenuItem className='Nav_Item contact' onClick={handleCloseUserMenu}>
            <a href='#contact' className='links' rel='noreferrer'>
              <Typography id='Nav_links' textAlign='center'>
                Contact Me
              </Typography>
            </a>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default MDnav;
