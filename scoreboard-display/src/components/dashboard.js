import React, { Component } from 'react'

export default class dashboard extends Component {
  render() {
    return (
      <>
        <h1>Dash:</h1>
        <div className="buttons">
          <button>Ball</button>
          <button>Strike</button>
          <button>Foul</button>
          <button>Hit</button>
        </div>
      </>
    )
  }
}
