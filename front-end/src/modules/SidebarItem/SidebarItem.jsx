import React from 'react';
import { Link } from 'react-router-dom';
import { VelocityComponent } from 'velocity-react';
import PropTypes from 'prop-types';
import ISVG from 'react-inlinesvg';
import stylePropType from 'react-style-proptype';

// scss
import './SidebarItem.scss';

export default class SidebarItem extends React.Component {
  constructor(props) {
    super(props);
    this.animationDuration = 200;
    this.easing = 'ease-in-out';
  }

  handleClicked() {

  }

  render() {
    const classes = `sidebar-item ${this.props.bigIcon ? 'big-icon' : 'regular-icon'}`;
    return (
      <button style={this.props.style} className={classes} onClick={this.handleClicked}>
        <VelocityComponent
          animation={this.props.bigIcon ? {
            width: '30px',
            left: '50%',
            translateX: '-50%'
          } : {
            translateX: '0%',
            left: '5%',
            width: '18px'
          }}
          duration={this.animationDuration}
          easing={this.easing}
        >
          <ISVG className="item-icon" src={this.props.icon} />
        </VelocityComponent>
        <VelocityComponent
          animation={this.props.bigIcon ? {
            positionX: 20,
            opacity: 0,
          } : {
            positionX: 0,
            opacity: 1,
          }}
          duration={this.animationDuration}
          easing={this.easing}
        >
          <h4 className="item-title">{this.props.title}</h4>
        </VelocityComponent>
      </button>
    );
  }
}

SidebarItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  bigIcon: PropTypes.bool,
  style: stylePropType
};
