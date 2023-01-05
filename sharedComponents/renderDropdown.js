import { Field } from "redux-form";
export const select = (props) => {
  const { meta } = props;
  const { touched, error } = meta;

  const renderSelectOptions = (key, index) => {
    return (
      <option key={`${index}-${key}`} value={key}>
        {props.options[key]}
      </option>
    );
  };

  if (props && props.options) {
    return (
      <div className="mv3 w-100">
        <div className="b sans-serif pv2 w-100">{props.label}</div>
        <select {...props.input} className="form-control border border-dark ">
          {Field.touched && Field.error && (
            <div className="error">{Field.error}</div>
          )}
          <option value="">Select</option>
          {Object.keys(props.options).map(renderSelectOptions)}
        </select>
        {touched && error ? (
          <div className="help-block text-danger">{error}</div>
        ) : (
          ""
        )}
      </div>
    );
  }
  return <div></div>;
};
export default select;
