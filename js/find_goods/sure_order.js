(function($, doc) {

	$.init();
    $.ready(function() {
        //��ַ
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
//ѡ���ջ���ַ�¼�
	$('.get-goods-address').click(function(e){

		//todo ��ת��select_address.htmlѡ���ջ���ַ��֮�������Ϣ
		if($(this).find('.no-default-address').is(":visible") ){
			$(this).find('.has-default-address').show();
			$(this).find('.no-default-address').hide();
		}else{
			$(this).find('.no-default-address').show();
			$(this).find('.has-default-address').hide();
		}
	});
	
	//�����ŵ� ѡ���¼�
	$('.distribution-store').click(function(e){
		//todo ��ת��ѡ����̽���
		alert('��ת��ѡ����̽��棬ѡ��󷵻ظ����ŵ���Ϣ��');
	});

	//ѡ����Ʒ����ȯ�¼�
	$('.goods-voucher').click(function(e){
		//todo ��ת����Ʒ����ȯ�б�
		alert('��ת����Ʒ����ȯ�б�,ѡ����Ʒ����ȯ!');
	});

	

	//����֧���¼�������ѡ��֧����ʽ����
	$('.pay-now').click(function(e){
		$('.backdrop').show();
        $('.select-pay-tool-container').show();
        $("body").on("touchmove",function(event){
            event.preventDefault;
        }, false);
	});

	//ȡ������֧��
	$('.backdrop,.icon-guanbi').click(function(e){
        $('.select-pay-tool-container').hide();
        $('.backdrop').hide();
        $("body").off("touchmove");
    });

	//֧������΢��֧�����л�
	$('.pay-tool-item').click(function(){
		if($(this).find('.iconfont').hasClass('icon-quan')){
			$(this).find('.iconfont').removeClass('icon-quan');
			$(this).find('.iconfont').addClass('icon-xuanzedui');
			$(this).siblings('div').find('.iconfont').removeClass('icon-xuanzedui');
			$(this).siblings('div').find('.iconfont').addClass('icon-quan');
		}
	});

	//ȷ��֧��
	$('.sure-pay-opt-nar').click(function(e){
		//todo ����ԭ��js���֧������
		alert('��֧��������΢��ȷ��֧������');
	})
