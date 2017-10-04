import React from 'react';
import PropTypes from 'prop-types';
import Page from './Page.jsx';
import AppState from '../state/AppState.jsx';
// import modules here
import TitleSection from '../modules/TitleSection/TitleSection.jsx';

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page id="Settings">
        <TitleSection title="Settings" titleSecondary="Lofty" />
      </Page>
    );
  }
}

Settings.propTypes = {
  state: PropTypes.instanceOf(AppState),
};
