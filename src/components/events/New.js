import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

//import { postEvent } from '../actions';

class EventsNew extends Component {
  renderEvents() {
    return _.map(this.props.events, (event, ind) => (
      <tr key={ind}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {    
    return (
      <React.Fragment>
        test
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => {
//   return { events: state.events }
// }

// const mapDispatchToProps = ({postEvent}); 

export default connect(null, null)(EventsNew);
