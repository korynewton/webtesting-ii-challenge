import React, { Component } from 'react'

export default class dashboard extends Component {
  render() {
    return (
      <>
        <h1>Dash:</h1>
        <div className="buttons">
          <button data-testid='ball-btn' onClick={this.props.ball}>Ball</button>
          <button data-testid='strike-btn' onClick={this.props.strike}>Strike</button>
          <button data-testid='foul-btn' onClick={this.props.foul}>Foul</button>
          <button data-testid='hit-btn' onClick={this.props.hit}>Hit</button>
        </div>
      </>
    )
  }
}
