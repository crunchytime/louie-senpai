import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Affix, Card } from 'antd';
import QUALITY from 'utils/quality';

class Preview extends Component {
	printName = () => {
		const { name } = this.props;
		if (name) {
			return name;
		} else {
			return '(Student Name)';
		}
	};

	beginsWithVowel = (word) => {
		if (!word) return false;
		const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
		if (vowels.some((vowel) => vowel === word[0].toLowerCase())) {
			return true;
		} else {
			return false;
		}
	};

	printCharacteristics = () => {
		const { characteristics } = this.props;
		if (!characteristics || characteristics.length === 0) {
			return '(Insert characteristics)';
		}
		const firstChara = characteristics[0];
		let beginning;
		if (this.beginsWithVowel(firstChara)) {
			beginning = 'an';
		} else {
			beginning = 'a';
		}
		return `${beginning} ${this.printList(characteristics)}`;
	};

	printList = (list) => {
		if (!list || list.length === 0) return '';
		if (list.length === 1) {
			return list;
		} else {
			if (list.length === 2) {
				const twoElements = list.join(' and ');
				return twoElements;
			} else {
				// more than 2
				const mainList = list.slice(0, list.length - 1).join(', ');
				const lastElement = list.pop();
				return `${mainList} and ${lastElement}`;
			}
		}
	};

	printQuality = () => {
		const { quality } = this.props;
		const genericQuality = QUALITY[quality];
		return this.formatGender(genericQuality);
	};

	formatGender = (source) => {
		if (!source) return source;
		const { gender } = this.props;
		const regex = /\|\w+\,\w+\|/gi;
		let matches;
		let newString = source;
		do {
			matches = regex.exec(source);
			if (matches) {
				const match = matches[0];
				const strippedMatch = matches[0].replace(/\|/g, '');
				const options = strippedMatch.split(',');
				if (gender === 'boy') {
					newString = newString.replace(match, options[0]);
				} else {
					newString = newString.replace(match, options[1]);
				}
			}
		} while (matches);

		return newString;
	};

	printSimpleGender = () => {
		const { gender } = this.props;
		if (gender === 'boy') {
			return 'he';
		} else {
			return 'she';
		}
	};

	capitalise = (someString) => {
		if (!someString || someString.length === 0) return null;
		if (someString.length === 1) return someString[0].toUpperCase();
		return someString[0].toUpperCase() + someString.slice(1, someString.length).toLowerCase();
	};

	printImprovements = () => {
		const { improvement } = this.props;
		if (!improvement || improvement.length === 0) return '(Insert areas of improvement)';
		return this.printList(improvement);
	};

	printFreeFormFeedback = () => {
		const { freeFormFeedback } = this.props;
		console.log('ere tey are: ', freeFormFeedback);
		return freeFormFeedback;
	};
	render() {
		const { topics } = this.props;
		return (
			<Affix offsetTop={300}>
				<h1 className="title">Report Preview</h1>
				<Card className="preview">
					{this.printName()} is {this.printCharacteristics()} student who {this.printQuality()}.<br />
					{Object.keys(topics).map(
						(key) => `${this.capitalise(this.printSimpleGender())} ${topics[key]} ${key}. `
					)}
					<br />
					{this.printName()} could improve with {this.printImprovements()}. <br />
					{this.printFreeFormFeedback()}
				</Card>
			</Affix>
		);
	}
}

const mapStateToProps = (store) => {
	const { name } = store.nameReducer;
	const { characteristics } = store.characteristicReducer;
	const { gender } = store.genderReducer;
	const { quality } = store.qualityReducer;
	const { topics } = store.topicReducer;
	const { improvement } = store.improvementReducer;
	const { freeFormFeedback } = store.freeReducer;
	return {
		name: name,
		gender: gender,
		characteristics: characteristics,
		quality,
		quality,
		topics: topics,
		improvement: improvement,
		freeFormFeedback: freeFormFeedback
	};
};
export default connect(mapStateToProps)(Preview);
