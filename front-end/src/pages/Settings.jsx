import React from 'react';
import PropTypes from 'prop-types';
import Page from './Page.jsx';
import AppState from '../state/AppState.jsx';
// import modules here

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page id="Settings">
        <h1>Welcome to the Settings page</h1>
      </Page>
    );
  }
}

Settings.propTypes = {
  state: PropTypes.instanceOf(AppState),
};
