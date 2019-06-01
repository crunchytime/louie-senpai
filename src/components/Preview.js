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

		if (characteristics.length === 1) {
			return `${beginning} ${characteristics}`;
		} else {
			if (characteristics.length === 2) {
				const charaList = characteristics.join(' and ');
				return `${beginning} ${charaList}`;
			} else {
				// more than 2
				const charaList = characteristics.slice(0, characteristics.length - 1).join(', ');
				const lastChara = characteristics.pop();
				return `${beginning} ${charaList} and ${lastChara}`;
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

	printGender = () => {
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

	render() {
		const { name, gender } = this.props;
		return (
			<Affix offsetTop={300}>
				<h1 className="title">Report Preview</h1>
				<Card className="preview">
					{this.printName()} is {this.printCharacteristics()} student who {this.printQuality()}.<br />
					{this.capitalise(this.printGender())} (options: Ranked 1-5 feedback on topic 1) (Dropbox for topic
					1) and (options :ranked 1-5 feedback on topic 2) (drop box for topic two). 3. {name} could improve
					with (tick box options: respect) (tickbox option: classwork) (tickbox option homework). 4. {gender}[inset
					text: concluding statement]
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
	return {
		name: name,
		gender: gender,
		characteristics: characteristics,
		quality,
		quality,
		topics: topics
	};
};
export default connect(mapStateToProps)(Preview);
