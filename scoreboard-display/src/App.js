import React, { Component } from 'react';

import './App.css';
import Display from './components/display'
import Dashboard from './components/dashboard'

class App extends Component {
  state = {
    count : {
      balls: 0,
      strikes: 0,
    }
  }

  render() {
    return (
      <>
        <div className="display">
          <Display count={this.state.count} />
        </div>
        <div className="dashboard">
          <Dashboard />
        </div>
      </>
    );
  }
}

export default App;
