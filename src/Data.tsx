interface game{
    id:number,
    icons: string,
    Torule:string|number,
    Fromrule:string|number,
    players:any
}

let gameData:game[] = []
let gameBarrier:any;
for (let cell = 100; cell >= 1; cell -= 10) {
    if (cell % 20 === 0) {
        for (let cell1 = cell; cell1 > (cell - 10); cell--) {
            gameData.push({
                id: cell1,
                icons: '',
                Torule:'',
                Fromrule:'',
                players: {}
            })
        }
    }
    else {
        for (let cell1 = (cell - 9); cell1 <= cell; cell1++) {
            gameData.push({
                id: cell1,
                icons: '',
                Torule:'',
                Fromrule:'',
                players: {}
            })
        }
    }
}
interface IBarrier{
    Fromrule:number,
    Torule:number,
    icon:string
}
let gameStages:IBarrier[] = [{ Fromrule: 15, Torule: 4, icon: '🐍' },
{
    Fromrule: 33,
    Torule: 12,
    icon: '🐍'
},
{
    Fromrule: 44,
    Torule: 26,
    icon: '🐍'
},
{
    Fromrule: 80,
    Torule: 59,
    icon: '🐍'
},
{
    Fromrule: 97,
    Torule: 23,
    icon: '🐍'
},
{
    Fromrule: 20,
    Torule: 24,
    icon: '⬆️'
},
{
    Fromrule: 31,
    Torule: 39,
    icon: '⬆️'
}]


gameData.forEach(players => {
    gameStages.forEach((playerrule)=> {
        if (players.id === playerrule.Fromrule) {
            players.icons = playerrule.icon
            players.Fromrule=playerrule.Fromrule
            players.Torule = playerrule.Torule
            
        }     
    })
});


export  {gameData ,gameBarrier}