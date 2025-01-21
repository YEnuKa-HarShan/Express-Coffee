const menuOpenButton = document.querySelector("#menu-open-btn");
const menuCloseButton = document.querySelector("menu-close-btn");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu")
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());