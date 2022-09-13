export function subtitleTwo() {
   class SubtitleTwo extends HTMLElement {
      constructor() {
         super();
         this.render();
      }
      render() {
         let style = document.createElement("style");
         style.textContent = `
            .subtitle-part-two{
               font-size:38px;
               font-weight:700;
               margin: 0 0 38px 27px;
            }
            @media (min-width:380px){
               .subtitle-part-two{
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
         div.classList.add("subtitle-part-two");
         div.textContent = "Subtítulo 2";

         shadow.appendChild(div)
      }
   }
   customElements.define('subtitle-two',SubtitleTwo);

};