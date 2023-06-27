$("#header").css('display', 'block');
$("#homeContent").css('display', 'block');
$("#customerContent").css('display', 'none');
$("#itemContent").css('display', 'none');
$("#orderContent").css('display', 'none');
$("#home").click(function () {
    $("#posName").text('POS');
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'block');
    $("#customerContent").css('display', 'none');
    $("#itemContent").css('display', 'none');
    $("#orderContent").css('display', 'none');
});

$("#customer").click(function () {
    $("#posName").text('CUSTOMER');
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'none');
    $("#customerContent").css('display', 'block');
    $("#itemContent").css('display', 'none');
    $("#orderContent").css('display', 'none');
});

$("#item").click(function () {
    $("#posName").text('ITEM');
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'none');
    $("#customerContent").css('display', 'none');
    $("#itemContent").css('display', 'block');
    $("#orderContent").css('display', 'none');
});

$("#order").click(function () {
    $("#posName").text('ORDER');
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'none');
    $("#customerContent").css('display', 'none');
    $("#itemContent").css('display', 'none');
    $("#orderContent").css('display', 'block');
});
