(function($, doc) {

	$.init();
    $.ready(function() {
        //地址
        var payModePicker = new $.PopPicker({
            layer: 1
        });
        payModePicker.setData(payModeData);

        document.getElementById('payModecontainer').addEventListener('tap', function(event) {
            document.activeElement.blur();
            payModePicker.show(function(items) {
               var payModeDom = (items[0] || {}).text + " ";
               doc.getElementById('payModeText').innerHTML=payModeDom;
            });
        }, false);
        
        var distributionModePicker = new $.PopPicker({
            layer: 1
        });
        distributionModePicker.setData(distributionModeData);

        document.getElementById('distributionModeInfo').addEventListener('tap', function(event) {
            document.activeElement.blur();
            distributionModePicker.show(function(items) {
               var distributionModeDom = (items[0] || {}).text + " ";
               doc.getElementById('distributionModeText').innerHTML=distributionModeDom;
            });
        }, false);
        
    });
})(mui, document);
//选择收货地址事件
	$('.get-goods-address').click(function(e){

		//todo 跳转至select_address.html选择收货地址，之后更新信息
		if($(this).find('.no-default-address').is(":visible") ){
			$(this).find('.has-default-address').show();
			$(this).find('.no-default-address').hide();
		}else{
			$(this).find('.no-default-address').show();
			$(this).find('.has-default-address').hide();
		}
	});
	
	//配送门店 选择事件
	$('.distribution-store').click(function(e){
		//todo 跳转至选择店铺界面
		alert('跳转至选择店铺界面，选择后返回更新门店信息！');
	});

	//选择商品抵用券事件
	$('.goods-voucher').click(function(e){
		//todo 跳转至商品抵用券列表
		alert('跳转至商品抵用券列表,选择商品抵用券!');
	});

	

	//立即支付事件，弹出选择支付方式界面
	$('.pay-now').click(function(e){
		$('.backdrop').show();
        $('.select-pay-tool-container').show();
        $("body").on("touchmove",function(event){
            event.preventDefault;
        }, false);
	});

	//取消立即支付
	$('.backdrop,.icon-guanbi').click(function(e){
        $('.select-pay-tool-container').hide();
        $('.backdrop').hide();
        $("body").off("touchmove");
    });

	//支付宝和微信支付的切换
	$('.pay-tool-item').click(function(){
		if($(this).find('.iconfont').hasClass('icon-quan')){
			$(this).find('.iconfont').removeClass('icon-quan');
			$(this).find('.iconfont').addClass('icon-xuanzedui');
			$(this).siblings('div').find('.iconfont').removeClass('icon-xuanzedui');
			$(this).siblings('div').find('.iconfont').addClass('icon-quan');
		}
	});

	//确认支付
	$('.sure-pay-opt-nar').click(function(e){
		//todo 调用原生js完成支付功能
		alert('打开支付宝或者微信确认支付啦！');
	})
