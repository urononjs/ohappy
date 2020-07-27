
$(document).ready(function() {

    $(".header-btn").click(function (){
        $('html, body').animate({
            scrollTop: $(".action-text").offset().top
        }, 1000);
    });

    $('.answer-2').click(function(){
        $(".answer-2").css("background-color", "#4FDA76");
        $(".answer-2").addClass("answer-2-active");
    });

    $('.try_again').click(function(){
        setTimeout(function(){
            $( ".again-wrap" ).removeClass( "d-none" );
        }, 200);
    });

    $('.again_btn').click(function(){
        $(".again-wrap").addClass("d-none");
    });

    $('.show_form').click(function(){
        runConfetti();

        setTimeout(function(){
            $(".form-wrap").addClass("add-d-flex");
            $(".form-wrap").css("opacity", "1");
        }, 1000);

        setTimeout(function () {
            $(".form-main-box").addClass('modal-open');
        },1400);
    })

});

