function itemsHeight(element) {
    const childElement = element.get(0).getBoundingClientRect();
    $('.menu-items').css("height", `${childElement.height}px`)
    
    var remainingHeight = $(window).height() - childElement.height - 3
    // console.log(remainingHeight);
    $(".menu-items-bg").css("height", `${remainingHeight}px`)
}

$(".menu-item__item__lists").removeClass('show').addClass('hide-list');
// $('.menu-item__item__lists-element > div').addClass('hide-co')
$(".menu-item__item__label").on('mouseenter', function(){
    var labelList = $(this).attr('list');
    // console.log(labelList);
    $('.menu-items').addClass('list-view')
    $(".menu-item__item__lists").removeClass('show').addClass('hide-list');

    var listView = $(`.menu-item__item__lists[list='${labelList}']`);
    listView.addClass('show');
    
    console.log(listView.find('li').length);
    itemsHeight(listView);

    var liContainers = listView.find('.menu-item__item__lists-element > div')    
    listView.find('li').addClass('li-hide')

    // setTimeout(() => {
    //     liContainers.each(function(index){
    //         $(this).addClass('show-co')
    //     })

    // }, index * 30);
    
    listView.find('li').each(function(index) {
        setTimeout(() => {
            $(this).addClass('li-show')
        }, 20 * index);

        listView.removeClass('li-hide')
    })
    
});

$('.search-icon').on('click', function(event){
    event.preventDefault();
    var element = $('[list="search"]');
    // console.log(element);
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
    // console.log(element);

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
    }, 200);
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
})