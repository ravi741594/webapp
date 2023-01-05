import { Form, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { candidateLogin } from "redux/reducer/candidateReducer";
import {
  CurrentCtc,
  Referrername,
  MainExperience,
  FullName,
  GetGender,
} from "./component/inputName";
import {
  GetDesignation,
  GetNoticePeriod,
  GetProfile,
  GetReferrerType,
} from "./dropdown/DropDown";

let candidateForm = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting,
    firstName,
    lastName,
    email,
    contactNumber,
    alternateContactNumber,
    gender,
    profile,
    designation,
    noticePeriod,
    type,
    name,
    years,
    months,
    current,
    expected,
  } = props;

  const submitForm = (value) => {
    props.reset();
    const inputData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      contactNumber: contactNumber,
      alternateContactNumber: alternateContactNumber,
      gender: gender,
      profile: profile,
      designation: designation,
      noticePeriod: noticePeriod,
      experience: {
        years: years,
        months: months,
      },
      referrer: {
        type: type,
        name: name,
      },
      ctc: {
        current: current,
        expected: expected,
      },
    };

    props.candidateLogin(inputData);
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center p-5 shadow-lg">
        <div className="justify-content-center bg-light col-md-10 border border-dark p-3 mb-5 rounded">
          <Form onSubmit={handleSubmit(submitForm)}>
            <div>
              <h1 className="text-center p-3">Interview Process</h1>
            </div>
            <div>
              <FullName />
            </div>
            <div>
              <GetGender />
            </div>
            <div>
              <GetDesignation />
            </div>
            <div>
              <GetProfile />
            </div>
            <div>
              <MainExperience />
            </div>
            <div>
              <CurrentCtc />
            </div>
            <div>
              <GetNoticePeriod />
            </div>
            <div>
              <GetReferrerType />
            </div>
            <div>
              <Referrername />
            </div>
            <div className="my-4 text-center">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={pristine || submitting}
              >
                <h4 className="my-1">Submit</h4>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

const selector = formValueSelector("candidateSignupForm");

candidateForm = reduxForm({
  form: "candidateSignupForm", // a unique identifier for this form
})(candidateForm);
candidateForm = connect((state) => {
  const firstName = selector(state, "firstName");
  const lastName = selector(state, "lastName");
  const email = selector(state, "email");
  const contactNumber = selector(state, "contactNumber");
  const alternateContactNumber = selector(state, "alternateContactNumber");
  const designation = selector(state, "designation");
  const profile = selector(state, "profile");
  const years = selector(state, "years");
  const months = selector(state, "months");
  const type = selector(state, "type");
  const name = selector(state, "name");
  const noticePeriod = selector(state, "noticePeriod");
  const current = selector(state, "current");
  const expected = selector(state, "expected");
  const gender = selector(state, "gender");
  return {
    firstName,
    lastName,
    email,
    contactNumber,
    alternateContactNumber,
    gender,
    designation,
    profile,
    years,
    months,
    type,
    name,
    noticePeriod,
    current,
    expected,
  };
})(candidateForm);

const mapDispatchToProps = (dispatch) => ({
  candidateLogin: (data) => dispatch(candidateLogin(data)),
});

export default connect(null, mapDispatchToProps)(candidateForm);
