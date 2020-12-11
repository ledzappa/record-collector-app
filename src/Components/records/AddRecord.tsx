import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

function AddRecord(props: any) {
  const [state, setState] = useState({
    artist: '',
    title: '',
    media: '',
    year: '',
    format: '',
    label: '',
  });

  const handleInput = (target: any) => {
    setState({ ...state, [target.name]: target.value });
  };

  const handleAddItemClick = () => {
    console.log(state);
    axios
      .post('/api/v1/record', state)
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
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
                name="media"
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
                name="format"
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
