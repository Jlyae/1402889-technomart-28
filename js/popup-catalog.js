var addBasket = document.querySelectorAll(".buy");
var windowBasket = document.querySelector(".basket-ok")
var closeBasket = document.querySelector(".button-close-basket");

window.addEventListener("keydown", function (evt) {
    if (windowBasket.classList.contains("basket-show")) {
        evt.preventDefault();
        windowBasket.classList.remove("basket-show");
    }
})

for (let elementBasket of addBasket) {
    elementBasket.addEventListener("click", function (evt) {
        evt.preventDefault();
        windowBasket.classList.add("basket-show");
    })
}

closeBasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    windowBasket.classList.remove("basket-show");
})