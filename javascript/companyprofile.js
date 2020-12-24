$('.fa-arrow-left').click(function(){
    $('#dashboard').fadeToggle()
})

$('.fa-times').click(function(){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove()
    })
})

