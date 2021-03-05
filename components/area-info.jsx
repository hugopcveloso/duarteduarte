import React, { useState, useEffect } from 'react';
import AreaData from '../static/data/area-data';
import Image from 'next/image';
import Spinner from 'react-bootstrap/Spinner';
import useWindowDimensions from '../utils/useWindowDimensions';

function AreaInfo(props) {
  const clickedId = props.clickedId;
  const [loaded, setLoaded] = useState(false);
  const { height, width } = useWindowDimensions();
  const sizeOfImage = width - 20;
  console.log(props);
  const selectedArea = AreaData[clickedId - 1];

  return (
    <div id="area-info-container" className="fade-in">
      {/* Fazer um map do area-list-data.
			onde há um on-click, e em cada on-click
			é enviado o  para o parent */}
      <div id="area-image-header">
        {/* <img
          id="area-image"
          className={`smooth-image image-${loaded ? 'visible' : 'hidden'}`}
          src={selectedArea.image}
          alt={`Fotografia de ${selectedArea.name}`}
        /> */}
        <Image
          src={selectedArea.image}
          alt={`Fotografia de ${selectedArea.name}`}
          className={`area-image`}
          id="area-image"
          width={sizeOfImage}
          height="400"
          onLoad={() => setLoaded(true)}
        />
        {!loaded && (
          <Spinner className="spinner-loader" animation="border" role="status">
            <span className="sr-only">A carregar...</span>
          </Spinner>
        )}
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
}
export async function getStaticProps(context) {
  const res = await fetch(`https://i.ibb.co/Zc9zRt2/Ajuda.jpg`);
  const test = 'test';
  return {
    props: {
      test,
    }, // will be passed to the page component as props
  };
}

export default AreaInfo;
