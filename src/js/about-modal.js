(() => {
  const refs = {
    openModalBtn: document.querySelector("[modal-open]"),
    closeModalBtn: document.querySelector("[modal-close]"),
    modal: document.querySelector("[modal]"),
    close: document.querySelector("[close]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.close.addEventListener("click", toggleModal);

  function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.modal.classList.toggle("is-closed");
      
    }
})();

