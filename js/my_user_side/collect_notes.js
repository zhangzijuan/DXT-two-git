$(function(){
	//我的-收藏单导航事件，默认笔记active
	$('.collect-nav-bar span').click(function(e){
		$(this).siblings('span').removeClass('active');
		$(this).addClass('active');
		if($(this).hasClass('collect-notes')){
			$('.collect-notes-content').show();
		}
	});
	
	//查看笔记详情事件
	$('.note-item').click(function(e){
		alert('跳转查看笔记详情界面！');
	});
	
	
	//点击编辑按钮
	var editCollectedNote = function(){
		$('.collect-notes-content .note-item').find('.edit-icon').show();
		$('.notes-edit-opt-nar').show();
		$('.collect-notes-content').css({marginBottom:'3.5rem'});
		//编辑模式下，单个笔记点击事件
		if($('.collect-notes-content .note-item').find('.edit-icon').length > 0){
			$('.note-item').unbind("click");
			$('.note-item').click(function(e){
				$(this).find('.edit-icon').addClass('selected');
			})
		}
	}
	
	//取消编辑事件
	var cancleCollectedNote = function(){
		$('.collect-notes-content .note-item').find('.edit-icon').hide();
		$('.notes-edit-opt-nar').hide();
		$('.collect-notes-content').css({marginBottom:'0'})
		$('.note-item').unbind("click");
		//查看笔记详情事件
		$('.note-item').click(function(e){
			alert('跳转查看笔记详情界面！');
		});
	}
	
	//模拟编辑和取消编辑事件，实际开发需删除
	setTimeout(function(){
		editCollectedNote();
	},3000)

	setTimeout(function(){
		cancleCollectedNote();
	},8000)
	
	//批量删除收藏的笔记
	$('.notes-edit-opt-nar').click(function(e){
		alert('批量删除收藏的笔记!')
	})
	
})
