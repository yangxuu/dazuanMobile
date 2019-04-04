var submit_tpl = `<div>
	<div class="pos-fix-box">
		<div class="page-title-box b-b-1">
			<a href="" class="search">
				<img src="images/m-phone.png" class="search-img">
			</a>
			<div class="text">
				在线咨询
			</div>
		</div>
	</div>
	<div class="put-word">发布您的留言。</div>

	<div class="container global-form-box">
		<form method="post" action="">
			<div class="row ipt-name">您的姓名</div>
			<div class="row ipt-box">
				<input class="input-text" v-model="name" type="text" name="" placeholder="请输入姓名" >
			</div>

			<div class="row ipt-name">联系方式</div>
			<div class="row ipt-box">
				<input class="input-text" v-model="phone" type="text" name="" placeholder="请输入联系方式" >
			</div>
			<div class="row ipt-name">留言主题</div>
			<div class="row ipt-box">
				<input class="input-text" v-model="theme" type="text" name="" placeholder="请输入留言主题" >
			</div>
			<div class="row ipt-name">留言内容</div>
			<div class="row ipt-box">
				<textarea name="" v-model="content" placeholder="请输入留言内容" class="input-area pc-100 bd-bottom" rows="3"></textarea>
			</div>
			<div class="row m-t-88 submit-height">
				<div class="col-xs-12">
					<a class="btn btn-purple btn-lg pc-100" @click="click">提交</a>
				</div>
				<div class="col-xs-12 m-t-40 f-shallow fs-13 tc lh-18 p-t-10 p-b-10">
					杭州大钻网络科技有限公司<br>浙江省杭州市余杭区五常街道<br>技术支持：<a class="bottom-address" href="http://www.cailiao.com">中国材料网</a>
				</div>
			</div>
		</form>

	</div>
</div>`;

var page_submit = {
	template:submit_tpl,
	data(){
		return {
			name:"",
			phone:"",
			theme:"",
			content:"",
			arr:[]
		};
	},
	mounted() {
		
	},
	methods:{
		click(){
			// arr存储用户提交的数据
			this.arr.push({
				name:this.name,
				phone:this.phone,
				theme:this.theme,
				content:this.content
			}),
			console.log(this.arr)
			// 点击提交后清空
			this.name="";
			this.phone="";
			this.theme="";
			this.content="";
			this.arr=[];

		}
	}
};

