import React, {Component} from 'react';
import {Button, Paper} from "@mui/material";
import {withStyles} from "@material-ui/core/styles";
import styles from "./user-style";
import {Typography} from "@material-ui/core";
import { connect } from 'react-redux';
import logo from "../../img/Logo.png";
import TextField from '@mui/material/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPassword: false
        };
    }

    handleClickShowPassword = () => {
        const { showPassword } = this.state;
        this.setState({ showPassword: !showPassword });
    };  

    handleMouseDownPassword = event => {
        event.preventDefault();
      };

    render() {
        const { classes, handleChange, email, password, handleSubmit} = this.props;
        const { showPassword } = this.state;

        return (
            <Paper className={classes.sideWrap}>
                <img src={logo} alt={"Logo"} className={classes.headLogo}/>
                <div className={classes.topBar}>
                    <Typography className={classes.title}>
                        Inicio de sesión
                    </Typography>
                </div>
                <div>
                    
                </div>
                <section className={classes.pageFormSideWrap}>
                    <form
                        style={{
                            paddingRight: '1rem',
                            paddingLeft: '1rem',
                        }}
                        onSubmit={handleSubmit}
                        >
                        <div className={classes.marginFields}>
                            <TextField
                                className={classes.formControl} 
                                type='email'
                                placeholder="Email"
                                value={email}
                                required
                                InputProps={{
                                    className: classes.input
                                  }}
                                onChange={handleChange('email')}
                            />
                        </div>

                        <div className={classes.marginFields}>
                            <TextField
                                placeholder="Password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                value={password}
                                className={classes.formControl}
                                onChange={handleChange('password')}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton
                                          aria-label="Ver contraseña"
                                          onClick={this.handleClickShowPassword}
                                          onMouseDown={this.handleMouseDownPassword}
                                        >
                                          {showPassword ? <VisibilityOffIcon /> : <Visibility />}
                                        </IconButton>
                                      </InputAdornment>
                                    ),
                                    className: classes.input,
                                  }}
                            />
                        </div>

                        <div className={classes.btnArea}>
                            <Button
                            variant="contained"
                            fullWidth
                            color="primary"
                            size="large"
                            type="submit"
                            style={{
                              backgroundColor: '#0f4198',
                              borderRadius: '40px 40px 40px 40px',
                              textTransform: 'capitalize',
                              margin:"0px"
                            }}>Inicia sesión</Button>
                        </div>
                    </form>
                </section>
            </Paper>
        );
    }
}

const mapDispatchToProps = {
};

const mapStateToProps = state => ({

});

const LoginFormMapped = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default withStyles(styles)(LoginFormMapped);
