import axios from "axios";

//Constant
export const INTERVIEW_PERSONAL_DETAIL_DATA = 'INTERVIEW_PERSONAL_DETAIL_DATA';
export const INTERVIEW_PROFESSIONAL_DETAIL_DATA = 'INTERVIEW_PROFESSIONAL_DETAIL_DATA';
export const INTERVIEW_SHOW='INTERVIEW_SHOW';
export const INTERVIEW_API_DATA="INTERVIEW_API_DATA"


//Action Creater
export function interviewPersonalDetailData(personalDetails) {
  //console.log("action creater---->", personalDetails)
  return {
    type: "INTERVIEW_PERSONAL_DETAIL_DATA",
    personalDetails
  };
}
export function interviewProfessionalDetailData(professionalDetails) {
 // console.log("action creater---->", professionalDetails)
  return {
    type: "INTERVIEW_PROFESSIONAL_DETAIL_DATA",
    professionalDetails
  };
}
export function inteviewShow(show) {
  //console.log("action creater for show state ===============>",show);
  return {
    type : "INTERVIEW_SHOW",
    show
  }
}
export function interviewApi(interviewData) {
  return {
    type : "INTERVIEW_API_DATA",
    interviewData
  }
}


//Action 
export const interviewPersonalDetailDataList = (personalDetails) => {
  //console.log("action ---->", personalDetails)
  return (dispatch) => {
    return new Promise(resolve => {
      dispatch(interviewPersonalDetailData(personalDetails));
      resolve();
    });
  }
}
export const interviewProfessionalDetailDataList = (professionalDetails) => {
  //console.log("action ---->", professionalDetails)
  return (dispatch) => {
    return new Promise(resolve => {
      dispatch(interviewProfessionalDetailData(professionalDetails));
      resolve();
    });
  }
}
export const interviewShowState = (show) => {
  //console.log("action for show state---->", show)
  return (dispatch) => {
    dispatch(inteviewShow(show));

  }
}
export const interviewDataAPI = () => {
  return (dispatch) => {
    return axios({
      url: "http://localhost:8000/v1/interview",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      },
      method: 'GET',
      //data: properties
    }).then((response) => {
        console.log("api resoponse is ===============>",response);
        dispatch(interviewApi());
    }).catch(() => {
      
    });
  };
};

const INTERVIEW_INITIAL_STATE = {
  personalDetails: [],
  professionalDetails:[],
  show:false,
  interviewData: []
};

//Action Handler
const ACTION_HANDLERS = {
  [INTERVIEW_PERSONAL_DETAIL_DATA]: (state, action) => {
    
    return {
      ...state,
      personalDetails: action.personalDetails
    };
  },
  [INTERVIEW_PROFESSIONAL_DETAIL_DATA]: (state, action) => {
    return {
      ...state,
      professionalDetails: action.professionalDetails
    };
  },
  [INTERVIEW_SHOW]: (state,action)=>{
    return{
      ...state,
      show: action.show
    }
  },
  [INTERVIEW_API_DATA]: (state,action)=>{
    return{
      ...state,
      interviewData: action.interviewData
    }
  }
}

//Reducer
export default function interviewReducer(state = INTERVIEW_INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}



