import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function RecordsTable() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios.get(`mocks/records.json`).then((res) => {
      setRecords(res.data.result.records);
    });
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Artist</th>
            <th>Album</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: any) => (
            <tr>
              <td>{record.artist}</td>
              <td>{record.album}</td>
              <td>{record.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
