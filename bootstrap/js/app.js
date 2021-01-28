$(document).ready(function() {
    // logo horizontal scrolling effect
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    }); 
    
    // fancey box for image modal
    $("#fhit_popup").fancybox({
        buttons: ["close"]
    }).trigger('click');

    
});

// When the user scrolls the page, execute the function
window.onscroll = function() {
    // Get the navigation bar
    var navbar = document.getElementById("navigation");
    // Get the offset position of the navbar
    var offset_Pos = navbar.offsetTop;
    if (window.pageYOffset > offset_Pos) {
        navbar.classList.add("fixed-top");
    } else {
        navbar.classList.remove("fixed-top");
    }
}