import React, {Component} from 'react';
import {Text, View} from 'react-native';
class Display extends Component{
	render(){
		let display = this.props.text;
		return(
			<Text>{display}</Text>
		);
	}
}
module.exports = Display;