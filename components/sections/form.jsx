import React, { useState } from 'react';
import EvaluationForm from '../evaluation-form';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const backgroundImage = require('../../static/images/form-background.jpg');

const FormSection = (props) => {
  const styledBackground = {
    backgroundImage: 'url("../../static/images/form-background.jpg")',
  };

  return (
    <div id="contact-section">
      <div className="form-section-container" style={styledBackground}>
        <div className="form-overlay-container">
          <div className="form-overlay" />
        </div>
        <div className="form-description-container">
          {/* <h2>Uma equipa para o ajudar</h2> */}
          <p className="form-description-paragraph">
            Somos especialistas no mercado imobiliário e temos todos os meios
            necessários para realizar a venda do seu imóvel ao melhor preço, o
            mais rapidamente possível e com o menor incómodo para si e para a
            sua família.
          </p>
        </div>

        <div className="form-component-container">
          <div className="form-header">
            <FontAwesomeIcon icon={faComments} className="comments-icon" />
            <h3>Contacte-nos</h3>
          </div>
          <EvaluationForm />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
