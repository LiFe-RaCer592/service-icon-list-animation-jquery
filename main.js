//    $(document).on("mouseover",".box-toggle-1",function() {
//     $(".service-icon-back-1").toggleClass('toggle-back');
// });
//    $(document).on("mouseover",".box-toggle-2",function() {
//     $(".service-icon-back-2").toggleClass('toggle-back');
// });
//    $(document).on("mouseover",".box-toggle-3",function() {
//     $(".service-icon-back-3").toggleClass('toggle-back');
// });
//    $(document).on("mouseover",".box-toggle-4",function() {
//     $(".service-icon-back-4").toggleClass('toggle-back');
// });
//    $(document).on("mouseover",".box-toggle-5",function() {
//     $(".service-icon-back-5").toggleClass('toggle-back');
// });


$(document).on("mouseover",".box-toggle-1",function() {
    $(".service-icon-back-1").addClass('toggle-back');
    $('.service-icon').css('width','13%');
    $('.service-icon-5').css('width','15%');
    $(".service-icon-1").css('width','18%');
});
   $(document).on("mouseover",".box-toggle-2",function() {
    $(".service-icon-back-2").addClass('toggle-back');
    $('.service-icon').css('width','13%');
    $('.service-icon-1').css('width','15%');
    $(".service-icon-2").css('width','18%');
});
   $(document).on("mouseover",".box-toggle-3",function() {
    $(".service-icon-back-3").addClass('toggle-back');
    $('.service-icon').css('width','13%');
    $('.service-icon-1').css('width','15%');
    $('.service-icon-5').css('width','15%');
    $(".service-icon-3").css('width','18%');
});
   $(document).on("mouseover",".box-toggle-4",function() {
    $(".service-icon-back-4").addClass('toggle-back');
    $('.service-icon').css('width','13%');
    $('.service-icon-5').css('width','15%');
    $(".service-icon-4").css('width','18%');
});
   $(document).on("mouseover",".box-toggle-5",function() {
    $(".service-icon-back-5").addClass('toggle-back');
    $('.service-icon').css('width','13%');
    $('.service-icon-1').css('width','15%');
    $(".service-icon-5").css('width','18%');
});


$(document).on("mouseleave",".service-icon-back-1",function() {
    $(".service-icon-back-1").removeClass('toggle-back');
    $('.service-icon').css('width','15%');
});
   $(document).on("mouseleave",".service-icon-back-2",function() {
    $(".service-icon-back-2").removeClass('toggle-back');
    $('.service-icon').css('width','15%');
});
   $(document).on("mouseleave",".service-icon-back-3",function() {
    $(".service-icon-back-3").removeClass('toggle-back');
    $('.service-icon').css('width','15%');
});
   $(document).on("mouseleave",".service-icon-back-4",function() {
    $(".service-icon-back-4").removeClass('toggle-back');
    $('.service-icon').css('width','15%');
});
   $(document).on("mouseleave",".service-icon-back-5",function() {
    $(".service-icon-back-5").removeClass('toggle-back');
    $('.service-icon').css('width','15%');
});