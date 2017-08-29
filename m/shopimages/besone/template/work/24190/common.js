﻿/* ȸ������ ������ �����̱� */

(function($) {

    $(window).ready(function() {
        function loop() {
            $('#joinpoint').animate ({ top: '+=4' }, 200) 
                .animate({ top: '-=4' }, 200)
                .animate({ top: '+=4' }, 200)
                .animate({ top: '-=4' }, 200)
                .animate({top:28}, 1000, function() {
                loop();
            });
        }
        loop();
    });

})(jQuery);









/* ���̵� ���½� ������ ����� */

(function($) {
$(document).ready(function(){ //DOM�� �غ�ǰ�
    $('#menu').click(function(){ // ID�� toggleButton�� ��Ҹ� Ŭ���ϸ�
        var state = $('#joinpoint').css('display'); // state ������ ID�� moreMenu�� ����� display�� �Ӽ��� '����'
        if(state == 'none'){ // state�� none �����ϰ�� 
            $('#joinpoint').show(); // ID�� moreMenu�� ��Ҹ� show();
        }else{ // �� �ܿ���
            $('#joinpoint').hide(); // ID�� moreMenu�� ��Ҹ� hide();
        }
    });
});

})(jQuery);














/* �⺻ */

function mobile_homebutton(title) {
    var page_uri = "http://" + document.domain,
         main_uri = page_uri + "/m/main.html",
         icon_uri = '',
         user_agent = navigator.userAgent.toLowerCase();
    var title = (title.length > 0) ? title : shop_name,
         encode_title = encodeURI(title);

    (function($) {
        $(function() {
            $('link').each(function() {
                if ($(this).attr('rel') == "apple-touch-icon-precomposed") {
                    icon_uri = page_uri + $(this).attr('href');
                }
            });
        });
    })(jQuery);

    var call_uri= "intent://addshortcut?url="+main_uri +"&icon="+icon_uri +"&title="+encode_title+"&oq="+encode_title+"&serviceCode=nstore&version=7#Intent;scheme=naversearchapp;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.search;end";
    if (user_agent.match(/ipad|iphone|ipod/g)) {
        alert('������, �����е�迭�� ���� Ȩ��ư �߰��� ����ϼž� �մϴ�.');
    } else {
        alert(title+'��(��) Ȩȭ�鿡 �߰��մϴ�. ���̹����� ���� ����Բ����� ���̹��� ��ġ�������� �̵��˴ϴ�.');
        document.location.href = call_uri;
    }
}

jQuery("#menu").click(function(e) {
    e.preventDefault();
    if (jQuery(this).children(".fa").attr("class") == "fa fa-navicon fa-2x") {
        //var windowHeight = window.innerHeight;
        jQuery("aside, #mask").show();
        jQuery("html, body").addClass("menu_on");
        jQuery('.headerTop').addClass('top-pt-01');
        jQuery(this).children(".fa").attr("class","fa fa-times fa-2x");
    } else {
        jQuery("aside, #mask").hide();
        jQuery("html, body").removeClass("menu_on");
        jQuery('.headerTop').removeClass('top-pt-01');
        jQuery(this).children(".fa").attr("class","fa fa-navicon fa-2x");
    }
    return false
});

jQuery("aside nav .fa").click(function() {
    jQuery(this).parent().siblings().children("ul").hide();
    jQuery(this).parent().siblings().children(".fa-angle-down").removeClass("fa-rotate-180");
    jQuery(this).next("ul").toggle();

    if (jQuery(this).text() == "+") {
        jQuery(this).text("-");
    } else if (jQuery(this).text() == "-") {
        jQuery(this).text("+");
    } else {
        jQuery(this).toggleClass("fa-rotate-180");
    }
    return false
});
jQuery("#category").click(function() {
    jQuery(this).addClass("act").siblings().removeClass("act");
    jQuery(".navCategory").show();
    jQuery(".navCommunity, .navMypage").hide();
});
jQuery("#community").click(function() {
    jQuery(this).addClass("act").siblings().removeClass("act");
    jQuery(".navCommunity").show();
    jQuery(".navCategory, .navMypage").hide();
});
jQuery("#mypage").click(function() {
    jQuery(this).addClass("act").siblings().removeClass("act");
    jQuery(".navMypage").show();
    jQuery(".navCategory, .navCommunity").hide();
});
jQuery("#search").click(function() {
    jQuery("#header .search").toggle();
    jQuery("#keyword").focus()
});
jQuery("#btn_lastView").click(function() {
    jQuery("#ly_lastView").show();
});
jQuery("#ly_lastView .fa-times").click(function() {
    jQuery("#ly_lastView").hide();
});
jQuery(function() {
    jQuery("aside a[href='/m/personal.html?type=guest']").click(function(e) {
    alert(" *��ȸ���� �����Դϴ�.\n ȸ�����Ǵ� ������������ �̿��ϼ���.");
    });
});
jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 200) {
        jQuery('.headerTop').addClass("top-pt-02");
    } else {
        jQuery('.headerTop').removeClass("top-pt-02");
    }
});


