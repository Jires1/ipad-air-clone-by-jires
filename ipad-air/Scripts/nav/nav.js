function itemsHeight(element) {
    const childElement = element.get(0).getBoundingClientRect();
    
    $('.menu-items').css("height", `${childElement.height}px`)
    var remainingHeight = $(window).height() - childElement.height - 3
    // console.log(remainingHeight);
    $(".menu-items-bg").css("height", `${remainingHeight}px`)
}

$(".menu-item__item__label").on('mouseenter', function(){
    var labelList = $(this).attr('list');
    console.log(labelList);
    $('.menu-items').addClass('list-view')
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