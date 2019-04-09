import React, { Component } from 'react'

export default class dashboard extends Component {
  render() {
    return (
      <>
        <h1>Dash:</h1>
        <div className="buttons">
          <button onClick={event => this.props.ball(event)}>Ball</button>
          <button onClick={this.props.strike}>Strike</button>
          <button>Foul</button>
          <button>Hit</button>
        </div>
      </>
    )
  }
}
