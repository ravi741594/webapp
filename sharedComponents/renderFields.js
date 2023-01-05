export const renderField = ({
  input,
  label,
  type,
  placeholder,

  meta: { touched, error },
}) => (
  <div>
    <label>{label}</label>
    <div>
      
      <input
        className="form-control border border-dark "
        {...input }
        placeholder={placeholder}
        type={type}
        
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
export default renderField;
