import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Select } from 'antd';
import { Input } from 'antd';
// import NAMES from 'utils/names';
import asFormField from 'components/hoc/FormField';
import ACTION_TYPE from 'reducers/actionType';
// const { Option } = Select;
class Name extends Component {
	onChange = (event) => {
		const input = event.target.value;
		this.props.dispatch({
			type: ACTION_TYPE.name,
			data: { name: input }
		});
	};
	render() {
		return (
			<Input onChange={this.onChange} />
			// <Select
			// 	size="large"
			// 	style={{ width: 200 }}
			// 	showSearch
			// 	placeholder="BIG BOI"
			// 	optionFilterProp="children"
			// 	onChange={this.handleChange}
			// 	filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
			// >
			// 	{NAMES.map((name) => (
			// 		<Option key={name} value={name}>
			// 			{name}
			// 		</Option>
			// 	))}
			// </Select>
		);
	}
}

export default asFormField(connect()(Name), "Enter your student's first name");
