export function text() {
   class LoremText extends HTMLElement {
      constructor() {
         super()
         this.render();
      }
      render() {
         let style = document.createElement("style");
         style.textContent = `
            .text{
               margin:0 33px 33px 27px;
               font-size:18px;
               width:315px
            }
            @media (min-width:380px){
               .text{
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  margin: auto;
                  margin-bottom: 33px;
               }
            }
            @media (min-width:720px){
               .text{
                  width: 584px;
                  position: relative;
                  left: 90px;
               }
            }
         `;

         let shadow = this.attachShadow({ mode: "open" });
         shadow.appendChild(style);

         let div = document.createElement("div");
         div.classList.add("text");
         div.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?`;

         shadow.appendChild(div)
      }
   }
   customElements.define('text-lorem',LoremText);

}