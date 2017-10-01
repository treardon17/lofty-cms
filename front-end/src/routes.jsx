import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AppState from './state/AppState';
// import modules
import Sidebar from './modules/Sidebar/Sidebar.jsx';
// import styles
import './resources/styles/base.scss';
// import pages
import Home from './pages/Home';

// create global state
const appState = new AppState();

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        <Route exact path="/" key="home" component={() => <Home state={appState} />} />,
      ],
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div id="app-container">
          <Sidebar />
          <div className="content-container">
            {this.state.routes}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
