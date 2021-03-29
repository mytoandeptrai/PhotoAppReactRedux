import { FastField, Form, Formik } from "formik";
import React from "react";
import { Button, FormGroup, Spinner } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/globals";
import InputField from "../../../../custom-fields/InputField";
import RandomPhotoField from "../../../../custom-fields/RandomPhotoField";
import SelectField from "../../../../custom-fields/SelectField";
import * as Yup from "yup";
const PhotoForm = (props) => {
  const { initialValues, isAddMode } = props;
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field must be required"),
    categoryId: Yup.number().required("This field must be required").nullable(),
    // photo: Yup.string().required("This field must be required"),
    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("This field must be required"),
      otherwise: Yup.string().notRequired(),
    }),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form>
            <FastField
              //props tu initialValue
              name="title"
              component={InputField}
              //props minh truyen vao
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category ?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button color={isAddMode ? "primary" : "success"}>
                {isSubmitting && <Spinner size="sm" />}
                {isAddMode ? "Add to album" : "Update your photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PhotoForm;
