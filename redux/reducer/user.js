import axios from "axios";
import { router } from "next/router";

// CONSTANT
export const GET_USER = "GET_USER";

// ACTION
export function setToken(loginData) {
  return {
    type: GET_USER,
    loginData,
  };
}

export const authUser = (loginData) => {
  return (dispatch) => {
    return axios({
      url: `https://8fff-203-189-253-74.in.ngrok.io/v1/auth/login`,
      data: loginData,
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (response.data.statusCode === 200) {
          router.push("/interview");
        }
        dispatch(setToken(response.data));
      })
      .catch((err) => {
        alert("wrong user password");
        router.push("/Login");
      });
  };
};

// INTITIAL STATE
export const initialState = {
  userToken: {},
};

// ACTION HANDLER
const ACTION_HANDLER = {
  [GET_USER]: (state, action) => {
    return {
      ...state,
      userToken: action.loginData,
    };
  },
};
// REDUCER for LOGIN
export default function userReducer(state = initialState, action) {
  const handler = ACTION_HANDLER[action.type];
  return handler ? handler(state, action) : state;
}
