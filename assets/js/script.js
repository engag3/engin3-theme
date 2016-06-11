/**
 * script.js
 */


(function($) {

   $(document).ready(function(){

    $("#masthead").sticky({topSpacing:0});
    $("#header_module").sticky({topSpacing:0});


    // $('#menu-primary').dropit();


   $("#menu_trigger, #menu_overlay").click(function(){

     $("body").toggleClass("menu--active");
    //  $("#header_module").toggleClass("is--active");

   });




    // Packages

    $("#packages .fl-pricing-table-column-0 .fl-button").click(function(){
      $("#packages .fl-pricing-table-column-0 .fl-button").addClass("is--active");
      $("#packages .fl-pricing-table-column-1 .fl-button").removeClass("is--active");
      $("#packages .fl-pricing-table-column-2 .fl-button").removeClass("is--active");


      $("#package__form--1").addClass("is--active");
      $("#package__form--2").removeClass("is--active");
      $("#package__form--3").removeClass("is--active");
      // $("#package__form--4").removeClass("is--active");
      // $("#package__none").removeClass("is--active");
    });

    $("#packages .fl-pricing-table-column-1 .fl-button").click(function(){
      $("#packages .fl-pricing-table-column-0 .fl-button").removeClass("is--active");
      $("#packages .fl-pricing-table-column-1 .fl-button").addClass("is--active");
      $("#packages .fl-pricing-table-column-2 .fl-button").removeClass("is--active");


      $("#package__form--1").removeClass("is--active");
      $("#package__form--2").addClass("is--active");
      $("#package__form--3").removeClass("is--active");
      // $("#package__form--4").removeClass("is--active");
      // $("#package__none").removeClass("is--active");
    });

    $("#packages .fl-pricing-table-column-2 .fl-button").click(function(){
      $("#packages .fl-pricing-table-column-0 .fl-button").removeClass("is--active");
      $("#packages .fl-pricing-table-column-1 .fl-button").removeClass("is--active");
      $("#packages .fl-pricing-table-column-2 .fl-button").addClass("is--active");


      $("#package__form--1").removeClass("is--active");
      $("#package__form--2").removeClass("is--active");
      $("#package__form--3").addClass("is--active");
      // $("#package__form--4").removeClass("is--active");
      // $("#package__none").removeClass("is--active");
    });





    // Login Page

    $("#select-login").click(function(){
      $("#customer_login").toggleClass("is--register");
      $("#select-register").toggleClass("is--active");
      $("#select-login").toggleClass("is--active");
    });

    $("#select-register").click(function(){
      $("#customer_login").toggleClass("is--register");
      $("#select-register").toggleClass("is--active");
      $("#select-login").toggleClass("is--active");
    });


        $('img').load(function(){
            $(".masonry").masonry();
        });
        $(".masonry").masonry();

  });

  $( window ).load( function() {


  });

})( jQuery );
