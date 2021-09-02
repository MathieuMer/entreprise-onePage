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
              scrollTop: $(hash).offset().top -80
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
            if ($(this).position().top -100 <= scrollDistance) { // -120 pour le décalage dû au header
                    $('nav a.active').removeClass('active');
                    $('nav a').eq(i).addClass('active');
            }
    });
}).scroll();