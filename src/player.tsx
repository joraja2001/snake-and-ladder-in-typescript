import React from 'react'
interface players{
  Player:string
}
const Players = (storage:players) => {
  return (
    <span className='player'>{storage.Player}</span>
  )
}

export default Players