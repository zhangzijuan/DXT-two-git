$(function(){
	//���򵼺��¼���Ĭ��������active
	$('.buy-buy-nav-bar span').click(function(e){
		$(this).siblings('span').removeClass('active');
		$(this).addClass('active');
		if($(this).hasClass('time-buy')){
			$('.time-buy-content').show();
		}
	});
	
	//��������Ʒ����¼�
	$('.time-buy-content').find('.time-buy-item').click(function(e){
		alert('��ת�鿴��Ʒ������棡');
		
	});
})
