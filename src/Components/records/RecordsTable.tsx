import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddRecord from './AddRecord';

const RecordsTable = () => {
  const [records, setRecords] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    axios.get(`mocks/records.json`).then((res) => {
      setRecords(res.data.records);
    });
  }, []);

  const addItem = () => {
    setShowModal(true);
  };

  const handleCloseClick = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h4>Min skivsamling</h4>
      <button className="btn btn-primary" onClick={() => addItem()}>
        Add item
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Artist</th>
            <th>Album</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: any, idx: number) => (
            <tr key={idx}>
              <td>{record.artist}</td>
              <td>{record.album}</td>
              <td>{record.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddRecord
        showModal={showModal}
        onChildClick={() => handleCloseClick()}
      ></AddRecord>
    </div>
  );
};

export default RecordsTable;
