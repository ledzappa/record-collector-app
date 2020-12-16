import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import api from './../../Api/Api';

function AddRecord(props: any) {
  const [recordForm, setRecordForm] = useState({
    ...props.record,
  });
  const [image, setImage] = useState<any>();

  useEffect(() => {
    setRecordForm({ ...props.record });
  }, [props.record]);

  const handleInputChange = (target: any) => {
    setRecordForm({ ...recordForm, [target.name]: target.value });
  };

  const handleAddItemClick = () => {
    api
      .addRecord(recordForm, image)
      .then((res: any) => console.log(res))
      .catch((e: any) => console.error(e));
  };

  const handleClose = () => ({});

  const handleImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const isFormValid = ({
    artist,
    title,
  }: {
    artist: string;
    title: string;
  }) => {
    return artist.length > 0 && title.length > 0;
  };

  return (
    <Modal show={props.showModal} onHide={() => handleClose()}>
      <Modal.Header>
        <Modal.Title>Add item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="row">
            <div className="col-sm-6">
              <label>Artist</label>
              <input
                name="artist"
                className="form-control"
                value={recordForm.artist}
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>
            <div className="col-sm-6">
              <label>Title</label>
              <input
                name="title"
                className="form-control"
                value={recordForm.title}
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <label>Format</label>
              <select
                name="format"
                className="form-control"
                value={recordForm.format}
                onChange={(e) => handleInputChange(e.target)}
              >
                <option value="vinyl">Vinyl</option>
                <option value="cd">CD</option>
                <option value="dvd">DVD</option>
                <option value="mc">MC</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col-sm-6">
              <label>Sub Format</label>
              <select
                name="subFormat"
                className="form-control"
                value={recordForm.subFormat}
                onChange={(e) => handleInputChange(e.target)}
              >
                <option value="LP">LP</option>
                <option value="2LP">2LP</option>
                <option value="3LP">3LP</option>
                <option value="4LP">4LP</option>
                <option value="EP">EP</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <label>Year</label>
              <input
                name="year"
                type="number"
                className="form-control"
                value={recordForm.year}
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>
            <div className="col-sm-6">
              <label>Label</label>
              <input
                name="label"
                className="form-control"
                value={recordForm.label}
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>
          </div>
          <hr />
          <input
            type="file"
            name="myImage"
            accept="image/jpeg"
            onChange={(e: any) => handleImageChange(e)}
          />
          <img
            className="w-100"
            src={image ? URL.createObjectURL(image) : ''}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="link" onClick={props.onChildClick}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => handleAddItemClick()}
          disabled={!isFormValid(recordForm)}
        >
          Add item
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

AddRecord.propTypes = {
  showModal: PropTypes.bool,
  onChildClick: PropTypes.any,
  record: PropTypes.any,
};

export default AddRecord;
