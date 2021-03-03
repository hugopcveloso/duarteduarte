import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
const Susana = (props) => {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        dialogClassName="modal-width"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header className="modal-header" closeButton />
        <Modal.Body>
          <div id="about-container">
            <div id="about-image-container">
              <img
                id="about-photo"
                src={require(`../static/images/susana.jpg`)}
                alt=""
              />
            </div>
            <div id="about-text-container">
              <h1>A #1 AGENTE IMOBILIÁRIO EM LISBOA</h1>
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

  function SusanaAbout() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <div className="person-container">
        {/* <img
          src={require(`../static/images/susana-cut.jpg`)}
          className="person-photo"
          alt=""
        /> */}
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
          Sunt do ex ea cillum anim enim. Do labore pariatur aliqua aliqua amet
          tempor proident. Eiusmod reprehenderit dolore qui officia enim aute
          sint esse. Deserunt aliquip deserunt voluptate velit.{' '}
        </p>
        {/* <Button variant="team" onClick={() => setModalShow(true)}>
					Acerca
				</Button> */}
        {/* <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} /> */}
      </div>
    );
  }

  return <SusanaAbout />;
};

export default Susana;
