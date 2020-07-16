$(document).ready(function () {
    //me 말풍선 animation
    var iFlag = false;
    var iFlag = false;
    var tFlag = false;
    $("#infoQ").click(function () {
        if (!iFlag) {
            iFlag = true;
            //숫자가 1에 가까울수록 빨라진다.
            $("#infoA").fadeIn(500);
            $("#tmiA").fadeOut(1);
            $("#tmiA").fadeOut(1);
            tFlag=false;
            tFlag=false;
        } else {
            iFlag = false;
            $("#infoA").fadeOut(500);
        }
    });
    $("#Q").click(function () {
        if (!iFlag) {
            iFlag = true;
            //숫자가 1에 가까울수록 빨라진다.
            $("#infoA").fadeIn(500);
            $("#infoA").fadeOut(1);
            $("#infoA").fadeOut(1);
            iFlag=false;
            tFlag=false;
            
        } else {
            iFlag = false;
            $("#infoA").fadeOut(500);
        }
    });
    $("#tmiQ").click(function () {
        if (!tFlag) {
            tFlag = true;
            //숫자가 1에 가까울수록 빨라진다.
            $("#tmiA").fadeIn(500);
            $("#infoA").fadeOut(1);
            $("#infoA").fadeOut(1);
            iFlag=false;
            iFlag=false;
        } else {
            tFlag = false;
            $("#tmiA").fadeOut(500);
        }
    });

    // roadmap button animation

    $("#front-btn").click(function () {
            // console.log("클릭은됨");
            $("#preview").css('display','none');
            $("#back-gallery").css('display','none');
            $("#front-gallery").css('display','block');
    });
    $("#back-btn").click(function () {
            // console.log("클릭은됨");
            $("#preview").css('display','none');
            $("#front-gallery").css('display','none');
            $("#back-gallery").css('display','block');
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