$(function(){
	//��ת�����촰��
	$('.liao-liao-opt,.liao-liao-btn').click(function(){
		alert('��ת�����촰��');
		//������Ǻ��ѣ�����Ӻ���
		$('.plus-liao-liao-container').show();
		$("body").on("touchmove",function(event){
            event.preventDefault;
        }, false);
	});
	
	//������ȷ���¼�
	$('.dialog-footer .sure').click(function(e){
		$('.dialog-footer .cancel').trigger('click');
	});
	
	//�鿴�����û������б�
	$('.more-user').click(function(){
		alert('�鿴�����û������б�!');
	});
	
	//��Ʒ����Ч����Ⱦ
    new Swiper ('.goods-list-container .swiper-container', {
        direction: 'horizontal',
        speed:300,
        slidesPerView : 3.5,
        spaceBetween:15,
        autoplayDisableOnInteraction:false
    });
    
    //�鿴ʣ��n���ظ�
    $('.view-other-replys').click(function(e){
    		$('.reply-item').show();
    		$(this).hide();
    });
    
    //�鿴��������
    $('.view-all-reply').click(function(e){
    		alert('�鿴��������!');
    });
    
    //���ۼ��ظ��ĵ����¼�
    $('.dianzan-count').click(function(e){
    		e.preventDefault();
    		$(this).find('.iconfont').addClass('already-zan');
    		$(this).find('.count').html(Number($(this).find('.count').html())+1);
    });
    
    //�Ʊ�-��
    $('.publish-content-tip .shang-yunbi,.look-detail-opt-nar .shang-yunbi').click(function(e){
    		e.preventDefault();
    		alert('�Ʊ�-���ͣ�');
    		$('.give-reward-container').show();
    		$("body").on("touchmove",function(event){
            event.preventDefault;
        }, false);
    });
    
    //����ѡ�������ͷչ�������¼�
    $('.input-group-btn').click(function(e){
    		$(this).parent().toggleClass('open');
    		$(this).find('.icon-sanjiaojiantou').toggleClass('open');
    });
    
    //����ѡ�������¼�
    $('.dropdown-menu li').click(function(e){
    		$('.input-group .form-control').val($(this).find('span').html());
    		$('.input-group-btn').trigger('click');
    });
    
    //�Ӽ��Ʊ�
    $('.yunbi-opt-container span').click(function(e){
    		var count = Number($('.yunbi-opt-container').find('.form-control').val());
    		if($(this).hasClass('icon-jianshao') && count >0){
    			$('.yunbi-opt-container').find('.form-control').val(count-1);
    		}else if($(this).hasClass('icon-jia2') && count >= 0){
    			$('.yunbi-opt-container').find('.form-control').val(count+1);
    		}
    });
    //�رնԻ���
    $('.close-opt .icon-guanbi2,.dialog-footer .cancel').click(function(e){
    		$('.give-reward-container').hide();
    		$('.plus-liao-liao-container').hide();
    		$("body").off("touchmove");
    });
    //�����Ʊ�
    $('.give-shang span').click(function(){
    		alert('ȷ�������Ʊң�');
    		$('.close-opt .icon-guanbi2').trigger('click');
    });
    
    //�ղ�
    $('.publish-content-tip .collect-thing,.look-detail-opt-nar .collect-thing').click(function(e){
    		e.preventDefault();
    		$(this).find('.iconfont').addClass('already-collect');
    		$(this).find('.view-count').html(Number($(this).find('.view-count').html())+1);
    });
    
    //����
    $('.publish-content-tip .dian-zan-thing,.look-detail-opt-nar .dian-zan-thing').click(function(e){
    		e.preventDefault();
    		$(this).find('.iconfont').addClass('already-zan');
    		$(this).find('.zan-count').html(Number($(this).find('.zan-count').html())+1);
    });
    
    //��Ʒ����
    $('.goods-list-container .goods-item').click(function(e){
    		alert('��ת����Ʒ������棡');
    });
})
