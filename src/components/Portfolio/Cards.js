import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Cards extends Component {
  createCards = () => {
    let projects = this.props.projects;
    let cardsList = Object.keys(this.props.projects).map((card, index) => (
      <div className='card__wrap' key={index}>
          <div className='card__title'>{projects[card].title}</div>
          <div className='card__languages'>
            <b>{projects[card].languages}</b>
          </div>
          <div className='card__description'>{projects[card].text}</div>
          <div className="card__row">
            <a
                target='_blank'
                rel='noopener noreferrer'
                href={projects[card].deploy_link}
                className='card__button'
                aria-label= {"Click on this link to view the live deployment of this project" + projects[card].title}
              >
                <FontAwesomeIcon icon={projects[card].deploy_link_icon} aria-hidden="false" />
              </a>
              {projects[card].code_link_icon ? (
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card__button'
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
    return (
      <div id="portfolio" className="portfolio" name="portfolio">
        <div className='cards'>{this.createCards()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { projects: state.projects};
}

export default connect(mapStateToProps)(Cards);
