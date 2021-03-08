import React, { Component, Fragment } from 'react';
import Swal from 'sweetalert2';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      status: ''
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

    status === "SUCCESS" && Swal.fire({
        title: 'Message sent',
        icon: 'success',
        text: 'Thank You for reaching out! I will respond to your email within 24 hours.',
        customClass: {
          title: 'sweetalert__title',
          content: 'sweetalert__content',
          confirmButton: 'sweetalert__button'
        },
        confirmButtonText: 'Close',
        buttonsStyling: false,
      });

    status === "ERROR" && Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: 'Oops! We could not process your request. Please try again later. Thank You!',
        customClass: {
          title: 'sweetalert__title',
          content: 'sweetalert__content',
          confirmButton: 'sweetalert__button'
        },
        confirmButtonText: 'Close',
        buttonsStyling: false,
      });

      
    return (
      <Fragment>
        <div className='form__wrap' name='contact'>
          <form className='form__form' onSubmit={this.submitForm} action='https://formspree.io/f/mpzoozjo' method="POST">
            <div className='form__body'>
              <div className='form__group'>
                <div className='form__row form__row--name'>
                  <label htmlFor='form-row__input--name' className='form__label'>Name</label>
                  <input id='form-row__input--name' type='text' name='name' className='form-row__input' placeholder='Type name here...' required/>
                </div>
                <div className='form__row form__row--email'>
                  <label htmlFor='form-row__input--email' className='form__label' >Email</label>
                  <input id='form-row__input--email' type='email' name='_replyto' className='form-row__input' placeholder='Type email here...' required/>
                </div>
              </div>
              <div id='contact_text_field' className='form__row'>
                <label className='form__label' htmlFor='contact_text_input'>Message</label>
                <textarea className='form-row__input--textarea' onChange={event => this.handleChange('message', event.target.value)}
                  type='textarea' name='message'
                  placeholder="Type message here..."
                  required
                />
              </div>
              <button className="form__button" type='submit'>Send</button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }

  submitForm(ev) {
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

export default Form;
