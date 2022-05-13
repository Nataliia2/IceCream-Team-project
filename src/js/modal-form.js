// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();


(() => {

const refs = {
  openModalBtn: document.querySelector("[data-open-form]"),
  openModalBtn2: document.querySelector("[data-open-form2]"),
  openModalBtn3: document.querySelector("[data-open-form3]"),
  openModalBtn4: document.querySelector("[data-open-form4]"),
  openModalBtn5: document.querySelector("[data-open-form5]"),
  closeModalBtn: document.querySelector("[data-close-form]"),
  backdrop: document.querySelector("[data-backdrop-form]"),
};

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.openModalBtn3.addEventListener("click", toggleModal);
  refs.openModalBtn4.addEventListener("click", toggleModal);
  refs.openModalBtn5.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
  document.body.classList.toggle("modal-open");
  refs.backdrop.classList.toggle("is-hidden");
}

function logBackdropClick() {
  console.log("Это клик в бекдроп");
}

})();