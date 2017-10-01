import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ISVG from 'react-inlinesvg';
import stylePropType from 'react-style-proptype';

// scss
import './SidebarItem.scss';

export default class SidebarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClicked() {

  }

  render() {
    return (
      <button style={this.props.style} className="sidebar-item" onClick={this.handleClicked}>
        <ISVG className="item-icon" src={this.props.icon} />
        <h4 className="item-title">{this.props.title}</h4>
      </button>
    );
  }
}

SidebarItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  style: stylePropType,
};
