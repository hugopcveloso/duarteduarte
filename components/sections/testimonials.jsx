import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import testimonialsData from '../../static/data/testimonials-data.js';

import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';

class Testimonials extends Component {
  render() {
    const myTestimonials = testimonialsData.map((testimonial) => {
      return (
        <Carousel.Item key={testimonial.id} className="carousel-element">
          <div className="">
            <img
              className="carousel-testimonial-img"
              src={`/static/images/black.jpg`}
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <div className="testimonials-caption-container">
              <p>{testimonial.description}</p>
              <h4>- {testimonial.author}</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    const prevIcon = (
      <FontAwesomeIcon icon={faChevronLeft} className="carousel-prev dark" />
    );
    const nextIcon = (
      <FontAwesomeIcon icon={faChevronRight} className="carousel-next dark" />
    );

    return (
      <div className="testimonials-container" id="testimonials-section">
        <Carousel nextIcon={nextIcon} prevIcon={prevIcon}>
          {myTestimonials}
        </Carousel>
      </div>
    );
  }
}

export default Testimonials;
