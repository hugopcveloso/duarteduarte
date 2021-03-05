import React, { useState } from 'react';
import EvaluationForm from '../evaluation-form';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

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
          <h2>Encontre o que procura</h2>
          <p className="form-description-paragraph">
            Somos especialistas no mercado imobiliário e temos todos os meios
            necessários para realizar a venda do seu imóvel ao melhor preço, o
            mais rapidamente possível e com o menor incómodo para si e para a
            sua família. Preencha o formulário ao lado e faremos o nosso melhor
            para o ajudar.
          </p>
          <div className="socials-container">
            <h4>Acompanhe o nosso trabalho: </h4>
            <div className="form__description--socials">
              <a href="https://www.instagram.com/duartevelosoremax">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="social-icon insta-icon"
                  id="insta-icon"
                />
              </a>

              <a href="www.facebook.com/duartevelosoremax">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="social-icon"
                  id="face-icon"
                />
              </a>
            </div>
          </div>
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
