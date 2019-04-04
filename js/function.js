//警告框
modalAlert = function(str,$config){
	var s = $.extend({
			time: 2000, //提示时间长度
			close: false, //是否启用背景遮罩
			zindex: 2999
		},$config || {});
	var alertHtml = '<div class="modal-alert"><div class="modal-alert-main"></div></div>';
	if(!$('.modal-alert')[0]){
		$('body').append(alertHtml);
		$('.modal-alert').css('z-index', parseInt(s.zindex));
	}
	$('.modal-alert .modal-alert-main').html(str);
	//设置居中
	positionMiddle('.modal-alert');
	setTimeout(function(){
		$('.modal-alert').fadeOut(100,function(){
			$('.modal-alert').remove();
		});
	},s.time);
}

	//居中定位
function positionMiddle(dom) {
	var dl = $(document).scrollLeft(),
		dt = $(document).scrollTop(),
		ww = $(window).width(),
		wh = $(window).height(),
		ow = $(dom).width(),
		oh = $(dom).height(),
		left = (ww - ow) / 2 + dl,
		top = (oh < 4 * wh / 7 ? wh * 0.382 - oh / 2 : (wh - oh) / 2) + dt;
	$(dom).css({left:Math.max(left, dl) + 'px',top:Math.max(top, dt) + 'px'});             
	return true;
}

function getQueryVariable(variable){
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){return pair[1];}
	}
   return false;
}
//写cookies，一个小时过期 
function setCookie(name, value) { 
	var exp = new Date(); 
	exp.setTime(exp.getTime() + 60 * 60 * 1000); 
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/"; 
}
//读取cookies 
function getCookie(name) { 
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); 
	if (arr = document.cookie.match(reg)) 
		return unescape(arr[2]); 
	else 
		return null; 
}

function loadAddress(address){
	var html = `<p class="m-b-5"><i class="fa fa-map-marker fs-14" style="color:#0f5ccf;"></i>&nbsp;&nbsp;`+address.name+`&nbsp;&nbsp;&nbsp;`+address.tele+`</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;`+address.province+address.city+address.area+address.address+`</p>`;
	$('.J-address-box').html(html);
}

$(function(){

	$('.J-search-box').find('.close').on('click',function(){
		$(this).siblings('input').val('');
		$(this).hide();
	});

	$('.J-search-box').find('input').on('keyup',function(){
		if($(this).val() != ''){
			$('.J-search-box').find('.close').show();
		}else{
			$('.J-search-box').find('.close').hide();
		}
	});
	
	$('.J-nav-box').find('.item').on('click',function(){
		$(this).addClass('ac').siblings().removeClass('ac');
	});
	
	$('.J-cate-menu-box').find('a').on('click',function(){
		$(this).addClass('ac').parent().siblings().find('a').removeClass('ac');
	});

	
	$('.J-more-btn').on('click',function(){
		$(this).prev('.item-list-box').append($(this).prev('.item-list-box').html());
		return false;
	});

	$('.J-more-brand-btn').on('click',function(){
		var html = '<a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/29.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/27.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/28.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/6.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/29.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/27.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/28.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/6.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/29.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/27.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/28.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/6.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/29.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/27.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/28.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/6.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand" ><span class="element block oh"><img src="ad/29.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/27.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/28.jpg" width="100%"></span></span></a><a href="JavaScript:;" class="col-xs-3 block p-l-0 p-r-0 p-t-5 p-b-5"><span class="images-cut iblock brand"><span class="element block oh"><img src="ad/6.jpg" width="100%"></span></span></a>';
		$(this).prev('.index-brand-box').append(html);
		return false;
	});

	$('.J-number-box').find('span').on('click',function(){
		var num = $(this).siblings('input').val();
		var max = $(this).parents('.J-number-box').attr('data-max');
		max = max ? max : 999;
		num = num ? parseInt(num) : 0;
		if($(this).hasClass('plus')){
			num = num + 1;
		}else{
			num = num - 1;
		}
		num = num <= 0 ? 1 : num;
		num = num >= max ? max : num;
		$(this).siblings('input').val(num);
	});

	$('.J-layer-btn').click(function () {
		var $this = $(this);
		var id = $this.data('id');
		var msg = $this.attr('data-msg') ? $this.attr('data-msg') : '确认操作?';
		var btn1 = $this.attr('data-btn1') ? $this.attr('data-btn1') : '取消';
		var btn2 = $this.attr('data-btn2') ? $this.attr('data-btn2') : '确认';

		layer.open({
			type: 1,shade: 0.5,title: false, //不显示标题
			content: `<div class="modal-pop-box">
							<div class="content p-t-15 fs-16 tc">`+msg+`</div>
							<div class="foot clearfix">
								<a href="javascript:;" class="item btn btn-shallow radius-0 layui-layer-close pr">`+btn1+`</a>
								<a href="javascript:;" class="item btn btn-orange radius-0 J-do">`+btn2+`</a>
							</div>
						</div>`, //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
			success: function(){
				$('.J-do').off('click').on('click',function(){
					layer.closeAll();
					modalAlert('操作成功');
				});
			  }
		});
	});

	$('.J-submit-btn').on('click',function(){
		var $this = $(this);
		var msg = $this.attr('data-msg') ? $this.attr('data-msg') : '操作成功!';
		modalAlert(msg);
	});

});