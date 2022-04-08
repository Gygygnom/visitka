
$(document).ready(function(){
    $('select').on("change", function(){
        var value =$('#list1').val();
        let summa1;
        let summa2;
        let summa3;
        let summa;
    
        if(value == 'opt2'){
        summa1 = 2000;
        summa3 = 0;
        summa2 = 0;
    }
        if(value == 'opt3'){
        summa1 = 3000;
        summa3 = 0;
        summa2 = 0;
    }
        if(value == 'opt4'){
        summa1 = 3000;
        summa3 = 0;
        summa2 = 0;
    }
        var value1 = $('#list2').val();
        if(value1 == 'opt2'){
        summa2 = 1000;
        summa3 = 0;
    }
        if(value1 == 'opt3'){
        summa2 = 1000;
        summa3 = 0;
    }
        var value2 = $('#list3').val();
        if(value2 == 'opt2'){
        summa3 = 1000;
    }
        if(value2 == 'opt3'){
        summa3 = 1000;
    }
     
    
    
    summa = summa1 + summa2 + summa3;
    
    $('.spanchik').text(summa + " ₽");
    
    
    
    });
    $('.buda').mouseenter(function(){
        $(this).toggleClass("red");
    });
    $('.buda').mouseleave(function(){
        $(this).toggleClass("black");
    });
    
})
