// JavaScript Document
$(function (){
//首页图片切换
	(function (){
		var oUl = $('#picTab ul');
		var iW = oUl.find('li').outerWidth();
		var oW = 0;
		
		doMove();
		
		function doMove(){
			oUl.timer = setInterval(function (){
				if( oW == oUl.find('li').length-1 ){
					oW = -1;
				}
				autoPlay( oUl.get(0), -iW*oW, -iW*(oW+1));
				oW ++;
			},2000);
		}
		
		$('#picTab').hover(function (){
			clearInterval(oUl.timer);
		},function (){
			clearInterval(oUl.timer);
			doMove();
		});
		
		$('#rBtn').click(function (){
			clearInterval(oUl.timer);
			if( oW == oUl.find('li').length-1 ){
				oW = -1;
			}
			autoPlay( oUl.get(0), -iW*oW, -iW*(oW+1));
			oW ++;
		});
		
		$('#lBtn').click(function (){
			clearInterval(oUl.timer);
			if( oW == 0 ){
				oW = oUl.find('li').length;
			};
			autoPlay( oUl.get(0), -iW*oW, -iW*(oW-1));
			oW --;
		});
		
		function autoPlay(obj, old, now) {
			clearInterval(obj.timer);
			obj.timer = setInterval(function() {
				var speed = ( now - old )/10;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if( now == old ){
					clearInterval(obj.timer);
				} else {
					old += speed;
					obj.style.left = old + 'px';
				}
			},20)	
		};	
	})();
	
//我们的客户——图片生成	
	(function (){
		var oUl = $('.div4 ul').get(0);
		var arrImg = [ "img/index/div4_img1.gif","img/index/div4_img2.gif","img/index/div4_img3.gif","img/index/div4_img4.gif","img/index/div4_img5.gif","img/index/div4_img6.gif","img/index/div4_img7.gif","img/index/div4_img8.gif","img/index/div4_img9.gif","img/index/div4_img10.gif","img/index/div4_img11.gif","img/index/div4_img12.gif","img/index/div4_img13.gif","img/index/div4_img14.gif","img/index/div4_img15.gif","img/index/div4_img16.gif" ];
		var arrA = [ "#" ]
		for( var i=0; i<arrImg.length; i++ ){
			oUl.innerHTML += '<li><a href="' + arrA[i%arrA.length] + '"><img src="' + arrImg[i] + '" /></a></li>';
		}
	})();
});