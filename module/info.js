var info_tpl = `
<div>
	<div class="pos-fix-box">
		<div class="page-title-box">
		
			<div class="text">商品详情</div>
			<a href="tel:10086" class="search">
				<img src="images/m-phone.png" class="search-img">
			</a>
			<span @click="history.go(-1)"  class="size"><i class="fa fa-angle-left fa-lg"></i>&nbsp;返回</span>
		</div>
	</div>
	<div class="title-pro">
		商品信息
	</div>
	<div class="empty"></div>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 p-l-0 p-r-0 swiper-container index-swiper-container">
				<ul class="swiper-wrapper">
					<li class="swiper-slide"><a class="img" :style="'height:'+swiperHeight+'px;'" href="javascript:;" style="background-image:url('images/asset1.jpg');background-position:center "></a></li>
					<li class="swiper-slide"><a class="img" :style="'height:'+swiperHeight+'px;'" href="javascript:;" style="background-image:url('images/asset2.jpg');background-position:center "></a></li>
				</ul>
				<div class="swiper-pagination"></div>
			</div>
		</div>


		<div class="row bg-white item-detail-box">
			<div class="col-xs-12">
				<p class="price">￥<em>888</em></p>
				<p class="title">火线冲击设备商品信息火线冲击设备商品信息火线冲击设备商品信息火线冲击设备商品信息</p>
			</div>
			<div class="col-xs-6 desc">
				<span class="f-shallow">商家：</span>中国材料网
			</div>
			<div class="col-xs-6 desc tr">
				<span class="f-shallow">产品类型：</span>电子元器件
			</div>
		</div>
		<div class="row fs-12 lh-18 bg-white m-b-10">
			<div class="col-xs-3 p-r-0">
				<p class="b-t-1 f-shallow p-l-10 p-t-5">起定量</p>
				<p class="p-l-10 f-grey p-b-5 b-line">≥1套</p>
			</div>
			<div class="col-xs-4 tc p-l-0 p-r-0">
				<p class="b-t-1 f-shallow p-t-5">总供应</p>
				<p class="f-grey p-b-5 b-line">888套</p>
			</div>
			<div class="col-xs-5 p-l-0 tc">
				<p class="b-t-1 f-shallow p-t-5">所在地</p>
				<p class="f-grey p-b-5 b-line">浙江省杭州市余杭区</p>
			</div>
		</div>
		<div class="row bg-white fs-16">
			<div class="col-xs-12 pos-re">
				<div class="fl pc-50 tag-title tag-bd-rg" @click="showType(0)">
					<span :class="type==0?'':'default'">商品详情</span>
				</div>
				<span class="line"></span>
				<div class="fl pc-50 tag-title" @click="showType(1)">
					<span :class="type==1?'':'default'">商品参数</span>
				</div>
			</div>
		</div>
		<div class="row bg-white" :style="type==0?'':'display:none;'">
			<div class="col-xs-12 pd10">
				<div class="detail-thing">
					<span class="line left"></span>
					<span class="text">商品信息</span>
					<span class="line right"></span>
				</div>
			</div>
			<div class="col-xs-12 pd10">
				<img src="images/asset1.jpg" class="pc-100">
				<img src="images/asset2.jpg" class="pc-100">
				<img src="images/asset1.jpg" class="pc-100">
			</div>
		</div>
		<div class="row bg-white" :style="type==1?'':'display:none;'">

			<div class="col-xs-12 pd10">
				<div class="detail-thing">
					<span class="line left"></span>
					<span class="text">参数详情</span>
					<span class="line right"></span>
				</div>
				<table class="pro-det fs-14">
					<tr class="pro-det-tr">
						<td class="td-head">加工定制</td>
						<td class="td-foot">是</td>
					</tr>
					<tr class="pro-det-tr">
						<td class="td-head">品牌</td>
						<td class="td-foot">电询</td>
					</tr>
					<tr class="pro-det-tr">
						<td class="td-head">型号</td>
						<td class="td-foot">0001</td>
					</tr>
					<tr class="pro-det-tr">
						<td class="td-head">电源电压</td>
						<td class="td-foot">220v</td>
					</tr>
					<tr class="pro-det-tr">
						<td class="td-head">产品包装</td>
						<td class="td-foot">木框</td>
					</tr>
					<tr class="pro-det-tr">
						<td class="td-head">外形尺寸</td>
						<td class="td-foot">500*450*90</td>
					</tr>
					<tr class="pro-det-tr">
						<td class="td-head">重量</td>
						<td class="td-foot">50kg</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 tc fs-12 lh-18 p-t-10 p-b-10 f-shallow">
				<p>杭州大钻网络科技有限公司</p>
				<p>浙江省杭州市余杭区五常街道</p>
				<p>技术支持：<a class="bottom-address" href="http://www.cailiao.com">中国材料网</a></p>
			</div>
		</div>
	</div>
	
</div>`;

var page_info = {
	template: info_tpl,
	data() {
		return {
			type: 0,
			swiperHeight: 0
		};
	},
	mounted() {
		window.scrollTo(0, 0);
		var indexSwiper = new Swiper(".index-swiper-container", {
			autoplay: 1500,
			pagination: {
				el: ".swiper-pagination",
			},
			loop: false
		});
		this.swiperHeight = document.body.clientWidth * (3 / 5);
	},
	methods: {
		showType: function (type) {
			this.type = type;
		}
	}
};