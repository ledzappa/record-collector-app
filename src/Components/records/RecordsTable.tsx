import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import api from './../../Api/Api';
import AddRecord from './AddRecord';

const RecordsTable = () => {
  const recordInitState = {
    artist: '',
    title: '',
    year: null,
  };
  const [records, setRecords] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(recordInitState);
  useEffect(() => {
    api.getRecords().then((res) => {
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
      {selectedRecord.title ? (
        <div>
          <h4>
            {selectedRecord!.artist} - {selectedRecord!.title} (
            {selectedRecord!.year})
          </h4>
          <button
            className="btn btn-secondary"
            onClick={() => setSelectedRecord(recordInitState)}
          >
            Prev
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setSelectedRecord(recordInitState)}
          >
            Next
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setSelectedRecord(recordInitState)}
          >
            Back
          </button>
        </div>
      ) : (
        <div>
          <h4>
            <FontAwesomeIcon className="mr-2" icon="record-vinyl" />
            Min skivsamling
          </h4>
          <div className="text-right">
            <button className="btn btn-primary" onClick={() => addItem()}>
              Add item
            </button>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Artist</th>
                <th>Album</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record: any, idx: number) => (
                <tr
                  key={idx}
                  onClick={() => setSelectedRecord({ ...record, idx })}
                >
                  <td>{record.artist}</td>
                  <td>{record.title}</td>
                  <td>{record.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <AddRecord
        showModal={showModal}
        onChildClick={() => handleCloseClick()}
      ></AddRecord>
    </div>
  );
};

export default RecordsTable;
