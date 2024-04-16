
$(document).ready(function(){

    const menuListShow = () => {
        $(".menu-item__item__label").each((index, element)=>{
            setTimeout(() => {
                $(element).toggleClass("visible")
                // console.log(index, $(this), element)
            }, index * 40);
        })
    }



    $('.menu-item__item__lists').addClass('hide-list')

    $('.menu-icon').on('click', function(event){

        if ( $("div[list='bag']").hasClass('show') | $("div[list='search']").hasClass('show') ) {
            event.preventDefault();
            $('.menu').toggleClass('active');
            $(".menu-items").toggleClass('visible');
            $('.menu-item__item__lists').removeClass('show');
        } else {
            event.preventDefault();
            $('.menu').toggleClass('active');
            $(".menu-items").toggleClass('visible')
            $('.menu-list__container').addClass(['hidden'])
            $('.menu-list__container').toggleClass(['show','hidden']);
            setTimeout(() => {
                $('.menu-list__container').toggleClass(['bg'])
            }, 1000);

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
            if (!$('.menu').hasClass('active')) {
                $('.menu-item__item__lists').removeClass('show');
                $(".menu-list__container").removeClass(['show', 'hidden']);
                $('.btn-back').removeClass('active');
                $('.menu-items').removeClass('overflow');

            }
        }
        
    })
    
    const checkMediaQuery = () => {
        if($(window).innerWidth() <= 833){
            $('.menu-item__item__label').off('mouseenter');
            $(".search-icon, .shop-icon, .apple-icon,.menu-items-bg").off('mouseenter');
            $('.search-icon, .shop-icon').off('click');
            $('body').off('mouseleave');
            // $('.menu-list__container').addClass('hide-li')

            console.log('ok resize');
        }
    }

    checkMediaQuery();
    $(window).on('resize', ()=> {
        const width = $(window).innerWidth();
        console.log(width);
    });
    console.log("end")
})
