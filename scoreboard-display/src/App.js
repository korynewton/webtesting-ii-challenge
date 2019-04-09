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
          <Dashboard ball={this.ball} strike={this.strike} />
        </div>
      </>
    );
  }

  ball = (event) => {
    event.preventDefault();
    this.setState({
      count: {
        ...this.state.count,
        balls: this.state.count.balls + 1
      }
    })
  }


  strike = (event) => {
    event.preventDefault();
    this.setState({
      count: {
        ...this.state.count,
        strikes: this.state.count.strikes + 1
      }
    })
  }


}

export default App;
