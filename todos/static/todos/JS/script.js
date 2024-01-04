const container = document.querySelector(".container");
const imagens = document.querySelectorAll('.container img');
const indicatorButtons = document.querySelectorAll('.indicator-button');

let contador = 0;

function slider() {
    contador++;

    if (contador > imagens.length - 1) {
        contador = 0;
    }

    updateSlider();
}

function gotoSlide(index) {
    contador = index;
    updateSlider();
}

function updateSlider() {
    container.style.transform = `translateX(${-contador * 100}%)`;

    // Atualiza o estado ativo do botão indicador
    indicatorButtons.forEach((button, index) => {
        if (index === contador) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

setInterval(slider, 3000);

function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        
    }else{
        menuMobile.classList.add('open');
        
    }
}



