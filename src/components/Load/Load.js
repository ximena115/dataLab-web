import React from 'react';
import Loading from "../../img/Loading.gif";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 20,
        boxShadow: theme.shadows[1],
        padding: theme.spacing(2, 2, 3),
        width: 250
    },
}));

function Load(props) {
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={props.open}
            className={classes.modal}
        >
            <div className={classes.paper}>
                <img
                    src={Loading}
                    style={{ width: "40%", display: "block", margin: "auto" }}
                    alt={"image"}/>
                <Typography
                    style={{
                        color: "#26357C",
                        fontWeight: 700,
                        textAlign: "center",
                        fontFamily: "Montserrat",
                        display: "block",
                        margin: "auto",
                        marginTop: 30
                    }}
                >
                    Cargando...
                </Typography>
            </div>
        </Modal>
    );
}

export default (Load);