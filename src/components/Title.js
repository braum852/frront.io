import React, {Component} from 'react';
import Signup from './Signup';

export default class Title extends Component {
	render() {
		return (
            
			<div>
                <h1>What's on my bucket list?</h1><br></br>
						<div>
						  <i>Everywhere.</i><br></br>
						  <br></br>
						  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
							  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
							  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
							  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
							  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
							  anim id est laborum."</p>
							  <br></br>
							  <p>"I would totally give up travelling, but I'm not a quitter"</p>

                        </div>
                    <Signup />
			</div>
		);
	}
}