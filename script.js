$(function(){
	$('.swt-progate').click(function(){
		if($(this).html() == "もっと詳しく") {
			$(this).text("閉じる");
			$(this).animate({top: "-=110px"});
			setTimeout(function(){
				$('#pro-msg').fadeIn()}, 1000);
		} 
		else {
			$('#pro-msg').fadeOut();
			$(this).text("もっと詳しく");
			$(this).animate({top: "+=110px"});
		}

	});

	$('.lang-block').hover(
		function(){
			$(this).find('p').fadeIn();
		},
		function(){
			$(this).find('p').fadeOut();
		}
	);

	$('#twoWeek').click(function(){
			$('#XXX').text("【短期集中２週間コース】に申し込む");
			$('#medium, #long').removeAttr('selected');
			$('#short').attr('selected','');
	});
	$('#oneMonth').click(function(){
			$('#XXX').text("【通常１ヶ月コース】に申し込む");
			$('#short, #long').removeAttr('selected');
			$('#medium').attr('selected','');
	});
	$('#twoMonth').click(function(){
			$('#XXX').text("【土日開発２ヶ月コース】に申し込む");
			$('#short, #medium').removeAttr('selected');
			$('#long').attr('selected','');
	});

	$('a[href^=#]').click(function() {
	  // スクロールの速度
	  var speed = 1000; // ミリ秒
	  // アンカーの値取得
	  var href= $(this).attr("href");
	  // 移動先を取得
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  // 移動先を数値で取得
	  var position = target.offset().top;
	  // スムーススクロール
	  $('body, html').animate({scrollTop:position}, speed, 'swing');
	  return false;
   	});

	$('#show-all-btn').click(function(){
			$('.thumbnail').fadeOut();
			$('.thumbnail').fadeIn();
			$('.thumbnail').addClass('open');
			$('.kolumn-nav').find('button').removeClass('active');
			$(this).addClass('active');

	});
	$('#kolumn-btn').click(function(){
			$('.thumbnail').fadeOut();
			$('.kolumn').fadeIn();
			$('.kolumn-nav').find('button').removeClass('active');
			$(this).addClass('active');

	});
	$('#prog-btn').click(function(){
			$('.thumbnail').fadeOut();
			$('.prog').fadeIn();
			$('.kolumn-nav').find('button').removeClass('active');
			$(this).addClass('active');
	});

	$('#contact-submit').submit(function(){
		$('p.error').remove();
		if($('input,textarea').val()==""){
			$(this).parent().prepend('<p class="error">入力してください</p>');
		} else{
			$("#contact-form").fadeOut();
			$("#contact-msg").text("お問い合わせありがとうございます。");
		};

	});
});