import { useField } from "formik";
import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormGroup>
      {label ? <Label htmlFor={field.name}>{label}</Label> : ""}
      {/* < id={field.name} {...field} {...props} autoComplete="off" /> */}
      <Input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
    </FormGroup>
  );
};

export default InputField;
