import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

class About extends Component {
	render() {
		return (
			<div id="about-container">
				<div id="about-image-container">
					<img id="about-photo" src={require(`../images/fotoperfilduarte.jpg`)} alt="" />
				</div>
				<div id="about-text-container">
					<h1>O #1 AGENTE IMOBILIÁRIO EM LISBOA</h1>
					<p>
						Sunt do ex ea cillum anim enim. Do labore pariatur aliqua aliqua amet tempor proident. Eiusmod reprehenderit
						dolore qui officia enim aute sint esse. Deserunt aliquip deserunt voluptate velit. Esse anim proident ea sit
						magna aute incididunt eu cupidatat commodo proident nisi dolor dolore. Magna ipsum ullamco voluptate minim.
						Enim adipisicing labore mollit exercitation commodo eu. Laborum laborum adipisicing laborum laborum
						excepteur consequat non fugiat qui et. Do aute aute esse eu dolor. Deserunt exercitation velit ea proident
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
		);
	}
}

export default About;
