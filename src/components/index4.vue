<template>
    <div class="a">
    	<div class="header">特色活动</div>
    	<i class="line"></i>
    	<div class="activity">
    		<div class="activity-text">
    			<img class="activity-text-img" src="./images/acitiy.jpg"  />
    			<ul class="time">
			    	<li>活动时间: 2013.8.19 (11:00-12:00)</li>
			    	<li>活动对象: 7-12岁宝宝</li>
			    	<li>活动地点: 宝安瑞德启蒙中心教室</li>
	    		</ul>
	    		<router-link to="/index1">
		    		<div class="jion">
		    			报名参加
		    		</div>
	    		</router-link>
    		</div>
    	</div>
    	
    	<div class="header">VIP活动区</div>
    	<i class="line"></i>
    	<div class="activity">
    		<div class="activity-text">
    			<i class="vip"></i>
    			<img class="activity-text-img" src="./images/acitiy.jpg"  />
    			<ul class="time">
			    	<li>活动时间: 2013.8.19 (11:00-12:00)</li>
			    	<li>活动对象: 7-12岁宝宝</li>
			    	<li>活动地点: 宝安瑞德启蒙中心教室</li>
	    		</ul>
	    		<router-link to="/index1">
		    		<div class="jion">
		    			报名参加
		    		</div>
	    		</router-link>
    		</div>
    	</div>
    	
    	<div class="header">VIP活动区</div>
    	<i class="line"></i>
    	<div class="activity">
    		<div class="activity-text">
    			<i class="vip"></i>
    			<img class="activity-text-img" src="./images/acitiy.jpg"  />
    			<ul class="time">
			    	<li>活动时间: 2013.8.19 (11:00-12:00)</li>
			    	<li>活动对象: 7-12岁宝宝</li>
			    	<li>活动地点: 宝安瑞德启蒙中心教室</li>
	    		</ul>
	    		<router-link to="/index1">
		    		<div class="jion">
		    			报名参加
		    		</div>
	    		</router-link>
    		</div>
    	</div>
    	
    	<div class="header">VIP活动区</div>
    	<i class="line"></i>
    	<div class="activity">
    		<div class="activity-text">
    			<i class="vip"></i>
    			<img class="activity-text-img" src="./images/acitiy.jpg"  />
    			<ul class="time">
			    	<li>活动时间: 2013.8.19 (11:00-12:00)</li>
			    	<li>活动对象: 7-12岁宝宝</li>
			    	<li>活动地点: 宝安瑞德启蒙中心教室</li>
	    		</ul>
	    		<router-link to="/index1">
		    		<div class="jion">
		    			报名参加
		    		</div>
	    		</router-link>
    		</div>
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
                msg:'index4'
            }
        },
        components:{
        	zdd
        }
    }
</script>

<style scoped>
.a a{ color: #f00; }
.header{ padding-left: 0.1rem; height:0.67rem; background: url(./images/tel-bg.jpg) repeat; background-size: 100% 100%; color:#008dce; font-size:0.3rem; font-weight: bold; line-height: 0.67rem;}
.line{display:block; width:100%; height:0.02rem; background: #00afd5; border-top:0.01rem solid #0b6aa6; border-bottom:0.01rem solid #0b6aa6;}
.activity{background: #f1f2f2; padding:0.2rem 0 0.69rem 0.26rem;}
.activity-text{width:5.9rem; height:5.13rem; background:#fff ; border-radius: 0.05rem;padding-top:0.09rem; position: relative;}
.activity-text-img{display:block; width:5.76rem; height:2.78rem; margin: 0 0 0 0.07rem;}
.time{margin:0.09rem 0 0 0.28rem;}
.time li{line-height: 0.36rem;}
.jion{width:5.63rem; height:0.70rem; margin:0.22rem 0 0 0.14rem; background: #1eb9f6; border:0.01rem solid #f6f6f6; border-radius:0.05rem; line-height: 0.70rem; text-align: center; color:#fff;}
.vip{width:0.66rem; height:0.65rem; background: url(images/vip.png) no-repeat; background-size:100% 100%; position: absolute; left:0; top:0;}
</style>