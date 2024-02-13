window.addEventListener("scroll", function() {
    var beyazLogo = document.querySelector(".logo__white");
    var siyahLogo = document.querySelector(".logo__dark");
    var threshold = 100; // Scroll eşiği, logonun ne zaman görünür hale geleceğini belirler

    if (window.pageYOffset > threshold) {
        beyazLogo.style.display = "none";
        siyahLogo.style.display = "block";
    } else {
        beyazLogo.style.display = "block";
        siyahLogo.style.display = "none";
    }
});
