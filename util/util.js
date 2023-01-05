// meta inforamtion
const interviewPersonalMeta = [
  'firstName',
  'lastName',
  'email',
  'gender',
  'contactNumber',
  'alternateContactNumber',
]

const interviewProfessionalMeta = [
  'profile',
  'designation',
  'experience',
  'status',
  'notice_period'
]
const employeePersonalMeta = [
  'empCode',
  'firstName',
  'lastName',
  'email',
  'picture',
  'phoneNumber',
  'emergencyNumber',
]

const employeeProfessionalMeta = [
  'role',
  'designation',
  'skill',
  'dateOfJoining'
]



// utility functions
function capitaliseWithSpace(string) {
  return string.replace(/[A-Z]/g, ' $&').replace(/_/g, ' ').trim().toUpperCase();
}

async function interviewManipulateCardlData(row) {
  return new Promise((resolve) => {
    const interviewPersonalDetails =[];
    const interviewProfessionalDetails = [];
    const key = Object.keys(row);
    key.map((key)=>{
      if (interviewPersonalMeta.includes(key)) {
        interviewPersonalDetails.push({
          key : key,
          value: row[key]
        });
      } else {
        if (interviewProfessionalMeta.includes(key)) {
          interviewProfessionalDetails.push({
              key : key,
              value: row[key]
          });
        }
      }
    });
    resolve({
      interviewPersonalDetails,
      interviewProfessionalDetails
    });
  }); 
}

async function employeeManipulateCardlData(row) {
  console.log("util function row data===============>",row);
  return new Promise((resolve) => {
    const employeePersonalDetails =[];
    const employeeProfessionalDetails = [];
    const key = Object.keys(row);
    key.map((key)=>{
      if (employeePersonalMeta.includes(key)) {
          employeePersonalDetails.push({
            key : key,
            value: row[key]
        });
      } else {
        if (employeeProfessionalMeta.includes(key)) {
            employeeProfessionalDetails.push({
              key : key,
              value: row[key]
          });
        }
      }
    });
    resolve({
      employeePersonalDetails,
      employeeProfessionalDetails
    });
  }); 
}

module.exports = {
  capitaliseWithSpace,
  interviewManipulateCardlData,
  employeeManipulateCardlData
};

