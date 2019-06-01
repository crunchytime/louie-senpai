import React, { Component } from 'react';
import Improvement from 'components/extra/Improvement';
import asFormCard from 'components/hoc/FormCard';
class Extra extends Component {
	render() {
		return (
			<div>
				<Improvement />
			</div>
		);
	}
}

export default asFormCard(Extra, 'Extra Information');
