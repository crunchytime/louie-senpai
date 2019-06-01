import React, { Component } from 'react';

import ACTION_TYPE from 'reducers/actionType';
import Name from './Name';
import Gender from './Gender';
import Quality from './Quality';
import Character from './Character';

import asFormCard from 'components/hoc/FormCard';

class Intro extends Component {
	render() {
		return (
			<div>
				<Name />
				<Gender />
				<Character />
				<Quality />
			</div>
		);
	}
}

export default asFormCard(Intro, 'Introduction');
