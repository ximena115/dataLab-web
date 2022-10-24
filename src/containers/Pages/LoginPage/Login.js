import React from 'react';
import { connect } from 'react-redux';
import styles from '../../../components/Forms/user-style';
import { withStyles } from "@material-ui/core/styles";
import LoginForm from "../../../components/Forms/LoginForm";
import { makeLogin } from "../../../api/dataLab/auth.js";
import Swal from 'sweetalert2';
import { loginSuccess } from "../../../redux/actions/authActions";
import { Redirect } from "react-router-dom";
import Load from "../../../components/Load/Load";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            redirect: false,
            redirectTo: "",
            loading: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    async handleSubmit(e) {
        e.preventDefault();

        const { email, password } = this.state;
        if (email && password) {
            this.setState({ loading: true });
            const response = await makeLogin(email, password);
            if(response){
                const { role, token, expiration, name, Office } = response;
                localStorage.removeItem("Auth");
                localStorage.setItem(
                    "Auth",
                    JSON.stringify({ Token: token, Expiration: expiration })
                );
                this.props.loginSuccess(role, expiration, 1, name, Office.id);
                this.setState({ loading: false });
                let ViewRedirect = "inicio";
                if (role === "SuperAdmin" || role === "Admin" || role === "AdminOficina" || role === "Despachador" ) {
                    this.setState({ redirect: true, redirectTo: ViewRedirect });
                }
                if (role === "Domiciliario") {
                    ViewRedirect = "ordenes";
                    this.setState({ redirect: true, redirectTo: ViewRedirect });
                }
            } else {
                this.setState({ loading: false });
                Swal.fire({
                    title: "<span style='color:white'>" + "Error!" + "</span>",
                    html: "<span style='color:white'>" + "Ups! Revisa tu correo electrónico y contraseña" + "</span>",
                    icon: 'error',
                    background: '#2c2d31',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: "#0f4198",
                })
            }
        }
    }

    render() {
        const { classes } = this.props;
        const { email, password, redirect, loading } = this.state;
        return (
            <div className={classes.rootFull}>
                <div
                    className={classes.containerSide}
                    style={{
                        backgroundSize: "cover"
                    }}
                >
                    <div className={classes.sideFormWrap}>
                        <LoginForm handleChange={values => this.handleChange(values)} email={email} password={password} handleSubmit={this.handleSubmit}/>
                    </div>
                </div>
                {redirect && <Redirect to={"/" + this.state.redirectTo} />}
                <Load open={loading} />
            </div>
        );
    }
}

const mapState = state =>
    ( { } );

const actionCreators = {
    loginSuccess,
};

const connectedLoginPage = connect(
    mapState,
    actionCreators
)(LoginPage);

export default withStyles(styles)(connectedLoginPage);
