$(function(){
	//选择可用的抵用券事件（根据数据区分可用和不可用）
	$('.select-vouchers-container').find('.select-voucher-item.can-use').click(function(e){
		$(this).siblings('div').find('.voucher-use-condition .voucher-selected').hide();
		$(this).find('.voucher-use-condition .voucher-selected').show();
		alert('返回确认订单界面更新抵用券的信息！');
	})
})