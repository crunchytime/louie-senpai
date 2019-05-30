import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radio } from 'antd';
import RATINGS from 'utils/ratings';
import ACTION_TYPE from 'reducers/actionType';
import asFormField from 'components/hoc/FormField';
class Rate extends Component {
	onChange = (e) => {
		this.props.dispatch({
			type: ACTION_TYPE.rate,
			data: { rate: e.target.value }
		});
	};
	render() {
		return (
			<Radio.Group onChange={this.onChange} value={this.props.rate} size="large" buttonStyle="solid">
				{RATINGS.map((rate) => (
					<Radio.Button key={rate} value={rate}>
						{rate}
					</Radio.Button>
				))}
			</Radio.Group>
		);
	}
}

const mapStateToProps = (store) => {
	const { rate } = store.rateReducer;
	return {
		rate: rate
	};
};

export default asFormField(connect(mapStateToProps)(Rate), 'Rate this student');
