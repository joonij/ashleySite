$(document).ready(function(){
    
//    default
    var ht = $(window).height()
    $("#container > div, #menu > ul, .type_cover").css("height", ht);
    $("#container > div").css("display","none");
    
//    main
    $("#main").css("display","block");
    $(".menu_infor").css("display","none");
    $(".menu_detail").css("display","none");
    
//    메뉴바
    $("#menu ul").hide();
    $("#menubtn").click(function(){
        $("#menu li").css("display","none");
        $("#menu ul").animate({width:'toggle'},1000, function(){
            $("#menu li").fadeIn(1000);
        });
    });
    
//    로그인
    $("#login form").css("display", "none");
    $("#member > div").one("click", function(){
        if($(this).index() === 0){
            $("#member > div").fadeOut(1000, function(){
                $("#login, #login form").fadeIn(1000);
                $("#login span").css("display", "none");
                $("#login").css({"width":"100%", "margin-top":"0"});
            });
        } else if($(this).index() === 1){
            $("#membership").css("display", "none");
            $("#login span").css("display", "none");
        }
    });
    
//    메뉴이동
    function menu_move(){ 
//        menu bar
        $("#menu li").fadeOut(500);
        $("header ul").animate({width:'toggle'},1000);
        $("#container > div").css("display","none");
//        type
        $(".type_cover").css({"width":"25%", "display":"block", "cursor":"pointer"});
        $("#classic .type_cover").css("left","0");
        $("#w .type_cover").css("left","25%");
        $("#a_lab .type_cover").css("left","50%");
        $("#queens .type_cover").css("left","75%");
        $(".menu_infor").css("display","none");
        $(".type_infor").css("display","block");
        $(".type_content").css({"opacity":"0", "display":"none"});
    }
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
    $(".notice_content").click(function(){
        $(".notice_content").css("height","50px");
        $(".notice_content .fas").addClass("fa-plus").removeClass("fa-minus");
        $(".notice_content .detail").css("display","none");
        ($(this).css("height") === "50px") ? $(this).css("height","100%") : $(this).css("height","50px");
        $(this).find(".fas").hasClass("fa-plus") ? $(this).find(".fas").addClass("fa-minus").removeClass("fa-plus") : $(this).find(".fas").addClass("fa-plus").removeClass("fa-minus");
        ($(this).find(".detail").css("display") === "none")? $(this).find(".detail").css("display","block") : $(this).find(".detail").css("display","none");
    });

//    TYPE_이동
    $(".type_cover").click(function(){
        $(".type_cover").css({"display":"none", "cursor":"auto"});
        $(this).css("display","block");
        $(this).animate({left:"0"}, 500, function(){
            $(this).animate({width:"100%"}, 1000, function(){
                $(this).find(".type_content").css("display","block");
                $(this).find(".type_content").stop().animate({opacity:1}, 2000);
            });
        });
    });
    
//    메뉴이동
    $(".type_content:nth-child(1) span").not($(".type_content:nth-child(1) span:nth-child(1)")).click(function(){
            if($(this).index() === 1){
                $(".menu_content_1").delay(500).fadeIn(1000);
            } else if ($(this).index() === 2) {
                $(".menu_content_2").delay(500).fadeIn(1000);   
            } else if ($(this).index() === 3) {
                $(".menu_content_3").delay(500).fadeIn(1000);   
            } else if ($(this).index() === 4) {
                $(".menu_content_4").delay(500).fadeIn(1000);   
            } else if ($(this).index() === 5) {
                $(".menu_content_5").delay(500).fadeIn(1000);   
            } else if ($(this).index() === 6) {
                $(".menu_content_6").delay(500).fadeIn(1000);   
            } else if ($(this).index() === 7) {
                $(".menu_content_7").delay(500).fadeIn(1000);   
            } else if ($(this).index() === 8) {
                $(".menu_content_8").delay(500).fadeIn(1000);   
            }
        $(".type_infor").fadeOut(500,function(){
            $(".type_infor").css("display","none");
        });
    });
    
//    메뉴뒤로가기
    $(".menu_infor .fas").click(function(){
        $(".type_infor").delay(500).fadeIn(1000);
        $(".menu_infor").fadeOut(500, function(){
            $(".menu_infor").css("display","none");
        });
    });
        
//    메뉴 detail
    $(".menu_content:nth-child(1) span:nth-child(2)").hover(function(){
        $(".menu_detail:nth-child(1)").css("display","block");
    },
    function(){
        $(".menu_detail:nth-child(1)").css("display","none");
    });
    $(".menu_content:nth-child(1) span:nth-child(3)").hover(function(){
        $(".menu_detail:nth-child(2)").css("display","block");
    },
    function(){
        $(".menu_detail:nth-child(2)").css("display","none");
    });
    $(".menu_content:nth-child(1) span:nth-child(4)").hover(function(){
        $(".menu_detail:nth-child(3)").css("display","block");
    },
    function(){
        $(".menu_detail:nth-child(3)").css("display","none");
    });
    $(".menu_content:nth-child(1) span:nth-child(5)").hover(function(){
        $(".menu_detail:nth-child(4)").css("display","block");
    },
    function(){
        $(".menu_detail:nth-child(4)").css("display","none");
    });
    $(".menu_content:nth-child(1) span:nth-child(6)").hover(function(){
        $(".menu_detail:nth-child(5)").css("display","block");
    },
    function(){
        $(".menu_detail:nth-child(5)").css("display","none");
    });
    $(".menu_content:nth-child(1) span:nth-child(7)").hover(function(){
        $(".menu_detail:nth-child(6)").css("display","block");
    },
    function(){
        $(".menu_detail:nth-child(6)").css("display","none");
    });
    $(".menu_content:nth-child(1) span:nth-child(8)").hover(function(){
        $(".menu_detail:nth-child(7)").css("display","block");
    },
    function(){
        $(".menu_detail:nth-child(7)").css("display","none");
    });
    $(".menu_content:nth-child(1) span:nth-child(9)").hover(function(){
        $(".menu_detail:nth-child(8)").css("display","block");
    },
    function(){
        $(".menu_detail:nth-child(8)").css("display","none");
    });
    $(".menu_content:nth-child(1) span:nth-child(10)").hover(function(){
        $(".menu_detail:nth-child(9)").css("display","block");
    },
    function(){
        $(".menu_detail:nth-child(9)").css("display","none");
    });
    $(".menu_content:nth-child(1) span:nth-child(11)").hover(function(){
        $(".menu_detail:nth-child(10)").css("display","block");
    },
    function(){
        $(".menu_detail:nth-child(10)").css("display","none");
    });
    $(".menu_content:nth-child(1) span:nth-child(12)").hover(function(){
        $(".menu_detail:nth-child(11)").css("display","block");
    },
    function(){
        $(".menu_detail:nth-child(11)").css("display","none");
    });
});