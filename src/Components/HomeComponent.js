import React from 'react';
import { Card, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

function Home(props) {
	return (
		<div className='backgroundImage'>
			<Container>
				<Card className='card'>
					<h3> Hello! My name is </h3>
					<h1> Meghan La Breche</h1>
					<p>
						<strong>and welcome to my page.</strong> My goal is to pursue a
						fulfilling career in web development. I completed NuCamp's Full
						Stack web and mobile app development Bootcamp in the beginning of
						2021. Wanting to understand the material covered on a deeper level,
						I signed up for coursework on Udemy. I completed a course on
						Javascript, I'm currently taking a deeper dive into React, and
						instruction on React Native, Node.js, Express, MongoDB, Python and
						Data Science are queued on the agenda. While most of my free time is
						spent thinking at the computer these days, when I do find a free
						moment I like to exercise, read, and woodwork.
					</p>
				</Card>
				<div className='text-center'>
					<h2>Skills Overview</h2>
					<p>
						Below is a quick overview of my main technical skillset, and the
						tools I have familiarity with.
					</p>
				</div>

				<Row>
					<Col sm='4'>
						<Card className='smallCard'>
							<CardText>
								<ul className='fa-ul'>
									<li className='listcheck'>
										<span class='fa-li'>
											<i class='fa fa-check'></i>
										</span>
										HTML
									</li>
									<li className='listcheck'>
										<span class='fa-li'>
											<i class='fa fa-check'></i>
										</span>
										Javascript
									</li>
									<li className='listcheck'>
										<span class='fa-li'>
											<i class='fa fa-check'></i>
										</span>
										CSS
									</li>
									<li className='listcheck'>
										<span class='fa-li'>
											<i class='fa fa-check'></i>
										</span>
										Bootstrap
									</li>
									<li className='listcheck'>
										<span class='fa-li'>
											<i class='fa fa-check'></i>
										</span>
										React
									</li>
								</ul>
							</CardText>
						</Card>
					</Col>
					<Col sm='4'>
						<Card className='smallCard'>
							<CardText>
								<ul className='fa-ul'>
									<li className='listcheck'>
										<span class='fa-li'>
											<i class='fa fa-check'></i>
										</span>
										React Native
									</li>
									<li className='listcheck'>
										<span class='fa-li'>
											<i class='fa fa-check'></i>
										</span>
										Redux
									</li>
									<li className='listcheck'>
										<span class='fa-li'>
											<i class='fa fa-check'></i>
										</span>
										Node.js
									</li>
									<li className='listcheck'>
										<span class='fa-li'>
											<i class='fa fa-check'></i>
										</span>
										Express.js
									</li>
									<li className='listcheck'>
										<span class='fa-li'>
											<i class='fa fa-check'></i>
										</span>
										MongoDB
									</li>
								</ul>
							</CardText>
						</Card>
					</Col>
					<Col sm='4'>
						<Card className='smallCard'>
							<CardText>
								<ul className='fa-ul'>
									<li className='listcheck'>
										<span class='fa-li'>
											<i class='fa fa-check'></i>
										</span>
										Mongoose
									</li>
									<li className='listcheck'>
										<span class='fa-li'>
											<i class='fa fa-check'></i>
										</span>
										NPM
									</li>
									<li className='listcheck'>
										<span class='fa-li'>
											<i class='fa fa-check'></i>
										</span>
										VS Code
									</li>
									<li className='listcheck'>
										<span class='fa-li'>
											<i class='fa fa-check'></i>
										</span>
										Git/Github
									</li>
									<li className='listcheck'>
										<span class='fa-li'>
											<i class='fa fa-check'></i>
										</span>
										Postman
									</li>
								</ul>
							</CardText>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Home;
