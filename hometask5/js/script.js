
let menu = document.getElementsByClassName('menu-item'),
    answer = prompt('Как вы относитесь к apple'),
    list = document.querySelector('ul'),
    liFive = document.createElement('li');1

menu[1].before(menu[2]);

liFive.classList.add('menu-item');
liFive.textContent = "Пятый пункт";
list.append(liFive);

document.body.style.backgroundImage = 'url("img/apple_true.jpg")';
document.getElementById("title").textContent = "Мы продаём только подлинную технику Apple";
document.getElementsByClassName('adv')[0].remove();
document.getElementById('prompt').textContent = answer;