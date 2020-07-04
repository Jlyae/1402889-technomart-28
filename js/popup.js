var writeUs = document.querySelector(".write-us");
var letter = document.querySelector(".letter");
var letterClose = document.querySelector(".button-close");
var letterForm = document.querySelector(".letter-forms");
var letterName = document.querySelector(".letter-name");
var letterEmail = document.querySelector(".letter-email");

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
    } else {
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
    } else {
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
    }
})