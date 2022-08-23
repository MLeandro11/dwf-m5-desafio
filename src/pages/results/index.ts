import { state } from "../../state"

export function initResults(params) {
    const div = document.createElement('div')
    const style = document.createElement('style')
    const cs = state.getState()

    const obtenerResultado = ()=>{
        const player = cs.currentGame.myPlay
        const computer = cs.currentGame.computerPlay
        /* if ( player&&computer.includes("")) {
            params.goTo('/welcome')
        } */
        state.whoWins(player,computer)
    }
    obtenerResultado()

    const history = cs.history
    const result = history[history.length -1]
    //console.log("result", result);
    
    const playerWins = cs.history.filter(p => p === 'ganaste' )
    const computerWins = cs.history.filter(c => c === 'perdiste' )

    div.innerHTML = `

     <div>
        <div class="cnt-results">
            <my-result result="${result}"></my-result>
            <div class="score">
                <my-text>Resultados</my-text>
                <my-text>Player: ${playerWins.length}</my-text>
                <my-text>Computer: ${computerWins.length}</my-text>
            </div>
        </div>
        <div class="cnt-button">
            <my-button class="reset">¡Volver a jugar!</my-button>
            <my-button class="exit">Exit</my-button>
        </div>
    </div>
    `
    style.innerHTML = `
    .container{
        width: 375px;
        margin: 0 auto;
        height: 100vh;
        overflow: hidden;
        padding: 10px 0 0;
    }
    .cnt-results{
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
    
    .score{
        border: solid 10px;
        border-radius: 10px;
        padding: 10px 
    }
    .cnt-button{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px
    }
    `
    div.className = 'container'
    div.appendChild(style)
    const buttonReset = div.querySelector('.reset')
    buttonReset?.addEventListener('click', e =>{
        e.preventDefault()
        params.goTo('/play')
        
    })
    const buttonExit = div.querySelector('.exit')
    buttonExit?.addEventListener('click', e =>{
        e.preventDefault()
        
        params.goTo('/welcome')
    })
    
    return div
}