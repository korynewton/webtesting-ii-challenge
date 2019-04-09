import React from 'react'

const display = (props) => {
  return (
    <>
        <h2>Balls: {props.count.balls}</h2>
        <h2>Strikes: {props.count.strikes}</h2>
    </>
  )
}

export default display
