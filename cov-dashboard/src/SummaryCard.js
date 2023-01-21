import React from 'react'

const Card = (props) => {
  return (
    <div className='summary-card'>
      <h2>{props.title}</h2>
      <p>{props.value}</p>
    </div>
  )
}

export default Card
