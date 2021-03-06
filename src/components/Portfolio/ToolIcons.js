import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ToolIcons extends Component {
    toolIcons = function () {
        return this.props.card.tool_icons.map(function(tool_icon, i) {
            return <span className='card__icon' key={tool_icon + "-" + i}><FontAwesomeIcon icon={tool_icon} aria-hidden="false" /></span>
        })
    };

  render() {
    return (
        <div className="card__row card__row--end">
            {this.toolIcons()}
        </div>
    );
  }
}

export default ToolIcons;
