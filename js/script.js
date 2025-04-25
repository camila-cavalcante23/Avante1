document.addEventListener('DOMContentLoaded', () => {
    const pontos = document.querySelector('.pontos');
    const menuOpcoes = document.querySelector('.menu-opcoes');
  
    pontos.addEventListener('click', () => {
      // Alterna a visibilidade do menu de opções
      if (menuOpcoes.style.display === 'none' || menuOpcoes.style.display === '') {
        menuOpcoes.style.display = 'block'; // Exibe o menu
      } else {
        menuOpcoes.style.display = 'none'; // Oculta o menu
      }
    });
  });
  