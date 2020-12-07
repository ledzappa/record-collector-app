import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AddRecord(props: any) {
  const [state, setState] = useState({
    artist: '',
    title: '',
    media: '',
    year: '',
    format: '',
    label: '',
  });

  const handleInput = (value: any, key: any) => {
    setState({ ...state, [key]: value });
  };

  const submitForm = () => {
    console.log(state);
    axios
      .post('/api/v1/record', state)
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <h2>Add record</h2>
      <div className="row">
        <div className="col-sm-6">
          <label>Artist</label>
          <input
            name="artist"
            className="form-control"
            onChange={(e) => handleInput(e.target.value, 'artist')}
          />
        </div>
        <div className="col-sm-6">
          <label>Album</label>
          <input
            name="album"
            className="form-control"
            onChange={(e) => handleInput(e.target.value, 'album')}
          />
        </div>
      </div>
      <label>Media</label>
      <input
        name="media"
        className="form-control"
        onChange={(e) => handleInput(e.target.value, 'media')}
      />
      <label>Format</label>
      <input
        name="format"
        className="form-control"
        onChange={(e) => handleInput(e.target.value, 'format')}
      />
      <label>Year</label>
      <input
        name="year"
        className="form-control"
        onChange={(e) => handleInput(e.target.value, 'year')}
      />
      <label>Label</label>
      <input
        name="label"
        className="form-control"
        onChange={(e) => handleInput(e.target.value, 'label')}
      />
      <hr />
      <button className="btn btn-secondary">Upload image</button>
      <hr />
      <button className="btn btn-primary" onClick={() => submitForm()}>
        Add
      </button>
    </div>
  );
}

AddRecord.propTypes = {};

export default AddRecord;
