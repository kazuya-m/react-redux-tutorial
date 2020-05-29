import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions';

class App extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <h3>Now : {props.value}</h3>
        <button onClick={props.increment}>+1</button> 
        <button onClick={props.decrement}>-1</button>
        <button onClick={props.reset}>RESET!</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
