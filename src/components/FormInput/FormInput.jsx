import '../FormInput/FormInput.scss';

const FormInput = ({ label, htmlFor, ...inputProps }) => (
  <div className="form-input-group">
    <input {...inputProps} />
    {label && ( // if label exists, then render the label
      <label className={`${inputProps.value.length ? 'shrink-label' : ''}`} htmlFor={htmlFor}>{label}</label>
    )}
  </div>
);

export default FormInput;