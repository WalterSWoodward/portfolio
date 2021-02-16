import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      status: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    const { status } = this.state;
    return (
      <Fragment>
          <form
            onSubmit={this.submitForm}
            className='contact-form__form'
            action='https://formspree.io/f/mpzoozjo'
            method="POST"
          >
            <div className='contact_form splash__background--dark'>
              <div className='contact_form_top'>
                <div
                  id='contact_name_field'
                  className='contact_label_container'
                >
                  <label
                    htmlFor='contact_name_input'
                    id='contact_label_name'
                    className='contact_label'
                  >
                    Name
                  </label>
                  <input
                    id='contact_name_input'
                    type='text'
                    name='name'
                    className='contact_input_field'
                    style={{ outlineColor: this.props.backgroundColor }}
                    required
                  />
                </div>
                <div
                  id='contact_email_field'
                  className='contact_label_container'
                >
                  <label
                    htmlFor='contact_email_input'
                    id='contact_label_email'
                    className='contact_label'
                  >
                    Email
                  </label>
                  <input
                    id='contact_email_input'
                    type='email'
                    name='_replyto'
                    className='contact_input_field'
                    style={{ outlineColor: this.props.backgroundColor }}
                    required
                  />
                </div>
              </div>
              <div id='contact_text_field' className='contact_label_container'>
                <label className='contact_label' htmlFor='contact_text_input'>
                  Message
                </label>
                <textarea
                  onChange={event =>
                    this.handleChange('message', event.target.value)
                  }
                  type='textarea'
                  className='contact_input_field'
                  id='contact_text_input'
                  name='message'
                  style={{ outlineColor: this.props.backgroundColor }}
                  required
                />
              </div>
              
              {status === "SUCCESS" ? <p>Thanks!</p> : <input id='contact_form_button' type='submit' value='Send' />}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </div>
          </form>
      </Fragment>
    );
  }

  submitForm(ev) {
    console.log('inside ');
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

function mapStateToProps(state) {
  return {
    backgroundColor: state.backgroundColor
  };
}

export default connect(mapStateToProps)(ContactForm);
