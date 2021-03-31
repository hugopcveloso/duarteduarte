import React, { useState, useEffect, useRef } from 'react';
import AreaData from '../static/data/area-data';
import useWindowDimensions from '../utils/useWindowDimensions';
import { motion, AnimatePresence } from 'framer-motion';
const AreaInfo = ({ clickedId }) => {
  const [loaded, setLoaded] = useState(false);
  const { height, width } = useWindowDimensions();
  const sizeOfImage = width;
  const imageRef = useRef();
  const selectedArea = AreaData[clickedId - 1];

  useEffect(() => {
    if (imageRef.current.complete) setLoaded(true);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        id="area-info-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        style={{ display: `${loaded ? 'block' : 'none'}` }}
        duration={2}
      >
        {/* Fazer um map do area-list-data.
			onde há um on-click, e em cada on-click
			é enviado o  para o parent */}
        <motion.div id="area-image-header">
          <motion.img
            ref={imageRef}
            id="area-image"
            className={``}
            height="400"
            src={selectedArea.image}
            alt={`Fotografia de ${selectedArea.name}`}
            onLoad={() => setLoaded(true)}
          />

          <h1 id="area-info-title">{selectedArea.name}</h1>
        </motion.div>

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
      </motion.div>
    </AnimatePresence>
  );
};

export default AreaInfo;
