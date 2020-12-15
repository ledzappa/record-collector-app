import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import api from './../../Api/Api';

function AddRecord(props: any) {
  const [record, setRecord] = useState({
    artist: '',
    title: '',
    year: 0,
    format: '',
    subFormat: '',
    label: '',
  });

  const handleInput = (target: any) => {
    setRecord({ ...record, [target.name]: target.value });
  };

  const handleAddItemClick = () => {
    api
      .addRecord(record)
      .then((res: any) => console.log(res))
      .catch((e: any) => console.error(e));
  };

  const handleClose = () => ({});

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
                onChange={(e) => handleInput(e.target)}
              />
            </div>
            <div className="col-sm-6">
              <label>Title</label>
              <input
                name="title"
                className="form-control"
                onChange={(e) => handleInput(e.target)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <label>Media</label>
              <select
                name="format"
                className="form-control"
                onChange={(e) => handleInput(e.target)}
              >
                <option value="vinyl">Vinyl</option>
                <option value="cd">CD</option>
                <option value="dvd">DVD</option>
                <option value="mc">MC</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col-sm-6">
              <label>Format</label>
              <select
                name="subFormat"
                className="form-control"
                onChange={(e) => handleInput(e.target)}
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
                className="form-control"
                onChange={(e) => handleInput(e.target)}
              />
            </div>
            <div className="col-sm-6">
              <label>Label</label>
              <input
                name="label"
                className="form-control"
                onChange={(e) => handleInput(e.target)}
              />
            </div>
          </div>
          <hr />
          <button className="btn btn-secondary">Add image</button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="link" onClick={props.onChildClick}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleAddItemClick()}>
          Add item
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

AddRecord.propTypes = {
  showModal: PropTypes.bool,
  onChildClick: PropTypes.any,
};

export default AddRecord;
