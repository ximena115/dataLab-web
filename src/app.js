import React from "react";
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import history from "./utils/history";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import Login from "./containers/Pages/LoginPage/Login";

class App extends React.Component {
  render() {
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router history={history}>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Redirect from="*" to="/login" />
            </Switch>
          </Router>
        </MuiPickersUtilsProvider>
    );
  }
}

const mapState = state => {
  const { loggingIn } = state.authReducer;
  if (loggingIn) {
    return {
      isLogin: state.authReducer.loggingIn,
      accountRole: state.authReducer.role,
    };
  } else {
    return {
      isLogin: false,
      accountRole: "LogOut",
    };
  }
};

const actionCreators = {
};

const connectedApp = connect(
    mapState,
    actionCreators
)(App);

export { connectedApp as App };
