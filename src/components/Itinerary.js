import React, {Component} from 'react';
import Map from './Map/Map'
import { ChakraProvider, theme } from '@chakra-ui/react'
import Header from './Header';

export default class Itinerary extends Component {
	render() {
		return (
			<div>
				<div>
					<Header/>
				</div>
				 <ChakraProvider theme={theme}>
						  <Map/>
					</ChakraProvider>
			</div>
			
		);
	}
}