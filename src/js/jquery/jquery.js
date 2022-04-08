$(".obo").on("click", function(){
    $(this).fadeOut(300, function(){
        $(this).text('Новое содержимое').fadeIn(1000);
    })
    
});