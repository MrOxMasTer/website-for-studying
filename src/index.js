const menuButton = document.querySelector(".header__menu-button");
const sidebar = document.querySelector(".sidebar");
const closeButton = document.querySelector(".sidebar__close-menu-button");

menuButton.addEventListener("click", () => {
    sidebar.classList.remove("sidebar--hidden");
    sidebar.classList.add("sidebar--show");
});

closeButton.addEventListener("click", () => {
    sidebar.classList.remove("sidebar--show");
    sidebar.classList.add("sidebar--hidden");
});

console.log(menuButton);
