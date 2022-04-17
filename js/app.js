$(document).ready(function(){
    var $grid =  $('.portfolio-music').isotope({
        //options
    });
    //filter icon
    $('.navbar-nav').on('click', '.nav-item', function(){
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        })
    });
});
var listCounter = document.querySelectorAll('.counting-item');
function count(el) {
    var numberElm = el.querySelector('.number');
    var to = parseInt(numberElm.innerText);
    var count = 0;
    var time = 350;
    var step = to / time;
    let couting = setInterval ( () => {
        count += step;
        
        if (count > to) {
            clearInterval(couting);
        } else {
            numberElm.innerText = Math.round(count);
        }
    },1);
}
// document.getElementById("#counting").scrollIntoView();
function countingStart() {
    listCounter.forEach(item => {
        count(item);
    });
}
countingStart();

