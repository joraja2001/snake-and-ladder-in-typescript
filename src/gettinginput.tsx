
import { gameData}from './Data';
import Game from './SnakeAndLadderGame';
import Getting from './gettingnameinput'
import {useState} from 'react'
import React from 'react';
let howManyPlayers:number;
let playerList:any;
let playernames:string;
// let playingmembers;
export default function Input() {
    const [noOfPlayers, setNoOfPlayers]= useState('')
    const [gameStart, setGameStart] = useState(false)
    const[hide,sethide]=useState('hide')
    const [value,setValue]=useState()

    function update() {
        howManyPlayers = Number(noOfPlayers)
        console.log(howManyPlayers)
        let playerlist:any = {}
        for (let i = 1; i <= howManyPlayers; i++) {
            playerlist[`Player${i}`] = 1
            console.log(playerlist)
            console.log(howManyPlayers)
            playerList = playerlist
            setGameStart(true)
            sethide('nohide')  
        }
    }
    return (
        <div>
            <div className={hide}>
                
                Enter Number Of Players
            <input className='numberinput' type="number" value={noOfPlayers} onChange={e => { setNoOfPlayers(e.target.value) }} />
            <button className='numberclick' onClick={update}>Click</button>
            </div>
            {gameStart ? <Getting/>: null}
        </div>
    )
}

export { howManyPlayers, playerList }