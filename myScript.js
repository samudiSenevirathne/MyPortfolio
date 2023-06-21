//section 3

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

let count=0;
let count2=0;

function btnOneFuntions() {
    count++;
    var backgroundUrlFive1 = $("#certificateFive").css('background-image');
    var backgroundUrl1 = $("#certificateFour").css('background-image');
    var backgroundUrl2 = $("#certificateThree").css('background-image');
    var backgroundUrl3 = $("#certificateTwo").css('background-image')
    var backgroundUrl4 = $("#certificateOne").css('background-image');
    var backgroundUrl5 = $("#certificateNine").css('background-image');
    var backgroundUrl6 = $("#certificateEight").css('background-image');
    var backgroundUrl7 = $("#certificateSeven").css('background-image');
    var backgroundUrl8 = $("#certificateSix").css('background-image');

    $("#certificateFour").css('background-image', backgroundUrlFive1);
    $("#certificateThree").css('background-image', backgroundUrl1);
    $("#certificateTwo").css('background-image', backgroundUrl2);
    $("#certificateOne").css('background-image', backgroundUrl3);
    $("#certificateNine").css('background-image', backgroundUrl4);
    $("#certificateEight").css('background-image', backgroundUrl5);
    $("#certificateSeven").css('background-image', backgroundUrl6);
    $("#certificateSix").css('background-image', backgroundUrl7);
    $("#certificateFive").css('background-image', backgroundUrl8);

    if (count == 9) {
        $("#btnOne").css('opacity', '0.5');
        $("#btnOne").css('cursor', 'not-allowed');
        $("#btnOne").off('click').addClass('btnOne');
    }
}

function btnTwoFuntions() {
    count2++;
    var backgroundUrlFive1 = $("#certificateFive").css('background-image');
    var backgroundUrl1 = $("#certificateSix").css('background-image');
    var backgroundUrl2 = $("#certificateSeven").css('background-image');
    var backgroundUrl3 = $("#certificateEight").css('background-image');
    var backgroundUrl4 = $("#certificateNine").css('background-image');
    var backgroundUrl5 = $("#certificateOne").css('background-image');
    var backgroundUrl6 = $("#certificateTwo").css('background-image');
    var backgroundUrl7 = $("#certificateThree").css('background-image');
    var backgroundUrl8 = $("#certificateFour").css('background-image');

    $("#certificateSix").css('background-image', backgroundUrlFive1);
    $("#certificateSeven").css('background-image', backgroundUrl1);
    $("#certificateEight").css('background-image', backgroundUrl2);
    $("#certificateNine").css('background-image', backgroundUrl3);
    $("#certificateOne").css('background-image', backgroundUrl4);
    $("#certificateTwo").css('background-image', backgroundUrl5);
    $("#certificateThree").css('background-image', backgroundUrl6);
    $("#certificateFour").css('background-image', backgroundUrl7);
    $("#certificateFive").css('background-image', backgroundUrl8);

    if (count2 == 9) {
        $("#btnTwo").css('opacity', '0.5');
        $("#btnTwo").css('cursor', 'not-allowed');
        $("#btnTwo").off('click').addClass('btnTwo');
    }
}

function btnTwoReset() {
    $("#btnTwo").css('opacity','1');
    $("#btnTwo").css('cursor','pointer');
    $("#btnTwo").on("click",function () {
        btnTwoCheckPoint();
        btnTwoFuntions();
    });
}

function btnOneReset() {
    $("#btnOne").css('opacity','1');
    $("#btnOne").css('cursor','pointer');
    $("#btnOne").on("click",function () {
        btnOneCheckPoint();
        btnOneFuntions();
    });
}

function btnOneCheckPoint() {
    var buttonOpacity = $("#btnTwo").css('opacity');
    if (parseFloat(buttonOpacity) < 1) {
        btnTwoReset();
        count2 = 0;
    }
}

function btnTwoCheckPoint() {
    var buttonOpacity2 = $("#btnOne").css('opacity');
    if (parseFloat(buttonOpacity2) < 1) {
        btnOneReset();
        count = 0;
    }
}

    $("#btnOne").click(function () {
        btnOneCheckPoint();
        btnOneFuntions();
    });

    $("#btnTwo").click(function () {
        btnTwoCheckPoint();
        btnTwoFuntions();
    });


function logoRotation() {
    var logoUrl = $("#logoOne").css('background-image');
    var logowidth = $('#logoOne').css('width');
    var logoheight = $('#logoOne').css('height');

    var logoUrl2 = $("#logoTwo").css('background-image');
    var logowidth2 = $('#logoTwo').css('width');
    var logoheight2 = $('#logoTwo').css('height');

    var logoUrl3 = $("#logoThree").css('background-image');
    var logowidth3 = $('#logoThree').css('width');
    var logoheight3 = $('#logoThree').css('height');

    var logoUrl4 = $("#logoFour").css('background-image');
    var logowidth4 = $('#logoFour').css('width');
    var logoheight4 = $('#logoFour').css('height');

    var logoUrl5 = $("#logoFive").css('background-image');
    var logowidth5 = $('#logoFive').css('width');
    var logoheight5 = $('#logoFive').css('height');

    var logoUrl6 = $("#logoSix").css('background-image');
    var logowidth6 = $('#logoSix').css('width');
    var logoheight6 = $('#logoSix').css('height');

    var logoUrl7 = $("#logoSeven").css('background-image');
    var logowidth7 = $('#logoSeven').css('width');
    var logoheight7 = $('#logoSeven').css('height');

    var logoUrl8 = $("#logoEight").css('background-image');
    var logowidth8 = $('#logoEight').css('width');
    var logoheight8 = $('#logoEight').css('height');

    var logoUrl9 = $("#logoNine").css('background-image');
    var logowidth9 = $('#logoNine').css('width');
    var logoheight9 = $('#logoNine').css('height');


    $('#logoTwo').css({
        'background-image': logoUrl4,
        'width': logowidth4,
        'height': logoheight4,
    });

    $("#logoThree").css({
        'background-image': logoUrl3,
        'width': logowidth3,
        'height': logoheight3,
    });

    $("#logoFour").css({
        'background-image': logoUrl2,
        'width': logowidth2,
        'height': logoheight2,
    });

    $("#logoFive").css({
        'background-image': logoUrl6,
        'width': logowidth6,
        'height': logoheight6,
    });

    $("#logoNine").css({
        'background-image': logoUrl,
        'width': logowidth,
        'height': logoheight,
    });

    $("#logoEight").css({
        'background-image': logoUrl7,
        'width': logowidth7,
        'height': logoheight7,
    });

    $("#logoSeven").css({
        'background-image': logoUrl8,
        'width': logowidth8,
        'height': logoheight8,
    });

    $("#logoSix").css({
        'background-image': logoUrl5,
        'width': logowidth5,
        'height': logoheight5,
    });

    $("#logoOne").css({
        'background-image': logoUrl9,
        'width': logowidth9,
        'height': logoheight9,
    });
}

function checkWindowWidth() {

    let windowWidth = $(window).width();

    if (windowWidth>= 1370 && windowWidth <= 1440) {
        logoRotation();
    } else if (windowWidth >= 769 && windowWidth <= 1024) {
        logoRotation();
    } else if (windowWidth >= 426 && windowWidth <= 768) {
        logoRotation();
    } else if (windowWidth >= 425 && windowWidth <= 376) {
        logoRotation();
    } else if (windowWidth >= 375 && windowWidth <= 321) {
        logoRotation();
    } else if (windowWidth >= 318 && windowWidth <= 320) {
        logoRotation();
    } else {
        logoRotation();
    }
}

setInterval(checkWindowWidth,3000);

// setInterval(function () {
// }, 3000);

//section 7

$("#imageOne").click(function () {
    var backgroundUrl = $("#imageOne").css('background-image');
    var backgroundUrl2 = $("#imageThree").css('background-image');
    $("#imageThree").css('background-image', backgroundUrl);
    $("#imageOne").css('background-image', backgroundUrl2);
});

$("#imageTwo").click(function () {
    var backgroundUrl = $("#imageTwo").css('background-image');
    var backgroundUrl2 = $("#imageThree").css('background-image');
    $("#imageThree").css('background-image', backgroundUrl);
    $("#imageTwo").css('background-image', backgroundUrl2);
});

$("#imageFour").click(function () {
    var backgroundUrl = $("#imageFour").css('background-image');
    var backgroundUrl2 = $("#imageThree").css('background-image');
    $("#imageThree").css('background-image', backgroundUrl);
    $("#imageFour").css('background-image', backgroundUrl2);
});

$("#imageFive").click(function () {
    var backgroundUrl = $("#imageFive").css('background-image');
    var backgroundUrl2 = $("#imageThree").css('background-image');
    $("#imageThree").css('background-image', backgroundUrl);
    $("#imageFive").css('background-image', backgroundUrl2);
});

let imageBtnCount1=0;
let imageBtnCount2=0;

function buttonOneFuntions() {
    imageBtnCount1++;
    var backgroundUrl1 = $("#imageOne").css('background-image');
    var backgroundUrl2 = $("#imageTwo").css('background-image');
    var backgroundUrl3 = $("#imageThree").css('background-image');
    var backgroundUrl4 = $("#imageFour").css('background-image')
    var backgroundUrl5 = $("#imageFive").css('background-image');

    $("#imageTwo").css('background-image', backgroundUrl3);
    $("#imageOne").css('background-image', backgroundUrl2);
    $("#imageFive").css('background-image', backgroundUrl1);
    $("#imageFour").css('background-image', backgroundUrl5);
    $("#imageThree").css('background-image', backgroundUrl4);


    if (imageBtnCount1 == 5) {
        $("#imbtnOne").css('opacity', '0.5');
        $("#imbtnOne").css('cursor', 'not-allowed');
        $("#imbtnOne").off('click').addClass('imbtnOne');
    }
}

function buttonTwoFuntions() {
    imageBtnCount2++;

    var backgroundUrl1 = $("#imageOne").css('background-image');
    var backgroundUrl2 = $("#imageTwo").css('background-image');
    var backgroundUrl3 = $("#imageThree").css('background-image');
    var backgroundUrl4 = $("#imageFour").css('background-image')
    var backgroundUrl5 = $("#imageFive").css('background-image');

    $("#imageFour").css('background-image', backgroundUrl3);
    $("#imageFive").css('background-image', backgroundUrl4);
    $("#imageOne").css('background-image', backgroundUrl5);
    $("#imageTwo").css('background-image', backgroundUrl1);
    $("#imageThree").css('background-image', backgroundUrl2);

    if (imageBtnCount2 == 5) {
        $("#imbtnTwo").css('opacity', '0.5');
        $("#imbtnTwo").css('cursor', 'not-allowed');
        $("#imbtnTwo").off('click').addClass('imbtnTwo');
    }
}

function buttonTwoReset() {
    $("#imbtnTwo").css('opacity','1');
    $("#imbtnTwo").css('cursor','pointer');
    $("#imbtnTwo").on("click",function () {
        buttonTwoCheckPoint();
        buttonTwoFuntions();
    });
}

function buttonOneReset() {
    $("#imbtnOne").css('opacity','1');
    $("#imbtnOne").css('cursor','pointer');
    $("#imbtnOne").on("click",function () {
        buttonOneCheckPoint();
        buttonOneFuntions();
    });
}

function buttonOneCheckPoint() {
    var buttonOpacity = $("#imbtnTwo").css('opacity');
    if (parseFloat(buttonOpacity) < 1) {
        buttonTwoReset();
        imageBtnCount2=0;
    }
}

function buttonTwoCheckPoint() {
    var buttonOpacity2 = $("#imbtnOne").css('opacity');
    if (parseFloat(buttonOpacity2) < 1) {
        buttonOneReset();
        imageBtnCount1=0;
    }
}

$("#imbtnOne").click(function () {
    buttonOneCheckPoint();
    buttonOneFuntions();
});

$("#imbtnTwo").click(function () {
    buttonTwoCheckPoint();
    buttonTwoFuntions();
});

