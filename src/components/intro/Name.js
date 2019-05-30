import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';
import NAMES from 'utils/names';
import asFormField from 'components/hoc/FormField';
const { Option } = Select;
class Name extends Component {
	render() {
		return (
			<Select
				size="large"
				style={{ width: 200 }}
				showSearch
				placeholder="BIG BOI"
				optionFilterProp="children"
				onChange={this.handleChange}
				filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
			>
				{NAMES.map((name) => (
					<Option key={name} value={name}>
						{name}
					</Option>
				))}
			</Select>
		);
	}
}

export default asFormField(connect()(Name), "Select your student's name");
