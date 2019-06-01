import React, { Component } from 'react';
import Topic from './Topic';
import { Button, Icon, Select } from 'antd';
import TOPICS from 'utils/topics';
import ACTION_TYPE from 'reducers/actionType';
import { connect } from 'react-redux';

const { Option } = Select;

class Aca extends Component {
	state = {
		activeTopic: null
	};

	handleClick = () => {
		const newTopics = Array.from(this.props.topics);
		newTopics.push(this.state.activeTopic);
		this.props.dispatch({
			type: ACTION_TYPE.topic,
			data: { topics: newTopics }
		});
	};

	handleTopicChange = (value) => {
		this.setState({ activeTopic: value });
	};

	render() {
		const { topics } = this.props;

		return (
			<div className="section-container">
				<h1 className="title">Performance in individual topics</h1>
				<Select
					style={{ width: 400, marginRight: 20 }}
					onChange={this.handleTopicChange}
					placeholder="Choose a topic"
					size="large"
				>
					{TOPICS.filter((topic) => !Object.keys(this.props.topics).includes(topic)).map((topic) => (
						<Option key={topic} value={topic}>
							{topic}
						</Option>
					))}
				</Select>
				<Button type="primary" size="large" onClick={this.handleClick}>
					Add new topic <Icon type="plus" />
				</Button>
				{topics.map((topic) => <Topic key={topic} topic={topic} />)}
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

export default connect(mapStateToProps)(Aca);
