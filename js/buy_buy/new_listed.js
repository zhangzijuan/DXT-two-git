$(function(){
	//���򵼺��¼���Ĭ��������active
	$('.buy-buy-nav-bar span').click(function(e){
		$(this).siblings('span').removeClass('active');
		$(this).addClass('active');
		if($(this).hasClass('new-listed')){
			$('.new-listed-content').show();
		}
	});
	
	//��������Ʒ����¼�
	$('.new-listed-content').find('.new-listed-item').click(function(e){
		alert('��ת�鿴��Ʒ������棡');
		
	});
})
