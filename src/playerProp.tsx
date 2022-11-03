import React from 'react'
interface players{
  Player:string
}
const PalyerProp = (prop:players) => {
  return (
    <span className='player'>{prop.Player}</span>
  )
}

export default PalyerProp