import 'bootstrap';
import 'animate.css/animate.css';
import './sass/main.scss';
import Slideout from 'slideout';
import WOWJS from 'wowjs';
import './assets/technologist.png';

// initialize wow animat
new WOWJS.WOW({
    mobile: false
}).init();

$(document).ready(() => {

    // tooltip
    $(() => {
        $('[data-toggle="tooltip"]').tooltip({
            trigger: 'hover'
        });
    });
    /* ------------------------------------------------------------- */

    // navbar hide/shrink
    let didScroll, lastScrollTop = 0,
        delta = 5;
    let navbarHeight = $('#panel').outerHeight();

    $(window).scroll((e) => {
        didScroll = true;
    });
    setInterval(() => {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        let value = $(document).scrollTop();
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - value) <= delta)
            return;

        if (value > lastScrollTop && value <= navbarHeight) {
            $('#panel').addClass('shrink');
        } else if (value > lastScrollTop && value > navbarHeight) {
            $('#panel').addClass('shrink');
            $('#panel').addClass('hide');
        } else {
            if (value + $(window).height() < $(document).height()) {
                $('#panel').removeClass('hide');
            }
            if (value <= 10) {
                $('#panel').removeClass('shrink');
            }
        }
        lastScrollTop = value;
    }
    /* ------------------------------------------------------------- */

    // Add smooth scrolling to nav links
    $('.section__link').click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 850);
    });
    /* ------------------------------------------------------------- */

});

/* ------------------------------------------------------------- */

// TABS COLOR SWITCH & HIGHLIGHTER
const tab_btn = document.querySelectorAll('.exp__button');
const elements = [...tab_btn];
let cur = 0,
    prev;
for (let el of elements) {
    el.addEventListener('click', () => {
        prev = cur;
        cur = elements.indexOf(el);
        if (prev !== cur) {
            $('.active__highlighter').removeClass(`ty-${prev}`);
        }
        if (!el.classList.contains('active')) {
            el.classList.add('active__tab');
            $('.active__highlighter').addClass(`ty-${cur}`);
            for (let el of elements) {
                if (el.classList.contains('active')) {
                    el.classList.remove('active__tab');
                }
            }
        }
    });
}

/* ------------------------------------------------------------- */

console.log('%cCrafted and Coded by abhijithvijayan', 'color: white; background: black; padding: 5px 20px');

/* ------------------------------------------------------------- */

// NAVBAR SLIDER
let slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 1,
    'tolerance': 70,
    'side': 'right'
});

function modClass(el, val, flag) {
    if (flag) {
        $(el).addClass(val);
    } else {
        $(el).removeClass(val);
    }
}

document.querySelector('.hamburger__button').addEventListener('click', function () {
    // slideout.toggle();
    if (slideout.isOpen()) {
        modClass('.hamburger-inner', 'hamburger__arrow', 1);
        modClass('.hamburger__button', 'is-active', 0);
        slideout.close();
    } else {
        modClass('.hamburger-inner', 'hamburger__arrow', 0);
        modClass('.hamburger__button', 'is-active', 1);
        slideout.open();
    }
});

function close(e) {
    e.preventDefault();
    slideout.close();
}

slideout
    .on('beforeopen', function () {
        this.panel.classList.add('panel-open');
        modClass('body', 'blur', 1);
    })
    .on('open', function () {
        this.panel.addEventListener('click', close);
    })
    .on('beforeclose', function () {
        this.panel.classList.remove('panel-open');
        modClass('body', 'blur', 0);
        modClass('.hamburger-inner', 'hamburger__arrow', 1);
        modClass('.hamburger__button', 'is-active', 0);
        this.panel.removeEventListener('click', close);
    });

/* ------------------------------------------------------------- */

// Transition delay and More elements visiblity
const other_projects = document.querySelectorAll('#other__projects--hide');
const project_elements = [...other_projects];
$('.other__projects--button').click(() => {
    let delay = 0;
    $('.other__projects--button').html('Fewer Projects');
    for (let pr of project_elements) {
        delay = project_elements.indexOf(pr) * 125;
        if ($(pr).hasClass('to-hide')) {
            $(pr).attr('style', `animation-delay: ${delay}ms;`);
            $(pr).show(0);
            $(pr).removeClass('to-hide');
        } else {
            $('.other__projects--button').html('More Projects');
            $(pr).hide(0);
            $(pr).addClass('to-hide');
        }
    }
});

/* ------------------------------------------------------------- */

// ANIMATION DELAY

const delay = (animated) => {
    const arrayElement = document.querySelectorAll(animated);
    let delay = 0;
    let array = [...arrayElement];
    for (let el of array) {
        delay = (array.indexOf(el) + 1) * 125;
        $(el).attr('style', `animation-delay: ${delay}ms;`);
    }
};


// navbar elements animation delay
delay('.animated__nav--element');

// home elements animation delay
delay('.animated__home--element');

// project elements animation delay
delay('.animated__project--element');

/* ------------------------------------------------------------- */