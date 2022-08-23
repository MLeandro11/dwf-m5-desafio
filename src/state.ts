type Jugada =   'piedra' | 'papel' | 'tijera'


const state = {
    data: {
        currentGame:{
            computerPlay: "",
            myPlay: ""
        },
        history: []
      },
    listeners:[],

    init(){
        const localData:any = localStorage.getItem('saved-state')
        if (!localData) {
            return
        } else {
            this.setState(JSON.parse(localData))
            
        }
        
     },
    
    setMove(myMove: Jugada, computerMove){
        const cs = this.getState()
        cs.currentGame.myPlay = myMove
        cs.currentGame.computerPlay = computerMove
        //this.whoWins(myMove, computerMove)
        this.setState(cs)

    },

    
    whoWins(myPlay:Jugada, computerPlay){

        if (myPlay == computerPlay) {        
            this.pushToHistory('empate')
            //console.log('empate');
        } else if (myPlay == 'piedra' && computerPlay == 'tijera'){
            this.pushToHistory('ganaste')
            //console.log('ganaste');
        } else if (myPlay == 'papel' && computerPlay == 'piedra'){
            this.pushToHistory('ganaste')
            //console.log('ganaste');
        }else if (myPlay == 'tijera' && computerPlay == 'papel'){
            this.pushToHistory('ganaste')
            //console.log('ganaste');
        }else {
            this.pushToHistory('perdiste')
            //console.log('perdiste');
        }

    },

            
    pushToHistory(game){
        //console.log(game);
        
        const cs = this.getState()
        cs.history.push(game)
        this.setState(cs)
    },

    getState(){
        return this.data
    },
    setState(newState){
        this.data = newState
        for (const cb of this.listeners) {
            cb()
            
        }
        localStorage.setItem("saved-state", JSON.stringify(newState))
        console.log('Soy el state, he cambiado', this.data);
    },
    subscribe(callback){
        this.listeners.push(callback)
    },

}

export { state }