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

// Fonctionalitées dépendantes du scroll
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Gestion zoom background #home
    $("#home").css({
        backgroundSize: (180 - scrollDistance/12) + "%"
    });

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

// emailjs fonction d'envoi email lors du clic

function sendEmail(event) {
    event.preventDefault();

    let tempParams = {
        user_name: document.getElementById("user_name").value,
        user_email: document.getElementById("user_email").value,
        message: document.getElementById("user_message").value
    }
    console.log(tempParams);
    if (tempParams.user_name == "" || tempParams.user_email == "" || tempParams.message == "") {
        swal({
            text: "Veuillez remplir tout les champs !",
            buttons: false,
            timer: 2000,
            icon: "error"
          });
          return;
    }
    emailjs.send('service_hci0lwc', 'template_zzcminq', tempParams)
    .then((result) => {
          console.log('SUCCESS!', result.status, result.text);
          swal({
            text: "Message envoyé !",
            buttons: false,
            timer: 2000,
            icon: "success"
          });
    })
    .catch((error) => {
        console.log({error})
        swal({
            text: "Une erreur est survenue !",
            buttons: false,
            timer: 2000,
            icon: "error"
          });
    })
}
/*

*/
