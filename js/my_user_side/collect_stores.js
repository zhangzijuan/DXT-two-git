$(function(){
	//�ҵ�-�ղص������¼�
	$('.collect-nav-bar span').click(function(e){
		$(this).siblings('span').removeClass('active');
		$(this).addClass('active');
		if($(this).hasClass('collect-stores')){
			$('.collect-stores-content').show();
		}
	});
	
	//�鿴���������¼�
	$('.collect-stores-item').click(function(e){
		alert('��ת�鿴����������棡');
	});
	
	
	//����༭��ť
	var editCollectedStores = function(){
		$('.collect-stores-content .collect-stores-item').find('.edit-icon').show();
		$('.stores-edit-opt-nar').show();
		$('.collect-stores-content').css({marginBottom:'3.5rem'});
		//�༭ģʽ�£��������̵���¼�
		if($('.collect-stores-content .collect-stores-item').find('.edit-icon').length > 0){
			$('.collect-stores-item').unbind("click");
			$('.collect-stores-item').click(function(e){
				$(this).find('.iconfont').removeClass('icon-quan');
				$(this).find('.iconfont').addClass('icon-xuanzedui');
			})
		}
	}
	
	//ȡ���༭�¼�
	var cancleCollectedStores = function(){
		$('.collect-stores-content .collect-stores-item').find('.edit-icon').hide();
		$('.stores-edit-opt-nar').hide();
		$('.collect-stores-content').css({marginBottom:'0'})
		$('.collect-stores-item').unbind("click");
		//�鿴���������¼�
		$('.collect-stores-item').click(function(e){
			alert('��ת�鿴����������棡');
		});
	}
	
	//ģ��༭��ȡ���༭�¼���ʵ�ʿ�����ɾ��
	setTimeout(function(){
		editCollectedStores();
	},3000)

	setTimeout(function(){
		cancleCollectedStores();
	},8000)

	//����ɾ���ղصĵ���
	$('.stores-edit-opt-nar').click(function(e){
		alert('����ɾ���ղصĵ���!')
	});
	
})
