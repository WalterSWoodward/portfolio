import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PortfolioCards extends Component {
  createCards = () => {
    let projects = this.props.projects;
    let cardsList = Object.keys(this.props.projects).map((card, index) => (
      <div
        className='cards_item'
        key={index}
      >
        <div className='card_body'>
          <div className="card-body__item">
            <div className='card_title'>{projects[card].title}</div>
            <div className='card_subtitle'>
              <b>{projects[card].languages}</b>
            </div>
            <div className='card_text'>{projects[card].text}</div>
          </div>
          <div className="card-body__item">
            <a
                target='_blank'
                rel='noopener noreferrer'
                className='card_button'
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
                  className='card_button'
                  id='card_button2'
                  href={projects[card].code_link}
                  aria-label='Click on this link to view the code for this project.'
                >
                  <FontAwesomeIcon icon={projects[card].code_link_icon} aria-hidden="false" />
                </a>
              ) : null}
          </div>
        </div>
      </div>
    ));
    return cardsList;
  };

  render() {
    return <div className='cards'>{this.createCards()}</div>;
  }
}

function mapStateToProps(state) {
  return { projects: state.projects};
}

export default connect(mapStateToProps)(PortfolioCards);
