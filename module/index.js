var index_tpl = `
<div>
	<div class="pos-fix-box">
		<div class="page-title-box">
			<a href="tel:10086" class="search">
				<img src="images/m-phone.png" class="search-img">
			</a>
			<div class="text">
				大钻网络科技
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 p-l-0 p-r-0 swiper-container index-swiper-container">
				<ul class="swiper-wrapper">
					<li class="swiper-slide"><a class="img" :style="'height:'+swiperHeight+'px;'" href="javascript:;" style="background-image:url('images/asset3.jpg')"></a></li>
					<li class="swiper-slide"><a class="img" :style="'height:'+swiperHeight+'px;'" href="javascript:;" style="background-image:url('images/asset3.jpg')"></a></li>
				</ul>
				<div class="swiper-pagination"></div>
			</div>
		</div>
		<div class="row bg-white ">
			<div class="col-xs-12">
				<div class="index-header-box m-t-5">
					<span class="box">
						<p class="name">公司介绍</p>
						<p class="text">Introduce</p>
					</span>
				</div>
			</div>
		</div>
		<div class="row bg-white p-b-10">
			<div class="col-xs-12 lh-18 m-t-5">
				<div class="p-l-5 p-r-5 f-grey b-b-1 p-b-5">
					杭州大钻网络科技有限公司是一家专业从事互联网信息服务、电子商务、专业搜索引擎和企业应用软件开发的科技企业，目前已发展成为国内B2B行业专业的垂直专业网站开发商。公司创建并运营中国材料网( www.cailiao.com )、中国树苗网( www.shumiao.com )等多个国内外知名的专业电子商务网站。
				</div>
			</div>
		</div>
		<div class="row bg-white tc p-b-10 fs-13">
			<a href="" class="col-xs-4">
				<span class="valign-middle p-purple">企业介绍</span>
			</a>
			<a href="" class="col-xs-4">
				<span class="valign-middle p-purple">电话咨询</span>
			</a>
			<a href="" class="col-xs-4">
				<span class="valign-middle p-purple">给我留言</span>
			</a>
		</div>
		<div class="row">
			<div class="col-xs-12 col-xs-new m-t-7 m-b-5">
				<div class="index-header-box style2">
					<span class="box">
						<p class="name">公司宗旨</p>
						<p class="text">Our advantages</p>
						<span class="line"></span>
					</span>
				</div>
			</div>
		</div>

		<div class="row row-four bg-white">
			<div class="row-col">
				<div class="row-col-box">
					<div class="icon-box"><img src="images/icon-2.png" class="icon"></div>
					<div class="out-box">
					<p class="name">优质制造</p>
					<p class="desc">每一道精心的制作过程只为带给优质的体验</p>
				</div>
				</div>
				<div class="row-col-box box-left">
					<div class="icon-box"><img src="images/icon-3.png" class="icon"></div>
					<div class="out-box">
					<p class="name">品质保证</p>
					<p class="desc">供应优质产品,保证产品质量,反对不合格产品</p>
				</div>
				</div>
			</div>
			
			<div class="row-col">
				<div class="row-col-box box-top">
					<div class="icon-box"><img src="images/icon-4.png" class="icon"></div>
					<div class="out-box">
					<p class="name">品质服务</p>
					<p class="desc">坚持“客户最大”的准则提供贴心服务</p>
				</div>
				</div>
				<div class="row-col-box box-left box-top">
					<div class="icon-box"><img src="images/icon-1.png" class="icon"></div>
					<div class="out-box">
					<p class="name">优质售后</p>
					<p class="desc">贴心的售后客服，为您一一解答疑难杂惑</p>
				</div>
				</div>
			</div>
		
		</div>
		<div class="row bg-white">
			<div class="col-xs-12 m-t-5 m-b-5">
				<div class="index-header-box">
					<span class="box">
						<p class="name">商品展示</p>
						<p class="text">Boutique</p>
					</span>
				</div>
			</div>
		</div>
		<div class="row bg-white item-list-box">
			<div class="col-xs-6 m-t-10" v-for="(item,index) in items">
				<router-link to="/info" class="item style1 block">
					<div class="box-img"><img :src="item" width="100%"></div>
					<p class="price-box price-box-color">￥<em>{{arr[index]}}</em></p>
					<p class="title">光端机厂家供应</p>
				</router-link>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 tc fs-12 lh-18 p-t-10 p-b-10 f-shallow">
				<p>杭州大钻网络科技有限公司</p>
				<p>浙江省杭州市余杭区五常街道</p>
				<p>技术支持：<a class="bottom-address" href="http://www.cailiao.com">中国材料网</a></p>
				<p>友情链接：<a class="bottom-address" href="http://www.baidu.com">大钻网络</a></p>
			</div>
		</div>
	</div>
</div>`;

var page_index = {
	template: index_tpl,
	data() {
		return {
			items: ['images/pro-1.png', 'images/pro-2.png', 'images/asset1.jpg', 'images/asset2.jpg', 'images/pro-1.png', 'images/pro-2.png'],
			arr: [100, 200, 300, 400, 500, 600, 700, 800],
			swiperHeight: 0
		};
	},
	mounted() {
		var indexSwiper = new Swiper('.index-swiper-container', {
			autoplay: 1500, //可选选项，自动滑动
			pagination: {
				el: '.swiper-pagination',
			},
			loop: false,
		});
		this.swiperHeight = document.body.clientWidth * (2 / 5);

	}
};