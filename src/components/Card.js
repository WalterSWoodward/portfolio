import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Picture } from 'react-responsive-picture';

class ProjectCards extends Component {
  checkDevice = () => {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    return iOS;
  }
  createCards = () => {
    let projects = this.props.projects;
    let cardsList = Object.keys(this.props.projects).map((card, index) => (
      <div
        className='cards_item'
        key={index}
        style={{ backgroundColor: this.props.backgroundColor }}
      >
        <Picture
          style={{width: "100%"}}
          alt={projects[card].alt}
          sources={[
            {
              srcSet: this.checkDevice()
                ? projects[card].alt_image_url
                : projects[card].image_url,
            }
          ]}
        />
        <div className='card_body'>
          <div className='card_title'>{projects[card].title}</div>
          <div className='card_subtitle'>
            <b>{projects[card].languages}</b>
          </div>
          <div className='card_text'>{projects[card].text}</div>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='card_buttons'
            id='card_button1'
            href={projects[card].deploy_link}
            aria-label='Click on this link to view the live deployment of this project'
          >
            <FontAwesomeIcon icon={projects[card].deploy_link_icon} aria-hidden="false" />
          </a>
          {projects[card].code_link_icon ? (
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='card_buttons'
              id='card_button2'
              href={projects[card].code_link}
              aria-label='Click on this link to view the code for this project.'
            >
              <FontAwesomeIcon icon={projects[card].code_link_icon} aria-hidden="false" />
            </a>
          ) : null}
        </div>
      </div>
    ));
    return cardsList;
  };

  render() {
    // To grasp what I am doing here, please refer to BOTH the createCards() method above AND
    // the data, which is brought in as a prop from the "redux store" located at ../reducers/index.js
    return <div className='cards'>{this.createCards()}</div>;
  }
}

function mapStateToProps(state) {
  return { projects: state.projects, backgroundColor: state.backgroundColor };
}

export default connect(mapStateToProps)(ProjectCards);
