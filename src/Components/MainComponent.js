import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Resume from './ResumeComponent';
import Contact from './ContactComponent';

class Main extends Component {
	render() {
		const HomePage = () => {
			return <Home />;
		};

		const ResumePage = () => {
			return <Resume />;
		};

		const ContactPage = () => {
			return <Contact />;
		};

		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route path='/resume' component={ResumePage} />
					<Route path='/contact' component={ContactPage} />
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;
