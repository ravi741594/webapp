import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class _layout extends Component {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component pageProps={pageProps} />
      </>
    );
  }
}

_layout.propTypes = {
  Component: PropTypes.Component,
  pageProps: PropTypes.object.isRequired,
};
