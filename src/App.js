import React from 'react';
import { Row, Col } from 'antd';

import Report from './components/Report';
import Intro from './components/intro/Intro';
import Aca from './components/aca/Aca';
import Extra from './components/extra/Extra';
import Free from './components/free/Free';

import 'antd/dist/antd.css';
import './styles/App.scss';

function App() {
	return (
		<div className="app-container">
			<Row>
				<Col span={24}>
					<h1 className="big-bold-text">Louie Senpai</h1>
				</Col>
			</Row>
			<Row>
				<Col sm={24} md={24} lg={12}>
					<Intro />
				</Col>
				<Col sm={24} md={24} lg={12}>
					<Aca />
				</Col>
			</Row>

			<Row>
				<Col sm={24} md={24} lg={12}>
					<Extra />
				</Col>
				<Col sm={24} md={24} lg={12}>
					<Free />
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Report />
				</Col>
			</Row>
		</div>
	);
}

export default App;
