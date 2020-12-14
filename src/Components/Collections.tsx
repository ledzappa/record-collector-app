import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import api from './../Api/Api';

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api
      .getCollections()
      .then((res) => setCollections(res.data.collections))
      .catch()
      .finally();
  }, []);

  const handleClick = () => {
    history.push('/records');
  };

  return (
    <div>
      <h4>Collections</h4>
      <table className="table table-hover clickable">
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {collections.map((collection: any, idx: number) => (
            <tr key={idx} onClick={() => handleClick()}>
              <td>
                <FontAwesomeIcon
                  icon={collection.type === 'music' ? 'record-vinyl' : 'gamepad'}
                />{' '}
                {collection.type}
              </td>
              <td>{collection.name}</td>
              <td>{collection.items}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Collections;
