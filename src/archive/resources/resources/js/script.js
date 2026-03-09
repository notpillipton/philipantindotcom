$(document).ready(function() {
    
    var sticky = new Waypoint({
        element: $('.js--section-bio')[0],
        handler: function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        }
    });
    
});