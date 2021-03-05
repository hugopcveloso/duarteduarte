import React, { useState, useEffect } from 'react';
import AreaData from '../static/data/area-data';
import useWindowDimensions from '../utils/useWindowDimensions';

const AreaInfo = ({ clickedId }) => {
  const [loaded, setLoaded] = useState(false);
  const { height, width } = useWindowDimensions();
  const sizeOfImage = width;

  const selectedArea = AreaData[clickedId - 1];
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div id="area-info-container" className="fade-in">
      {/* Fazer um map do area-list-data.
			onde há um on-click, e em cada on-click
			é enviado o  para o parent */}
      <div id="area-image-header">
        <img
          id="area-image"
          className={`smooth-image image-${loaded ? 'visible' : 'hidden'}`}
          height="400"
          src={selectedArea.image}
          alt={`Fotografia de ${selectedArea.name}`}
          onLoad={() => setLoaded(true)}
        />
        <h1 id="area-info-title">{selectedArea.name}</h1>
      </div>
      <br />
      <p>{selectedArea.description}</p>
      <p>
        <strong> População: </strong> {selectedArea.population}{' '}
      </p>
      <p>
        <strong> Área: </strong> {selectedArea.area}{' '}
      </p>
      <p>
        <strong> Densidade populacional: </strong> {selectedArea.densidade}{' '}
      </p>
    </div>
  );
};

export default AreaInfo;
