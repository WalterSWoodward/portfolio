import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class ContactLinks extends Component {
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
            <div className='icon__links'>
              <a
              id='icon__link_github'
              className='icon__link'
              href='https://github.com/WalterSWoodward'
              target='_blank'
              rel='noopener noreferrer'
              name='github_icon__link'
              aria-label="Click here to visit Walter's Github profile"
              >
              <FontAwesomeIcon
                  icon={faGithub}
                  aria-hidden='false'
                  id='fa_github_icon'
                  title="Link to Walter's Github Profile"
                  role="img"
                  aria-label="my-github-profile"
              />
              </a>
            </div>
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

export default ContactLinks;
