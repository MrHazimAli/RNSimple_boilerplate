import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CounterActions from '../actions/counter';

@connect(
	state => {
		return ({
			counter: state.counter
		})
	},
	dispatch => bindActionCreators(CounterActions, dispatch)
)
export default class Launch extends Component {

	Add = () => {
		this.props.increment();
	}

	Minus = () => {
		this.props.decrement();
	}

  render() {

  	const { counter } = this.props;

    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Text>{counter}</Text>
        <TouchableOpacity onPress={this.Add}>
        	<Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.Minus}>
        	<Text>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
