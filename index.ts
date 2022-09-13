import { header } from "./components/header/header";
import { titleAndP } from "./components/title-parrafo/title-parrafo";
import { subtitle } from "./components/subtitle/subtitle";
import { text } from "./components/lorem-text/lorem-text";
import { loremSubtitle } from "./components/lorem-subtitle/lorem-subtitle";
import { subtitleTwo } from "./components/subtitle-2/subtitle-2";
import { form } from "./components/form/form";
import { buttonVolver } from "./components/buttom-volver/button"
import { footer } from "./components/footer/footer"

// HACER EL MODO RESPONSIVE CENTRANDOLOS EN SU RESPECTIVOS ESTILOS

(function () {
   header();
   titleAndP();
   subtitle();
   text();
   loremSubtitle();
   subtitleTwo();
   form();
   buttonVolver();
   footer();
})();