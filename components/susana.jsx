import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
const Susana = (props) => {
  return (
    <div className="person-container">
      <Image
        src="/static/images/susana-cut.jpg"
        alt="Picture of the author"
        className="person-photo"
        width="100"
        height="100"
        layout="responsive"
      />
      <h4>Susana Duarte</h4>
      <p>
        Sou licenciada em Publicidade e Marketing e conto com 20 anos de
        experiência em vendas. No meu percurso profissional as pessoas sempre
        estiveram em primeiro lugar.{' '}
      </p>
      <p>
        {' '}
        Dedicação, disponibilidade, honestidade e foco são o segredo do meu
        sucesso.
      </p>
      {/* <Button variant="team" onClick={() => setModalShow(true)}>
					Acerca
				</Button> */}
      {/* <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} /> */}
    </div>
  );
};

export default Susana;
