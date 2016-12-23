$(document).ready(function() {

    $(window).scroll(function() {
      if ( $(window).scrollTop() > 200 ) {
        $('#about-section').addClass('closed');
      } else {
        $('#about-section').removeClass('closed');
      }
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

});
