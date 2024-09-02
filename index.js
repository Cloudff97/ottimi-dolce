(() => {
document.addEventListener("DOMContentLoaded", () => {
  const $preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    $preloader.style.display = "none";
    document.getElementById('menu1').classList.add('active');
  });
});

const $progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
  let height = document.body.scrollHeight - window.innerHeight;
  let scrollPosition = document.documentElement.scrollTop;
  let width = (scrollPosition / height) * 100;
  $progressBar.style.width = `${width}%`;
});

const navMenu = document.querySelectorAll('.nav-menu');
const navSection = document.querySelectorAll('.nav-section');
  const functionObserver = (entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        const sectionActual = Array.from(navMenu).find(item => item.dataset.url === entry.target.id)
        sectionActual.classList.add('visible')
        for(item of navMenu) {
          if(item !== sectionActual) {
            item.classList.remove('visible')
          }
        }
      }
    });
  }
const observer = new IntersectionObserver(functionObserver, {
  threshold: 0.8
});
navSection.forEach(section => observer.observe(section));

const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");
  menuBtn.addEventListener('click', () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
  });

const searchForm = document.querySelector(".search-form");
const searchFormInput = document.querySelector(".search-form input");
const searchBtn = document.querySelector("#search-btn");
  searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle("active");
    searchFormInput.focus();
    navbar.classList.remove("active");
  });

window.addEventListener('scroll', () => {
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
maquinaEscribir('  Ottimi-Dolce           ',100,maquina);

const btnInfo = document.querySelector(".btn-info");
const info = document.querySelector("#info");
  btnInfo.addEventListener('click', () => {
    info.classList.add("active");
  });
const btnCerrarInfo = document.querySelector(".btn-cerrar-info");
  btnCerrarInfo.addEventListener('click', () => {
    info.classList.remove("active");
  });

document.addEventListener('DOMContentLoaded', (event) => {
  const buttons = document.querySelectorAll('.btn-cambio');
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const menuID = button.getAttribute('data-menu');
      const menu = document.getElementById(menuID);
      document.querySelectorAll('.menu-ventas').forEach(menu => {
        menu.classList.remove('active');
      })
      menu.classList.add('active');
    });
  });
});

function videoIntersecting() {
  const $videos = document.querySelectorAll('video[data-intersecting-video]');
  const callback = (entries) => {
      entries.forEach(entry => {
          if(entry.isIntersecting) {
              entry.target.play();
          } else {
              entry.target.pause();
          }
      });
  }
  const observer = new IntersectionObserver(callback, {
      threshold: .1
  })
  $videos.forEach((element) => observer.observe(element));
}
videoIntersecting();

const slider = document.querySelectorAll('.slider-container');
const nextSlider = document.querySelector('#next');
const prevSlider = document.querySelector('#prev');
let index = 0;
function next() {
  slider[index].classList.remove('active');
  index = (index + 1) % slider.length;
  slider[index].classList.add('active');
}
function prev() {
  slider[index].classList.remove('active');
  index = (index - 1 + slider.length) % slider.length;
  slider[index].classList.add('active');
}
setInterval(next, 6000);
prevSlider.addEventListener('click', () => {
  prev();
});
nextSlider.addEventListener('click', () => {
  next();
});

/*
const validarEmail = document.querySelector('email');
validarEmail = (email = '') => {
  if(!email) return console.warn('ingresa un email');

  if(typeof email !== "string") return console.error(`El valor "${email}" ingresado, no es valido`);

  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

  return (expReg) ? console.info(`"${email}", es valido`) : console.warn(`"${email}", no es valido`);
}*/
})()