const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// scroll function
window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
    if (document.body.scrollY > 20 || document.documentElement.scrollY > 20) {
        $('.navbar').classList.add('sticky');
    } else {
       
    }
}