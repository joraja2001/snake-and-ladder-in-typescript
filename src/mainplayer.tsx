import React from 'react'
import Players from './player'
// import './prop.css'
import { playerNamesList } from './gettingnameinput'
interface IPlayer{
    value:number,
    data:any,
    symbol:string
}
const Maingrid = (Grid:IPlayer) => {
    let playingList = []
    for (let player in Grid.data) {
        if (Grid.data[player] === 'in') {
            playingList.push(playerNamesList[player])
        }
    }
    return (
        <div className='lop' id={`Box${Grid.value.toString()}`}>
            <div className='box'>
                {playingList.map(n => <Players Player={n} key={n} />)}
            </div>
            <div className='players'>
                <div>{Grid.value}</div>
                <div>{Grid.symbol}</div>
            </div>
        </div>
    )
}
export default Maingrid
