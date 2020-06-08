import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { readEvents } from '../actions';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, (event, ind) => (
      <tr key={ind}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    const props = this.props; 
    
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
            {console.log(props.events)}
          </tbody>
        </table>
        <Link to='./components/events/New'>New Events</Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { events: state.events }
}

const mapDispatchToProps = ({readEvents}); 

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
