import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';
import ACTION_TYPE from 'reducers/actionType';
import asFormField from 'components/hoc/FormField';
import TOPIC_PERFORMANCE from 'utils/topicPerformance';

const { Option } = Select;

class Topic extends Component {
	handlePerformanceChange = (value) => {
		console.log(`selected ${value}`);
	};
	render() {
		const { topic } = this.props;
		console.log('passed in topic: ', topic);
		return (
			<div>
				<Select
					style={{ width: 400, marginBottom: 10 }}
					onChange={this.handlePerformanceChange}
					placeholder="How did the student perform?"
					size="large"
				>
					{TOPIC_PERFORMANCE.map((topic) => (
						<Option key={topic} value={topic}>
							{topic}
						</Option>
					))}
				</Select>
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	const { topics } = store.topicReducer;
	return {
		topics: topics
	};
};

export default asFormField(connect(mapStateToProps)(Topic), 'Rate how this student performed on individual topics');

/*** 
 store as an object: {
     measurement: {topic: "measurement", rating: "has really struggled with"},
 }
 */
