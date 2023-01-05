import axios from "axios";

//CONSTANT
export const POST_USERDETAILS = "POST_USERDETAILS";

//ACTION CREATOR
export function setProfile(inputData) {
  return {
    type: POST_USERDETAILS,
    inputData,
  };
}

export const candidateLogin = (inputData) => {
  return (dispatch) => {
    return axios({
      url: `https://c684-203-189-253-74.in.ngrok.io/v1/interview`,
      data: inputData,
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        dispatch(setProfile(response.data));
      })
      .catch((err) => {});
  };
};

// INTITIAL STATE
export const initialState = {
  candidateData: {},
};

// ACTION HANDLER
const ACTION_HANDLER = {
  [POST_USERDETAILS]: (state, action) => {
    return {
      ...state,
      candidateData: action.inputData,
    };
  },
};

// REDUCER FOR CANDIDATEFORM

export default function candidateFormReducer(state = initialState, action) {
  const handler = ACTION_HANDLER[action.type];
  return handler ? handler(state, action) : state;
}
