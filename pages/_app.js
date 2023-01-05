import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from 'redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './_layout';
import 'styles/globals.css';
class MIS extends App {
  componentDidMount() {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }
  render() {
    return (
      <div
        id="main"
      >
        <Head>
          <title>Incaendo MIS</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1 viewport-fit=cover"
          ></meta>
        </Head>
        {/********layoutjs   */}
        <Provider store={store}>
        <Layout {...this.props} />
        </Provider>
      </div>
    );
  }
}
MIS.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.func,
};
export default MIS;