
const btnOpen = document.querySelector(".add");



const modal = document.querySelector(".modal");

const btnClose = document.getElementById("remove");

btnOpen.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
});

btnClose.addEventListener("click", function (e) {
  e.stopPropagation();
  modal.classList.add("remove");
  document.body.style.overflow = "auto";
});