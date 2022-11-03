import React from 'react'
import PalyerProp from './playerProp'
import './prop.css'
import { playerNamesObject } from './gettingnameinput'
interface IProp{
    value:number,
    data:any,
    symbol:string
}
const Props = (prop:IProp) => {
    let playerArr = []
    for (let i in prop.data) {
        if (prop.data[i] === 'in') {
            playerArr.push(playerNamesObject[i])
        }
    }
    return (
        <div className='lop' id={`Box${prop.value.toString()}`}>
            <div className='box'>
                {playerArr.map(n => <PalyerProp Player={n} key={n} />)}
            </div>
            <div className='players'>
                <div>{prop.value}</div>
                <div>{prop.symbol}</div>
            </div>
        </div>
    )
}
export default Props
