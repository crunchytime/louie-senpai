// This function takes a component...
import React from 'react';
export default function asFormField(WrappedComponent, label) {
	// ...and returns another component...
	return class extends React.Component {
		render() {
			return (
				<div className="subsection-container">
					<h2 className="label">{label}</h2>
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	};
}
