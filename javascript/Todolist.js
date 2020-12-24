$('ul'). on('click','li',function(){
    if ($(this).css('color')==='rgb(128, 128, 128)'){
        $(this).css({'color':'black','text-decoration':'none'})
    }
    else{
        $(this).css({'color':'grey',
        'text-decoration':'line-through'})
    }
})

$('ul').on('click','span',function(e){
    e.stopPropagation()
    $(this).parent().fadeOut(1000,function(){
        $(this).remove()
    })
})

$("input[type='text'").keypress(function(event){
    if(event.which===13){
        var todotext=$(this).val()
        $(this).val("")
        $('ul').append("<li><span><i class='fa fa-trash'></i></span> " +todotext+ "</li>")   
    }
})

$('.fa-plus').click(function(){
    $('input').fadeToggle()
})

