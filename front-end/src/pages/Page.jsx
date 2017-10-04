import React from 'react';
import PropTypes from 'prop-types';
import AppState from '../state/AppState.jsx';
// import modules here
import TitleSection from '../modules/TitleSection/TitleSection.jsx';

const styles = {
  titleSection: {
    position: 'relative'
  }
};

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.transitionIn = true;
  }

  componentWillMount() {
    this.transitionIn = true;
  }

  componentWillUnmount() {
    this.transitionIn = false;
  }

  render() {
    return (
      <div
        className="page"
        {...this.props}
      >
        <TitleSection style={styles.titleSection} title={this.props.title} titleSecondary="Lofty" />
        <div className="page-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  state: PropTypes.instanceOf(AppState),
  children: PropTypes.instanceOf(Object),
  title: PropTypes.string
};
