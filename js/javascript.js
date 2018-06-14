$(document).ready(function(){

//    화면크기 마추기
    var ht = $(window).height()
    function win_ht(){
        $("#container > div, #menu > ul, .type_cover").css("height", ht);
    }

//    menu 이동
    function menu_move(){
//        menu bar
        $("header ul").fadeOut(300);
        $("#container > div").css("display","none");
//        type
        $(".type_cover").css({"width":"25%", "display":"block", "cursor":"pointer"});
        $(".type_content").css({"opacity":"0", "display":"none"});
        $(".menu_infor").css("display","none");
        $(".type_infor").css("display","block");
    }  
    
    
    
    
//    default
    $("#container > div").css("display","none");
    $("#main").css("display","block");
    $(".menu_infor").css("display","none");
    win_ht()
    
//    슬라이더
   
//    메뉴바
    $("#menu ul").hide();
    $("#menubtn").click(function(){
        $("#menu li").css("display","none");
        $("#menu ul").animate({width:'toggle'},1000, function(){
            $("#menu li").fadeIn(2000);
        });
    });
    
//    메뉴이동
    $("#nav_notice").click(function(){
        menu_move()
        $("#notice").css("display","block");
    });
    $("#nav_type").click(function(){
        menu_move()
        $("#type").css("display","block");
    });
    $("#nav_store").click(function(){
        menu_move()
        $("#store").css("display","block");
    });
    $("#nav_phone").click(function(){
        menu_move()
        $("#phone").css("display","block");
    });
    
//    공지사항
    $(".fa-minus").css("display","none");
    $(".detail").css("display","none");
    $(".notice_area").css("display","none");
    $(".notice_area:nth-child(1)").css("display","block");
    $(".page_num i").click(function(){
        if($(this).hasClass("fa-long-arrow-alt-left")) {
            $(".notice_area").css("display","none");
            $(".notice_area").prev().css("display","block");
        } else {
            $(".notice_area").css("display","none");
            $(".notice_area").next().css("display","block");
        }
    });
    $(".notice_content").click(function(){
        $(".notice_content").css("height","50px");
        $(".notice_content .fas").addClass("fa-plus").removeClass("fa-minus");
        $(".notice_content .detail").css("display","none");
        ($(this).css("height") === "50px") ? $(this).css("height","550px") : $(this).css("height","50px");
        $(this).find(".fas").hasClass("fa-plus") ? $(this).find(".fas").addClass("fa-minus").removeClass("fa-plus") : $(this).find(".fas").addClass("fa-plus").removeClass("fa-minus");
        ($(this).find(".detail").css("display") === "none")? $(this).find(".detail").css("display","block") : $(this).find(".detail").css("display","none");
    });

//    TYPE_이동
    $(".type_cover").click(function(){
        $(".type_cover").css({"display":"none", "cursor":"auto"});
        $(this).css("display", "block");
        $(this).animate({width:"100%"}, 1000, function(){
            $(this).find(".type_content").css("display","block");
            $(this).find(".type_content").stop().animate({opacity:1}, 3000);
        });
    });
    
//    메뉴이동
    $(".menu_move_1").click(function(){
        $(".type_infor").fadeOut(1000, function(){
            $(".menu_content_1").fadeIn(2000);
        });
    });
    $(".menu_move_2").click(function(){
        $(".type_infor").fadeOut(1000, function(){
            $(".menu_content_2").fadeIn(2000);
        });
    });
    $(".menu_move_3").click(function(){
        $(".type_infor").fadeOut(1000, function(){
            $(".menu_content_3").fadeIn(2000);
        });
    });
    $(".menu_move_4").click(function(){
        $(".type_infor").fadeOut(1000, function(){
            $(".menu_content_4").fadeIn(2000);
        });
    });
    $(".menu_move_5").click(function(){
        $(".type_infor").fadeOut(1000, function(){
            $(".menu_content_5").fadeIn(2000);
        });
    });
    $(".menu_move_6").click(function(){
        $(".type_infor").fadeOut(1000, function(){
            $(".menu_content_6").fadeIn(2000);
        });
    });
    $(".menu_move_7").click(function(){
        $(".type_infor").fadeOut(1000, function(){
            $(".menu_content_7").fadeIn(2000);
        });
    });
    
//    메뉴뒤로가기
    $(".menu_content .fas").click(function(){
        $(".menu_infor").fadeOut(2000, function(){
            $(".type_infor").fadeIn(2000);
        });
    });
//    store
    function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
});
