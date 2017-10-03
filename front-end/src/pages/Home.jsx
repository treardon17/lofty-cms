import React from 'react';
import PropTypes from 'prop-types';
import AppState from '../state/AppState.jsx';
import Page from './Page.jsx';
// import modules here

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page id="Home">
        <h1>Welcome home</h1>
      </Page>
    );
  }
}

Home.propTypes = {
  state: PropTypes.instanceOf(AppState),
};
