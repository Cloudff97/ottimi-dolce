let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () =>{
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
}

let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () =>{
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
}

let cartItem = document.querySelector(".cart-items-container");
document.querySelector("#cart-btn").onclick = () =>{
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
}

window.onscroll = () =>{
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
}

const maquina = document.querySelector('h2');
const maquinaEscribir = (text = '',tiempo = 200, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML =  ''
  let i = 0
  let j = text.length
  let escribir = setInterval(function(){
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