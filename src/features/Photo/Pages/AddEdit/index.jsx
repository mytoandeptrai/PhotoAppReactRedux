import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import { addPhoto, updatePhoto } from "../../photoSlice";
import "./AddEdit.scss";
const AddEditPage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const randomNumber = (min, max) => {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  };

  const eiditedPhoto = useSelector((state) => {
    const foundPhoto = state.photos.find((x) => x.id === +photoId);
    return foundPhoto;
  });

  const initialValues = isAddMode
    ? {
        title: "",
        photo: "",
        categoryId: null,
      }
    : eiditedPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("Form Submit: ", values);

      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: randomNumber(10000, 99999),
          };
          const action = addPhoto(newPhoto);
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }

        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photos !" />
      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddEditPage;
