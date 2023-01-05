import { Field } from "redux-form";
import { dropDown } from "../../validation/validation";
import select from '../../sharedComponents/renderDropdown'
export const GetDesignation = () => {
  return (
    <div className="my-2">
      <Field
        name="designation"
        label="Designation"
        component={select}
        validate={dropDown}
        options={{
          softwareEngineer: "Software Engineer",
          systemEngineer: "System Engineer",
          seniorSoftwareEngineer: "Senior Software Engineer",
          teamLeader: "Team Leader",
          trainee: "Trainee",
        }}
      />
    </div>
    
  );
};

export const GetProfile = () => {
  return (
    <div>
      <Field
        name="profile"
        label="Profile"
        component={select}
        validate={dropDown}
        options={{
          android: "Android",
          fullstack: "Fullstack",
          ios: "IOS",
          node: "Node",
          php: "PHP",
          python: "Python",
          react: "React",
          reactNative: "ReactNative",
        }}
      />
    </div>
  );
};

export const GetNoticePeriod = () => {
  return (
    <div className="my-2">
      <Field
        name="noticePeriod"
        label="Notice Period"
        component={select}
        validate={dropDown}
        options={{
          0: "0",
          15: "15",
          30: "30",
          45: "45",
          60: "60",
          90: "90",
        }}
      />
    </div>
  );
};

export const GetReferrerType = () => {
  return (
    <div>
      <Field
        name="type"
        label="Referrer Type"
        component={select}
        validate={dropDown}
        options={{
          consultant: "Consultant",
          employee: "Employee",
          social: "Social",
          website: "Website",
        }}
      />
    </div>
  );
};
