//------ check user's device
let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
//------ check user's device
//------ slider swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//------ slider swiper

//------ tabs
let JsTriggers = document.querySelectorAll('.js-tab-trigger'),
    JsContents = document.querySelectorAll('.js-tab-content');

JsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
        let id = this.getAttribute('data-tab'),
            content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
            activeContent = document.querySelector('.js-tab-content.active'),
            activeTrigger = document.querySelector('.js-tab-trigger.active');

        activeTrigger.classList.remove('active');
        trigger.classList.add('active');
        activeContent.classList.remove('active');
        content.classList.add('active');
    })
})
//------ tabs

//------ form validation
window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('.tel'), function (input) {
        let keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

});
//------ form validation


//------ smooth scroll
const menuLinks = document.querySelectorAll('.link-travel[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", function (e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();

                if (iconMenu.classList.contains('active')) {
                    iconMenu.classList.remove('active');
                    menu.classList.remove('active');
                    document.body.classList.remove('lock');
                }
            }
        });
    });
}
//------ smooth scroll

// burger
let iconMenu = document.querySelector('.header__burger'),
    menu = document.querySelector('.header__nav')

if (iconMenu) {
    iconMenu.addEventListener('click', function () {
        iconMenu.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('lock');
    })
}
// burger