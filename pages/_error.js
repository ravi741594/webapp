import React, { PureComponent } from 'react';
import Head from 'next/head';

class Error extends PureComponent {
  render () {
    return (
      <div style={{ height: '100vh' }}>
        <Head>
          <title>An error occurred. Our dev team is on it. We will fix it soon.</title>
        </Head>
      </div>
    );
  }
}

export default Error;
