let indexAtual = 0;
    const itensCarrossel = document.querySelectorAll('.carrossel-item');
    const totalItens = itensCarrossel.length;

    function mudarSlide(direcao) {
      indexAtual += direcao;

      if (indexAtual < 0) {
        indexAtual = totalItens - 1;  
      } else if (indexAtual >= totalItens) {
        indexAtual = 0;  
      }

      const wrapper = document.querySelector('.carrossel-wrapper');
      wrapper.style.transform = `translateX(-${indexAtual * 100}%)`;
    }

    window.onload = function () {
      mudarSlide(0);  
    };

