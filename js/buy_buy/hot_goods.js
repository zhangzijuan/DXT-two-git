$(function(){
	//���򵼺��¼���Ĭ��������active
	$('.buy-buy-nav-bar span').click(function(e){
		$(this).siblings('span').removeClass('active');
		$(this).addClass('active');
		if($(this).hasClass('hot-goods')){
			$('.hot-goods-content').show();
		}
	});
	
	//�鿴��Ʒ�����¼�
	$('.hot-goods-top,.hot-goods-item').click(function(e){
		alert('��ת�鿴��Ʒ������棡');
	})
	
})
