var cate_tpl = `
<div>
	<div class="pos-fix-box">
		<div class="page-title-box b-b-1">
			<div class="col-xs-12">
				<div class="text">
					产品分类 
				</div>
				<a href="" class="search">
					<img src="images/m-phone.png" class="search-img">
				</a>
			</div>
		</div>
	</div>
	<div class="title-pro">
		产品分类<i class="fa fa-caret-down"></i>
	</div>
	<div class="container">
		<div class="row bg-white item-list-box m-b-10">
			<div class="col-xs-6 m-t-10" v-for="(item,index) in items">
				<router-link to="/info" class="item style1 block">
					<img :src="item" width="100%">
					<p class="price-box">￥<em>{{arr[index]}}</em></p>
					<p class="title">光端机厂家供应</p>
				</router-link>
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

</div>
`;

var page_cate = {
	template:cate_tpl,
	data(){
		return {
			items:['images/asset1.jpg','images/asset2.jpg','images/asset1.jpg','images/asset2.jpg','images/asset1.jpg','images/asset2.jpg','images/asset1.jpg','images/asset2.jpg'],
			arr:[100,200,300,400,500,600,700,800],
		};
	},
	mounted() {
		
	}
};