var revIpadElements = $('.ipad__option-block .nav-link').get();
revIpadElements.reverse();

const ipadAppearing = () => {
    revIpadElements.forEach((element,index) => { 
        console.log(index, element);
            setTimeout(() => {
                element.classList.add('appear-menu');
            }, index * 18);
            element.classList.remove('hide-menu')
            element.classList.add('appear-menu-stand');
        });
}

var norIpadElements = $('.ipad__option-block .nav-link').get();
const ipadDesappearing = () => {
    norIpadElements.forEach((element,index) => {
            setTimeout(() => {
                element.classList.add('hide-menu')
            }, index * 18);
            element.classList.remove('appear-menu')
            element.classList.remove('appear-menu-stand');
        });
}

$('#ipad__option-menu').on('click', (event)=>{
    event.preventDefault();

    $('.global-header').addClass('bg-changed');
    if ($('.right-btn').hasClass('active')){
        $('.right-btn').addClass('inverse');
        $('.left-btn').addClass('inverse');
        $('.ipad-nav').addClass('ipad-show');
        ipadAppearing();

        setTimeout(() => {
            $('.right-btn').addClass('up').removeClass(['active','down']);
            $('.left-btn').addClass('up').removeClass(['active','down']);

        }, 800);
        $('.global-header').removeClass('bg-rm');
        $('.ipad-nav').removeClass('ipad-hide');


    }else{
        $('.global-header').addClass('bg-rm');
        $('.right-btn').toggleClass('active');
        $('.left-btn').toggleClass('active');
        $('.ipad-nav').addClass('ipad-hide');
        ipadDesappearing();
        
        setTimeout(() => {
            $('.right-btn').toggleClass('down').removeClass(['inverse','up']);
            $('.left-btn').toggleClass('down').removeClass(['inverse','up']);
        }, 390);
        $('.global-header').removeClass('bg-changed')
        $('.ipad-nav').removeClass('ipad-show');
    }
    
})