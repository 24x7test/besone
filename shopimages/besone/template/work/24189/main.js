<!--
	var scrolling_check = false;
	var slide_check = false;
//-->


<!--
/*
	jQuery(document).ready(function() {
		var hoverEffect = 'none';
		var fadeDelay = 100;
		var fadeOpacity = 0.5;

		if (hoverEffect === 'fadeIn') {
			jQuery('.thumbnail').fadeTo(0, fadeOpacity).hover(function() {
					jQuery(this).fadeTo(fadeDelay, 1);
				}, function() {
					jQuery(this).fadeTo(fadeDelay, fadeOpacity);
				});
		} else if (hoverEffect === 'fadeOut') {
			jQuery('.thumbnail').hover(function() {
				jQuery(this).fadeTo(fadeDelay, fadeOpacity);
			}, function() {
				jQuery(this).fadeTo(fadeDelay, 1);
			});
		}

		if (scrolling_check === true) {
			jQuery('#widget_list').smoothDivScroll({
				autoScrollingDirection: "endlessLoopRight",
				autoScrollingInterval: 10,
				touchScrolling: true
							});
		}

		if (slide_check === true) {
			$('#widget_list').cycle({
				fx: 'fade'
			});
		}

		 // Invoke the plugin
		$('input, textarea').placeholder({customClass:'my-placeholder'});

		// 롤오버 이벤트
		$('.grid ul li, .board ul li, .default_type ul li').hover(function(e) {
			e.preventDefault();
			$(this).find('.s-btn').show();
		});
		$('.grid ul li, .board ul li, .default_type ul li').mouseleave(function(e) {
			e.preventDefault();
			$(this).find('.s-btn').hide();
		});

		jQuery('.share_btn').click(function() {
			var site = jQuery(this).attr('site');
			var url = jQuery(this).attr('url');

			switch (site) {
				case 'facebook':
					url = 'https://<a href="<a href="<a href="http://www.facebook.com/sharer/sharer.php?u=">http://www.facebook.com/sharer/sharer.php?u=</a>"><a href="http://www.facebook.com/sharer/sharer.php?u=</a>">http://www.facebook.com/sharer/sharer.php?u=&lt;/a&gt;</a>"><a href="<a href="http://www.facebook.com/sharer/sharer.php?u=</a>">http://www.facebook.com/sharer/sharer.php?u=&lt;/a&gt;</a>"><a href="http://www.facebook.com/sharer/sharer.php?u=</a></a>">www.facebook.com/sharer/sharer.php?u=&lt;/a&gt;&lt;/a&gt;</a>'+encodeURIComponent(url);
					window.open(url, 'facebook_popup', 620, 430);
					break;
				case 'twitter':
					url = 'https://twitter.com/share?url='+encodeURIComponent(url)+"&text="+encodeURIComponent(jQuery(this).attr('text'))+"&via=insdot";
					window.open(url, 'twiter_popup', 570, 350);
					break;
			}

			return;
		});
	});
*/
//-->
