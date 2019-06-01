import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
import ACTION_TYPE from 'reducers/actionType';
import asFormField from 'components/hoc/FormField';
import IMPROVEMENT_AREAS from 'utils/improvement';
class Improvement extends Component {
	onChange = (values) => {
		this.props.dispatch({
			type: ACTION_TYPE.improve,
			data: { improvement: values }
		});
	};

	render() {
		return (
			// <Radio.Group onChange={this.onChange} value={this.props.improvement} size="large" buttonStyle="solid">
			// 	{IMPROVEMENT_AREAS.map((imp) => (
			// 		<Radio.Button key={imp} value={imp}>
			// 			{imp}
			// 		</Radio.Button>
			// 	))}
			// </Radio.Group>
			<Checkbox.Group options={IMPROVEMENT_AREAS} onChange={this.onChange} className="large-checkbox" />
		);
	}
}

const mapStateToProps = (store) => {
	const { improvement } = store.improvementReducer;
	return {
		improvement: improvement
	};
};

export default asFormField(connect(mapStateToProps)(Improvement), 'In what areas can this student improve?');
