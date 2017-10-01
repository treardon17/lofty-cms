import React from 'react';
import { Link } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';

// scss
import './Sidebar.scss';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ open: false });
    }, 3000);
  }

  render() {
    const classes = `sidebar-content ${(this.state.open ? 'open' : 'closed')}`;

    return (
      <div className="sidebar">
        <CSSTransition className={classes} in={this.state.open} classNames="sidebar-state">
          <div />
        </CSSTransition>
      </div>
    );
  }
}
