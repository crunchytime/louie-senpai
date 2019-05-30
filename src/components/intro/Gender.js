import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radio } from 'antd';
import ACTION_TYPE from 'reducers/actionType';
import asFormField from 'components/hoc/FormField';
class Gender extends Component {
	onChange = (e) => {
		this.props.dispatch({
			type: ACTION_TYPE.gender,
			data: { gender: e.target.value }
		});
	};
	render() {
		return (
			<Radio.Group onChange={this.onChange} value={this.props.gender} size="large" buttonStyle="solid">
				<Radio.Button value={'boy'}>{'boy'}</Radio.Button>
				<Radio.Button value={'girl'}>{'girl'}</Radio.Button>
			</Radio.Group>
		);
	}
}

const mapStateToProps = (store) => {
	const { gender } = store.genderReducer;
	return {
		gender: gender
	};
};

export default asFormField(connect(mapStateToProps)(Gender), 'This student is a');
