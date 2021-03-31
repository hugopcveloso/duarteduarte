import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Duarte = (props) => {
  return (
    <div className="person-container">
      <Image
        src="/static/images/duarte-cut.jpg"
        alt="Picture of the author"
        className="person-photo"
        width="100"
        height="100"
        layout="responsive"
      />
      <h4>Duarte Veloso</h4>
      <p>Empreendedor desde jovem com a criação de uma start-up de sucesso. </p>
      <p>
        O meu foco sempre foi prestar um serviço de excelência, assente na
        confiança, ética e honestidade.
      </p>

      {/* <Button variant="team" onClick={() => setModalShow(true)}>
					Acerca
				</Button>
				<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} /> */}
    </div>
  );
};

export default Duarte;
