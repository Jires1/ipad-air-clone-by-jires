
$(document).ready(function(){

    const menuListShow = () => {
        $(".menu-item__item__label").each((index, element)=>{
            setTimeout(() => {
                $(element).toggleClass("visible")
                // console.log(index, $(this), element)
            }, index * 40);
        })
    }

    const menuListHide = () =>{
        $(".menu-item__item__label").get().reverse().each((index, element)=> {
            console.log(index, element)
        })
    }

    $('.menu-item__item__lists').addClass('hide-list')

    $('.menu-icon').on('click', function(event){
        event.preventDefault();
        $('.menu').toggleClass('active');
        $(".menu-items").toggleClass('visible')
        $('.menu-list__container').toggleClass(['show'])

        if (!$(".menu-item__item__label").hasClass('visible')){
            menuListShow();
        }else{
            $(".menu-item__item__label").each((index, element) => {
                setTimeout(() => {
                    element.classList.toggle('visible')
                }, 0);
            })
        }
        if ($('.ipad-nav').hasClass('ipad-show')) {
            $('#ipad__option-menu').trigger('click')
        }
        
    })
    
    const checkMediaQuery = () => {
        if(window.matchMedia('(max-width:833px)').matches){
            $('.menu-item__item__label').off('mouseenter');
            $(".search-icon, .shop-icon, .apple-icon,.menu-items-bg").off('mouseenter');
            $('.search-icon, .shop-icon').off('click');
            $('body').off('mouseleave');
            // $('.menu-list__container').addClass('hide-li')

            console.log('ok resize');
        }
    }

    checkMediaQuery();
    $(window).on('resize', checkMediaQuery());
    console.log("active")
})
