import 'bootstrap'
import './sass/main.scss'
import './loading-bar'

/* For tooltip in social icons */

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

/* Navbar Fit on scroll */

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
          $('nav').addClass('shrink');
        } else {
           $('nav').removeClass('shrink');
        }
    });
}); 