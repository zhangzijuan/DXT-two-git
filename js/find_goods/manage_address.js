$(function(){
	//设置默认收货地址
	$('.address-opt-bar .set-default').click(function(e) {
        if($(this).find('.iconfont').hasClass('icon-quan')){
            $(this).parents('.manage-address-container').find('.set-default .iconfont').removeClass('icon-xuanzedui');
            $(this).parents('.manage-address-container').find('.set-default span:nth-child(even)').removeClass('default-text');
            $(this).parents('.manage-address-container').find('.set-default .iconfont').addClass('icon-quan');          
            $(this).find('.iconfont').addClass('icon-xuanzedui');
            $(this).find('span:nth-child(even)').addClass('default-text');
            //todo 调用后台接口修改默认地址   
             
        }
    });

	//删除收货地址
    $('.address-opt-bar .del-address').click(function(){
    	//todo 调用后台接口删除地址
    	alert('删除收货地址!');
    });

    //编辑收货地址
    $('.address-opt-bar .edit-address').click(function(){
    	//todo 跳转至编辑地址界面
    	alert('跳转至编辑地址界面!');
    });
})