$(function(){
	//�һ�����¼�
	$('.exchange-opt-nar').click(function(e){
		alert('�һ�����');
	});
	
	//ԭ�����÷���
	var shareExchangeCoupons = function(){
		$('.backdrop').show();
        $('.exchange-coupons-share-wx').show();
        $("body").on("touchmove",function(event){
            event.preventDefault;
        }, false);
	}
	
	//ѡ����������
	$('.share-item').click(function(e){
		//todo ����ԭ������ʵ�ַ�����
		alert('����ԭ������ʵ�ַ�����!');
	});
	
	//ȡ�������¼�
	$('.cancel-share').click(function(){
		$('.exchange-coupons-share-wx').hide();
        $('.backdrop').hide();
        $("body").off("touchmove");
	});
	
	setTimeout(function(){
		shareExchangeCoupons();
	},5000)
})
