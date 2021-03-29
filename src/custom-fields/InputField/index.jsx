import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

const InputField = (props) => {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  console.log(showError);
  return (
    <FormGroup>
      {label ? <Label for={name}>{label}</Label> : ""}
      <Input
        id={name}
        {...field}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        invalid={showError}
      />
      {/* {showError && <FormFeedback>{errors[name]}</FormFeedback>} */}
      {/* component formik lam san khoi can dung showError,chi can truyen name = name can lay  */}
      <ErrorMessage name={name} component={FormFeedback} /> 
    </FormGroup>
  );
};

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

export default InputField;
