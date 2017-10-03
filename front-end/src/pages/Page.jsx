import React from 'react';
import PropTypes from 'prop-types';
import AppState from '../state/AppState.jsx';

// import modules here

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
        {this.props.children}
      </div>
    );
  }
}

Page.propTypes = {
  state: PropTypes.instanceOf(AppState),
  children: PropTypes.instanceOf(Object)
};
