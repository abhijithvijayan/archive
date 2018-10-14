import 'bootstrap'
import './sass/main.scss'

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
          $('nav').addClass('shrink shadow');
        } else {
           $('nav').removeClass('shrink shadow');
        }
    });
});