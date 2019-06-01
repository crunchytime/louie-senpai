import React, { Component } from 'react';
import { connect } from 'react-redux';

import ACTION_TYPE from 'reducers/actionType';
import Name from './Name';
import Gender from './Gender';
import Quality from './Quality';
import Character from './Character';

import asFormCard from 'components/hoc/FormCard';

class Intro extends Component {
	handleChange = (value) => {
		this.props.dispatch({
			type: ACTION_TYPE.name,
			data: { name: value }
		});
	};

	render() {
		return (
			<div>
				<Name />
				<Gender />
				{/* <Rate /> */}
				<Character />
				<Quality />
			</div>
		);
	}
}

export default asFormCard(connect()(Intro), '1.Introduction');
