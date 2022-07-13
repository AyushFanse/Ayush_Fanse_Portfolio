import React from 'react';
import {
    Box,
    Button,
} from "@mui/material";

function LDnav() {
    return (
        <>
            <Box sx={{ flexGrow: 0 , display: { xs: "none", md: "flex" } }}>
                <a href='#About' className='links' rel='noreferrer'>
                    <Button
                        sx={{ display: "block" }}
                        id='fonts'
                        className='XLnav About'
                    >
                        About
                    </Button>
                </a>
                <a href='#Skills' className='links' rel='noreferrer'>
                    <Button
                        sx={{ display: "block" }}
                        id='fonts'
                        className='XLnav Skills'
                    >
                        Skills
                    </Button>
                </a>
                <a href='#Projects' className='links' rel='noreferrer'>
                    <Button
                        sx={{ display: "block" }}
                        id='fonts'
                        className='XLnav Projects'
                    >
                        Projects
                    </Button>
                </a>
                <a href='#contact' className='links' rel='noreferrer'>
                    <Button
                        sx={{ display: "block" }}
                        id='fonts'
                        className='XLnav contact'
                    >
                        Contact Me
                    </Button>
                </a>
            </Box>
        </>
    );
}

export default LDnav;