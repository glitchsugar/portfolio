$(document).ready(function() {
    $("#white").click(changeWhite);
    $("#pink").click(changePink);
    $("#orange").click(changeOrange);
    $("#yellow").click(changeYellow);
    $("#green").click(changeGreen);
    $("#blue").click(changeBlue);
    $("#purple").click(changePurple);
    $("#close").click(openCat);
    $("#bip").click(openBIP);
    $("#insta").click(openIG);
});

function changeWhite() {
    $("body").css('background-color', '#ffffff');
    $(".fixed-position").css('box-shadow', 'rgba(73, 73, 73) 0px 5px, rgba(0, 0, 0, 0.3) 0px 10px, rgba(0, 0, 0, 0.2) 0px 15px, rgba(0, 0, 0, 0.1) 0px 20px, rgba(0, 0, 0, 0.05) 0px 25px');
    $(".fixed-position").css('background-color', '#ffffff');
}

function changePink() {
    $("body").css('background-color', '#ffc0cb');
    $(".fixed-position").css('box-shadow', 'rgba(240, 46, 170) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px');
    $(".fixed-position").css('background-color', '#ffc0cb');
}

function changeOrange() {
    $("body").css('background-color', '#ffab8c');
    $(".fixed-position").css('box-shadow', 'rgba(255,127,80) 0px 5px, rgba(255,127,80, 0.3) 0px 10px, rgba(2255,127,80, 0.2) 0px 15px, rgba(255,127,80, 0.1) 0px 20px, rgba(255,127,80, 0.05) 0px 25px');
    $(".fixed-position").css('background-color', '#ffab8c');
}

function changeYellow() {
    $("body").css('background-color', '#ffee8b');
    $(".fixed-position").css('box-shadow', '#ffa500 0px 5px, rgba(255,165,0, 0.3) 0px 10px, rgba(255,165,0, 0.2) 0px 15px, rgba(255,165,0, 0.1) 0px 20px, rgba(255,165,0, 0.05) 0px 25px');
    $(".fixed-position").css('background-color', '#ffee8b');
}

function changeGreen() {
    $("body").css('background-color', '#cbfdb7');
    $(".fixed-position").css('box-shadow', '#4cbb17 0px 5px, rgba(76,187,23, 0.3) 0px 10px, rgba(76,187,23, 0.2) 0px 15px, rgba(76,187,23, 0.1) 0px 20px, rgba(255,165,0, 0.05) 0px 25px');
    $(".fixed-position").css('background-color', '#cbfdb7');
}

function changeBlue() {
    $("body").css('background-color', '#87cefa');
    $(".fixed-position").css('box-shadow', '#1e90ff 0px 5px, rgba(30,144,255, 0.3) 0px 10px, rgba(30,144,255, 0.2) 0px 15px, rgba(30,144,255, 0.1) 0px 20px, rgba(30,144,255, 0.05) 0px 25px');
    $(".fixed-position").css('background-color', '#87cefa');
}

function changePurple() {
    $("body").css('background-color', '#dda0dd');
    $(".fixed-position").css('box-shadow', '#ba55d3 0px 5px, rgba(186,85,211, 0.3) 0px 10px, rgba(186,85,211, 0.2) 0px 15px, rgba(186,85,211, 0.1) 0px 20px, rgba(186,85,211, 0.05) 0px 25px');
    $(".fixed-position").css('background-color', '#dda0dd');
}

function openCat() {
    window.open('https://thiscatdoesnotexist.com/', '_blank');
}

function openBIP() {
    window.open('https://instagram.com/betaidolproject', '_blank');
}

function openIG() {
    window.open('https://instagram.com/glitchsugar', '_blank');
}