import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ToolIcons from './ToolIcons.js';
// import {  } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';

class Cards extends Component {
    createCards = () => {
        const { projects } = this.props;
        let cardsList = Object.keys(this.props.projects).map((card, index) => (
        <div className='card__wrap' key={index}>
            {projects[card].tool_icons? <ToolIcons card={projects[card]}/> : null}
            <div className="card__row">
                <div className='card__title'>{projects[card].title}</div>
            </div>
            <div className="card__row card__row--tools">
                <div className='card__languages'>
                    <FontAwesomeIcon icon={faDesktop} aria-hidden="false" />
                    <b> {projects[card].frontend_tools}</b>
                </div>
                <div className='card__languages'>
                    <FontAwesomeIcon icon={faServer} aria-hidden="false" />
                    <b> {projects[card].backend_tools}</b>
                </div>
                <div className='card__languages'>
                    <FontAwesomeIcon icon={faDatabase} aria-hidden="false" />
                    <b> {projects[card].database_tools}</b>
                </div>
            </div>
            <div className="card__row">
                <div className='card__description'>{projects[card].text}</div>
                <div>
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
                        ) : null
                    }
                </div>
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
