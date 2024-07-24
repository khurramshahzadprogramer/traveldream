 

$(document).ready(function() {
     
    AOS.init({
        duration: 1200,
        once: true
    });

   
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 56  
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
 
    $('#galleryCarousel').carousel({
        interval: 5000
    });

   
    $('#contactForm').on('submit', function(event) {
        if (!this.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        $(this).addClass('was-validated');
    });
});
