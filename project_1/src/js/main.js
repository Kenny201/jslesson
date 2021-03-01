import '../../node_modules/bootstrap/js/src/util/index.js'
import '../../node_modules/bootstrap/js/dist/alert.js'
import '../../node_modules/bootstrap/js/dist/button.js'
import '../../node_modules/bootstrap/js/dist/carousel.js'
import '../../node_modules/bootstrap/js/dist/collapse.js'

let menu_btn = document.querySelector('.menu_btn');

menu_btn.addEventListener("click", function()
{
    menu_btn.classList.toggle("change");
   
})