import React, { Component } from 'react';
import Topic from './Topic';
import { Button, Icon, Select, Divider } from 'antd';
import TOPICS from 'utils/topics';
import ACTION_TYPE from 'reducers/actionType';
import { connect } from 'react-redux';

const { Option } = Select;

class Aca extends Component {
	state = {
		activeTopic: null
	};

	// Adding a new key into topics object
	handleClick = () => {
		const { activeTopic } = this.state;
		const newTopicsObject = Object.assign({}, this.props.topics); //{}
		newTopicsObject[activeTopic] = null;
		this.props.dispatch({
			type: ACTION_TYPE.topic,
			data: { topics: newTopicsObject }
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

				{Object.keys(topics).map((topic) => <Topic key={topic} topic={topic} />)}
				<Divider />
				<div style={{ marginBottom: 20 }}>
					<Select
						style={{ minWidth: 200, width: 'max-content', marginRight: 20 }}
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
					<Button type="primary" size="large" onClick={this.handleClick} disabled={!this.state.activeTopic}>
						Add new topic <Icon type="plus" />
					</Button>
				</div>
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

// this is how topics are stored:
/***
{
	measurement: "is competent in."
}
 */
