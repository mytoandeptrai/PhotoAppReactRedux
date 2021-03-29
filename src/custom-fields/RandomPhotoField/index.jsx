import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import RandomPhoto from "../../components/RandomPhoto";
import { ErrorMessage } from "formik";

const RandomPhotoField = (props) => {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <RandomPhoto
        name={name}
        imageUrl={value}
        onRandomButtonBlur={onBlur}
        onImageUrlChange={handleImageUrlChange}
        // className={showError ? "is-invalid" : ""}
      />
      <div className={showError ? "is-invalid" : ""}></div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
  label: "",
};

export default RandomPhotoField;
