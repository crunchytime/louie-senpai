import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rate } from 'antd';
import ACTION_TYPE from 'reducers/actionType';
import asFormField from 'components/hoc/FormField';
class Quality extends Component {
	onChange = (score) => {
		const quality = score * 2;
		this.props.dispatch({ type: ACTION_TYPE.quality, data: { quality: quality } });
	};
	render() {
		return (
			<Rate
				character="好"
				value={this.props.quality / 2}
				allowHalf
				onChange={this.onChange}
				style={{ fontSize: 60, color: 'dodgerblue' }}
				className="quality-icon"
			/>
		);
	}
}

const mapStateToProps = (store) => {
	const { quality } = store.qualityReducer;
	return {
		quality: quality
	};
};

export default asFormField(connect(mapStateToProps)(Quality), 'How do you rate their quality of work?');
