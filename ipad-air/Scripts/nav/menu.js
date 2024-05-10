
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
            $('.global-header__nav').addClass('static');
            $('.menu-item__item__lists').removeClass('show');
        } else {
            event.preventDefault();
            $('.menu').toggleClass('active');
            $(".menu-items").toggleClass('visible')
            $('.menu-list__container').addClass(['hidden'])
            $('.menu-list__container').toggleClass(['show','hidden']);
            $('.global-header__nav').addClass('static');
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
                $('#ipad__option-menu').trigger('click');
            }
            if (!$('.menu').hasClass('active')) {
                $('.menu-item__item__lists').removeClass('show');
                $(".menu-list__container").removeClass(['show', 'hidden']);
                $('.btn-back').removeClass('active');
                $('.menu-items').removeClass('overflow');
                $('.global-header__nav').removeClass('static');

            }else{
                $(".menu-list__container").removeClass('anim-left');
                 $(".menu-item__item__lists").removeClass('anim-right');
            }
        }
        
    })
    
    const setMediaQuery = () => {
        $('.menu-item__item__label').off('mouseenter');
        $(".search-icon, .shop-icon, .apple-icon,.menu-items-bg").off('mouseenter');
        $('.search-icon, .shop-icon').off('click');
        $('body').off('mouseleave');
        // $('.menu-list__container').addClass('hide-li')
        console.log('ok resize');
    }

    $(window).on('resize', ()=> {
        const width = $(window).innerWidth();
        if(width <= 833){
            setMediaQuery();
            console.log('it\'s mobile query');
        }else{
            $(".menu-item__item__label").on('mouseenter', function(){
                var labelList = $(this).attr('list');
                // console.log(labelList);
                $('.menu-items').addClass('list-view');
                $(".menu-item__item__lists").removeClass('show').addClass('hide-list');
            
                var listView = $(`.menu-item__item__lists[list='${labelList}']`);
                listView.addClass('show');
                
                console.log(listView.find('li').length);
                itemsHeight(listView);
            
                var liContainers = listView.find('.menu-item__item__lists-element > div')    
                
                liContainers.each(function(value){
                    $('.menu-item__item__lists-element li').addClass('li-hide')
                    $('.menu-item__item__lists-element > div').addClass('hide-co')
                    setTimeout(() => {
                        $(this).addClass('show-co')
            
                        listView.find('li').each(function(index) {
                            setTimeout(() => {
                                $(this).addClass('li-show')
                            }, 25 * index);
                        })
                    }, value * 70);
                })
            
                setTimeout(() => {
                    $('.menu-item__item__lists-element > div').addClass('show-co');
                    $('.menu-item__item__lists-element li').addClass('li-show')
                }, 800);
            });
            
            
            $('.search-icon').on('click', function(event){
                event.preventDefault();
                var element = $('[list="search"]');
                element.find('.hide-co').removeClass('hide-co');
            
                $('.menu-items').addClass('list-view')
                $(".menu-item__item__lists").removeClass('show').addClass('hide-list');
                element.addClass('show');
                itemsHeight(element);
                
                setTimeout(() => {
                    element.find('input').focus()
                }, 1000);
            })
            
            $('.shop-icon').on('click', function(event){
                event.preventDefault();
                var element = $('[list="bag"]');
            
                element.find('.hide-co').removeClass('hide-co');
                $('.menu-items').addClass('list-view')
                $(".menu-item__item__lists").removeClass('show').addClass('hide-list');
                
                var spinner = $('.manu-item__lists__spinner'); 
                setTimeout(() => {
                    spinner.addClass('hidden');
                }, 5000);
            
                element.addClass('show');
                itemsHeight(element);
            })
            
            function itemsHide(){
                setTimeout(() => {
                    $(".menu-item__item__lists").removeClass('list-view');
                    $('.menu-items').removeClass('list-view')
                
                    $('.menu-items').removeAttr("style")
                    $(".menu-items-bg").removeAttr('style')
                    $(".menu-item__item__lists").removeClass('show').addClass('hide-list');
            
                    $('.menu-item__item__lists-element > div').removeClass(['show-co', 'hide-co']);
                    $('.menu-item__item__lists-element > div').find('li').removeClass(['li-hide', 'li-show']);
                }, 300);
            }
            
            $("body").on('mouseleave', function() {
                itemsHide()
            });
            
            $(".search-icon").on('mouseenter', function(){
                itemsHide()
            });
            
            $(".shop-icon").on('mouseenter', function(){
                itemsHide()
            });
            
            $(".apple-icon").on('mouseenter', function(){
                itemsHide()
            });
            
            $(".menu-items-bg").on('mouseenter', function(){
                $(".menu-items-bg").removeAttr('style')
                itemsHide()
            })
        }
        console.log(width);
    });
})
