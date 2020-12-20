import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

class ContactLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <Fragment>
        <div id='contact' className='contact' name='contact'>
          <form
            onSubmit={this.submitForm}
            className='contact_form_container'
            action='https://formspree.io/f/walter.sekope.woodward@gmail.com'
            method="POST"
            style={{ backgroundColor: this.props.backgroundColor }}
          >
            <div className='contact_form' style={{
              background: this.props.darkerBackgroundColor
            }}>
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
                    // placeholder="Your Name"
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
                    // placeholder="Your Email"
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
                  // placeholder="Your Message"
                  className='contact_input_field'
                  id='contact_text_input'
                  name='message'
                  style={{ outlineColor: this.props.backgroundColor }}
                  required
                />
                <input id='contact_form_button' type='submit' value='Send' />
              </div>
            </div>
          </form>

          <div className='icon_links'>
            <div className='icon_link_container'>
              <a
                id='icon_link_facebook'
                className='icon_link'
                href='https://www.facebook.com/WalterSWoodward'
                target='_blank'
                rel='noopener noreferrer'
                name='facebook_icon_link'
                aria-label="Click here to visit Walter's Facebook profile"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  aria-hidden='false'
                  id='fa_facebook_icon'
                  title="Link to Walter's Facebook Profile"
                  role="img"
                  aria-label="my-facebook-profile"
                />
              </a>
            </div>
            <div className='icon_link_container'>
              <a
                id='icon_link_github'
                className='icon_link'
                href='https://github.com/WalterSWoodward'
                target='_blank'
                rel='noopener noreferrer'
                name='github_icon_link'
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
            <div className='icon_link_container'>
              <a
                id='icon_link_twitter'
                className='icon_link'
                href='https://twitter.com/pacManKana'
                target='_blank'
                rel='noopener noreferrer'
                name='twitter_icon_link'
                aria-label="Click here to visit Walter's Twitter profile"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  aria-hidden='false'
                  id='fa_twitter_icon'
                  title="Link to Walter's Twitter Profile"
                  role="img"
                  aria-label="my-twitter-profile"
                />
              </a>
            </div>
          </div>
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
    };
    xhr.send(data);
  }
}

function mapStateToProps(state) {
  return { backgroundColor: state.backgroundColor, darkerBackgroundColor: state.darkerBackgroundColor };
}

export default connect(mapStateToProps)(ContactLinks);
