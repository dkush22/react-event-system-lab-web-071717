import React from 'react';


class Keypad extends React.Component {

	listener = () => {
		console.log("Entering password...")
	}
render() {
	return (
		<input onKeyUp={this.listener} type="password"/>)
}
}


export default Keypad
