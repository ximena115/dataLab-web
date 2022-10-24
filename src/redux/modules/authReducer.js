import {
    LOGIN, LOGOUT
  } from "../constants/authConstants";

  export const AuthState = {
      loggedIn: false,
      role: "None", // Only for validations
      expiration: new Date(),
      accountType: 0, // 0: Guest, 1: SuperAdmin
      name: "None",
  }

  export default function authReducer(state = AuthState, action = {}) {
    switch (action.type) {
        case LOGIN:
        return {
            loggingIn: true,
            role: action.role,
            expiration: action.expiration,
            accountType: action.accountType,
            name: action.name,
          };
        case LOGOUT:
            return {};
      default:
        return state;
    }
  }
