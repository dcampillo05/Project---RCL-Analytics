function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        
    }else{
        menuMobile.classList.add('open');
        
    }
}

$(document).ready(function(){
   
    let currentIndex = 0;
    const itemWidth = $(' .carousel img').outerWidth();

    $('.carrossel').css('transform', 'translateX(' + (-itemWidth * currentIndex) + 'px)');

    function nextSlide(){
        if (currentIndex > 3){
            currentIndex++;
        }else{
            currentIndex = 0;
        }
        uptadeSlide()
    }

    function uptadeSlide(){
        const translateValue = -itemWidth * currentIndex;
        $('.carrossel').css('transform', 'translateX(' + translateValue + 'px)');
    }

    setInterval(nextSlide, 3000)

})