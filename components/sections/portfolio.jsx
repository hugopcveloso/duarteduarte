import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import portfolioData from '../../static/data/portfolio-data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import useWindowDimensions from '../../utils/useWindowDimensions';

import Image from 'next/image';

const Portfolio = () => {
  const { height, width } = useWindowDimensions();
  const myHouses = portfolioData.map((house) => {
    return (
      <Carousel.Item key={house.id}>
        <p className="sold-tag">{house.sold ? 'Vendido' : 'Disponível'} </p>
        <div className={`image-overlay ${width >= 1200 ? 'd-flex' : ''}`}>
          <img className="carousel-image" src={house.image} alt="First slide" />
          {width >= 1200 && (
            <img
              className="carousel-image-alt"
              src={house.imagealt}
              alt="Second slide"
            />
          )}
        </div>
        <Carousel.Caption>
          <div className="carousel-caption-container">
            <h3>
              <strong>{house.price}</strong>
            </h3>
            <p>
              <strong>Descrição: </strong> {house.description}
            </p>
            <p>
              <strong>Tipologia: </strong> {house.tipologia}
            </p>
            <p>
              <strong>Área: </strong>
              {house.areabruta}
            </p>
            <a href={house.link} className="portfolio__caption--link">
              Ver mais...
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  const prevIcon = (
    <FontAwesomeIcon icon={faChevronLeft} className="carousel-prev" />
  );
  const nextIcon = (
    <FontAwesomeIcon icon={faChevronRight} className="carousel-next" />
  );

  return (
    <div className="portfolio-container" id="portfolio-section">
      <Carousel nextIcon={nextIcon} prevIcon={prevIcon}>
        {myHouses}
      </Carousel>
    </div>
  );
};

export default Portfolio;
