import React, { Component } from 'react'

export default class dashboard extends Component {
  render() {
    return (
      <>
        <h1>Dash:</h1>
        <div className="buttons">
          <button onClick={this.props.ball}>Ball</button>
          <button onClick={this.props.strike}>Strike</button>
          <button onClick={this.props.foul}>Foul</button>
          <button onClick={this.props.hiit}>Hit</button>
        </div>
      </>
    )
  }
}
