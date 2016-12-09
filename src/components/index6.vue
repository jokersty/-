<template>
    <div class="a">
		<div class="register">
			<div class="register-logo"></div>
			<div class="register-head">即刻注册获得免费试听课程</div>
			<div class="register-body">
				<div class="register-body-text">
					成功注册为会员后，您将可以免费获得一次试听瑞德课程的机会并在光临瑞德启蒙教育中心后得到一份精美礼物
				</div>
				<div class="register-body-username">用户名：<input type="text" class="username-size"/></div>
				<div class="register-body-username register-body-username1">用户密码：<input type="text" class="username-size"/></div>
				<div class="register-body-username register-body-username1">重复密码：<input type="text" class="username-size"/></div>
				<div class="register-body-username register-body-username1">
					宝宝年龄：
					<select class="uername-baby">
						<option>年份</option>
						<option>2012年</option>
						<option>2013年</option>
						<option>2014年</option>
						<option>2015年</option>
					</select>
					<select class="uername-baby">
						<option>月份</option>
						<option>1月</option>
						<option>2月</option>
						<option>3月</option>
						<option>4月</option>
						<option>5月</option>
						<option>6月</option>
						<option>7月</option>
						<option>8月</option>
						<option>9月</option>
						<option>10月</option>
						<option>11月</option>
						<option>12月</option>
					</select>
					<select class="uername-baby">
						<option>日期</option>
						<option>1日</option>
						<option>2日</option>
						<option>3日</option>
						<option>4日</option>
					</select>
				</div>
				<div class="register-body-username register-body-username1">手机号码：<input type="text" class="username-size"/></div>
				<div class="register-body-submit">点击确认</div>
			</div>
			<div class="bg-bottom"></div>
		</div>
       <div><!--{{msg}}--></div><zdd>
            	
            </zdd>
    </div>
</template>
<script>

	import zdd from './common/zdd.vue';
    export default{
        data(){
            return{
                msg:'index6'
            }
        },
        components:{
        	zdd
        }
    }
</script>

<style scoped>
.a a{ color: #f00; }
.register{padding: 0.24rem 0 0.73rem 0.23rem; background: #f1f2f2; position: relative;}
.register-head{width:5.93rem; height:1.04rem; background: #443c3c; color:#fff; border-radius: 0.03rem; line-height: 1.04rem; padding-left:0.33rem; font-size:0.36rem;}
.register-logo{ position: absolute; width:2.06rem; height:2.01rem; right:0.1rem; top:0.11rem; background: url(images/zcyl.png) no-repeat; background-size:100% 100%;}
.register-body{width:5.93rem;border:0.01rem solid #d0d0d0; background: #fff; padding:0.14rem 0 0 0.13rem;}
.register-body-text{width:5.67rem; height:0.95rem; background: #f0f0f0; border-radius: 0.04rem; padding: 0.12rem 0 0 0.29rem; color:#666666; font-size:0.18rem; line-height: 0.32rem; margin-bottom: 0.23rem;}
.register-body-username{line-height: 0.56rem; padding-left:0.55rem;}
.register-body-username1{ padding-left:0.30rem;}
.username-size{width:3.71rem; height:0.39rem;}
.register-body-submit{width:4.9rem; height:0.63rem; background: #dc3128; border-radius: 0.03rem; line-height:0.63rem; text-align: center; color: #fff;
margin:1.13rem 0 0.38rem 0.37rem;}
.bg-bottom{  border-bottom: 0.09rem solid #443c3c; border-radius: 0.03rem; width:5.94rem; height:0;}
</style>