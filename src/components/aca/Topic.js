import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select, Button } from 'antd';
import ACTION_TYPE from 'reducers/actionType';
import asFormField from 'components/hoc/FormField';
import TOPIC_PERFORMANCE from 'utils/topicPerformance';

const { Option } = Select;

class Topic extends Component {
	handlePerformanceChange = (value) => {
		const { topic } = this.props;
		const newTopicsObject = Object.assign({}, this.props.topics); //{}
		newTopicsObject[topic] = value;
		this.props.dispatch({
			type: ACTION_TYPE.topic,
			data: { topics: newTopicsObject }
		});
	};

	handleRemoveTopic = () => {
		const { topic } = this.props;
		const newTopicsObject = Object.assign({}, this.props.topics); //{}
		delete newTopicsObject[topic];
		this.props.dispatch({
			type: ACTION_TYPE.topic,
			data: { topics: newTopicsObject }
		});
	};
	render() {
		const { topic, name } = this.props;
		return (
			<div>
				<div className="display-card">{name ? name : "(Student's first name)"}</div>
				<Select
					style={{ width: 'max-content', minWidth: 400, marginBottom: 10, marginLeft: 20, marginRight: 20 }}
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
				<div className="display-card"> {topic}.</div>
				<br />
				<Button type="danger" size="large" onClick={this.handleRemoveTopic}>
					Remove this topic
				</Button>
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	const { topics } = store.topicReducer;
	const { name } = store.nameReducer;
	return {
		topics: topics,
		name: name
	};
};

export default asFormField(connect(mapStateToProps)(Topic), 'Fill in the blank');
