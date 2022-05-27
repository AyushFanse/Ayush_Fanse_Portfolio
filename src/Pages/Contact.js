import React from "react";
import { Grid, Box } from "@mui/material";
import ContactForm from "./Contact__.js";
import ContactIcon from "./ContactIcon";

const Contact = () => {
  return (
    <Box id='contact'>
      <Box className='Outer'>
        <div className='Contact'>
          <Grid>
            <h1 id='Title'>Contact me</h1>
          </Grid>
          <hr />
          <Grid id='ContactData'>
            <Grid id='Contact_Footer'>
              <Box id='Contact_footerBody' className='cursor'>
                <Grid id='Contact_Info'>
                  <ContactForm />
                </Grid>
                <Grid id='Contact_footerOut'>
                  <ContactIcon />
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
};

export default Contact;
