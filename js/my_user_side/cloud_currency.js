$(function(){
	//开启签到提醒
	$('.sign-in-remind').click(function(e){
		if($(this).find('span').hasClass('disabled')){
			$(this).find('span').removeClass('disabled');
			$(this).find('span').addClass('enabled');
		}else{
			$(this).find('span').removeClass('enabled');
			$(this).find('span').addClass('disabled');
		}
	});
	//今日签到
	$('.today-sign-btn').click(function(e){
		alert('今日签到!');
	});
	
	//查看更多优惠券
	$('.exchange-coupons-tip').click(function(){
		alert('跳转至兑换优惠券列表界面！');
	});
	
	//兑换优惠券事件
	$('.exchange-coupons-item').click(function(e){
		alert('跳转至兑换优惠券界面！');
	});
	
})
