export const required = (value) =>
  value ? undefined : <p className="text-danger">!Required</p>;
export const ContactNumber = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? (
    <p className="text-danger">"Invalid phone number, must be 10 digits"</p>
  ) : undefined;
export const gmail = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? (
    <p className="text-danger">"Invalid email address"</p>
  ) : undefined;

export const dropDown = (value) =>
  value ? undefined : <p className="text-danger">"Please select any field"</p>;

export const minlength2 = (value) =>
  value && value < 0 ? <p className="text-danger">!not valid</p> : undefined;

export const minlength1 = (value) =>
  value && value > 11 ? (
    <p className="text-danger">!Months not valid</p>
  ) : undefined;
