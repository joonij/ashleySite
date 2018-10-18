$(document).ready(function(){
// index_counter function
    function index_counter(index, element, counter){
        var index_name = $(index).parent().index();
        var index_name = index_name + counter;
        var index_name = element+":nth-child("+index_name+")";
        $(index_name).css("display","block");
    }
//    메뉴바
    $(".menu_bar").click(function(){
        $(".menu, .copyright, .footer_link").css("display", "none");
        $(".pop_up_menu, .footer").animate({width:'toggle'},1000, function(){
            $(".menu, .copyright, .footer_link").fadeIn();
        });
    });
    
//    메뉴이동
    $(".menu_item button").click(function(){
        $(".menu, .copyright, .footer_link").css("display", "none");
        $(".pop_up_menu, .footer").animate({width:'toggle'},1000);
        $("article").css("display", "none");
        index_counter(this, "article", 2);
    });
// main
    function main_benner(type){
        $(".menu, .copyright, .footer_link").css("display", "none");
        $(".pop_up_menu, .footer").animate({width:'toggle'},1000, function(){
            $("article, .type_cover, .type_store > div").css("display", "none");
            $(".type").css("display", "block");
            $(type).css("display", "block");
        });
        $(".pop_up_menu, .footer").animate({width:'toggle'},1000);
    }       
    $(".carousel-cell button").click(function(){
        if($(this).hasClass("classic_benner") == true){
            main_benner(".classic");
        } else if($(this).hasClass("w_benner") == true){
            main_benner(".w");
        }
    });
//    공지사항
    $(".notice_content").click(function(){
        $(".notice_content").css("background", "#fff");
        $(".notice_detail").css("display","none");
        $(this).css("background", "#dad5bb");
        var notice_content_index = $(this).index();
        var notice_content_index = notice_content_index + 1;
        var notice_content_index = ".notice_detail:nth-child("+notice_content_index+")";
        $(notice_content_index).css("display","block");
    });

//    TYPE_이동
    $(".cover button").click(function(){
        $(".type_cover").fadeOut();
        $(".type_store > div").css("display", "none");
        index_counter(this, ".type_store > div", 1);
    });
// type 뒤로가기
    $(".type_menu > button").click(function(){
        $(".type_cover").fadeIn();
    });
//    메뉴이동
    $(".type_menu_item button").click(function(){
        $(".detail_menu_item button").css("background", "none");
        $(".menu_detail").css("display", "none");
        $(".detail_menu_item:nth-child(2) > button").css("background", "rgba(255,255,255,0.5");
        $(".menu_detail:first-child").css("display", "block");
        $(".menu_infor").css("display", "none");
        $(".type_infor").css("opacity", "0.5");
        index_counter(this, ".menu_infor", 1);
    });
//    메뉴 detail
    $(".detail_menu_item button").click(function(){
        $(".menu_detail").css("display", "none");
        $(".detail_menu_item button").css("background", "none");
        $(this).css("background", "rgba(255,255,255,0.5)");
        index_counter(this, ".menu_detail", 0);
    });
//    메뉴 detail 뒤로가기
    $(".menu_list > button").click(function(){
        $(".menu_infor").css("display", "none");
        $(".type_infor").css("opacity", "1");
    });
});