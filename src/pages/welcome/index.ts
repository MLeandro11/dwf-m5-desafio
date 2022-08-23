
export function initWelcome(params) {
    const div = document.createElement('div')
    
    div.innerHTML = `
    <h1 class="h1">Piedra Papel o Tijera</h1>
    
    <my-button>Empezar</my-button>
    <div class="move-uno">
    <my-move move="tijera"></my-move>
    </div>
    <div class="move-dos">
    <my-move move="piedra"></my-move>
    </div>
    <div class="move-tres">
    <my-move move="papel"></my-move>
    </div>
    `
    const style = document.createElement('style')
    style.innerHTML = `
    .container{
        position: relative;
        min-width: 375px;
        max-width: 375px;
        margin: 0 auto;
        height: 100vh;
        overflow: hidden;
        padding: 115px 35px 0;
        
    }
    .h1{
        margin: 0;
        margin-bottom: 75px;
        font-family: 'Odibee Sans', cursive; 
        font-size: 80px;
        font-weight: 700;
        text-align: left;
        line-height: 70.48px;
        color: #009048 
    }
    .move-uno{
        position: absolute;
        left: 30px;
        bottom: -30px;
    }

    .move-dos{
        position: absolute;
        
        right: 43%;
        bottom: -30px;
    }

    .move-tres{
        position: absolute;
        right: 30px;
        bottom: -30px;
    } 

    `
    div.className = 'container'

    div.appendChild(style)
    
    const buttonEl = div.querySelector('my-button')
    buttonEl?.addEventListener('click', ()=>{
        params.goTo('/start')
    })
    return div
}

    
     
    
    

    
    
