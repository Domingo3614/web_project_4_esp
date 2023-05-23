

const btnAbrirModal = document.querySelector(".Logo-Editarboton");
const btnCerrarModal = document.querySelector(".Logo-popupclose");
const modal = document.querySelector(".bg-modal");


btnAbrirModal.addEventListener("click",
function() {
 modal.style.display = "block";   
});


btnCerrarModal.addEventListener("click",
function() {
 modal.style.display = "none";   
});


window.addEventListener("click",function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
});

/*const addprofile = document.getElementById(".profile__box");*/
const form = document.querySelector(".popup__form");
const profileName = document.querySelector('.profile__nombre');
const profileVida = document.querySelector('.profile__acercademi');
const inputName = document.querySelector('.popup__text_nombre');
const inputVida = document.querySelector('.popup__text_vida');
/*const addButton = document.querySelector(".popup__guardar");*/


function handleFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;  
    profileVida.textContent = inputVida.value;
  }
  
form.addEventListener('submit', handleFormSubmit); 














/*function addprofile() {

    function handleFormSubmit(event) {
        event.preventDefault();
       /* profileName.textContent = inputName.value;
        profileVida.textContent = inputVida.value;*/
      

        /*let nanana = document.getElementById('popup__text_nombre');
        let vida = document.getElementById('popup__text_vida');*/


        /*profile.insertAdjacentHTML('afterbegin', `
   
        <div class="profile__info">
        <div class="profile__box">
        <h2 class="profile__nombre">Jacques Cousteau${inputName.value}</h2>
        <div class="Logo-Editarboton" id="Logo-Editarboton"></div>
        </div>
        <h3 class="profile__acercademi">Acerca de mi${inputVida .value}</h3>
        `);

        inputName.value = '';
        inputVida.value = '';

    }
}

  addButton.addEventListener('click', addprofile);

  console.log(addButton);*/






  /*addButton.addEventListener("click",function() {

    let nanana = document.getElementById('popup__text_nombre');
    let vida = document.getElementById('popup__text_vida');


    profile.insertAdjacentHTML('afterbegin', `
    <div class="profile__info">
    <div class="profile__box">
      <h2 class="profile__nombre">Jacques Cousteau${nanana.value}</h2>
      <div class="Logo-Editarboton" id="Logo-Editarboton"></div>
    </div>
    <h3 class="profile__acercademi">Acerca de mi${vida.value}</h3> 
  `);

    nanana .value = '';
    vida.value = '';
    
});*/





/*console.log(typeof document.querySelector('.profile__nombre').value);*/





/*document.getElementById("Logo-Editarboton").addEventListener("click",
function(){
    document.querySelector(".bg-modal").style.display = "flex";
});

document.getElementById("Logo-popupclose").addEventListener("click",
function(){
    document.querySelector(".bg-modal").style.display = "display:none;";*/















