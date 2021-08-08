/* Changing the active class of nav bar menus */
$('li').on('click', function(){
$('li').removeClass('active');
$(this).toggleClass('active');
})

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container .collapse ul li");

window.addEventListener("scroll", () => {
let current = "";
sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
    current = section.getAttribute("id");
    }
});

navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
    li.classList.add("active");
    }
});
});


/* Back-to-top button functionality */
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
    backToTopButton.classList.remove("btnExit");
    backToTopButton.classList.add("btnEntrance");
    backToTopButton.style.display = "block";
    }
}
else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
    backToTopButton.classList.remove("btnEntrance");
    backToTopButton.classList.add("btnExit");
    setTimeout(function() {
        backToTopButton.style.display = "none";
    }, 250);
    }
}
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
const targetPosition = 0;
const startPosition = window.pageYOffset;
const distance = targetPosition - startPosition;
const duration = 750;
let start = null;
window.requestAnimationFrame(step);
function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
}
}

function easeInOutCubic(t, b, c, d) {
t /= d/2;
if (t < 1) return c/2*t*t*t + b;
t -= 2;
return c/2*(t*t*t + 2) + b;
};
