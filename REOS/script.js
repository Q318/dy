var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(value) {
    showSlides(slideIndex += value);
}

function currentSlides(value) {
    showSlides(slideIndex = value);
}

function showSlides(value) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    if (value > slides.length) {
        slideIndex = 1;
    }

    if (value < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
