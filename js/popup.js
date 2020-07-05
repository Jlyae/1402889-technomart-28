var writeUs = document.querySelector(".write-us");
var letter = document.querySelector(".letter");
var letterClose = document.querySelector(".button-close");
var letterForm = document.querySelector(".letter-forms");
var letterName = document.querySelector(".letter-name");
var letterEmail = document.querySelector(".letter-email");
var map = document.querySelector(".maps-popup");
var mapJpg = document.querySelector(".maps-little");
var closeMap = document.querySelector(".button-close-map");
var addBasket = document.querySelectorAll(".buy");
var windowBasket = document.querySelector(".basket-ok")
var closeBasket = document.querySelector(".button-close-basket");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("letterName");
} catch (err) {
    isStorageSupport = false;
}

writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    letter.classList.add("letter-show");
    if (storage) {
        letterName.value = storage;
        letterEmail.focus();
    }
    else {
        letterName.focus();
    }
});

letterClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    letter.classList.remove("letter-show");
    letter.classList.remove("modal-error");
});

letterForm.addEventListener("submit", function (evt) {
    if (!letterName.value || !letterEmail.value) {
        evt.preventDefault();
        letter.classList.remove("modal-error");
        letter.offsetWidth = letter.offsetWidth;
        letter.classList.add("modal-error");
    }
    else {
        if (isStorageSupport) {
            localStorage.setItem("letterName", letterName.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (letter.classList.contains("letter-show")) {
            evt.preventDefault();
            letter.classList.remove("letter-show")
            letter.classList.remove("modal-error");
        }
        else if (map.classList.contains("maps-show")) {
            evt.preventDefault();
            map.classList.remove("maps-show");
        }
        else if (windowBasket.classList.contains("basket-show")) {
            evt.preventDefault();
            windowBasket.classList.remove("basket-show");
        }
    }
})

mapJpg.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("maps-show");
})

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("maps-show");
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