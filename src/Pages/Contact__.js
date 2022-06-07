import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import emailjs from "emailjs-com";
import Message from "./Message";
import Error from "./Error";

const Contact__ = () => {
  const contactForm = useRef();
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [wait, setWait] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      contactForm.current.name.value &&
      contactForm.current.email.value &&
      contactForm.current.subject.value &&
      contactForm.current.message.value
    ) {
      emailjs
        .sendForm(
          "service_21upo2n",
          "template_f9gconr",
          contactForm.current,
          "iv9_I_A-Kmup-VXS3"
        )
        .then(
          (result) => {
            if (result.status === 200) {
              setWait(true);
              setMessage(contactForm.current.name.value);
              setTimeout(() => {
                e.target.reset();
              }, 1000);
              setTimeout(() => {
                setMessage("");
              }, 6000);
              setTimeout(() => {
                setWait(false);
              }, 1000);
            }
          },
          (error) => {
            alert("There is some error, Try after some time...");
          }
        );
    } else {
      setError(true);
      setTimeout(() => {
        setMessage(false);
      }, 1000);
    }
  };

  return (
    <>
      <Box>
        {message ? <Message msg={message} /> : null}
        {error ? <Error msg={error} /> : null}
        <form ref={contactForm} onSubmit={sendEmail} style={{ padding: "0px 50px" }}>
          <label htmlFor='name'>Name</label>
          <input 
            type='text' 
            id='name' 
            name='name' 
            placeholder='Your name...' 
            required 
          />

          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Your email...'
            required
          />

          <label htmlFor='subject'>Subject</label>
          <input
            type='text'
            id='subject'
            name='subject'
            placeholder='Subject'
            required
          />

          <label htmlFor='message'>Message</label>
          <textarea
            className='textArea'
            id='message'
            rows='7'
            name='message'
            placeholder='Write your message...'
            required
          />

          <div className='buttonSubmitOut'>
            {wait ? (
              <input className='buttonWait' value='Wait for a while' disabled />
            ) : (
              <input className='buttonSubmit' type='submit' value='Submit' />
            )}
          </div>
        </form>
      </Box>
    </>
  );
};

export default Contact__;
