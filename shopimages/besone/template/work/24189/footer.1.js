(function($){$(document).ready(function(){$(window).scroll(function(){var position=$(window).scrollTop();if(position>100){$("#pageTop").fadeIn()}else{$("#pageTop").fadeOut()}});$("#pageTop a").click(function(){$("html, body").animate({scrollTop:0},"fast(200)");return!1})})})(jQuery)