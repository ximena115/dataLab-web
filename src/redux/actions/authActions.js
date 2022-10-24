import * as types from "../constants/authConstants";

export const loginSuccess = (role, expiration, accountType, name) => ({
    type: types.LOGIN,
    role,
    expiration,
    accountType,
    name,
  });

export const logout = () => ({
    type: types.LOGOUT,
});
