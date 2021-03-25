import { FastField, Form, Formik } from "formik";
import React from "react";
import { Button, FormGroup, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/globals";
import Images from "../../../../constants/images";
import InputField from "../../../../custom-fields/InputField";
import SelectField from "../../../../custom-fields/SelectField";
const PhotoForm = () => {
  return (
    <Formik
      initialValues={{
        title: "",
        name: "",
        categoryId: null,
      }}
    >
      {(formikProps) => {
        return (
          <Form>
            <div className="form__title">
              <InputField
                label="Title"
                placeholder="Eg: Wow nature ..."
                type="text"
                name="title"
              />
            </div>

            <div className="form__name">
              <InputField
                label="Name"
                placeholder="Eg: Wow nature ..."
                type="text"
                name="name"
              />
            </div>

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category ?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FormGroup>
              <Label for="categoryId">Photo</Label>
              <div>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img
                  width="200px"
                  height="200px"
                  src={Images.COLORFUL_BG}
                  alt="colorFulPicture"
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Button color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PhotoForm;
