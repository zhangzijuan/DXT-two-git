$(function(){

    var buyNum = 1;

    //商品图片轮播
    new Swiper ('.goods-pics-container .swiper-container', {
    		noSwiping : true,
        direction: 'horizontal',
        loop: true,
        speed:300,
        autoplay:3000,
        preventClicks:false,
        autoplayDisableOnInteraction:false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        //分页器样式
        paginationBulletRender: function (swiper, index, className) {
             // console.log（className);
              return '<span class="' + className + '"></span>';
        }
    });

    //商品评价效果渲染
    new Swiper ('.goods-comment-content-container .swiper-container', {
        direction: 'horizontal',
        speed:300,
        slidesPerView : 1.3,
        spaceBetween:5,
        autoplayDisableOnInteraction:false
    });
	
    //页面滚动，显示页面导航条
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

    //页面导航定位事件
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

    //查看商品视频事件，跳转商品视频列表
    $('.goods-video').click(function(e){
        alert('查看商品视频时间，跳转商品视频列表');
    });

    //查看店铺详情界面
    $('.goods-goto-store').click(function(e){
        alert('查看店铺详情界面');
    });

    //查看商品所有的评价列表
    $('.view-all-comment').click(function(e){
        alert('查看商品所有的评价列表');
    });

    //查看商品所有的笔记列表
    $('.view-all-notes').click(function(e){
        alert('查看商品所有的笔记列表');
    });

    //查看某个商品笔记详情界面
    $('.goods-note-item').click(function(e){
        alert('查看某个商品笔记详情界面');
    });

    //图文介绍与商品参数tabBar切换事件
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

    //回至页面顶部
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

    //加入购物车
    $('.join-cart').click(function(e){
        alert('加入购物车啦！');
    });

    //立即购买
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

    //购买数量增减
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

    //选择商品各种参数类型
    $('.param-cate').click(function(e){
        $(this).siblings('span').removeClass('selected');
        $(this).addClass('selected');
    });

    //商品评论事件
    $('.goods-comment-icon').click(function(e){
        alert('商品评论');
    });

    //收藏商品事件
    $('.goods-collect-icon').click(function(e){
        $(this).find('.iconfont').addClass('collected');
        alert('收藏商品成功！');
    })

    //立即下单，跳转至确认订单界面
    $('.go-place-order').click(function(e){
        alert('立即下单，跳转至确认订单界面');
    });
    
    //选择收货地址
    $('.get-goods-address').click(function(e){
    		alert('跳转至选择收货地址界面');
    });
    
    //商品图片视频大图预览
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
	
	//关闭商品图片视频大图预览窗口
	$('.goods-big-preview').click(function(e){
		$('.goods-big-preview-container').hide();
		$("body").off("touchmove");
	});
})