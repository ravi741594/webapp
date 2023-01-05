import axios from "axios";
//Constant
export const EMPLOYEE_PERSONAL_DETAIL_DATA = 'EMPLOYEE_PERSONAL_DETAIL_DATA';
export const EMPLOYEE_PROFESSIONAL_DETAIL_DATA = 'EMPLOYEE_PROFESSIONAL_DETAIL_DATA';
export const EMPLOYEE_SHOW='EMPLOYEE_SHOW';
export const EMPLOYEE_API_DATA="EMPLOYEE_API_DATA"


//action creator 
export function employeePersonalDetailData(employeePersonalDetails) {
  return {
    type: "EMPLOYEE_PERSONAL_DETAIL_DATA",
    employeePersonalDetails
  };
}
export function employeeProfessionalDetailData(employeeProfessionalDetails) {
  return {
    type: "EMPLOYEE_PROFESSIONAL_DETAIL_DATA",
    employeeProfessionalDetails
  };
}
export function employeeShow(showState) {
  return {
    type : "EMPLOYEE_SHOW",
    showState
  }
}
export function employeeApi(employeeData) {
  return {
    type : "EMPLOYEE_API_DATA",
    employeeData
  }
}



// Action
export const employeePersonalDetailDataList = (employeePersonalDetails) => {
  return (dispatch) => {
    return new Promise(resolve => {
     // console.log("empldetlst----->", employeePersonalDetails)
      dispatch(employeePersonalDetailData(employeePersonalDetails));
      resolve();
    });
  }
}
export const employeeProfessionalDetailDataList = (employeeProfessionalDetails) => {
  return (dispatch) => {
    return new Promise(resolve => {
      
      dispatch(employeeProfessionalDetailData(employeeProfessionalDetails));
      resolve();
    });
  }
}
export const employeeShowState = (showState) => {
  return (dispatch) => {
    dispatch(employeeShow(showState));

  }
}
// export const employeeDataAPI = () => {
//    return (dispatch) => {
    
//       return  axios({
//         url: "https://2b4a-203-189-253-74.in.ngrok.io/v1/employee",
//         method: 'get',
//         // withCredentials: false,
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//           'content-type': 'application/json'
//           // 'Authorization': token
//         }
//       }).then(res => {
//         dispatch(employeeApi(employeeData));
//         console.log('fetch response= =======================', res);
//         const result = res.data;
//         console.log("request data is =========>",result);
//       }).catch(error => {
//         console.log('error --------------', JSON.stringify(error.response));
//       })
//   }
// }

export const employeeDataAPI = () => {
  return (dispatch) => {
    return axios({
      url: "http://localhost:8000/v1/employee",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      },
      method: 'GET',
      //data: properties
    }).then((response) => {
        console.log("api resoponse is ===============>",response);
        dispatch(employeeApi());
    }).catch(() => {
      
    });
  };
};



const EMPLOYEE_INITIAL_STATE = {
  employeePersonalDetails: [],
  employeeProfessionalDetails:[],
  showState:false,
  employeeData:[]
};

//Action Handler
const ACTION_HANDLERS = {
  [EMPLOYEE_PERSONAL_DETAIL_DATA]: (state, action) => {
    return {
      ...state,
      employeePersonalDetails: action.employeePersonalDetails
    };
  },
  [EMPLOYEE_PROFESSIONAL_DETAIL_DATA]: (state, action) => {
    return {
      ...state,
      employeeProfessionalDetails: action.employeeProfessionalDetails
    };
  },
  [EMPLOYEE_SHOW]: (state,action)=>{
    return{
      ...state,
      showState: action.showState
    }
  },
  [EMPLOYEE_API_DATA]: (state,action)=>{
    return{
      ...state,
      employeeData: action.employeeData
    }
  }
}

//Reducer
export default function employeeReducer(state = EMPLOYEE_INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}



