import React from 'react';
import { Link } from 'react-router-dom';
import { VelocityComponent } from 'velocity-react';
import SidebarItem from '../SidebarItem/SidebarItem.jsx';

// scss
import './Sidebar.scss';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.openDuration = 800;
    this.itemDelay = 50;
    this.itemDuration = 700;

    this.state = {
      open: false,
      sidebarItems: [
        <SidebarItem key="item1" icon="/assets/img/icons/home.svg" title="Home" />,
        <SidebarItem key="item2" icon="/assets/img/icons/home.svg" title="Home" />,
        <SidebarItem key="item3" icon="/assets/img/icons/home.svg" title="Home" />,
        <SidebarItem key="item4" icon="/assets/img/icons/home.svg" title="Home" />,
        <SidebarItem key="item5" icon="/assets/img/icons/home.svg" title="Home" />,
      ]
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ open: true });
    }, 3000);
  }

  getSidebarTransitions() {
    const sidebarItems = [];
    for (let i = 0; i < this.state.sidebarItems.length; i++) {
      const calculatedDelay = ((i) * this.itemDelay) + (this.openDuration * 0.25);
      sidebarItems.push(
        <VelocityComponent
          key={i}
          animation={this.state.open ? { translateY: 0, opacity: 1 } : { translateY: 30, opacity: 0 }}
          duration={this.itemDuration}
          easing={[75, 10]}
          delay={calculatedDelay}
        >
          {this.state.sidebarItems[i]}
        </VelocityComponent>
      );
    }
    return sidebarItems;
  }

  render() {
    const classes = `sidebar-content ${(this.state.open ? 'open' : 'closed')}`;

    return (
      <div className="sidebar">
        <VelocityComponent
          animation={this.state.open ? { width: "250px" } : { width: "0px" }}
          duration={this.openDuration}
          easing={[75, 10]}
        >
          <div className={classes}>
            { this.getSidebarTransitions() }
          </div>
        </VelocityComponent>
      </div>
    );
  }
}
