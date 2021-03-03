import React, { useState } from 'react';
import EvaluationForm from '../evaluation-form';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const FormSection = (props) => {
  // const styledBackground = {
  //   backgroundImage: 'url(' + backgroundImage + ')',
  // };

  return (
    <div id="contact-section">
      <div className="form-section-container">
        <Image
          src="/static/images/form-background.jpg"
          alt="photo-of-lisbon"
          className="form-overlay-image"
          width="100"
          height="100"
          layout="responsive"
        />
        <div className="form-overlay-container">
          <div className="form-overlay"></div>
        </div>

        <div className="form-description-container">
          <h2>Form Title</h2>
          <p className="form-description-paragraph">
            Sunt do ex ea cillum anim enim. Do labore pariatur aliqua aliqua
            amet tempor proident. Eiusmod reprehenderit dolore qui officia enim
            aute sint esse. Deserunt aliquip deserunt voluptate velit.
          </p>
        </div>

        <div className="form-component-container">
          <div className="form-header">
            <FontAwesomeIcon icon={faComments} className="comments-icon" />
            <h3>Contacta-nos</h3>
          </div>
          <EvaluationForm />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
