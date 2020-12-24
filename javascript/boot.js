
$('.fa-times').click(function(){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove()
    })
})

$('.fa-arrow-left').on('click',function(){
    $('.side_bar').addClass('active')
    $('.overlay').addClass('active')
})

$('.overlay').on('click',function(){
    $('.side_bar').removeClass('active')
    $(this).removeClass('active')
})

