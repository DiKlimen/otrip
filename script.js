const humb = document.querySelector('.header-burger-link');
const popup = document.querySelector('.popup');
const body = document.documentElement;

// Глубокое клонирование меню для мобильной версии
const menu = document.querySelector('.header-nav-list').cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
humb.addEventListener('click', hambHandler);

// Выполняем действия при клике ..
function hambHandler(element) {
    element.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    body.classList.toggle("noscroll");
    renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
    popup.appendChild(menu).classList.toggle("vusible");
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
    popup.classList.remove("open");
    body.classList.remove("noscroll");
}