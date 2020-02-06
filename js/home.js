$(document).ready(function(){
$('.card-img-overlay').hide()

$('.gambar1').mouseenter(function(){
    $('#cardover1').slideDown()
})

$('.gambar1').mouseleave(function(){
    $('#cardover1').slideUp()
})

$('.gambar2').mouseenter(function(){
    $('#cardover2').slideDown()
})

$('.gambar2').mouseleave(function(){
    $('#cardover2').slideUp()
})

$('.gambar3').mouseenter(function(){
    $('#cardover3').slideDown()
})

$('.gambar3').mouseleave(function(){
    $('#cardover3').slideUp()
})

$('.gambar4').mouseenter(function(){
    $('#cardover4').slideDown()
})

$('.gambar4').mouseleave(function(){
    $('#cardover4').slideUp()
})

});
    // $("#cardover1").on({
    //     mouseenter: function(){
    //         $(this).css("background-color","blue");
    //     },
    //     mouseleave: function(){
    //         $(this).css("background-color","red");
    //     },
    //     click: function(){
    //         $(this).css("background-color","grey");
    //     }
    // });


