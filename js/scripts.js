$(document).ready(function() {
    $(".contact-form button").click(function(event) {
        event.preventDefault();
        if ($("input[name='name']").val() === '' || $("input[name='email']").val() === '' || $("textarea[name='message']").val() === '') {
            alert("Please fill in all fields.");
        } else {

        }
    });


    $(".toggle-button").click(function() {
        $(".toggle-element").toggle();
    });


    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
  
        }
    });


    $(".color-change-element").mouseenter(function() {
        $(this).css("color", "red");
    }).mouseleave(function() {
        $(this).css("color", "black");
    });


    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        $(".header").css("font-size", (100 + scrolled / 5) + "%");
    });


    $(".slide-button").click(function() {
        $(".slide-element").slideToggle();
    });


    $(".add-class-button").click(function() {
        $(".element").addClass("new-class");
    });

    $(".remove-class-button").click(function() {
        $(".element").removeClass("new-class");
    });


    $(".scroll-to-element").click(function() {
        $("html, body").animate({
            scrollTop: $(".target-element").offset().top
        }, 1000);
    });

 
    $(".image-switch-button").click(function() {
        $(".image").attr("src", "new-image.jpg");
    });


    $(".get-value-button").click(function() {
        var nameValue = $("input[name='name']").val();
        var emailValue = $("input[name='email']").val();
        var messageValue = $("textarea[name='message']").val();
        alert("Name: " + nameValue + "\nEmail: " + emailValue + "\nMessage: " + messageValue);
    });
});