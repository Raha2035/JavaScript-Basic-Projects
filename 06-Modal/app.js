const closeBtn = document.querySelector(".close-btn");
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
