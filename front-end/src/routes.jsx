import React from 'react';
import { Router, Route } from 'react-router-dom';
import { VelocityTransitionGroup, VelocityComponent } from 'velocity-react';
import AppState from './state/AppState';
import HistoryManager from './state/history';
// import modules
import PageLoader from './modules/PageLoader/PageLoader.jsx';
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
      pageLoaded: null,
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

    // Listen for history changes
    HistoryManager.addRouteListener({ pushRoute: this.animateOut.bind(this) });
    this.pageAnimationDuration = 300;
  }

  animateOut() {
    this.setState({ animateIn: false });
  }

  animateIn() {
    HistoryManager.finishRouteTransition();
    this.setState({ animateIn: true });
  }

  pageLoaded() {
    this.setState({ pageLoaded: true });
  }

  siteEntered() {
    if (this.state.pageLoaded === null) {
      this.setState({ pageLoaded: false });
    }
  }

  render() {
    // This is for page transitions
    const pageContent = this.state.animateIn ? (
      <div className="page-wrapper">
        {this.state.routes}
      </div>
    ) : null;

    /* eslint-disable */
    let entranceAnimation = {}; // Defines the animation for start/end
    let postAnimationStyles = {}; // Removes the transform: translateY(0) so we can use position: fixed correctly
    if (this.state.pageLoaded === null) {
      entranceAnimation = { opacity: 0, translateY: '100%' };
    } else if (this.state.pageLoaded === false) {
      entranceAnimation = { opacity: 1, translateY: '0%' };
    } else {
      entranceAnimation = null;
      // postAnimationStyles = { transform: 'none' };
      postAnimationStyles = { };
    }

    // This is for loading the page
    return (
      <Router history={HistoryManager.history}>
        <div id="app-container">
          <VelocityComponent
            className="app-transition-container"
            animation={entranceAnimation}
            duration={800}
            easing={[75, 15]}
            complete={this.siteEntered.bind(this)}
          >
            <div style={postAnimationStyles} className="content-wrapper">
              <Sidebar menuItems={this.state.menuItems} />
              <VelocityTransitionGroup
                className="page-container"
                enter={{ animation: { opacity: 1, marginTop: '0px' }, duration: this.pageAnimationDuration }}
                leave={{ animation: { opacity: 0, marginTop: '5px' }, duration: this.pageAnimationDuration, complete: this.animateIn.bind(this) }}
              >
                {pageContent}
              </VelocityTransitionGroup>
            </div>
          </VelocityComponent>
          {!this.state.pageLoaded ? <PageLoader animationFinish={this.pageLoaded.bind(this)} /> : null}
        </div>
      </Router>
    );
  }
}
