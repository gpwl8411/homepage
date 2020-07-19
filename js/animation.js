$(document).ready(function () {
    //me 말풍선 animation
    var iFlag = false;
    var hFlag = false;
    var tFlag = false;
    $("#infoQ").click(function () {
        if (!iFlag) {
            iFlag = true;
            //숫자가 1에 가까울수록 빨라진다.
            $("#infoA").fadeIn(500);
            $("#hobbyA").fadeOut(1);
            $("#tmiA").fadeOut(1);
            hFlag=false;
            tFlag=false;
        } else {
            iFlag = false;
            $("#infoA").fadeOut(500);
        }
    });
    $("#hobbyQ").click(function () {
        if (!hFlag) {
            hFlag = true;
            //숫자가 1에 가까울수록 빨라진다.
            $("#hobbyA").fadeIn(500);
            $("#infoA").fadeOut(1);
            $("#tmiA").fadeOut(1);
            iFlag=false;
            tFlag=false;
            
        } else {
            hFlag = false;
            $("#hobbyA").fadeOut(500);
        }
    });
    $("#tmiQ").click(function () {
        if (!tFlag) {
            tFlag = true;
            //숫자가 1에 가까울수록 빨라진다.
            $("#tmiA").fadeIn(500);
            $("#hobbyA").fadeOut(1);
            $("#infoA").fadeOut(1);
            iFlag=false;
            hFlag=false;
        } else {
            tFlag = false;
            $("#tmiA").fadeOut(500);
        }
    });

    // roadmap button animation

    $("#front-btn").click(function () {
            // console.log("클릭은됨");
            $("#preview").css('display','none');
            $("#backGallery").css('display','none');
            $("#frontGallery").css('display','block');
    });
    $("#back-btn").click(function () {
            // console.log("클릭은됨");
            $("#preview").css('display','none');
            $("#frontGallery").css('display','none');
            $("#backGallery").css('display','block');
    });

    //맛집 list hover
    $("tbody tr").hover(function(e){
        $(this).find('p').css('display','block');
        // console.log($(this).children());
    },function(){
        $(this).find('p').css('display','none');
    });

    //index overlay
    $(".index-container").hover(function(e){
        $(".overlay.black").css('display','block');
        $(".content").css('display','block');
        // console.log($(this));
    },function(){
        $(".overlay.black").css('display','none');
        $(".content").css('display','none');
    })
});