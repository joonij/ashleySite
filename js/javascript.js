$(document).ready(function(){

//    화면크기 마추기
    var ht = $(window).height()
    function win_ht(){
        $("#container > div, #menu > ul, .type_cover").css("height", ht);
    }

//    menu 이동
    function menu_move(){
//        menu bar
        $("#menu li").fadeOut(500);
        $("header ul").animate({width:'toggle'},1000);
        $("#container > div").css("display","none");
//        type
        $(".type_cover").css({"width":"25%", "display":"block", "cursor":"pointer", "transform":"none"});
        $(".type_content").css({"opacity":"0", "display":"none"});
        $(".menu_infor").css("display","none");
        $(".type_infor").css("display","block");
        $("#classic .type_cover").css("left","0");
        $("#w .type_cover").css("left","25%");
        $("#a_lab .type_cover").css("left","50%");
        $("#queens .type_cover").css("left","75%");
    }  
    
    
    
    
//    default
    $("#container > div").css("display","none");
    $("#main").css("display","block");
    $(".menu_infor").css("display","none");
    win_ht()
    
//    메뉴바
    $("#menu ul").hide();
    $("#menubtn").click(function(){
        $("#menu li").css("display","none");
        $("#menu ul").animate({width:'toggle'},1000, function(){
            $("#menu li").fadeIn(1000);
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
        ($(this).css("height") === "50px") ? $(this).css("height","70%") : $(this).css("height","50px");
        $(this).find(".fas").hasClass("fa-plus") ? $(this).find(".fas").addClass("fa-minus").removeClass("fa-plus") : $(this).find(".fas").addClass("fa-plus").removeClass("fa-minus");
        ($(this).find(".detail").css("display") === "none")? $(this).find(".detail").css("display","block") : $(this).find(".detail").css("display","none");
    });

//    TYPE_이동
    $(".type_cover").click(function(){
        $(".type_cover").css({"display":"none", "cursor":"auto"});
        $(this).css("display","block");
        $(this).animate({left:"0"}, 1000, function(){
            $(this).animate({width:"100%"}, 1000, function(){
                $(this).find(".type_content").css("display","block");
                $(this).find(".type_content").stop().animate({opacity:1}, 3000);
            });
        });
    });
    
//    메뉴이동
    $(".menu_move_1").stop().click(function(){
        $(".type_infor").fadeOut(1000, function(){
            $(".menu_detail").css("display","none");
            $(".menu_content_1").fadeIn(1000);
        });
    });
    $(".menu_move_2").stop().click(function(){
        $(".type_infor").fadeOut(1000, function(){
            $(".menu_detail").css("display","none");
            $(".menu_content_2").fadeIn(1000);
        });
    });
    $(".menu_move_3").stop().click(function(){
        $(".type_infor").fadeOut(1000, function(){
            $(".menu_detail").css("display","none");
            $(".menu_content_3").fadeIn(1000);
        });
    });
    $(".menu_move_4").stop().click(function(){
        $(".type_infor").fadeOut(1000, function(){
            $(".menu_detail").css("display","none");
            $(".menu_content_4").fadeIn(1000);
        });
    });
    $(".menu_move_5").stop().click(function(){
        $(".type_infor").fadeOut(1000, function(){
            $(".menu_detail").css("display","none");
            $(".menu_content_5").fadeIn(1000);
        });
    });
    $(".menu_move_6").stop().click(function(){
        $(".type_infor").fadeOut(1000, function(){
            $(".menu_detail").css("display","none");
            $(".menu_content_6").fadeIn(1000);
        });
    });
    $(".menu_move_7").stop().click(function(){
        $(".type_infor").fadeOut(1000, function(){
            $(".menu_detail").css("display","none");
            $(".menu_content_7").fadeIn(1000);
        });
    });
    $(".menu_move_8").stop().click(function(){
        $(".type_infor").fadeOut(1000, function(){
            $(".menu_detail").css("display","none");
            $(".menu_content_8").fadeIn(1000);
        });
    });
    
//    메뉴뒤로가기
    $(".menu_infor .fas").click(function(){
        $(".menu_infor").fadeOut(1000, function(){
            $(".type_infor").delay(1000).fadeIn(1000);
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
    
//    store
    
    //    지도
    var start = {lat: 37.566645, lng: 126.978371};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: start
    });
    
    //    버튼
    var locations = '';
    $("#store_btn div").click(function(){
        var locations = null;
        var locations = [];
        var locations = '';
        $("#store_btn div").animate({right:"-50px"}, 100);
        $(this).animate({right:"0px"}, 100, function location(){
            if ($(this).index() === 0) {
                locations  = [
                    ['classic_4', 37.664846, 127.043596, 4],
                    ['classic_3', 37.451964, 126.900737, 3],
                    ['classic_2', 37.509588, 126.887553, 2],
                    ['classic_1', 37.639825, 127.068618, 1],
                ];
            } else if ($(this).index() === 1){
                 locations  = [
                    ['w_6', 37.559955, 126.840502, 6],
                    ['w_5', 37.535214, 127.095767, 5],
                    ['w_4', 37.509271, 127.007485, 4],
                    ['w_3', 37.498131, 127.026428, 3],
                    ['w_2', 37.482090, 126.881627, 2],
                    ['w_1', 37.477736, 127.124954, 1],
                ];
            } else if ($(this).index() === 2){
                 locations = [
                    ['a_lab_1', 37.556232, 126.934529, 1]
                ];
            } else if ($(this).index() === 3){
                 locations = [
                    ['queens_2', 37.511158, 127.098135, 2],
                    ['queens_1', 35.157189, 129.063093, 1]
                ]; 
            }
            for (i = 0; i < locations.length; i++) {  
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                    data: {
                        name: locations[i][0]
                    }
                });
            }
        });
    });
});
