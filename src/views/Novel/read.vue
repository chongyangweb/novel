<template>
	<div class="novel">
		<van-nav-bar
		  title="标题"
		  :fixed="true"
		  left-text="返回"
		  right-text="按钮"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		/>

		<div class="novel_read_content" @click="onClick">
			  ">&nbsp;&nbsp;&nbsp;&nbsp;在王宝乐悲愤的昏过去时，真实世界的天空上，红色的热气球飞艇，速度极快，已临近了缥缈城的势力范围。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;只是此刻，在这飞艇的主阁内，一片嘈杂。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“这王宝乐，我丹道系要了！”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“都别和我战武系抢人，他是我的！”几乎所有的老师，一个个都脸红脖子粗的，时而拍桌子时而争吵，为王宝乐进入道院后的学系喧嚷不休。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;这一切都是缘于王宝乐的舍身为人，对他们的震撼太大，那血肉模糊的身躯，让他们不能不动容，而那一句句话语，更是好似雷霆一般轰入他们的心神，尤其是最后一句，更是让他们心中掀起剧烈的波澜！
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“生是道院的人，死是道院的魂！”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;这句话透出的英勇与忠诚，是道院以及各个学系最渴望获得的种子学生，他们岂能让给别人。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;在这相互的争夺里，只见一个身体削瘦，留着山羊胡的中年老师，眼看自己无法争夺到，于是红着眼一把取出怀里的身份玉卡，灵力涌入，大声狂吼。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“我法兵系，用五年才有一次的权限，内定王宝乐成为我法兵系的特招学子，你们谁敢和我抢！”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;他话语一出，顿时手中的玉卡光芒闪耀，刹那间水晶上王宝乐的名字后面，直接就多了法兵系三个字。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;这一幕让众人纷纷吃惊，要知道这权限太珍贵了，一般来说学子进入道院后，都是老师们审核欲进入自己学系之人是否通过，只有少部分学子，他们才会主动给出橄榄枝。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;可无论如何，这种选择都是双向的，唯独……每一个学系都有的，五年里只能用一次的权限，这权限的作用就是直接内定某个学子成为自己的学系之人，且附带近乎奢华的待遇以及资源，同时更有一些特权，远超同伴，近乎衣钵。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;也正因为这样，所以这种权限大都是送给一些背景特殊，又或者优秀到了极致的学子，无比珍贵。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;王宝乐虽优秀，可在其他人看来，动用这样的权限，还是难免迟疑，此刻不由得都苦笑摇头。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;看到其他同僚的表情，山羊胡觉得自己这一次实在是太对了，暗道以这王宝乐的心性，好好培养后，他对法兵系的忠心，必定达到死心塌地的程度。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“资质再好，也有可能背叛，唯有心性与忠诚，千金难换，关键时刻唯有这样的弟子，才会挺身而出，不枉栽培！！”想到这里，山羊胡顿时得意起来，又看向一旁始终皱着眉头，盯着王宝乐资料若有所思的老医师。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“掌院，我们法兵系都用了权限内定王宝乐，您可别偏心啊。”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“放心，他是你们的人了，只要你不会后悔就好。”老医师低头继续看着面前的档案，淡淡开口，对于缥缈道院而言，每一届考入其内的学子，他们都会有一份对方从小到大，极为详细的资料，此刻他望着资料里的一句话，目中渐渐锐利。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“掌院，你……”山羊胡闻言一愣，其他老师也都怔了一下。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“曾经减肥一个月，不吃不喝，疯狂运动，可体重却不减反增……这种正常人身上不可能的事情，在他这里居然也会出现。”老医师冷笑，又翻出了梦境迷阵内的各个学子的体征，目光落在了王宝乐的从进入考核后，体重的变化数据上。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“如果老夫没有判断错误，这王宝乐早就知道了这是虚假世界，知晓了考核，他在作弊！”老医师抬起头，斩钉截铁道。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“不可能吧……”山羊胡倒吸口气，捂着胸口，只觉得眼前有些发黑。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“是否作弊，测试一下就知道了。”老医师望着水晶画面内的王宝乐，右手抬起操控迷阵，骤然一挥。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;顿时，迷阵世界内，刚刚劫后余生的众人，还没等喜悦散去，突然的就有一声震天的咆哮，从他们前方的丛林里，如同风暴一般，直接席卷。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;一颗颗大树直接就被音浪摧毁，纷纷爆开时，大地也都震颤起来，一头身体足有十丈大小的巨熊，直接就从地面爬了出来，仰天狂吼。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;这巨熊身躯腐烂了大半，可目中却有鬼火，仿佛不死之身，在出现后更是散发出足以让所有人都心神震颤的威压，如同丛林的霸主，使得无数鸟兽，都瑟瑟发抖。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“这……这不可能，天啊，那是……古蛮鬼熊！”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;“能生撕古武第二层强者，与古武境大圆满不相上下的……古蛮鬼熊！！”
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;柳道斌身体瞬间发软，小白兔、杜敏以及其他人也都一个个目中露出极致的恐惧，哪怕红衣少年，也都在这一瞬脸色突变。
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;更为震慑人心的，是那鬼熊在咆哮后，竟直奔众人而来，每一步落下，大都都在震动，气势滔天。
		</div>
		
		<!-- <van-tabbar v-model="active">
		  <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
		  <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
		  <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
		  <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
		</van-tabbar> -->
	</div>
</template>

<style>
</style>


<script>
	export default{
		methods:{
			onClickLeft:function(){},
			onClickRight:function(){},
			onClick:function(e){
				var screenY = e.view.innerHeight;
				var screenX = e.view.innerWidth;
				if(e.x > (screenX/2-screenX*0.2) && e.x < (screenX/2+screenX*0.2) && e.y > (screenY/2-screenY*0.4) && e.y < (screenY/2+screenY*0.4)){
					console.log(123);
				}
				// console.log(e);
			}
		}
	}
</script>