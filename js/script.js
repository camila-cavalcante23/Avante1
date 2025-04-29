const track = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.dot');

function moveToSlide(slideIndex) {
  const slideWidth = track.clientWidth;
  track.style.transform = `translateX(-${slideWidth * slideIndex}px)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}


document.addEventListener('DOMContentLoaded', () => {
    const pontos = document.querySelector('.pontos');
    const menuOpcoes = document.querySelector('.menu-opcoes');
  
    pontos.addEventListener('click', () => {
  
      if (menuOpcoes.style.display === 'none' || menuOpcoes.style.display === '') {
        menuOpcoes.style.display = 'block'; // Exibe o menu
      } else {
        menuOpcoes.style.display = 'none'; // Oculta o menu
      }
    });
  });


 

  const lupa = document.querySelector('.lupa');
  const campoBusca = document.querySelector('.barra-pesquisa input');


  const resultadoBusca = document.createElement('div');
  resultadoBusca.style.marginTop = '10px';
  document.querySelector('.barra-pesquisa').appendChild(resultadoBusca);


  lupa.addEventListener('click', () => {
    const textoBusca = campoBusca.value.trim();
    if (textoBusca !== '') {
      resultadoBusca.textContent = `Você buscou por: '${textoBusca}'`;
    } else {
      resultadoBusca.textContent = '';
    }
  });


  var swiper = new Swiper('.product-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      }
    }
  });

  
 