export default function profile() {
  return (
    <div className="container border border-dark border-1">
      <div className="row pageHeader m-3">
        <h2 className="text-center text-dark"> Employee Details</h2>
      </div>

       {/* Modal ========================> */}
      <div className="container">
        <button className=" btn btn-primary " type="button" data-bs-toggle="modal" data-bs-target="#myModal">Modal</button>
          <div className="modal " id="myModal">
            <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-title"> Modal Heading</h6>
                <button className="btn btn-success btn-close " data-bs-dismiss="modal"> </button>
              </div>
              <div className="modal-body">
                <p> Modal Body</p>
              </div>
              <div className="modal-footer">
                <button class="btn btn-danger" data-bs-dismiss="modal"> Close</button>

              </div>
            </div>  
            </div>
          </div>
      </div>

     {/* Modal ==================> */}

      <div className="row personalInfo m-3">
        <div className="col border border-2">
          <h3 className="text-center p-2" > Personal Detail </h3>
          <h5> Name : </h5>
          <h5> Phone Number : </h5>
          <h5> Alternative Phone Number : </h5>
          <h5 > Email : </h5>
          <h5> Profile : </h5>
          <h5> Designation</h5>
        </div> 
      </div>
      <div className="row professionalInfo m-3">
        <div className="col border border-2">
          <h3 className="text-center p-2" > Professional Detail  </h3>
          <h5> Experience : </h5>
          <h5> Notice Period : </h5>
          <h5 > Current CTC : </h5>
          <h5> Expected CTC : </h5>
          <h5> Referrer Name :</h5>
          <h5> Referrer Type :</h5>
        </div> 
      </div>
    </div>
  )
}


// .then( resp=> this.setState({interviewData:resp}))



 // componentDidMount() {
  //   //const token = 
  //   axios({
  //     url: "https://2b4a-203-189-253-74.in.ngrok.io/v1/employee",
  //     method: 'get',
  //     withCredentials: false,
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'application/json',
  //       // 'Authorization': token
  //     }
  //   }).then(res => {
  //     const result = res.data;
  //     console.log("request data is =========>",result);
  //   }).catch(error => {
  //     console.log('error --------------', JSON.stringify(error));
  //   })
  // }



  // handleSwitch=(modalHeading)=>{
    // const {userId}=this.state;
    // const userData=tableData.filter((item)=>item.id===userId)
  //   switch (modalHeading){
  //     case 'Personal Details':
  //       return(
  //         <div>
  //           <p> Name : {userData[0].name} </p>
  //           <p> Email :{userData[0].email} </p>
  //           <p> Contact :{userData[0].contact_number}</p>
  //           <p> Expected CTC : {userData[0].expectedCTC}</p>
  //           <p> Alternative Contact Number :{userData[0].alternative_contact_number}</p>
  //         </div>
  //       )
  //       break;
  //       case 'Professional Details':
  //         return(
  //           <div>
  //             <p> Profile : {userData[0].profile} </p>
  //             <p> Designation:{userData[0].designation}</p>
  //             <p> Experience :{userData[0].experience}</p>
  //             <p> current CTC :{userData[0].expectedCTC}</p>
  //             <p> Notice Period :{userData[0].notice_period} </p>
  //           </div>
  //         )
  //       case 'Interview Feedback':
  //         return (
  //           <div>
  //             <p> Reveviewed By : </p>
  //           </div>
  //         )
  //         default:  
  //           <div>Invalid</div>
  //   }
  // }


  // componentWillMount() {
  //   const personalDetails ={
  //       name: tableData.name,
  //       email: tableData.email,
  //       age: tableData.age,
  //       contact_number :tableData.contact_number,
  //       alternative_contact_number : tableData.alternative_contact_number,
  //     }
  //   const professionallDetails ={
  //     experience : tableData.experience,
  //     currentCTC : tableData.currentCTC,
  //     exceptedCTC: tableData.exceptedCTC,
  //     notice_period : tableData.notice_period,
  //     referrer_type : tableData.referrer_type,
  //   }
  //   this.setState({
  //     personalDetails: personalDetails,
  //     professionallDetails: professionallDetails
  //   }); 
  // }


  const data = [
    {
      "id": 1,
      "name": "Ravi",
      "email": "ravi@gmail.com",
      "experience": {
        "year": 2,
        "month": 5
        },
      "ctc" : {
        "current": 3,
        "expected": 6,
        "offered": 5
       },
      "refferer" : {
        "type" : "nokri.com",
        "name" : "ram"
      }
    
    },
    {
      "id": 2,
      "name": "Ritesh",
      "email": "Ritesh@gmail.com",
      "experience": {
        "year": 3,
        "month": 6
        },
      "ctc" : {
        "current": 4,
        "expected": 8,
        "offered": 6
       },
      "refferer" : {
        "type" : "company",
        "name" : "shyam"
      }
    },
    {
      "id": 3,
      "name": "Rohit",
      "email": "rohit@gmail.com",
      "experience": {
        "year": 1,
        "month": 6
        },
      "ctc" : {
        "current": 5,
        "expected": 8,
        "offered": 7
       },
      "refferer" : {
        "type" : "online",
        "name" : "sita"
      }
    },
  ]
  
  function manipulateData(data){
    let newArray = [];
    
    // for outer object 
    for(let obj of data) { //in this case obj= outer object
       
      let newObj = {}; // create new object in which we will push all keys
      
      //loop for perticular data 
      for(let objKey in obj) {  // objkey = "id","name", "experience", "ctc"
        
        if(typeof obj[objKey] === 'object') { // for all objectKeys have value as object
          
          if(objKey==='experience') {
  
            let expStr = ''; // for value of experience 
  
            let expObj = obj[objKey]; // for giving key of expericence
            for(let expObjKey in expObj) {
              expStr += obj[objKey][expObjKey] + ':' + expObjKey + ' ';
            }
            newObj[objKey] = expStr.trim(); // set experience key and vlaue in new object
  
          } else {
            let nestedObj = obj[objKey]
            for(let nestedObjKey in nestedObj) {
              newObj[objKey + "_" + nestedObjKey] = nestedObj[nestedObjKey]; // set vlaue in new object
            }
          }
          
        } else {
          newObj[objKey] = obj[objKey];// set vale in new obj
        }
      }
      newArray.push(newObj);
  
    }
  newObjnewObj
    return newArray;
  }
  
  console.log(JSON.stringify(manipulateData(data)));


























// import React from "react";
// import MUIDataTable from "mui-datatables";
// import axios from "axios";
// import Action from './action'
// import data from '../interview/tabledata'


// const options = {
//   filterType: 'dropdown',
// };

// const tableData= data.map( (item)=> {
//   return item;
// })

// class List extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleActionClick = this.handleActionClick.bind(this);
//     this.handleModal = this.handleModal.bind(this);

//     this.state = {
//       columns: [
//         {
//           name: "id",
//           label: "ID",
//           options: {
//             display: false,
//             filter: false
//           }
//         },
//         {
//           name: "name",
//           label: "Name",
//           options: {
//             filter: false,
//             sort: true,
//           }
//         },
//         {
//           name: "email",
//           label: "Email",
//           options: {
//             filter: false,
//             sort: false,
//           }

//         },
//         {
//           name: "contact_number",
//           label: "Contact Number",
//           options: {
//             filter: false,
//             sort: false,
//           }
//         },
//         {
//           name: "alternative_contact_number",
//           label: "Alternative Contact Number",
//           options: {
//             filter: false,
//             sort: false,
//             display: false
//           }
//         },
//         {
//           name: "designation",
//           label: "Designation",
//           options: {
//             filter: true,
//             sort: true,
//           }
//         },
//         {
//           name: "profile",
//           label: "Profile",
//           options: {
//             filter: true,
//             sort: true,
//           }
//         },
//         {
//           name: "experience",
//           label: "Experience",
//           options: {
//             filter: false,
//             sort: false,
//           }
//         },
//         {
//           name: "currentCTC",
//           label: "Current CTC",
//           options: {
//             filter: false,
//             sort: false,
//           }
//         },
//         {
//           name: "expectedCTC",
//           label: "Expected CTC",
//           options: {
//             filter: false,
//             sort: false,
//             display: false
//           }
//         },
//         {
//           name: "notice_period",
//           label: "Notice Period",
//           options: {
//             filter: false,
//             sort: false,
//           }
//         },
//         {
//           name: "referrer_type",
//           label: "Referrer Type",
//           options: {
//             filter: true,
//             sort: false,
//             display: false
//           }
//         },
//         {
//           name: "referrer_name",
//           label: "Referrer Name",
//           options: {
//             filter: false,
//             sort: false,
//             display: false
//           }
//         },
//         {
//           name: "status",
//           label: "Status",
//           options: {
//             filter: false,
//             sort: false,
//           }
//         },
//         {
//           name: "resume",
//           label: "Resume",
//           options: {
//             filter: false,
//             sort: false,
//           }
//         },
//         {
//           name: "action",
//           label: "Action",
//           options: {
//             filter: false,
//             customBodyRender: (value, tableMeta, updateValue) => {
//               return (
//                 <Action
//                   handleActionClick={this.handleActionClick}
//                   id={tableMeta.rowData[0]}
//                 />
//               )
//             },

//           }
//         }
//       ],
//       state: '',
//       userId: 0,
//       interviewData: []
//     }
//     //this.callAPI();
//   }

//   handleSwitch = (body) => {
//     const { userId, interviewData } = this.state;
//     const userData = interviewData.filter((item) => item.id === userId)
//     switch (body) {
//       case 'Personal Details':
//         return (
//           <div>
//             <p> Name : {userData[0].name} </p>
//             <p> Email :{userData[0].email} </p>
//             <p> Contact :{userData[0].contact_number}</p>
//             <p> Expected CTC : {userData[0].expectedCTC}</p>
//             <p> Alternative Contact Number :{userData[0].alternative_contact_number}</p>
//           </div>
//         )
//         break;
//       case 'Professional Details':
//         return (
//           <div>
//             <p> Profile : {userData[0].profile} </p>
//             <p> Designation:{userData[0].designation}</p>
//             <p> Experience :{userData[0].experience}</p>
//             <p> current CTC :{userData[0].expectedCTC}</p>
//             <p> Notice Period :{userData[0].notice_period} </p>
//           </div>
//         )
//       case 'Interview Feedback':
//         return (
//           <div>
//             <p> Reveviewed By : </p>
//           </div>
//         )
//       default:
//         <div>Invalid</div>
//     }
//   }

//   handleActionClick(state, id) {
//     console.log('state ===========', state);
//     this.setState({ show: state, userId: id });
//   }

//   handleModal(state) {
//     this.setState({ show: state, userId: 0 });
//   }

  // componentDidMount() {
      axios({
        url: "https://2b4a-203-189-253-74.in.ngrok.io/v1/employee",
        method: 'get',
        // withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'content-type': 'application/json'
          // 'Authorization': token
        }
      }).then(res => {
        console.log('fetch response= =======================', res);
        const result = res.data;
        console.log("request data is =========>",result);
      }).catch(error => {
        console.log('error --------------', JSON.stringify(error.response));
      })
    // }

//   // componentDidMount(){
//   //   axios.get("https://2b4a-203-189-253-74.in.ngrok.io/v1/employee",  {
//   //           headers: {
//   //                'content-type': 'application/json; charset=utf-8'
//   //           }
//   //       }).then((response) => {
//   //           console.log(response);
//   //       }).catch(error => console.log("error is ======",error));
//   // }


//   // callAPI = async () => {
//   //   fetch('https://2b4a-203-189-253-74.in.ngrok.io/v1/employee', {
//   //     method: 'GET',
//   //     mode: 'no-cors',
//   //     headers: {
//   //     }
//   //   }) .then((response) => response.json())
//   //     .then( resp=> console.log(" request data is =========", resp.data.docs))
//   //     .catch((error) => {
//   //       console.log('Error:', error);
//   //     });
//   // };



//   render() {
//     const { columns, show, interviewData } = this.state;
//     console.log('modal state show', show);
//     return (
//       <>
//         <MUIDataTable
//           title={"Interviewee List"}
//           data={interviewData}
//           columns={columns}
//           options={options}
//           onRowClick={this.getRowData}
//         />
//         {(show) &&
//           <DataModal
//             modalTitle={show}
//             modalBody={this.handleSwitch(show)}
//             show={show}
//             handleModal={this.handleModal}
//           />
//         }
//       </>
//     );
//   }
// };

// export default List;










