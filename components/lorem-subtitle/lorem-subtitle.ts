export function loremSubtitle() {
   class LoremSubtitle extends HTMLElement{
      constructor() {
         super();
         this.render();
      }
      render() {
         let style = document.createElement("style");
         style.textContent = `
            .subtitle-lorem{
            font-size:22px;
            font-weight:500;
            margin: 83px 54px 110px 50px;
            width: 272px;
         }
         @media (min-width:380px){
            .subtitle-lorem{
               display: flex;
               flex-direction: row;
               justify-content: center;
               align-items: center;
               padding: 100px 0 110px 0;
               margin: auto;
            }
            @media (min-width:720px){
               .subtitle-lorem{
                  width: 400px;
                  
            }
         }
         }
         `;
         let shadow = this.attachShadow({ mode: 'open' });
         shadow.appendChild(style)

         let div = document.createElement("div");
         div.classList.add("subtitle-lorem");
         div.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

         shadow.appendChild(div);
      }
   }
   customElements.define('lorem-subtitle',LoremSubtitle);

}