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

/* OVERLAY */
function openNav() {
    document.getElementById('nav-overlay').style.display = "block"; 
}
openNav();
document.querySelector('.menu-btn').addEventListener('click', openNav);

function closeNav() {
    document.getElementById('nav-overlay').style.display = "none"; 
}
closeNav();
document.querySelector('.closebtn').addEventListener('click', closeNav);