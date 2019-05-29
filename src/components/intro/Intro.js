import React, { Component } from 'react';

import { Select } from 'antd';
const { Option } = Select;

export default class Intro extends Component {
	handleChange(value) {
		console.log(`selected ${value}`);
	}

	render() {
		return (
			<div>
				<h1 className="title">Introductory Paragraph</h1>
				<Select
					showSearch
					style={{ width: 200 }}
					placeholder="Select a person"
					optionFilterProp="children"
					onChange={this.handleChange}
					filterOption={(input, option) =>
						option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
				>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>
			</div>
		);
	}
}
