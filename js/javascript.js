$(document).ready(function(){
    
//    header_color
    function header_color(){
        var src = ($("header h1 img").attr("src") === "img/img_logo_2.png")? "img/img_logo_1.png" : "img/img_logo_2.png";
        var color = ($("#menubtn").css("color") === "rgb(236, 230, 204)")? "#456200" : "#ece6cc";
        $("#menubtn").css("color", color);
        $("header h1 img").attr("src", src);
    }
    
//    menu 이동
    function menu_move(){
//        menu bar
        header_color()
        $("header ul").fadeOut(300);
        $("#container > div").css("display","none");
//        type
        $(".type_cover").css({"width":"25%", "display":"block"});
        $(".type_content").css("display","none");
    }
    
//    type 이동
    function type_btn(){
        $(".type_cover").css("display","none");
        $(this).css({"display":"block", "width":"100%"});
        $(this).fadeOut(2000);
    }
    
    
    
    
    
//    default
    $("#container > div").css("display","none");
    $("#main").css("display","block");
    
//    화면크기 마추기
    var ht = $(window).height()
    $("#container > div, #menu > ul, .type_cover, .type_content").css("height", ht);
    
//    슬라이더
   
//    메뉴바
    $("#menu ul").hide();
    $("#menubtn").click(function(){
        header_color()
        $("#menu ul").slideToggle(300);
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
    $("#classic > .type_cover").click(function(){
        type_btn.call(this);
        $("#classic > .type_content").css("display","block");
    });
    $("#w > .type_cover").click(function(){
        type_btn.call(this);
        $("#w > .type_content").css("display","block");
    });
    $("#a_lab > .type_cover").click(function(){
        type_btn.call(this);
        $("#a_lab > .type_content").css("display","block");
    });
    $("#queens > .type_cover").click(function(){
        type_btn.call(this);
        $("#queens > .type_content").css("display","block");
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
