const modalOverly = document.querySelector(".modal-overly");
const modalTitle = document.querySelector(".modal-title");
const modalText = document.querySelector(".modal-text");

export function openModal(title, text) {
  modalOverly.style.pointerEvents = "auto";
  modalOverly.style.opacity = "1";
  modalTitle.innerHTML = title;
  modalText.innerHTML = text;
}

export function initModal() {
  modalOverly.addEventListener("click", function (e) {
    let element = e.target;
    if (
      element.classList.contains("modal-close-btn") ||
      element.classList.contains("modal-overly") ||
      element.classList.contains("modal-ok-btn")
    ) {
        modalOverly.style.pointerEvents = "none";
      modalOverly.style.opacity = "0";
    }
  });
}

function closeModal(e) {
  modalOverly.style.pointerEvents = "none";
  modalOverly.style.opacity = "0";
}
