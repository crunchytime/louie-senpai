// This function takes a component...
import React from 'react';
export default function asFormCard(WrappedComponent, heading) {
	// ...and returns another component...
	return class extends React.Component {
		render() {
			return (
				<div className="section-container">
					<h1 className="title">{heading}</h1>
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	};
}
