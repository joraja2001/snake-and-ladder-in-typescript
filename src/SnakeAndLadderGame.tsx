import React, { SetStateAction, useState } from 'react'
import Props from './props'
import './main.css'
import { gameData } from './Data'
import { howManyPlayers , playerObject} from './gettinginput'
import './snake.css'
import { playerNamesObject } from './gettingnameinput'


let playerCount = 1
let win=''

const Game = () => {
    const [playerNames, setPlayerNames] = useState(playerObject)
    const [visible, setvisible] = useState('visible')
    const [winner,setwinner] = useState('')
    const[random,setrandom] = useState(1)
    const[playername,setplayername]=useState('')
    const[position,setposition]=useState(0);
    const [img,setimg]=useState('img')
    console.log(playerObject)
    function dice() {
        let randomNumber = Math.floor(Math.random() * 6) + 1
        setrandom(randomNumber)
        if (playerNames[`Player${playerCount}`] + randomNumber <= 100) {
             setplayername(playerNamesObject[`Player${playerCount}`])
            gameData.forEach(game => {
                if (game.id === playerNames[`Player${playerCount}`]) {
                    game.players[`Player${playerCount}`] = ''
                }
            });
            gameData.forEach((game) => {
                if (game.id === playerNames[`Player${playerCount}`] + randomNumber) {
                    if (game.Torule !== '') {
                        gameData.forEach(games => {
                            if (game.Torule === games.id) {
                                games.players[`Player${playerCount}`]='in'
                                setPlayerNames({ ...playerNames, [`Player${playerCount}`]: game.Torule })
                                setposition(game.Torule)
                            }

                        })
                    }
                   
                    else {
                        game.players[`Player${playerCount}`] = 'in'
                        setPlayerNames({ ...playerNames, [`Player${playerCount}`]: game.id })
                        setposition(game.id)
                    }
                    if (playerNames[`Player${playerCount}`] + randomNumber === 100) {
                        // winner = [`${playerNamesObject[`player${playerCount}`]} is the winner`]
                        setwinner(playerNamesObject[`Player${playerCount}`])
                        win+='is the winner'
                        setvisible('invisible')
                        setimg('noimg')
                    }

                }
            });
        }

        playerCount++
        if (playerCount === howManyPlayers + 1) {
            playerCount = 1
        }
    }


    return (
        <div >
            <div className='window'>
                <header>
                    <div className={img}>
                    <img id='image' src='https://images.alphacoders.com/287/thumbbig-287313.webp' alt='lets play'></img>
                     
                    <h3 id='Title'>Snake&Ladder Game</h3>
                    </div>
                    <div className={visible}>
                        <p className='playing'>{playername}:{random}:position:{position}</p>
                        <button className='butt' onClick={dice}>Dice 🎲</button>
                    </div>
                    <h1 className='win'>{winner} {win}</h1>
                </header>
                <div className='main'>
                <div className='GridBox'>
                    {gameData.map(n => <Props value={n.id} data={n.players} symbol={n.icons} key={n.id} />)}
                </div>
                </div>

                {/* <p>playerNames:{randomNumber}</p> */}

            </div>
        </div>
    )
}

export default Game
