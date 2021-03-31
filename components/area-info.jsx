import React, { useState, useEffect } from 'react';
import AreaData from '../static/data/area-data';
import useWindowDimensions from '../utils/useWindowDimensions';
import { motion, AnimatePresence } from 'framer-motion';
const AreaInfo = ({ clickedId }) => {
  const [loaded, setLoaded] = useState(false);
  const { height, width } = useWindowDimensions();
  const sizeOfImage = width;

  const selectedArea = AreaData[clickedId - 1];

  return (
    <div id="area-info-container" className="fade-in">
      {/* Fazer um map do area-list-data.
			onde há um on-click, e em cada on-click
			é enviado o  para o parent */}
      <AnimatePresence>
        <motion.div
          initial={{ x: 50, scale: 0, opacity: 0 }}
          animate={{ x: 0, scale: 1, opacity: 1 }}
          transition={2}
          id="area-image-header"
        >
          <motion.img
            id="area-image"
            className={``}
            height="400"
            src={selectedArea.image}
            alt={`Fotografia de ${selectedArea.name}`}
            onLoad={() => setLoaded(true)}
          />

          <h1 id="area-info-title">{selectedArea.name}</h1>
        </motion.div>
      </AnimatePresence>
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
