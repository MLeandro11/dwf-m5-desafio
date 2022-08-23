export function initStart(params) {
    const div = document.createElement('div')
    
    div.innerHTML = `
    <div class="text">
    <my-text>
    Presioná jugar
    y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
    </my-text>
    </div>
    <my-button>¡Jugar!</my-button>
    <div class="move-uno">
    <my-move  move="tijera"></my-move>
    </div>
    <div class="move-dos">
    <my-move  move="piedra"></my-move>
    </div>
    <div class="move-tres">
    <my-move  move="papel"></my-move>
    </div>
    `
    const style = document.createElement('style')
    style.innerHTML = `
    .container{
        position: relative;
        width: 375px;
        margin: 0 auto;
        height: 100vh;
        overflow: hidden;
        padding: 115px 35px 0;
    }
    .text{
        margin-bottom:45px
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
        params.goTo('/play')
    })
    
    return div
    
}