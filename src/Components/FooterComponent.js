import React from 'react';

function Footer(props) {
	return (
		<footer className='site-footer'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-6 col-sm-3'>
						<a
							className='btn btn-social-icon btn-linkedin'
							href='https://github.com/MLabreche9'
						>
							<i className='fa fa-github' />
						</a>{' '}
						<a
							className='btn btn-social-icon btn-linkedin'
							href='https://www.linkedin.com/in/meghan-labreche'
						>
							<i className='fa fa-linkedin' />
						</a>{' '}
						<a
							className='btn btn-social-icon btn-linkedin'
							href='mailto:mvlabreche@gmail.com'
						>
							<i className='fa fa-envelope fa-lg' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
