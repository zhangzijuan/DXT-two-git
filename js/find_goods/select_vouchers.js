$(function(){
	//ѡ����õĵ���ȯ�¼��������������ֿ��úͲ����ã�
	$('.select-vouchers-container').find('.select-voucher-item.can-use').click(function(e){
		$(this).siblings('div').find('.voucher-use-condition .voucher-selected').hide();
		$(this).find('.voucher-use-condition .voucher-selected').show();
		alert('����ȷ�϶���������µ���ȯ����Ϣ��');
	})
})