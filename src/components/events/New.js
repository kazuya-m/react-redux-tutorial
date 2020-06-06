import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

//import { postEvent } from '../actions';

class EventsNew extends Component {
  renderField(field) {
    const { inout, label, type, meta: { touched, error } } = field;
    return (
      <div></div>
    )

  }

  render() {    
    return (
      <React.Fragment>
        <form>
          <div>
            <Field label='Title' name='title' type='text' component={this.renderField} />
          </div>
          <div>
            <Field label='Body' name='body' type='text' component={this.renderField} />
          </div>

          <div>
            <input type='submit' value='submit' disabled={false} />
            <Link to ='/'>Cancel</Link> 
          </div>
          
        </form>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => {
//   return { events: state.events }
// }

const validate = values => {
  const errors = {};
  return errors;
}
// const mapDispatchToProps = ({postEvent}); 

export default connect(null, null)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew))
