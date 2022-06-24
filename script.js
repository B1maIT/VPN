let card1 = document.querySelector( '.card-free')
let card2 = document.querySelector( '.card-standart')
let card3 = document.querySelector( '.card-premium')

$('.select1').on('click', function() {
    card1.style.border = "2px solid #F53838"
});

$('.select2').on('click', function() {
    card2.style.border = "2px solid #F53838"
});

$('.select3').on('click', function() {
    card3.style.border = "2px solid #F53838"
});
// if (card1.style.border = "2px solid #F53838") {
//     card2.style.border = "2px rgb(221, 217, 217) solid"
//     card3.style.border = "2px rgb(221, 217, 217) solid"   
// }

$(document).ready(function() {
    $('.comments__carousel').slick({
        arrows:true,
        dots:true,
        slidesToShow:3,
        speed:1000,
        centerMode:true,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    arrows:false,
                }
            }
        ]
    });
});
  