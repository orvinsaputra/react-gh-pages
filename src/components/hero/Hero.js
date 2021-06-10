import React, { Component } from 'react';
import Form from '../main/Form';
// import RenderUIForm from '../forms/RenderUIForm';

class Hero extends Component {
	componentDidMount() {
		
	}

	render() {
		const { title, content} = this.props;

		return (
			<section className="hero">
				<div className="container">
					<div className="hero-inner">
						<div className="hero-copy">
							<div className="container-sm">
								<h1 className="hero-title h2-mobile mt-0 is-revealing">
									{title}
								</h1>
								<p className="hero-paragraph is-revealing">{content}</p>
							</div>
							<Form/>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Hero;
