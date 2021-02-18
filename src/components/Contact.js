import React, { Component, Fragment } from 'react';

import NavBar from './NavBar.js';
import Form from './Contact/Form.js';
import Footer from './Footer.js';

class Contact extends Component {
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
    return (
        <Fragment>
        <NavBar/>
        <Form/>
        <Footer/>
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

export default Contact;
