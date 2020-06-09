import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { postEvent } from '../../actions';

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field;
    return (
      <TextField
        hintText={label}
        floatingLabelFixed={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
        />
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values);
    this.props.history.push('/');
  }

  render() {    
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const style = { margin: 12};
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field label='Title' name='title' type='text' component={this.renderField} />
          <div>
            <Field label='Body' name='body' type='text' component={this.renderField} />
          </div>
          <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
          <RaisedButton label="Cancel" style={style} containerElement={<Link to ='/' />} />
        </form>
      </React.Fragment>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) errors.title = "Enter a title"
  if (!values.body) errors.body = "Enter a body"

  return errors;
}

const mapDispatchToProps = ({postEvent}); 

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew))
