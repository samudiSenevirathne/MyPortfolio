
$("#certificateOne").click(function () {
       var backgroundUrl = $("#certificateOne").css('background-image');
       var backgroundUrl2 = $("#certificateFive").css('background-image');
       $("#certificateFive").css('background-image', backgroundUrl);
        $("#certificateOne").css('background-image', backgroundUrl2);
        console.log(backgroundUrl);
});