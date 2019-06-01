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
		<div>
			<Row className="top-hero">
				<Col span={24}>
					<div className="center-content-container">
						<h1 className="big-bold-text">Louie Senpai</h1>
					</div>
				</Col>
			</Row>

			<div className="app-container">
				<Row>
					<Col sm={24} md={24} lg={24}>
						<Intro />
						<Aca />
						<Extra />
						<Free />
					</Col>
				</Row>

				<Row>
					<Col span={24}>
						<Report />
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default App;
