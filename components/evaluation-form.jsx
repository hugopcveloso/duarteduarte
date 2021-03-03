import React from 'react';

export default class EvaluationForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: ''
		};
	}

	render() {
		const { status } = this.state;
		return (
			<form onSubmit={this.submitForm} action="https://formspree.io/xwkrgyqa" method="POST">
				{/* <!-- add your custom form HTML here --> */}
				<label>Email:</label> <br />
				<input type="email" name="email" className="form-input" />
				<br />
				<label>Message:</label> <br />
				<textarea type="text" name="message" className="form-input" rows={5} />
				<br />
				{status === 'SUCCESS' ? <p>Thanks!</p> : <button className="contact-button">Submit</button>}
				{status === 'ERROR' && <p>Ooops! There was an error.</p>}
			</form>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: 'SUCCESS' });
			} else {
				this.setState({ status: 'ERROR' });
			}
		};
		xhr.send(data);
	}
}
