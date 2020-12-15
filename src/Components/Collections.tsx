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
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6">
          <div className="row">
            {collections.map((collection: any, idx: number) => (
              <div className="col-12 col-sm-6">
                <div
                  className="collection-container text-center p-4"
                  onClick={() => handleClick()}
                >
                  <h1 className="mb-4">
                    <FontAwesomeIcon icon="record-vinyl" />
                  </h1>
                  <h2 className="mb-0">{collection.type}</h2>
                  <div>{collection.items} items</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
