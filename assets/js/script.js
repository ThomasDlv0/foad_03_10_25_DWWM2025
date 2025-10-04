const boxPopup = document.querySelector(".popup")
const btnPopup = document.querySelector("#btn-js");
const btnDownloead = document.querySelector(".btn-cta-download");
btnPopup.addEventListener("click", () => {
    boxPopup.style.display = "none";
})

btnDownloead.addEventListener("click", () => {
    boxPopup.style.display = "block";
})