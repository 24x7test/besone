/* ��ũ��ž */
/*
$(function(){
	$("#pageTop").click(function(){
		$('html,body').animate({scrollTop:$("#wrap").offset().top -40 }, 700); return false;
	});

});
*/


(function($){
	$(document).ready(function(){
		$(window).scroll(function(){ // ��ũ���� ���۵Ǿ�����
			var position = $(window).scrollTop(); //���� ��ũ�� ��ġ���� ����
			if (position > 100){ //���� ��ũ�� ��ġ�� 100���� �� �����������
				$("#pageTop").fadeIn(); //ž��ư���� ���°� �����ش�.
			}else{
				$("#pageTop").fadeOut(); //ž��ư���� ���°� ��������Ѵ�.
			}//end if
		});
		$("#pageTop a").click(function(){  //ž��ư�� Ŭ���Ұ��
			$("html, body").animate({scrollTop:0}, "fast(200)"); //�������� �ֻ������ �̵��Ѵ�. 
			return false;
		})
	});//end

})(jQuery)







