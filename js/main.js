let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;

burgerBtn.onclick = function () {
    if (!isBurgerOpen) {
        burgerMenu.style.display = "block";
        burgerBtn.style.backgroundPosition = "center left 50px, centre";
        isBurgerOpen = true;
    }
    else if (isBurgerOpen) {
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = "centre. centre left 50px";
        isBurgerOpen = false;
    }
}


let isBurgerClose = false;

burgerMenu.onclick = function () {
    if (!isBurgerClose) {
        burgerMenu.style.display = "block";
        burgerBtn.style.backgroundPosition = "center left 50px, centre";
        isBurgerClose = true;
    }
    else if (isBurgerClose) {
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = "centre. centre left 50px";
        isBurgerClose = false;
    }
}








/*
var navLink = document.querySelector(".nav-link");

navLink.addEventListener("click", menuClose);

function menuClose() {
    burgerMenu.classList.add("change");
}
*/







 


    