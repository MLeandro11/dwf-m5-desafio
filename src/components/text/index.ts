export function initText() {
    class Text extends HTMLElement{
        shadow: ShadowRoot 
        constructor(){
            super()
        }
        connectedCallback(){
            this.shadow = this.attachShadow({mode: 'open'})
            const color = this.getAttribute('color') || '#000'
            const style = document.createElement('style')
            style.innerHTML = `
            .body{
                font-family: 'Odibee Sans', cursive; 
                font-size: 40px;
                color: ${color};
                margin: 0px;
                text-align: center;
            }
            `
            this.shadow.append(style)
            this.render()
        }
        render(){
            const p = document.createElement('p')

            p.className = "body"
            p.textContent = this.textContent
            
            this.shadow.append(p)
        }
    }
    customElements.define('my-text', Text)
}

            