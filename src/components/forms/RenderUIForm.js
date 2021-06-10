import React, { Component } from 'react';
import classnames from 'classnames';

class RenderUIForm extends Component {
	constructor(props) {
		super(props);
		this.state = { JSONInput: '' };
	}

	render() {
		const { className, submit = 'Submit' } = this.props;
		const { JSONInput } = this.state;

		return (
			<form
				className={classnames(
					'render-UI-form field field-grouped is-revealing',
					className
				)}
			>
				<div className="control control-expanded">
					<input
						className="input"
						type="textbox"
						name="JSONInput"
						placeholder="Input JSON Format Here. . ."
					/>
				</div>
				<div className="control">
					<button
						className="button button-primary button-block button-shadow"
						type="submit"
					>
						{submit}
					</button>
				</div>
			</form>
		);
	}
}

export default RenderUIForm;
