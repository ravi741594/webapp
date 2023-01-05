// import React from "react";
// import Card from './Card'

// class ShowDetails extends React.Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       personalDetails: {},
//       professionallDetails: {}
//     }
//   }
//   ComponentWillMount() {
//     const personalDetails = {
//       name: tableData.name,
//       email: tableData.email,
//       age: tableData.age,
//       contact_number :tableData.contact_number,
//       alternative_contact_number : tableData.alternative_contact_number,
//     }
//     const professionallDetails = {
//       experience : tableData.experience,
//       currentCTC : tableData.currentCTC,
//       exceptedCTC: tableData.exceptedCTC,
//       notice_period : tableData.notice_period,
//       referrer_type : tableData.referrer_type,
//     }
//     this.setState({
//       personalDetails: personalDetails,
//       professionallDetails: professionallDetails
//     });
//   }
  
//   render(){
//     console.log('showDetails rendered ----------------------------');
//     const {personalDetails, professionallDetails} = this.state;
//     return(
//       <>
//         <Card
//           title= {'personal Details'}
//           data= {personalDetails}
//         />
//         <Card
//           title= {'professional Details'}
//           data= {professionallDetails}
//         />
        
//       </>
//     )
//   }
// }
// export default ShowDetails;


