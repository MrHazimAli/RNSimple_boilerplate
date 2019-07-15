import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import * as CounterActions from '../actions/counter';

class Launch extends React.Component {
	Add = () => {
		this.props.increment();
	}

	Minus = () => {
		this.props.decrement();
	}

  render() {

  	const { counter, } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.text}>{counter}</Text>
        
        <View style={styles.buttonContainer}>
	        <TouchableOpacity onPress={this.Add}>
	        	<Text style={styles.label}>+</Text>
	        </TouchableOpacity>
	        <TouchableOpacity onPress={this.Minus}>
	        	<Text style={styles.label}>-</Text>
	        </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonContainer: {
		flexDirection: 'row'
	},
	title: {
		fontSize: 25,
		marginBottom: 10
	},
	text: {
		fontSize: 25
	},
	label: {
		fontSize: 20,
		color: '#c4c4c4',
		marginHorizontal: 10
	}
})

export default compose(
	connect(state => {
			return {
				counter: state.counter.get('counter')
			}
		},
		dispatch => bindActionCreators(CounterActions, dispatch)
	)
)(Launch)