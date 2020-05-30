import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset, showYourName } from '../actions';

class App extends Component {
  render() {
    const props = this.props;
    
    return (
      <React.Fragment>
        <h3>Now : {props.value}</h3>
        <button onClick={props.increment}>+1</button> 
        <button onClick={props.decrement}>-1</button>
        <button onClick={props.reset}>RESET!</button>
        <h3>{props.yourname}</h3>
        <button onClick={this.props.showYourName('a')} id='input'>name</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { value: state.count.value,
           yourname: state.getname.yourname
          }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
    showYourName: inputname => dispatch(showYourName(inputname))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
