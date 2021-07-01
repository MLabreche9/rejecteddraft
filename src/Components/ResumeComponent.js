import React from 'react';
import {
	Card,
	CardText,
	CardBody,
	CardGroup,
	Row,
	Col,
	CardHeader,
	Container
} from 'reactstrap';

const Resume = (props) => {
	return (
		<Container>
			<Card className='card'>
				<CardHeader className='cardHeader' style={{ backgroundColor: 'teal' }}>
					Meghan La Breche
				</CardHeader>
				<CardBody>
					<CardText>
						<Row>
							<h6 className='text-secondary text-center'>
								<i className='fa fa-map-marker' /> San Marcos, California |{' '}
								<i className='fa fa-envelope' /> MvLaBreche@gmail.com |{' '}
								<i className='fa fa-github' /> Mlabreche9 |{' '}
								<i className='fa fa-linkedin' /> meghan-labreche
							</h6>
						</Row>
						<Row className='mt-2 mb-2'>
							<Col sm='8'>
								<h3 className='underline'>Professional Experience</h3>
								<h6>Gemological Institute of America</h6>
								<h6>Quality Specialist, July 2013-Present</h6>
								<ul>
									<li>
										Monitor, analyze and improve grading quality within the lab,
										in between labs and for individual graders
									</li>
									<li>
										{' '}
										Ability to communicate effectively with team members to
										complete daily processes
									</li>
									<li>
										Have trained new hire groups consisting of 30+ people in
										Mumbai, India, Gaborone, Botswana, and Carlsbad, California
									</li>
									<li>
										Have traveled to collaborate with our Quality Specialist
										teams in New York, NY, and Johanasberg, South Africa in
										regards to improving and maintaining quality standards
									</li>
									<li>
										Worked with our research and development team to collect and
										analyze data used to train an advanced artificial
										intelligence system in a collaborative project with IBM
									</li>
									<li>
										Consistently meet and exceed target producivity numbers
									</li>
								</ul>
							</Col>
							<Col sm='4' className='text-center'>
								<h3 className='underline'>Skills</h3>
								<ul className='ul text-center'>
									<li>HTML</li>
									<li>CSS</li>
									<li>Bootstrap</li>
									<li>Javascript</li>
									<li>React</li>
									<li>ReactNative</li>
									<li>Node.js</li>
									<li>Express.js</li>
									<li>MongoDB</li>
								</ul>
							</Col>
						</Row>
						<Row>
							<Col>
								<h3 className='underline'>Education</h3>
								<h6>NuCamp Coding Bootcamp</h6>
								<h6>
									Full Stack Web and Mobile App Development Bootcamp, August
									2020-January 2021
								</h6>
								<ul>
									<li>Front End to Backend building apps start to finish</li>
									<li>
										Focus on Bootstrap, React, React Native and server-side
										development with NodeJS, Express and MongoDB
									</li>
								</ul>
							</Col>
						</Row>
						<Row>
							<Col>
								<h3 className='underline'>Related Coursework</h3>
								<h6>
									<strong>Udemy</strong> The complete JavaScript Course 2021:
									From Zero to Expert
								</h6>
								<h6>
									<strong>Udemy</strong> React-The Complete Guide (incl Hooks,
									React Router, Redux)
								</h6>
							</Col>
						</Row>
					</CardText>
				</CardBody>
			</Card>
		</Container>
	);
};

export default Resume;
