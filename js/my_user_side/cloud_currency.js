$(function(){
	//����ǩ������
	$('.sign-in-remind').click(function(e){
		if($(this).find('span').hasClass('disabled')){
			$(this).find('span').removeClass('disabled');
			$(this).find('span').addClass('enabled');
		}else{
			$(this).find('span').removeClass('enabled');
			$(this).find('span').addClass('disabled');
		}
	});
	//����ǩ��
	$('.today-sign-btn').click(function(e){
		alert('����ǩ��!');
	});
	
	//�鿴�����Ż�ȯ
	$('.exchange-coupons-tip').click(function(){
		alert('��ת���һ��Ż�ȯ�б���棡');
	});
	
	//�һ��Ż�ȯ�¼�
	$('.exchange-coupons-item').click(function(e){
		alert('��ת���һ��Ż�ȯ���棡');
	});
	
})
