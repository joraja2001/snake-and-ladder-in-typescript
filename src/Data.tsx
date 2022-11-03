interface game{
    id:number,
    icons: string,
    Torule:string|number,
    Fromrule:string|number,
    players:any
}




let gameData:game[] = []
let Gamebarrier:any;
for (let i = 100; i >= 1; i -= 10) {
    if (i % 20 === 0) {
        for (let j = i; j > (i - 10); j--) {
            gameData.push({
                id: j,
                icons: '',
                Torule:'',
                Fromrule:'',
                players: {}
            })
        }
    }
    else {
        for (let j = (i - 9); j <= i; j++) {
            gameData.push({
                id: j,
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
let Gamestages:IBarrier[] = [{ Fromrule: 15, Torule: 4, icon: '🐍' },
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


gameData.forEach(element1 => {
    Gamestages.forEach((element2)=> {
        if (element1.id === element2.Fromrule) {
            element1.icons = element2.icon
            element1.Fromrule=element2.Fromrule
            element1.Torule = element2.Torule
            
        }     
    })
});


export  {gameData ,Gamebarrier}