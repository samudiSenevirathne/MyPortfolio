//section 3
const sound = document.getElementById('sound');
const errorSound = document.getElementById('errorSound');



$("#certificateOne").click(function () {
      sound.play();
       var backgroundUrl = $("#certificateOne").css('background-image');
       var backgroundUrl2 = $("#certificateFive").css('background-image');
       $("#certificateFive").css('background-image', backgroundUrl);
        $("#certificateOne").css('background-image', backgroundUrl2);
        // console.log(backgroundUrl); //for my checking
       // console.log(backgroundUrl2); //for my checking
});

$("#certificateTwo").click(function () {
    sound.play();
    var backgroundUrl = $("#certificateTwo").css('background-image');
    var backgroundUrl2 = $("#certificateFive").css('background-image');
    $("#certificateFive").css('background-image', backgroundUrl);
    $("#certificateTwo").css('background-image', backgroundUrl2);
});

$("#certificateThree").click(function () {
    sound.play();
    var backgroundUrl = $("#certificateThree").css('background-image');
    var backgroundUrl2 = $("#certificateFive").css('background-image');
    $("#certificateFive").css('background-image', backgroundUrl);
    $("#certificateThree").css('background-image', backgroundUrl2);
});

$("#certificateFour").click(function () {
    sound.play();
    var backgroundUrl = $("#certificateFour").css('background-image');
    var backgroundUrl2 = $("#certificateFive").css('background-image');
    $("#certificateFive").css('background-image', backgroundUrl);
    $("#certificateFour").css('background-image', backgroundUrl2);
});

$("#certificateFive").click(function () {
    errorSound.play();
});

$("#certificateSix").click(function () {
    sound.play();
    var backgroundUrl = $("#certificateSix").css('background-image');
    var backgroundUrl2 = $("#certificateFive").css('background-image');
    $("#certificateFive").css('background-image', backgroundUrl);
    $("#certificateSix").css('background-image', backgroundUrl2);
});

$("#certificateSeven").click(function () {
    sound.play();
    var backgroundUrl = $("#certificateSeven").css('background-image');
    var backgroundUrl2 = $("#certificateFive").css('background-image');
    $("#certificateFive").css('background-image', backgroundUrl);
    $("#certificateSeven").css('background-image', backgroundUrl2);
});

$("#certificateEight").click(function () {
    sound.play();
    var backgroundUrl = $("#certificateEight").css('background-image');
    var backgroundUrl2 = $("#certificateFive").css('background-image');
    $("#certificateFive").css('background-image', backgroundUrl);
    $("#certificateEight").css('background-image', backgroundUrl2);
});

$("#certificateNine").click(function () {
    sound.play();
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
        $("#btnOne:hover").css('none');
        $("#btnOne").off('click').addClass('btnOne');
            errorSound.play();
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
        $("#btnTwo:hover").css('none');
        $("#btnTwo").off('click').addClass('btnTwo');
        errorSound.play();
    }
}

function btnTwoReset() {
    $("#btnTwo").css('opacity','1');
    $("#btnTwo").css('cursor','pointer');
    $("#btnTwo").on("click",function () {
        sound.play();
        btnTwoCheckPoint();
        btnTwoFuntions();
    });
    $("#btnTwo:hover").css('auto');
}

function btnOneReset() {
    $("#btnOne").css('opacity','1');
    $("#btnOne").css('cursor','pointer');
    $("#btnOne").on("click",function () {
        sound.play();
        btnOneCheckPoint();
        btnOneFuntions();
    });
    $("#btnOne:hover").css('auto');
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
        if($("#btnOne").css('cursor')=='not-allowed') {
            errorSound.play();
        }else{
            sound.play();
        }
    });

    $("#btnTwo").click(function () {
        btnTwoCheckPoint();
        btnTwoFuntions();
        if($("#btnTwo").css('cursor')=='not-allowed') {
            errorSound.play();
        }else{
            sound.play();
        }
    });


    /*hold for something*/
// function logoRotation() {
//     var logoUrl = $("#logoOne").css('background-image');
//     var logowidth = $('#logoOne').css('width');
//     var logoheight = $('#logoOne').css('height');
//
//     var logoUrl2 = $("#logoTwo").css('background-image');
//     var logowidth2 = $('#logoTwo').css('width');
//     var logoheight2 = $('#logoTwo').css('height');
//
//     var logoUrl3 = $("#logoThree").css('background-image');
//     var logowidth3 = $('#logoThree').css('width');
//     var logoheight3 = $('#logoThree').css('height');
//
//     var logoUrl4 = $("#logoFour").css('background-image');
//     var logowidth4 = $('#logoFour').css('width');
//     var logoheight4 = $('#logoFour').css('height');
//
//     var logoUrl5 = $("#logoFive").css('background-image');
//     var logowidth5 = $('#logoFive').css('width');
//     var logoheight5 = $('#logoFive').css('height');
//
//     var logoUrl6 = $("#logoSix").css('background-image');
//     var logowidth6 = $('#logoSix').css('width');
//     var logoheight6 = $('#logoSix').css('height');
//
//     var logoUrl7 = $("#logoSeven").css('background-image');
//     var logowidth7 = $('#logoSeven').css('width');
//     var logoheight7 = $('#logoSeven').css('height');
//
//     var logoUrl8 = $("#logoEight").css('background-image');
//     var logowidth8 = $('#logoEight').css('width');
//     var logoheight8 = $('#logoEight').css('height');
//
//     var logoUrl9 = $("#logoNine").css('background-image');
//     var logowidth9 = $('#logoNine').css('width');
//     var logoheight9 = $('#logoNine').css('height');
//
//
//     $('#logoTwo').css({
//         'background-image': logoUrl4,
//         'width': logowidth4,
//         'height': logoheight4,
//     });
//
//     $("#logoThree").css({
//         'background-image': logoUrl3,
//         'width': logowidth3,
//         'height': logoheight3,
//     });
//
//     $("#logoFour").css({
//         'background-image': logoUrl2,
//         'width': logowidth2,
//         'height': logoheight2,
//     });
//
//     $("#logoFive").css({
//         'background-image': logoUrl6,
//         'width': logowidth6,
//         'height': logoheight6,
//     });
//
//     $("#logoNine").css({
//         'background-image': logoUrl,
//         'width': logowidth,
//         'height': logoheight,
//     });
//
//     $("#logoEight").css({
//         'background-image': logoUrl7,
//         'width': logowidth7,
//         'height': logoheight7,
//     });
//
//     $("#logoSeven").css({
//         'background-image': logoUrl8,
//         'width': logowidth8,
//         'height': logoheight8,
//     });
//
//     $("#logoSix").css({
//         'background-image': logoUrl5,
//         'width': logowidth5,
//         'height': logoheight5,
//     });
//
//     $("#logoOne").css({
//         'background-image': logoUrl9,
//         'width': logowidth9,
//         'height': logoheight9,
//     });
// }
// function checkWindowWidth() {
//
//     let windowWidth = $(window).width();
//
//     if (windowWidth>= 1370 && windowWidth <= 1440) {
//         logoRotation();
//     } else if (windowWidth >= 769 && windowWidth <= 1024) {
//         logoRotation();
//     } else if (windowWidth >= 426 && windowWidth <= 768) {
//         logoRotation();
//     } else if (windowWidth >= 425 && windowWidth <= 376) {
//         logoRotation();
//     } else if (windowWidth >= 375 && windowWidth <= 321) {
//         logoRotation();
//     } else if (windowWidth >= 318 && windowWidth <= 320) {
//         logoRotation();
//     } else {
//         logoRotation();
//     }
// }
// setInterval(checkWindowWidth,3000);


//section 7

$("#imageOne").click(function () {
    sound.play();
    var backgroundUrl = $("#imageOne").css('background-image');
    var backgroundUrl2 = $("#imageThree").css('background-image');
    $("#imageThree").css('background-image', backgroundUrl);
    $("#imageOne").css('background-image', backgroundUrl2);
});

$("#imageTwo").click(function () {
    sound.play();
    var backgroundUrl = $("#imageTwo").css('background-image');
    var backgroundUrl2 = $("#imageThree").css('background-image');
    $("#imageThree").css('background-image', backgroundUrl);
    $("#imageTwo").css('background-image', backgroundUrl2);
});

$("#imageThree").click(function () {
 errorSound.play();
});

$("#imageFour").click(function () {
    sound.play();
    var backgroundUrl = $("#imageFour").css('background-image');
    var backgroundUrl2 = $("#imageThree").css('background-image');
    $("#imageThree").css('background-image', backgroundUrl);
    $("#imageFour").css('background-image', backgroundUrl2);
});

$("#imageFive").click(function () {
    sound.play();
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
        errorSound.play();
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
        errorSound.play();
    }
}

function buttonTwoReset() {
    $("#imbtnTwo").css('opacity','1');
    $("#imbtnTwo").css('cursor','pointer');
    $("#imbtnTwo").on("click",function () {
        sound.play();
        buttonTwoCheckPoint();
        buttonTwoFuntions();
    });
}

function buttonOneReset() {
    $("#imbtnOne").css('opacity','1');
    $("#imbtnOne").css('cursor','pointer');
    $("#imbtnOne").on("click",function () {
        sound.play();
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
    if($("#imbtnOne").css('cursor')=='not-allowed') {
        errorSound.play();
    }else{
        sound.play();
    }
});

$("#imbtnTwo").click(function () {
    buttonTwoCheckPoint();
    buttonTwoFuntions();
    if($("#imbtnTwo").css('cursor')=='not-allowed') {
        errorSound.play();
    }else{
        sound.play();
    }
});

//section 6

    $("#assTextOne").hover(function () {
        $('#assOneSound').get(0).play();
    });

    $("#assTextTwo").hover(function () {
        $('#assTwoSound').get(0).play();
    });

    $("#assTextThree").hover(function () {
        $('#assThreeSound').get(0).play();
    });

    $("#assTextFour").hover(function () {
        $('#assFourSound').get(0).play();
    });

    $("#assTextFive").hover(function () {
        $('#assFiveSound').get(0).play();
    });

    $("#assTextSix").hover(function () {
        $('#assSixSound').get(0).play();
    });

    $("#assTextSeven").hover(function () {
        $('#assSevenSound').get(0).play();
    });

    $("#assTextEight").hover(function () {
        $('#assEightSound').get(0).play();
    });

    $("#assTextNine").hover(function () {
        $('#assNineSound').get(0).play();
    });

    $("#assTextTen").hover(function () {
        $('#assTenSound').get(0).play();
    });

    $("#assTextEleven").hover(function () {
        $('#assElevenSound').get(0).play();
    });

    $("#assTextTwelve").hover(function () {
        $('#assTwelveSound').get(0).play();
    });

    $("#assTextThirteen").hover(function () {
        $('#assThirteenSound').get(0).play();
    });

    $("#assTextFourteen").hover(function () {
        $('#assFourteenSound').get(0).play();
    });

    $("#assTextFifteen").hover(function () {
        $('#assFifteenSound').get(0).play();
    });

    $("#assTextSixteen").hover(function () {
        $('#assSixteenSound').get(0).play();
    });

    $("#assTextSeventeen").hover(function () {
        $('#assSeventeenSound').get(0).play();
    });

    $("#assTextEighteen").hover(function () {
        $('#assEighteenSound').get(0).play();
    });

    //section 4

let colors=["#15C1EC","#24144C","#15C1EC","#24144C","#15C1EC","#24144C","#15C1EC","#24144C"];

setInterval(function (){
    let divArray=document.querySelector("#secOne").children;
            for (let i = 0; i < colors.length; i++) {
                console.log(colors[i]);
                divArray[i].style.background = colors[i];
            }
            colors.unshift(colors.pop());
},500);

$("#btn2").click(function () {
    sound.play();
   $("#img1").css('background-image','url("assets/image/MY Mock-Up Images/project/battle field game logo 3.JPG")');
   $("#img2").css('background-image','url("assets/image/MY Mock-Up Images/project/battle field game logo 2.JPG")');
   $("#img3").css('background-image','url("assets/image/MY Mock-Up Images/project/battle field game logo 1.JPG")');
   $("#pageNo").text('02');
   $("#title").text('Battle Field Small Game');
    $("#imgsql").attr('src','assets/image/MY%20Mock-Up%20Images/java-logo%201%20(traced).png');
    $("#imgjava").css('visibility','hidden');
});

 $("#btn3").click(function () {
     sound.play();
   $("#img1").css('background-image','url("assets/image/MY Mock-Up Images/project/hotel system logo 3.JPG")');
   $("#img2").css('background-image','url("assets/image/MY Mock-Up Images/project/hotel system logo 2.JPG")');
   $("#img3").css('background-image','url("assets/image/MY Mock-Up Images/project/hotel system logo 1.JPG")');
   $("#pageNo").text('03');
   $("#title").text('Hotel Management System');
    $("#imgsql").attr('src','assets/image/MY%20Mock-Up%20Images/java-logo%201%20(traced).png');
    $("#imgjava").css('visibility','hidden');
});

 $("#btn1").click(function () {
     sound.play();
   $("#img1").css('background-image','url("assets/image/MY Mock-Up Images/project/airline project logo 3.JPG")');
   $("#img2").css('background-image','url("assets/image/MY Mock-Up Images/project/airline project logo 2.JPG")');
   $("#img3").css('background-image','url("assets/image/MY Mock-Up Images/project/airline project logo.JPG")');
   $("#pageNo").text('01');
   $("#title").text('Airline Ticket Reservation System');
   $("#imgsql").attr('src','assets/image/MY%20Mock-Up%20Images/mysql-logo%201%20(traced).png');
   $("#imgjava").css('visibility','visible');
   $("#imgjava").attr('src','assets/image/MY%20Mock-Up%20Images/java-logo%201%20(traced).png');
});

$("#btn4").click(function () {
    sound.play();
    $("#img1").css('background-image','url("assets/image/MY Mock-Up Images/project/D24 Hostel Management system logo 3.JPG")');
    $("#img2").css('background-image','url("assets/image/MY Mock-Up Images/project/D24 Hostel Management system logo 2.JPG")');
    $("#img3").css('background-image','url("assets/image/MY Mock-Up Images/project/D24 Hostel Management system logo 1.JPG")');
    $("#pageNo").text('04');
    $("#title").text('D24 Hostel Management System');
    $("#imgsql").attr('src','assets/image/MY%20Mock-Up%20Images/Hibernate_logo_a-1024x284.png');
    $("#imgjava").css('visibility','visible');
    $("#imgjava").attr('src','assets/image/MY%20Mock-Up%20Images/java-logo%201%20(traced).png');
});

$(window).on('load', function () {
    $("#loader").css('display', 'none');
});
