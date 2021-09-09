// Gestion classe scroll (si scrollTop différent 0)
$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('header').addClass('scroll');
    } else {
        $('header').removeClass('scroll');
    }
})

// Smooth Scroll lors du clic sur éléments de navbar
$(document).ready(function() {
    $('a[href*="#"]').bind('click', function(event) {
        event.preventDefault();
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            
            // Store hash
            var hash = this.hash;
      
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top -40
            }, 800, function(){
         
            });
          } // End if
          //return false;
    });
});

// gestion de la classe active
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop(); 

    // Assign active class to nav links while scrolling
    $('section').each(function(i) {
            if ($(this).position().top -120 <= scrollDistance) { // -120 pour le décalage dû au header
                    $('nav ul a.active').removeClass('active');
                    $('nav ul a').eq(i).addClass('active');
            }
    });
}).scroll();


// IntersectionObserver pour apparition vers le haut au scroll (ajout classe appear)

const cartes = document.querySelectorAll(".carte-service", { passive: true });

const options = {
    root: null, // it is the viewport
    threshold: 0,
    rootMargin: "-150px"
};

const observer = new IntersectionObserver(function
(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
    });
}, options);

cartes.forEach(carte => {
    observer.observe(carte);
})

// IntersectionObserver pour apparition vers au scroll (ajout classe appear2 sur les eléments avec une class anim)

const animations = document.querySelectorAll(".anim", { passive: true });

const observer2 = new IntersectionObserver(function
(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
    entry.target.classList.add("appear2");
    observer.unobserve(entry.target);
    });
}, options);


animations.forEach(elt => {
    observer2.observe(elt);
})

