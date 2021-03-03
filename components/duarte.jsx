import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
const Duarte = (props) => {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        dialogClassName="modal-width"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header className="modal-header" closeButton />

        <Modal.Body closeButton>
          <div id="about-container">
            <div id="about-image-container">
              <Image
                id="about-photo"
                src="../static/images/fotoperfilduarte.jpg"
                alt="duarte-veloso"
              />
            </div>
            <div id="about-text-container">
              <h1>O #1 AGENTE IMOBILIÁRIO EM LISBOA</h1>
              <p>
                Sunt do ex ea cillum anim enim. Do labore pariatur aliqua aliqua
                amet tempor proident. Eiusmod reprehenderit dolore qui officia
                enim aute sint esse. Deserunt aliquip deserunt voluptate velit.
                Esse anim proident ea sit magna aute incididunt eu cupidatat
                commodo proident nisi dolor dolore. Magna ipsum ullamco
                voluptate minim. Enim adipisicing labore mollit exercitation
                commodo eu. Laborum laborum adipisicing laborum laborum
                excepteur consequat non fugiat qui et. Do aute aute esse eu
                dolor. Deserunt exercitation velit ea proident
              </p>
              <br />
              <div id="about-icons-container">
                <div className="about-grid-item">
                  <FontAwesomeIcon icon={faBriefcase} />
                  <p>Tecnologia</p>
                </div>
                <div className="about-grid-item">
                  <FontAwesomeIcon icon={faNetworkWired} />
                  <p>Empenho</p>
                </div>
                <div className="about-grid-item">
                  <FontAwesomeIcon icon={faBriefcase} />
                  <p>Inovação</p>
                </div>
                <div className="about-grid-item">
                  <FontAwesomeIcon icon={faNetworkWired} />
                  <p>Contactos</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="team" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function DuarteAbout() {
    const [modalShow, setModalShow] = React.useState(false);

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
        <p>
          Sunt do ex ea cillum anim enim. Do labore pariatur aliqua aliqua amet
          tempor proident. Eiusmod reprehenderit dolore qui officia enim aute
          sint esse. Deserunt aliquip deserunt voluptate velit.{' '}
        </p>
        {/* <Button variant="team" onClick={() => setModalShow(true)}>
					Acerca
				</Button>
				<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} /> */}
      </div>
    );
  }

  return <DuarteAbout />;
};

export default Duarte;
