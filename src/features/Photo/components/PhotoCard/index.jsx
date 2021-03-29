import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { removePhoto } from "../../photoSlice";
import "./PhotoCard.scss";

PhotoCard.propTypes = {
  photo: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  onEditClick: null,
  onRemoveClick: null,
};

function PhotoCard(props) {
  const dispatch = useDispatch();
  const { photo, onEditClick, onRemoveClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(photo);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>
        <div className="photo__actions">
          <div>
            <Button outline size="sm" color="light" onClick={handleEditClick}>
              Edit
            </Button>
          </div>

          <div>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={handleRemoveClick}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
