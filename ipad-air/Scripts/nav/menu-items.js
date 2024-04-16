$('.menu-item__item__label').on('click', function() {
    // $('.menu-list').toggleClass('clicked');

    $(".menu-list__container").toggleClass('anim-left');
    $(".menu-item__item__lists").removeClass('anim-right');

    setTimeout(() => {
        let labelList = $(this).attr('list');
        var listView = $(`.menu-item__item__lists[list='${labelList}']`);
        listView.addClass('show');

        $('.btn-back').addClass('active');
        $(".menu-list__container").removeClass('show');
        $('.menu-items').addClass('overflow');
    }, 450);
});

$('.btn-back').on('click', function() {
    $(".menu-list__container").toggleClass('anim-left');
    $(".menu-item__item__lists.show").toggleClass('anim-right');

    setTimeout(() => {
        $(`.menu-item__item__lists`).removeClass('show');
        $('.btn-back').removeClass('active');
        $(".menu-list__container").addClass('show');
        $('.menu-items').removeClass('overflow');
    }, 450);

});


$('.icons .search-icon a, .icons .search-icon').on('click', function(event){
    event.preventDefault();
    if ($('.ipad-nav').hasClass('ipad-show')) {
        $('#ipad__option-menu').trigger('click');
    }

    $('.menu').toggleClass('active');
    
    var element = $('[list="search"]');
    element.find('.hide-co').removeClass('hide-co');

    $('.menu-items').addClass('visible')
    $(".menu-item__item__lists").removeClass('show').addClass('hide-list');
    element.addClass('show');

    setTimeout(() => {
        element.find('input').focus();
    }, 1000);
})

$('.icons .shop-icon a, .icons .shop-icon').on('click', function(event){
    event.preventDefault();
    $('.menu').toggleClass('active');
    var element = $('[list="bag"]');

    if ($('.ipad-nav').hasClass('ipad-show')) {
        $('#ipad__option-menu').trigger('click');
    }

    element.find('.hide-co').removeClass('hide-co');
    $('.menu-items').addClass('list-view')
    $(".menu-item__item__lists").removeClass('show').addClass('hide-list');

    $('.menu-items').addClass('visible')
    
    var spinner = $('.manu-item__lists__spinner'); 
    setTimeout(() => {
        spinner.addClass('hidden');
    }, 4000);

    element.addClass('show');
})