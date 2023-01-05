import { Field } from "redux-form";
import renderField from "../../sharedComponents/renderFields";
import Radio from "../../sharedComponents/radioButton";
import {
  required,
  ContactNumber,
  gmail,
  minlength2,
  minlength1,
} from "../../validation/validation";
export const FullName = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <Field
          type="text"
          name="firstName"
          label="First Name *"
          component={renderField}
          placeholder="First Name"
          validate={required}
        />
      </div>
      <div className="col-md-6">
        <Field
          type="text"
          name="lastName"
          component={renderField}
          label="Last Name *"
          placeholder="Last Name"
          validate={required}
        />
      </div>
      <div>
        <div className="my-2">
          <Field
            name="email"
            type="email"
            component={renderField}
            label="Email *"
            placeholder="Example@example.com"
            validate={[required, gmail]}
          />
        </div>
      </div>

      <div>
        <div className="row">
          <div className="col-md-6">
            <Field
              type="number"
              name="contactNumber"
              label="Contact Number *"
              placeholder="+91"
              component={renderField}
              validate={[required, ContactNumber]}
            />
          </div>
          <div className="col-md-6">
            <Field
              type="number"
              name="alternateContactNumber"
              component={renderField}
              label="Alternate Contact Number"
              placeholder="+91"
              validate={ContactNumber}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const GetGender = () => {
  return (
    <div className="my-2">
      <Field
        name="gender"
        label="gender *"
        component={Radio}
        validate={required}
        options={{
          male: "male",
          female: "female",
          other: "other",
        }}
      />
    </div>
  );
};

export const MainExperience = () => {
  return (
    <div className="row">
      <div className="col-md-6 my-2">
        <Field
          type="number"
          name="years"
          label="Experience Year"
          component={renderField}
          placeholder="Years"
          validate={[required, minlength2]}
        />
      </div>
      <div className="col-md-6 my-2 ">
        <Field
          type="number"
          name="months"
          label="Experience Month"
          component={renderField}
          placeholder="Months"
          validate={[required, minlength1, minlength2]}
        />
      </div>
    </div>
  );
};

export const CurrentCtc = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <Field
          type="number"
          name="current"
          label="Current CTC"
          component={renderField}
          placeholder="LPA"
          validate={[required, minlength2]}
        />
      </div>
      <div className="col-md-6">
        <Field
          type="number"
          name="expected"
          label="Expected LPA"
          component={renderField}
          placeholder="LPA"
          validate={[required, minlength2]}
        />
      </div>
    </div>
  );
};

export const Referrername = () => {
  return (
    <div className="my-2">
      <Field
        name="name"
        type="text"
        component={renderField}
        label="Referrer Name"
        placeholder="Referrer Name"
        validate={required}
      />
    </div>
  );
};
