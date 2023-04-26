
const openBtn = document.querySelector(".open");
const popupContainer = document.querySelector(".popup-container");

function bluredScreen(){
    openBtn.classList.add("blur");
    popupContainer.style.display = "flex";
};

function unbluredScreen(){
    openBtn.classList.remove("blur");
    popupContainer.style.display = "none";
};
