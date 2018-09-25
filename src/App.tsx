import * as React from 'react';

import { hot } from 'react-hot-loader';

/**
 * Normalize css with side effect
 */
import './theme/css-baseline';

import Login from './screens/Login';

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Login />
      </div>
    );
  }
}

export default hot(module)(App);
