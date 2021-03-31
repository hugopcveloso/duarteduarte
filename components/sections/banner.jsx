import React, { useState, useRef } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { scroller, animateScroll } from 'react-scroll';
import Video from '../../static/video/lisbonvideo.mp4';
import { motion, AnimatePresence } from 'framer-motion';
const Banner = () => {
  const [showBlocks, setShowBlocks] = useState(true);
  const refVideo = useRef(null);
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    duration: 2,
    show: {
      opacity: 1,

      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="banner-container">
      <video
        src={Video}
        ref={refVideo}
        preload={'auto'}
        autoPlay
        loop
        muted
        className="video-container"
      />
      {/* <video
        ref={refVideo}
        preload={'auto'}
        autoPlay
        loop
        muted
        className="video-container"
      >
        <source src="../../static/video/lisbonvideo.mp4" type="video/mp4" />
      </video> */}
      <div className="video-overlay-container">
        <div className="video-overlay" />
      </div>
      <header className="navbar-container">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="transparent"
          onToggle={() => {
            setShowBlocks(!showBlocks);
          }}
        >
          <Navbar.Brand href="#home" id="navbar-logo">
            Duarte Veloso
            <br />& Susana Duarte
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <FontAwesomeIcon icon={faBars} className="burguer-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className="navbar-test">
            <Nav className="mr-auto">
              <Nav.Link
                href="#portfolio"
                className="menu-link"
                onSelect={() =>
                  scroller.scrollTo('portfolio-section', {
                    smooth: true,
                    offset: -30,
                    duration: 500,
                  })
                }
              >
                Casas
              </Nav.Link>
              <Nav.Link
                href="#team-section"
                className="menu-link"
                onSelect={() =>
                  scroller.scrollTo('team-section', {
                    smooth: true,
                    offset: -30,
                    duration: 1000,
                  })
                }
              >
                Equipa
              </Nav.Link>
              <Nav.Link
                href="#area-section"
                className="menu-link"
                onSelect={() =>
                  scroller.scrollTo('area-section', {
                    smooth: true,
                    offset: -30,
                    duration: 1500,
                  })
                }
              >
                Bairros
              </Nav.Link>
              <Nav.Link
                href="#contact-section"
                className="menu-link"
                onSelect={() =>
                  scroller.scrollTo('contact-section', {
                    smooth: true,
                    offset: -30,
                    duration: 2000,
                  })
                }
              >
                Contactos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <div className="banner-content">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={
            showBlocks
              ? 'centering-buttons-container'
              : 'centering-buttons-container hide'
          }
        >
          <Button
            as={motion.button}
            variants={item}
            variant="cta-banner"
            href=""
            onClick={() =>
              scroller.scrollTo('contact-section', {
                smooth: true,
                offset: -30,
                duration: 2000,
              })
            }
          >
            Avaliar Casa
          </Button>
          <Button
            as={motion.button}
            variants={item}
            variant="cta-banner"
            href=""
            onClick={() =>
              scroller.scrollTo('portfolio-section', {
                smooth: true,
                offset: -30,
                duration: 2000,
              })
            }
          >
            {' '}
            Encontrar Casa{' '}
          </Button>
          <Button
            as={motion.button}
            variants={item}
            variant="cta-banner"
            hreaf=""
            onClick={() =>
              scroller.scrollTo('contact-section', {
                smooth: true,
                offset: -30,
                duration: 2000,
              })
            }
          >
            {' '}
            Vender Casa{' '}
          </Button>
        </motion.div>
      </div>
      <FontAwesomeIcon
        icon={faArrowCircleDown}
        className="scroll-arrow"
        onClick={() =>
          scroller.scrollTo('portfolio-section', {
            smooth: true,
            offset: -30,
            duration: 1000,
          })
        }
      />
    </div>
  );
};

export default Banner;
