window.addEventListener('load', () => {
  document.getElementById('preloader').classList.remove('preloader');
});

const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
  });

const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
  searchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
  });

window.addEventListener('scroll', () =>{
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
});

const maquina = document.querySelector('h2');
const maquinaEscribir = (text = '',tiempo = 200, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML =  ''
  let i = 0
  let j = text.length
  let escribir = setInterval(function() {
    if (i === arrayCaracteres.length) {
      etiqueta.innerHTML = text.substring(0,j)
      j--
      if (j === 0) {
        etiqueta.innerHTML = ''
        i = 0
        j = text.length
      }
    } else {
      etiqueta.innerHTML += arrayCaracteres[i]
      i++
    }
  }, tiempo)
}
maquinaEscribir(' Ottimi-Dolce       ',100,maquina);

const slider = document.querySelectorAll('.slider-container');
let index = 0;

function next(){
  slider[index].classList.remove('active');
  index = (index + 1) % slider.length;
  slider[index].classList.add('active');
}

function prev(){
  slider[index].classList.remove('active');
  index = (index - 1 + slider.length) % slider.length;
  slider[index].classList.add('active');
}

setInterval(next, 6000);