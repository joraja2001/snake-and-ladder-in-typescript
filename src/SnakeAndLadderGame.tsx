import React, { SetStateAction, useState } from 'react'
import Maingrid from './mainplayer'
import './main.css'
import { gameData } from './Data'
import { howManyPlayers, playerList } from './gettinginput'
import './snake.css'
import { playerNamesList } from './gettingnameinput'


let playerCount = 1
let win = ''

const Game = () => {
    const [playerNames, setPlayerNames] = useState(playerList)
    const [visible, setvisible] = useState('visible')
    const [winner, setwinner] = useState('')
    const [point, setpoint] = useState(1)
    const [playername, setplayername] = useState('')
    const [position, setposition] = useState(0);
    const [image, setimage] = useState('image')
    console.log(playerList)
    const dice = () => {
        let randomNumber = Math.floor(Math.random() * 6) + 1
        setpoint(randomNumber)
        if (playerNames[`Player${playerCount}`] + randomNumber <= 100) {
            setplayername(playerNamesList[`Player${playerCount}`])
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
                                games.players[`Player${playerCount}`] = 'in'
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
                        setwinner(playerNamesList[`Player${playerCount}`])
                        win += 'is the winner'
                        setvisible('invisible')
                        setimage('noimage')
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
            <div className='main'>
                <div className='window'>
                    <header>
                        <div className={image}>
                            <img id='image' src='https://images.alphacoders.com/287/thumbbig-287313.webp' alt='lets play'></img>

                            <h3 id='Title'>Snake&Ladder Game</h3>
                        </div>
                        <div className={visible}>
                            <p className='playing'>{playername}:{point}:position:{position}</p>
                            <button className='butt' onClick={dice}>Dice 🎲</button>
                        </div>
                        <h1 className='win'>{winner} {win}</h1>
                    </header>

                    <div className='GridBox'>
                        {gameData.map(n => <Maingrid value={n.id} data={n.players} symbol={n.icons} key={n.id} />)}
                    </div>


                    {/* <p>playerNames:{randomNumber}</p> */}

                </div>
            </div>
        </div>
    )
}

export default Game
