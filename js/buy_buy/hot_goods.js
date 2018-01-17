$(function(){
	//买买导航事件，默认新上市active
	$('.buy-buy-nav-bar span').click(function(e){
		$(this).siblings('span').removeClass('active');
		$(this).addClass('active');
		if($(this).hasClass('hot-goods')){
			$('.hot-goods-content').show();
		}
	});
	
	//查看商品详情事件
	$('.hot-goods-top,.hot-goods-item').click(function(e){
		alert('跳转查看商品详情界面！');
	})
	
})
