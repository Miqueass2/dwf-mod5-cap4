export function titleAndP() {
   class TitleAndP extends HTMLElement {
      constructor() {
         super()
         this.render();
      }
      render() {
         let style = document.createElement("style");
         style.textContent = `
         .title{
            color: #000000;
            font-size:52px;
            margin:41px 0 23px 30px;
            width: 202px;
         }
         @media (min-width:380px){
            .title {
               display:flex;
               justify-content:center;
               align-items:center;
               width:95%;
            }
            .p {
            display:flex;
            justify-content:center;
            align-items:center;
         }
         }
         .p{
            font-size:18px;
            margin: 0 0 65px 29px;
         }
         `;
         
         let shadow = this.attachShadow({ mode: 'open' });
         shadow.appendChild(style);

         let div = document.createElement("div");
            div.classList.add("title")
            div.textContent = `Título de esta página`;
            
            
            shadow.appendChild(div)
            
            
            let divParrafo = document.createElement("div");
            divParrafo.classList.add("p");
            divParrafo.textContent = `Esta página sin dudas es la mejor`;
            
            shadow.appendChild(divParrafo)
         }
      }

   customElements.define('title-and-p-el', TitleAndP);
};