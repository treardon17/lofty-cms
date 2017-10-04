import React from 'react';
import PropTypes from 'prop-types';
import Page from './Page.jsx';
import AppState from '../state/AppState.jsx';
// import modules here
import TitleSection from '../modules/TitleSection/TitleSection.jsx';

export default class Modules extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page id="Modules">
        <TitleSection title="Modules" titleSecondary="Lofty" />
      </Page>
    );
  }
}

Modules.propTypes = {
  state: PropTypes.instanceOf(AppState),
};
