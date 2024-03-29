import React from 'react';
import {
    Dialog,
    DialogContent,
    Typography,
    DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DialogTitle from './DialogTitle';
import './dialog.css';

const DialogBox = ({ RowData, handleClose, open }) => {

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        "& .MuiDialogContent-root": {
            padding: theme.spacing(2),
        },
        "& .MuiDialogActions-root": {
            padding: theme.spacing(1),
        },
    }));

    return (
        <>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby='customized-dialog-title'
                open={open}
                sx={{ backdropFilter: "blur(5px)", fontFamily: "Montserrat" }}
            >
                <DialogTitle onClose={handleClose}>
                    {RowData.title}
                    <Typography
                        sx={{
                            fontSize: "0.7rem",
                            lineHeight: 0.7,
                        }}
                    >
                        {RowData.date}
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom sx={{ p: 1 }}>
                        {RowData.description}
                    </Typography>
                    {RowData.skills ? (
                        <div>
                            <strong>Skills</strong>
                            <Typography gutterBottom sx={{ p: 1 }}>
                                {RowData.skills}
                            </Typography>
                        </div>
                    ) : null}
                    {RowData.features ? (
                        <div>
                            <strong>Features</strong>
                            <Typography gutterBottom sx={{ p: 1 }}>
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
                            className='DialogButton'
                            id='viewLinkCard'
                        >
                            FrontEnd
                        </a>
                    ) : null}
                    {RowData.admin ? (
                        <a
                            href={RowData.admin}
                            target='_blank'
                            rel='noreferrer'
                            className='DialogButton'
                            id='viewLinkCard'
                        >
                            AdminPage
                        </a>
                    ) : null}
                    {RowData.backend ? (
                        <a
                            href={RowData.backend}
                            target='_blank'
                            rel='noreferrer'
                            className='DialogButton'
                            id='viewLinkCard'
                        >
                            BackEnd
                        </a>
                    ) : null}
                    {RowData.site_link ? (
                        <a
                            href={RowData.site_link}
                            target='_blank'
                            rel='noreferrer'
                            className='DialogButton'
                            id='viewLinkCard'
                        >
                            Visit Website
                        </a>
                    ) : null}
                </DialogActions>
            </BootstrapDialog>
        </>
    );
}

export default DialogBox;