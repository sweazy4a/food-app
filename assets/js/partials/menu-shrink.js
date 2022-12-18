
$(document).ready(function() {
    $(function(){
        var shrinkHeader = 70;
         $(window).scroll(function() {
           var scroll = getCurrentScroll();
             if ( scroll >= shrinkHeader ) {
                  $('#menuToggle').addClass('smaller');
               }
               else {
                   $('#menuToggle').removeClass('smaller');
               }
         });
       function getCurrentScroll() {
           return window.pageYOffset || document.documentElement.scrollTop;
           }
       });
    });