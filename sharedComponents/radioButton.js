import { Field } from "redux-form";
export const Radio = (props) => {
  const { meta } = props;
  const { touched, error } = meta;
  if (props && props.input && props.options) {
    const renderRadioButtons = (key, index) => {
      return (
        <label
          className="mx-2 "
          key={`${index}`}
          htmlFor={`${props.input.name}-${index}`}
        >
          <Field
            component="input"
            name={props.input.name}
            type="radio"
            value={key}
            className="mh2"
          />
          {props.options[key]}
        </label>
      );
    };
    return (
      <>
        <div className="">{props.label}</div>
        <div>
          {props.options && Object.keys(props.options).map(renderRadioButtons)}
        </div>
        {touched && error ? (
          <div className="help-block text-danger">{error}</div>
        ) : (
          ""
        )}
      </>
    );
  }
  return <div></div>;
};

export default Radio;
