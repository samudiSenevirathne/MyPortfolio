$("#certificateOne").click(function () {
       var backgroundUrl = $("#certificateOne").css('background-image');
       var backgroundUrl2 = $("#certificateFive").css('background-image');
       $("#certificateFive").css('background-image', backgroundUrl);
        $("#certificateOne").css('background-image', backgroundUrl2);
        // console.log(backgroundUrl); //for my checking
       // console.log(backgroundUrl2); //for my checking
});

$("#certificateTwo").click(function () {
    var backgroundUrl = $("#certificateTwo").css('background-image');
    var backgroundUrl2 = $("#certificateFive").css('background-image');
    $("#certificateFive").css('background-image', backgroundUrl);
    $("#certificateTwo").css('background-image', backgroundUrl2);
});

$("#certificateThree").click(function () {
    var backgroundUrl = $("#certificateThree").css('background-image');
    var backgroundUrl2 = $("#certificateFive").css('background-image');
    $("#certificateFive").css('background-image', backgroundUrl);
    $("#certificateThree").css('background-image', backgroundUrl2);
});

$("#certificateFour").click(function () {
    var backgroundUrl = $("#certificateFour").css('background-image');
    var backgroundUrl2 = $("#certificateFive").css('background-image');
    $("#certificateFive").css('background-image', backgroundUrl);
    $("#certificateFour").css('background-image', backgroundUrl2);
});

$("#certificateSix").click(function () {
    var backgroundUrl = $("#certificateSix").css('background-image');
    var backgroundUrl2 = $("#certificateFive").css('background-image');
    $("#certificateFive").css('background-image', backgroundUrl);
    $("#certificateSix").css('background-image', backgroundUrl2);
});

$("#certificateSeven").click(function () {
    var backgroundUrl = $("#certificateSeven").css('background-image');
    var backgroundUrl2 = $("#certificateFive").css('background-image');
    $("#certificateFive").css('background-image', backgroundUrl);
    $("#certificateSeven").css('background-image', backgroundUrl2);
});

$("#certificateEight").click(function () {
    var backgroundUrl = $("#certificateEight").css('background-image');
    var backgroundUrl2 = $("#certificateFive").css('background-image');
    $("#certificateFive").css('background-image', backgroundUrl);
    $("#certificateEight").css('background-image', backgroundUrl2);
});

$("#certificateNine").click(function () {
    var backgroundUrl = $("#certificateNine").css('background-image');
    var backgroundUrl2 = $("#certificateFive").css('background-image');
    $("#certificateFive").css('background-image', backgroundUrl);
    $("#certificateNine").css('background-image', backgroundUrl2);
});


$("#btnOne").click(function () {
    var backgroundUrlFive1 = $("#certificateFive").css('background-image');
    var backgroundUrl1 =$("#certificateFour").css('background-image');
    var backgroundUrl2 =$("#certificateThree").css('background-image');
    var backgroundUrl3 =$("#certificateTwo").css('background-image')
    var backgroundUrl4 =$("#certificateOne").css('background-image');
    var backgroundUrl5 =$("#certificateNine").css('background-image');
    var backgroundUrl6 =$("#certificateEight").css('background-image');
    var backgroundUrl7 =$("#certificateSeven").css('background-image');
    var backgroundUrl8 = $("#certificateSix").css('background-image');

    $("#certificateFour").css('background-image', backgroundUrlFive1);
    $("#certificateThree").css('background-image', backgroundUrl1);
    $("#certificateTwo").css('background-image',backgroundUrl2 );
    $("#certificateOne").css('background-image',backgroundUrl3 );
    $("#certificateNine").css('background-image', backgroundUrl4);
    $("#certificateEight").css('background-image',backgroundUrl5 );
    $("#certificateSeven").css('background-image', backgroundUrl6);
    $("#certificateSix").css('background-image', backgroundUrl7);
    $("#certificateFive").css('background-image',backgroundUrl8);

    // var backgroundUrlFive2 = $("#certificateFive").css('background-image');
    //
    // if(backgroundUrlFive1 === backgroundUrlFive2){
    //     $("#btnOne").css('cursor','not-allowed');
    // }

});



