export function form() {
   class Form extends HTMLElement {
      constructor() {
         super();
         this.render();
      }
      render() {
         let style = document.createElement("style");
         style.textContent = `
            .name-title{
               font-size:18px;
               margin:42px 0 0 30px;
            }
            .input{
               display:flex;
               border-color:#000000;
               border-radius:4px;
               font-size:20px;
               width:312px;
               height:50px;
               padding: 0;
               text-align:center;
               margin-bottom: 16px;
            }
            .button{
               width: 312px;
               height: 50px;
               margin: 0 0 69px 0;
               background-color:#9CBBE9;
               border-radius:4px;
               font-size:22px;
               font-weight:500;
               border-style:hidden;

            }
            @media (min-width:380px){
               .name-title{
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
               }
            }
            `;
         
         const inputStyle = this.children[0].getElementsByClassName("input");
            
         const buttonStyle = this.lastElementChild?.getElementsByClassName("button");
         let shadow = this.attachShadow({ mode: 'open' });
         shadow.appendChild(style);

         let div = document.createElement("div");
         div.classList.add("name-title");
         div.textContent = "Nombre"
         
         shadow.appendChild(div)
         if (this.children[0]) {
            
            div.appendChild(this.children[0])
         }
         
         if (this.lastElementChild) {
            div.appendChild(this.lastElementChild)
         }
      }
   }
   customElements.define('form-content',Form);
};