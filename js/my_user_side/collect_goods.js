$(function(){
	//�ҵ�-�ղص������¼�
	$('.collect-nav-bar span').click(function(e){
		$(this).siblings('span').removeClass('active');
		$(this).addClass('active');
		if($(this).hasClass('collect-goods')){
			$('.collect-goods-content').show();
		}
	});
	
	//�鿴��Ʒ�����¼�
	$('.collect-goods-item').click(function(e){
		alert('��ת�鿴��Ʒ������棡');
	});
	
	
	//����༭��ť
	var editCollectedGoods = function(){
		$('.collect-goods-content .collect-goods-item').find('.edit-icon').show();
		$('.goods-edit-opt-nar').show();
		$('.collect-goods-content').css({marginBottom:'3.5rem'});
		//�༭ģʽ�£�������Ʒ����¼�
		if($('.collect-goods-content .collect-goods-item').find('.edit-icon').length > 0){
			$('.collect-goods-item').unbind("click");
			$('.collect-goods-item').click(function(e){
				$(this).find('.iconfont').removeClass('icon-quan');
				$(this).find('.iconfont').addClass('icon-xuanzedui');
			})
		}
	}
	
	//ȡ���༭�¼�
	var cancleCollectedGoods = function(){
		$('.collect-goods-content .collect-goods-item').find('.edit-icon').hide();
		$('.goods-edit-opt-nar').hide();
		$('.collect-goods-content').css({marginBottom:'0'})
		$('.collect-goods-item').unbind("click");
		//�鿴��Ʒ�����¼�
		$('.collect-goods-item').click(function(e){
			alert('��ת�鿴��Ʒ������棡');
		});
	}
	
	//ģ��༭��ȡ���༭�¼���ʵ�ʿ�����ɾ��
	setTimeout(function(){
		editCollectedGoods();
	},3000)

	setTimeout(function(){
		cancleCollectedGoods();
	},10000)
	
	//����ɾ���ղص���Ʒ
	$('.goods-edit-opt-nar').click(function(e){
		alert('����ɾ���ղص���Ʒ!')
	})
	
})
