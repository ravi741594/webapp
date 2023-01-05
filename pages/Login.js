import { Field, Form, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { gmail, required } from "../validation/validation";
import { renderField } from "../sharedComponents/renderFields";
import { authUser } from "redux/reducer/user";
import { useState } from "react";
import Link from "next/link";

let Login = (props) => {
  const submitForm = (value) => {
    props.reset();
    const loginData = {
      email: email,
      password: password,
    };
    props.authUser(loginData);
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const { handleSubmit, pristine, submitting, email, password } = props;

  return (
    <div className="container-fluid card mt-5 bg-light">
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img
            className="w-100 mt-3"
            src="http://www.incaendo.com/sites/default/files/xincaendo-logo.png.pagespeed.ic.LTOmvZAJ1s.webp"
            alt="image"
          />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <Form onSubmit={handleSubmit(submitForm)}>
            <div className="mt-4">
              <h3>Login Form</h3>
            </div>
            <div className="form-outline mt-4">
              <Field
                type="email"
                placeholder="Enter a valid email address"
                name="email"
                label="Email"
                component={renderField}
                validate={[required, gmail]}
              />
            </div>
            <div className="form-outline mt-3">
              <Field
                type={passwordShown ? "text" : "password"}
                placeholder="Enter password"
                name="password"
                label="Password"
                component={renderField}
                validate={required}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="form-check mb-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  onClick={togglePasswordVisiblity}
                />
                show Password
              </div>
              <Link href="/forgetPass" className="text-body">
                Forgot password?
              </Link>
            </div>
            <div className="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                className="btn btn-primary "
                disabled={pristine || submitting}
              >
                Login
              </button>
              <div>
                <p className="small fw-bold mb-3 mt-5 pt-1">
                  Don't have an account?{" "}
                  <Link href="/Login" className="link-danger">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

const selector = formValueSelector("loginForm");

Login = reduxForm({
  form: "loginForm", // a unique identifier for this form
})(Login);

Login = connect((state) => {
  const email = selector(state, "email");
  const password = selector(state, "password");
  return {
    email,
    password,
  };
})(Login);

const mapDispatchToProps = (dispatch) => ({
  authUser: (loginData) => dispatch(authUser(loginData)),
});

export default connect(null, mapDispatchToProps)(Login);
