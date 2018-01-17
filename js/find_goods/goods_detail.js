$(function(){

    var buyNum = 1;

    //��ƷͼƬ�ֲ�
    new Swiper ('.goods-pics-container .swiper-container', {
    		noSwiping : true,
        direction: 'horizontal',
        loop: true,
        speed:300,
        autoplay:3000,
        preventClicks:false,
        autoplayDisableOnInteraction:false,
        // �����Ҫ��ҳ��
        pagination: '.swiper-pagination',
        //��ҳ����ʽ
        paginationBulletRender: function (swiper, index, className) {
             // console.log��className);
              return '<span class="' + className + '"></span>';
        }
    });

    //��Ʒ����Ч����Ⱦ
    new Swiper ('.goods-comment-content-container .swiper-container', {
        direction: 'horizontal',
        speed:300,
        slidesPerView : 1.3,
        spaceBetween:5,
        autoplayDisableOnInteraction:false
    });
	
    //ҳ���������ʾҳ�浼����
    $(window).on('scroll', function (e) {
        if($(this).scrollTop() > 15 && $(this).scrollTop() < 1300){
            $(".back-to-top").fadeOut(1000);
            if($('.goods-detail-hearder-bar').is(":hidden")){
            		$('.goods-detail-hearder-bar').fadeIn("slow",function(){
            			var hearderBarHeight = $('.goods-detail-hearder-bar').height();
                    $('.goods-detail-container').css({'marginTop':hearderBarHeight});
            		}); 
            }
            
        }else if($(this).scrollTop() >= 1300){
            $(".back-to-top").fadeIn(1000);
        }else {
            $(".back-to-top").fadeOut(1000);
            if(!$('.goods-detail-hearder-bar').is(":hidden")){
	            $('.goods-detail-hearder-bar').fadeOut("slow",function(){
	        			$('.goods-detail-container').css({'marginTop':0});
	                $(window).scrollTop(0);
	        		});
        		}
        }
    });

    //ҳ�浼����λ�¼�
    $('.hearder-tab-bar span').click(function(e){
        var height = 0;
        $(this).siblings('span').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('goods-base-bar')){

        }else if($(this).hasClass('goods-comments-bar')){
            height = $('.goods-base-target').height();

        }else if($(this).hasClass('goods-detail-bar')){
            height = $('.goods-base-target').height()+
                $('.goods-comment-target').height();
            var selfHeight = $('.goods-detail-target').height();
            if(height > selfHeight){
                $('.goods-detail-target').css({'paddingBottom':(height-selfHeight)});
            }
        }
        $(window).scrollTop(height);
    });

    //�鿴��Ʒ��Ƶ�¼�����ת��Ʒ��Ƶ�б�
    $('.goods-video').click(function(e){
        alert('�鿴��Ʒ��Ƶʱ�䣬��ת��Ʒ��Ƶ�б�');
    });

    //�鿴�����������
    $('.goods-goto-store').click(function(e){
        alert('�鿴�����������');
    });

    //�鿴��Ʒ���е������б�
    $('.view-all-comment').click(function(e){
        alert('�鿴��Ʒ���е������б�');
    });

    //�鿴��Ʒ���еıʼ��б�
    $('.view-all-notes').click(function(e){
        alert('�鿴��Ʒ���еıʼ��б�');
    });

    //�鿴ĳ����Ʒ�ʼ��������
    $('.goods-note-item').click(function(e){
        alert('�鿴ĳ����Ʒ�ʼ��������');
    });

    //ͼ�Ľ�������Ʒ����tabBar�л��¼�
    $('.goods-tab-bar span').click(function(){
        if(!$(this).hasClass('active')){
            $(this).siblings('span').removeClass('active');
            $(this).addClass('active');
            if($(this).hasClass('pic-word-attr')){
                $('.goods-params-content').hide();
                $('.pic-word-attr-content').show(); 
            }else if($(this).hasClass('goods-params')){
                $('.pic-word-attr-content').hide();
                $('.goods-params-content').show();
            }
        }
    });

    //����ҳ�涥��
    $('.back-to-top').click(function(e){
        $('body,html').animate({scrollTop:0},1000,function(){
            if(!$('.goods-base-bar').hasClass('active')){
                $('.goods-base-bar').siblings('span').removeClass('active');
                $('.goods-base-bar').addClass('active');
            }
            $('.goods-detail-hearder-bar').fadeOut("slow");
            $('.goods-detail-container').css({'marginTop':0});
        });
    });

    //���빺�ﳵ
    $('.join-cart').click(function(e){
        alert('���빺�ﳵ����');
    });

    //��������
    $('.buy-goods,.user-select-params').click(function(e){
        $('.backdrop').show();
        $('.place-order-container').show();
        $('.goods-detail-hearder-bar').css({'zIndex':'997'});
        $("body").on("touchmove",function(event){
            event.preventDefault;
        }, false);
    });

    $('.backdrop').click(function(e){
        $('.place-order-container').hide();
        $('.backdrop').hide();
        $('.goods-detail-hearder-bar').css({'zIndex':'1030'});
        $("body").off("touchmove");
    });

    //������������
    $('.buy-goods-num .iconfont').click(function(e){
        if($(this).hasClass('icon-jianshao')){
            if(buyNum > 1){
                buyNum -= 1;
                $('.buy-num').html(buyNum);
            }
        }else if($(this).hasClass('icon-jia2')){
            buyNum += 1;
            $('.buy-num').html(buyNum);
        }
    });

    //ѡ����Ʒ���ֲ�������
    $('.param-cate').click(function(e){
        $(this).siblings('span').removeClass('selected');
        $(this).addClass('selected');
    });

    //��Ʒ�����¼�
    $('.goods-comment-icon').click(function(e){
        alert('��Ʒ����');
    });

    //�ղ���Ʒ�¼�
    $('.goods-collect-icon').click(function(e){
        $(this).find('.iconfont').addClass('collected');
        alert('�ղ���Ʒ�ɹ���');
    })

    //�����µ�����ת��ȷ�϶�������
    $('.go-place-order').click(function(e){
        alert('�����µ�����ת��ȷ�϶�������');
    });
    
    //ѡ���ջ���ַ
    $('.get-goods-address').click(function(e){
    		alert('��ת��ѡ���ջ���ַ����');
    });
    
    //��ƷͼƬ��Ƶ��ͼԤ��
    $('.goods-pics-container').find('.swiper-slide').click(function(e){
    		var total = $(this).attr('total');
    		var currentIndex = Number($(this).attr('item-index'));
    		var previewCont = $('.goods-pics-container').html();
    		$('.goods-big-preview-container').show();
    		$('.preview-nav').html(currentIndex+1+"/"+total);
    		var previewSwiper = new Swiper ('.preview-content .swiper-container', {
	        direction: 'horizontal',
	        loop: false,
	        preventClicks:false,
	        autoplayDisableOnInteraction:false,
	        initialSlide:currentIndex,
	        paginationHide:true,
	        onSlideChangeEnd: function(swiper){
			      $('.preview-nav').html(swiper.activeIndex+1+"/"+total);
			}
	    });
    		$("body").on("touchmove",function(event){
            event.preventDefault;
        }, false);
    });
	
	//�ر���ƷͼƬ��Ƶ��ͼԤ������
	$('.goods-big-preview').click(function(e){
		$('.goods-big-preview-container').hide();
		$("body").off("touchmove");
	});
})