$(function(){
	
	$(".look-search").bind('input propertychange',function(){
		if($('.look-search').find('input').val() == ''){
			$('.look-search').find('.icon-search').show();
		}else{
			$('.look-search').find('.icon-search').hide();
		}
		
	});
	
	//��ת���������
	$('.look-content-item').click(function(e){
		alert('��ת��������棡');
	})
	
	
	//�����¼�
	$('.look-location').click(function(e){
		alert('�����¼���');
	});
	
	//�鿴�ʼ�
	$('.look-email').click(function(e){
		alert('�鿴�ʼ���');
	})
	
	
})
