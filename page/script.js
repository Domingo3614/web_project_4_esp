

const btnAbrirModal = document.querySelector(".logo__editarboton");
const btnCerrarModal = document.querySelector(".Logo__popupclose");
const modal = document.querySelector(".bg-modal");
const btnGuardarModal = document.querySelector(".popup__guardar");


btnAbrirModal.addEventListener("click",
function() {
 modal.style.display = "block";   
});


btnCerrarModal.addEventListener("click",
function() {
 modal.style.display = "none";   
});

btnGuardarModal.addEventListener("click",
function() {
 modal.style.display = "none";   
});


window.addEventListener("click",function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
});


const form = document.querySelector(".popup__form");
const profileName = document.querySelector('.profile__nombre');
const profileVida = document.querySelector('.profile__acercademi');
const inputName = document.querySelector('.popup__text_nombre');
const inputVida = document.querySelector('.popup__text_vida');



function handleFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;  
    profileVida.textContent = inputVida.value;
  }
  
form.addEventListener('submit', handleFormSubmit); 




















