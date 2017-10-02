import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { VelocityComponent } from 'velocity-react';
import SidebarItem from '../SidebarItem/SidebarItem.jsx';

// scss
import './Sidebar.scss';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.openDuration = 250;
    this.itemDelay = 50;
    this.itemDuration = 500;

    this.state = {
      open: false
    };
  }

  // Sidebar items with transitions
  getSidebarMenuItems() {
    const sidebarItems = [];
    for (let i = 0; i < this.props.menuItems.length; i++) {
      const calculatedDelay = ((i) * this.itemDelay) + (this.openDuration * 0.1);
      const menuItem = this.props.menuItems[i];
      sidebarItems.push(
        <VelocityComponent
          key={i}
          animation={this.state.open ? {
            paddingTop: '0px',
            paddingLeft: '10px',
            paddingBottom: '0px',
            paddingRight: '10px',
          } : {
            paddingTop: '10px',
            paddingLeft: '10px',
            paddingBottom: '10px',
            paddingRight: '10px',
          }}
          duration={this.itemDuration}
          easing={[75, 15]}
          delay={calculatedDelay}
        >
          <SidebarItem key={i} bigIcon={!this.state.open} icon={menuItem.icon} title={menuItem.title} />
        </VelocityComponent>
      );
    }
    return sidebarItems;
  }

  getSidebarHeader() {
    return (
      <div className="sidebar-header">
        <div className="header-content">
          <button className="sidebar-logo" onClick={this.toggleMenu.bind(this)} />
        </div>
      </div>
    );
  }

  toggleMenu() {
    this.setState({ open: !this.state.open });
  }

  // Render element
  render() {
    const classes = `sidebar-content ${(this.state.open ? 'open' : 'closed')}`;
    return (
      <div className="sidebar">
        { this.getSidebarHeader() }
        <VelocityComponent
          animation={this.state.open ? { width: "250px" } : { width: "70px" }}
          duration={this.openDuration}
          easing={'ease-in-out'}
        >
          <div className={classes}>
            { this.getSidebarMenuItems() }
          </div>
        </VelocityComponent>
      </div>
    );
  }
}

Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(Object)
};
