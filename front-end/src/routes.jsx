import React from 'react';
import { Router, Route } from 'react-router-dom';
import { VelocityTransitionGroup } from 'velocity-react';
import AppState from './state/AppState';
import HistoryManager from './history.js';
// import modules
import Sidebar from './modules/Sidebar/Sidebar.jsx';
// import styles
import './resources/styles/base.scss';
// import pages
import Home from './pages/Home';
import Modules from './pages/Modules';
import Users from './pages/Users';
import Assets from './pages/Assets';
import Settings from './pages/Settings';

// create global state
const appState = new AppState();

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animateIn: true,
      menuItems: [
        { icon: "/assets/img/icons/home.svg", title: "Home", url: "/" },
        { icon: "/assets/img/icons/users.svg", title: "Users", url: "/users" },
        { icon: "/assets/img/icons/image.svg", title: "Assets", url: "/assets" },
        { icon: "/assets/img/icons/layout.svg", title: "Modules", url: "/modules" },
        { icon: "/assets/img/icons/settings.svg", title: "Settings", url: "/settings" }
      ],
      routes: [
        <Route exact path="/" key="home" component={() => <Home state={appState} />} />,
        <Route exact path="/modules" key="Modules" component={() => <Modules state={appState} />} />,
        <Route exact path="/users" key="Users" component={() => <Users state={appState} />} />,
        <Route exact path="/assets" key="Assets" component={() => <Assets state={appState} />} />,
        <Route exact path="/settings" key="Settings" component={() => <Settings state={appState} />} />,
      ]
    };

    this.animationDuration = 500;

    // Listen for history changes
    HistoryManager.addRouteListener({ pushRoute: this.animateOut.bind(this) });
  }

  animateOut() {
    this.setState({ animateIn: false });
  }

  animateIn() {
    HistoryManager.finishRouteTransition();
    this.setState({ animateIn: true });
  }

  render() {
    const pageContent = this.state.animateIn ? (
      <div className="page-wrapper">
        {this.state.routes}
      </div>
    ) : null;

    return (
      <Router history={HistoryManager.history}>
        <div id="app-container">
          <Sidebar menuItems={this.state.menuItems} />
          <VelocityTransitionGroup
            className="content-container"
            enter={{ animation: { opacity: 1, translateY: '0%' }, duration: this.animationDuration }}
            leave={{ animation: { opacity: 0, translateY: '5%' }, duration: this.animationDuration, complete: this.animateIn.bind(this) }}
            runOnMount
          >
            {pageContent}
          </VelocityTransitionGroup>
        </div>
      </Router>
    );
  }
}
