import React, { Component } from 'react';
import { connect } from 'react-redux';
import asFormCard from 'components/hoc/FormCard';
import { Input } from 'antd';
import ACTION_TYPE from 'reducers/actionType';
const { TextArea } = Input;

class Free extends Component {
	onChange = (event) => {
		const { value } = event.target;
		this.props.dispatch({ type: ACTION_TYPE.free, data: { freeFormFeedback: value } });
	};
	render() {
		return (
			<div>
				<TextArea className="free-form-feedback-input" rows={4} onChange={this.onChange} />
			</div>
		);
	}
}

export default connect()(asFormCard(Free, 'Give free form feedback on your student'));
