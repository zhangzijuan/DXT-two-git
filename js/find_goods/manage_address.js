$(function(){
	//����Ĭ���ջ���ַ
	$('.address-opt-bar .set-default').click(function(e) {
        if($(this).find('.iconfont').hasClass('icon-quan')){
            $(this).parents('.manage-address-container').find('.set-default .iconfont').removeClass('icon-xuanzedui');
            $(this).parents('.manage-address-container').find('.set-default span:nth-child(even)').removeClass('default-text');
            $(this).parents('.manage-address-container').find('.set-default .iconfont').addClass('icon-quan');          
            $(this).find('.iconfont').addClass('icon-xuanzedui');
            $(this).find('span:nth-child(even)').addClass('default-text');
            //todo ���ú�̨�ӿ��޸�Ĭ�ϵ�ַ   
             
        }
    });

	//ɾ���ջ���ַ
    $('.address-opt-bar .del-address').click(function(){
    	//todo ���ú�̨�ӿ�ɾ����ַ
    	alert('ɾ���ջ���ַ!');
    });

    //�༭�ջ���ַ
    $('.address-opt-bar .edit-address').click(function(){
    	//todo ��ת���༭��ַ����
    	alert('��ת���༭��ַ����!');
    });
})