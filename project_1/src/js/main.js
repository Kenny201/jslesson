let menu_btn = document.querySelector('.menu_btn');
let menu = document.querySelector('.menu');
let btn = document.querySelector('button')
console.log(btn);
// menu_btn.addEventListener("click", function()
// {  menu_btn.classList.toggle("change");
//    menu.classList.toggle("menu_active");
//    console.log(menu);
// })
btn.addEventListener('click', function(e){
    console.log('Произошло событиz ' + e.type + " по элементу" + e.target)
})