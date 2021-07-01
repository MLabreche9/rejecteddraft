import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullName: '',
			email: '',
			subject: '',
			message: ''
		};
	}
	render() {
		return (
			<div className='container containerBottom'>
				<div className='row row-content'>
					<div className='col-12 text-start mt-3 mb-3 fw-bolder'>
						<h4> Let's Talk!</h4>
						<h1>Contact Me</h1>
					</div>
				</div>
				<div>
					<Form className='col-8 text-start'>
						<FormGroup>
							<Label for='fullName'>Full Name: </Label>
							<Input
								type='text'
								name='name'
								id='fullName'
								placeholder='Full Name'
							/>
						</FormGroup>
						<FormGroup>
							<Label for='email'>Email: </Label>
							<Input type='email' name='email' id='email' placeholder='Email' />
						</FormGroup>
						<FormGroup>
							<Label for='subject'>Subject: </Label>
							<Input
								type='text'
								name='subject'
								id='subject'
								placeholder='What can I help you with'
							/>
						</FormGroup>
						<FormGroup>
							<Label for='message'>Leave a message: </Label>
							<Input
								type='textarea'
								name='message'
								id='message'
								rows='12'
								placeholder='What would you like to discuss today?'
							/>
						</FormGroup>

						<FormGroup className='mt-3'>
							<Button type='submit'>Send Message</Button>
						</FormGroup>
					</Form>
				</div>
			</div>
		);
	}
}

export default Contact;
