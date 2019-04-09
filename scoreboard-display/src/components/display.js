import React from 'react'

const display = (props) => {
  return (
    <>
        <h2 data-testid='ball-count'>Balls: {props.count.balls}</h2>
        <h2 data-testid='strike-count'>Strikes: {props.count.strikes}</h2>
    </>
  )
}

export default display
