export function subtitle() {
   class Subtitle extends HTMLElement {
      constructor() {
         super();
         this.render();
      }
      render() {
         let style = document.createElement("style")
         style.textContent = `
            .subtitle{
               font-size:38px;
               font-weight:700;
               color:#000000;
               margin: 0 0 33px 28px;
            }
            @media (min-width:380px){
               .subtitle{
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  position: relative;
                  left: -103px;
               }
            }
         `;

         let shadow = this.attachShadow({ mode: 'open' });
         shadow.appendChild(style)

         let div = document.createElement("div");
         div.classList.add("subtitle");
         div.textContent = "Subtítulo"

         shadow.appendChild(div)
      }
   }
   customElements.define('subtitle-el',Subtitle);

}