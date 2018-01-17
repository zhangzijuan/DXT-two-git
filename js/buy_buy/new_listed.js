$(function(){
	//买买导航事件，默认新上市active
	$('.buy-buy-nav-bar span').click(function(e){
		$(this).siblings('span').removeClass('active');
		$(this).addClass('active');
		if($(this).hasClass('new-listed')){
			$('.new-listed-content').show();
		}
	});
	
	//新上市商品点击事件
	$('.new-listed-content').find('.new-listed-item').click(function(e){
		alert('跳转查看商品详情界面！');
		
	});
})
