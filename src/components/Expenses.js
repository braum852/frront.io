import React, {Component} from 'react';
import { Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container"

export default class Expenses extends Component {
	render() {
		return (
			<Container>
				<Stack direction="horizontal" gap="2" className="mb-4">
				<h1 className="me-auto" >Expenses</h1>
				</Stack>
			</Container>
		);
	}
}