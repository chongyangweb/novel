<template>
	<div>
		<div class="novel_index_topnav">
			<van-row>
			  <van-col span="8">
				<div class="novel_index_logo">
					青梧小說
				</div>
			  </van-col>
			  <van-col span="1"></van-col>
			  <van-col span="3"><router-link to="/">书架</router-link></van-col>
			  <van-col span="3"><router-link to="/">历史</router-link></van-col>
			  <van-col span="1"></van-col>
			  <van-col span="5"></van-col>
			  <van-col span="3">
			  	<div class="novel_index_topnav_right">
			  		<router-link to="/"><van-icon name="search" /></router-link>
			  	</div>
			  </van-col>
			</van-row>
		</div>

		<!-- 内容塊 -->
		<div class="novel_index_main">
			<!-- 广告推送 -->
			<div class="novel_index_gg">&nbsp;</div>

			<!-- 书架 -->
			<van-pull-refresh v-model="isLoading" >
				<div class="book_bookshelf">
					<ul>
						<li>
							<dl>
								<dt><img src="https://bookcover.yuewen.com/qdbimg/349573/1012015699/150"></dt>
								<dd class="book_name">房产大玩家</dd>
								<!-- <dd class="book_anthor">作者：大家姐</dd> -->
								<dd class="book_new">12小时前:连载至933.价值600万的监护权！</dd>
								<dd class="book_x">&nbsp;</dd>
							</dl>
						</li>

						<li>
							<dl>
								<dt><img src="https://bookcover.yuewen.com/qdbimg/349573/1012015699/150"></dt>
								<dd class="book_name">房产大玩家</dd>
								<!-- <dd class="book_anthor">作者：大家姐</dd> -->
								<dd class="book_new">12小时前:连载至933.价值600万的监护权！</dd>
								<dd class="book_x">&nbsp;</dd>
							</dl>
						</li>

						<li>
							<dl>
								<dt><img src="https://bookcover.yuewen.com/qdbimg/349573/1012015699/150"></dt>
								<dd class="book_name">房产大玩家</dd>
								<!-- <dd class="book_anthor">作者：大家姐</dd> -->
								<dd class="book_new">12小时前:连载至933.价值600万的监护权！</dd>
								<dd class="book_x">&nbsp;</dd>
							</dl>
						</li>

						<li>
							<dl>
								<dt><img src="https://bookcover.yuewen.com/qdbimg/349573/1012015699/150"></dt>
								<dd class="book_name">房产大玩家</dd>
								<!-- <dd class="book_anthor">作者：大家姐</dd> -->
								<dd class="book_new">12小时前:连载至933.价值600万的监护权！</dd>
								<dd class="book_x">&nbsp;</dd>
							</dl>
						</li>

						<li>
							<dl>
								<dt><img src="https://bookcover.yuewen.com/qdbimg/349573/1012015699/150"></dt>
								<dd class="book_name">房产大玩家</dd>
								<!-- <dd class="book_anthor">作者：大家姐</dd> -->
								<dd class="book_new">12小时前:连载至933.价值600万的监护权！</dd>
								<dd class="book_x">&nbsp;</dd>
							</dl>
						</li>

						<li>
							<dl>
								<dt><img src="https://bookcover.yuewen.com/qdbimg/349573/1012015699/150"></dt>
								<dd class="book_name">房产大玩家</dd>
								<!-- <dd class="book_anthor">作者：大家姐</dd> -->
								<dd class="book_new">12小时前:连载至933.价值600万的监护权！</dd>
								<dd class="book_x">&nbsp;</dd>
							</dl>
						</li>

						<li>
							<dl>
								<dt><img src="https://bookcover.yuewen.com/qdbimg/349573/1012015699/150"></dt>
								<dd class="book_name">房产大玩家</dd>
								<!-- <dd class="book_anthor">作者：大家姐</dd> -->
								<dd class="book_new">12小时前:连载至933.价值600万的监护权！</dd>
								<dd class="book_x">&nbsp;</dd>
							</dl>
						</li>

						<li>
							<dl>
								<dt><img src="https://bookcover.yuewen.com/qdbimg/349573/1012015699/150"></dt>
								<dd class="book_name">房产大玩家</dd>
								<!-- <dd class="book_anthor">作者：大家姐</dd> -->
								<dd class="book_new">12小时前:连载至933.价值600万的监护权！</dd>
							</dl>
						</li>
					</ul>
				</div>
			</van-pull-refresh>
		</div>

		<div class="novel_index_tabbar">
			<van-tabbar active-color="#ec424b">
			    <van-tabbar-item icon="bookmark-o">书架</van-tabbar-item>
			    <van-tabbar-item icon="diamond-o" dot>精选</van-tabbar-item>
			    <van-tabbar-item icon="eye-o">发现</van-tabbar-item>
			    <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
			</van-tabbar>
		</div>
		
	</div>
</template>

<script>
export default{
	data(){
		return{
			loading:false,
			finished:true,
			isLoading:true,
		}
	},
	methods:{

	},
	mounted(){

	}
};

</script>

<style>
.novel_index_topnav{background: #ec424b;height: 40px;left:0;top:0;position: fixed;width: 100%;z-index: 99;}
.novel_index_topnav a{color:#ffe8dd;font-size: 12px;float: left;line-height: 40px;text-decoration: none;display: block;margin-left: 25%;}
.novel_index_topnav a:hover{color:#fff;text-decoration: none;}
.novel_index_logo{color:#fff;line-height: 40px;margin-left: 8%;}
.novel_index_topnav_right a{color:#fff;line-height: 48px;font-size: 16px;}
.novel_index_gg{height: 5.5rem;background: #efefef;}
.book_bookshelf ul li{padding: 0px 1rem;}
.book_bookshelf ul li dl{margin: 1rem 0 0 0;}
.book_bookshelf ul li dl dt{height: 3.5rem;float: left;margin-right: 1rem;}
.book_bookshelf ul li dl dt img{height: 3.5rem;}
.book_bookshelf ul li dl dd{text-align: left;}
.book_bookshelf ul li dl dd.book_name{font-size:1rem;color:#000;padding-top: 0.4rem;}
.book_bookshelf ul li dl dd.book_new{overflow: hidden;height: 1.2rem;color:#999;font-size:12px;}
.book_bookshelf ul li dl{border-bottom: 1px solid #efefef;}
.book_bookshelf ul li:last-child dl{border-bottom:none;}

.novel_index_main{margin-top: 40px;margin-bottom: 55px;}
</style>