import React from 'react';
import PropTypes from 'prop-types';
import Page from './Page.jsx';
import AppState from '../state/AppState.jsx';
// import modules here
import TitleSection from '../modules/TitleSection/TitleSection.jsx';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page id="Users">
        <TitleSection title="Users" titleSecondary="Lofty" />
      </Page>
    );
  }
}

Users.propTypes = {
  state: PropTypes.instanceOf(AppState),
};
