import * as React from "react";
import { Stack, Alert, Snackbar, Slide } from "@mui/material";
import PropTypes from "prop-types";

function Transition(props) {
  return <Slide {...props} direction='left' />;
}

const Message = ({ msg }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  setTimeout(() => {
    setOpen(true);
  });

  return (
    <>
      {msg ? (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            TransitionComponent={Transition}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={handleClose}
          >
            <Alert
              elevation={6}
              onClose={handleClose}
              severity='success'
              sx={{ width: "100%" }}
            >
              Thnak You {msg}! I’ll contact you soon.
            </Alert>
          </Snackbar>
        </Stack>
      ) : null}
    </>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Message;
