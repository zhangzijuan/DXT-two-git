$(function(){
	//�ҵ�-�ղص������¼���Ĭ�ϱʼ�active
	$('.collect-nav-bar span').click(function(e){
		$(this).siblings('span').removeClass('active');
		$(this).addClass('active');
		if($(this).hasClass('collect-notes')){
			$('.collect-notes-content').show();
		}
	});
	
	//�鿴�ʼ������¼�
	$('.note-item').click(function(e){
		alert('��ת�鿴�ʼ�������棡');
	});
	
	
	//����༭��ť
	var editCollectedNote = function(){
		$('.collect-notes-content .note-item').find('.edit-icon').show();
		$('.notes-edit-opt-nar').show();
		$('.collect-notes-content').css({marginBottom:'3.5rem'});
		//�༭ģʽ�£������ʼǵ���¼�
		if($('.collect-notes-content .note-item').find('.edit-icon').length > 0){
			$('.note-item').unbind("click");
			$('.note-item').click(function(e){
				$(this).find('.edit-icon').addClass('selected');
			})
		}
	}
	
	//ȡ���༭�¼�
	var cancleCollectedNote = function(){
		$('.collect-notes-content .note-item').find('.edit-icon').hide();
		$('.notes-edit-opt-nar').hide();
		$('.collect-notes-content').css({marginBottom:'0'})
		$('.note-item').unbind("click");
		//�鿴�ʼ������¼�
		$('.note-item').click(function(e){
			alert('��ת�鿴�ʼ�������棡');
		});
	}
	
	//ģ��༭��ȡ���༭�¼���ʵ�ʿ�����ɾ��
	setTimeout(function(){
		editCollectedNote();
	},3000)

	setTimeout(function(){
		cancleCollectedNote();
	},8000)
	
	//����ɾ���ղصıʼ�
	$('.notes-edit-opt-nar').click(function(e){
		alert('����ɾ���ղصıʼ�!')
	})
	
})
