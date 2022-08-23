import { state } from "../../state"

export function initPlay(params) {
    const div = document.createElement('div')
    const style = document.createElement('style')

    let counter = 3
    const intervalId = setInterval(()=>{
        counter--;
        if (counter < 0) {
            clearInterval(intervalId);
            div.innerHTML =`
            <div class="cartel">
                <my-text>¡Se agoto el tiempo!</my-text>
                <my-button class="reset">¡reset!</my-button>
                <my-button class="exit">Exit</my-button>
            </div>
            <style>
            .container{
                width: 375px;
                margin: 0 auto;
                height: 100vh;
                overflow: hidden;
                padding: 118px 0;
            }
            .cartel{
                display: flex;
                flex-direction: column;
                gap: 40px
            }
            </style>
            `
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
        }
        },1000)

    div.innerHTML = `

    <my-counter></my-counter>

    <div class="hands">
    <div class="move-uno">
    <my-move size="200" move="tijera"></my-move>
    </div>
    <div class="move-dos">
    <my-move size="200" move="piedra"></my-move>
    </div>
    <div class="move-tres">
    <my-move size="200" move="papel"></my-move>
    </div>
    </div>
    `
    style.innerHTML = `
    .container{
        position: relative;
        width: 375px;
        margin: 0 auto;
        height: 100vh;
        overflow: hidden;
        padding: 118px 0;
    }
    .text{
        margin-bottom:45px
    }
    .hands .move-uno{
        position: absolute;
        left: 0;
        bottom: -50px;
    }

    .hands .move-dos{
        position: absolute;
        
        right: 150px;
        bottom: -50px;
    }

    .hands .move-tres{
        position: absolute;
        right: 0;
        bottom: -50px;
    }
    .hands .move-uno:hover{
        bottom: 0
    }
    .hands .move-dos:hover{
        bottom: 0
    }
    .hands .move-tres:hover{
        bottom: 0
    }
    
    
    `
    div.className = 'container'
    div.appendChild(style)

    const jugadas:any = div.querySelector('.hands')?.children
    //console.log(jugadas);
    for (const iterator of jugadas) {
        
        iterator?.addEventListener('click', (e:any)=>{
            e.preventDefault()
            const numRandom = Math.trunc(Math.random() * 3)
            const computerPlay = ['piedra','papel','tijera'][numRandom]
            
            //console.log(e.target.move);
            //console.log(computerPlay);
            state.setMove(e.target.move, computerPlay)
            
            div.innerHTML = `
            
            <div class="hands">
            <div class="my-move">
            <my-move size="300" move="${e.target.move}"></my-move>
            </div>
            <div class="move-computer">
            <my-move size="300" move="${computerPlay}"></my-move>
            </div>
            `
            style.innerHTML = `
            .container{
                position: relative;
                width: 375px;
                margin: 0 auto;
                height: 100vh;
                overflow: hidden;
            }
            .hands  .my-move{
                position: absolute;
                left: 35%;
                bottom: 0;
            }
            .hands  .move-computer{
                position: absolute;
                top: 0;
                left: 35%;
                transform: rotate(180deg);
            }
            
            `
            div.appendChild(style)
            counter = 2
            setTimeout(function(){
                params.goTo('/results')
                //console.log(counter);
                
            }, 2000);
            
        })
    }
    
    return div
}