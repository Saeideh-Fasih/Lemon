/*var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3500); // Change image every 2 seconds*/

    let slides = document.querySelectorAll('.mySlides');
    let dots = document.querySelectorAll('.dot');
    let slideIndex = 1;
    let timeoutID;

    const showSlides = (n) => {
        let i;

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < slides.length; i++) {
            dots[i].setAttribute('class', 'dot');
        }


        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].setAttribute('class', 'dot active');
        clearTimeout(timeoutID);
        timeoutID = setTimeout(autoSlides, 2000);
    };

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    };

    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    };

    function autoSlides() {
        let i;

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        for (i = 0; i < slides.length; i++) {
            dots[i].setAttribute('class', 'dot');
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].setAttribute('class', 'dot active');
        timeoutID = setTimeout(autoSlides, 3000);
    }

    autoSlides();