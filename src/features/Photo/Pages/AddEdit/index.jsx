import React from "react";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import "./AddEdit.scss";
const AddEditPage = () => {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photos !" />
      <div className="photo-edit__form">
        <PhotoForm onSubmit={(values) => console.log(values)} />
      </div>
    </div>
  );
};

export default AddEditPage;
