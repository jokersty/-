<template>
    <div class="a">
    	<div class="abouts"><img class="abouts-img" src="./images/aboutus.jpg"/></div>
    	<div class="header">特色课程</div>
    	<i class="line"></i>
    	<div class="button">
    		<ul class="button-nav">
    			<router-link to="/class"><li class="button-nav-story">脑神经课程<i class="button-icon"/></i></li></router-link>
    			<router-link to="/class"><li class="button-nav-story">环球音乐之旅<i class="button-icon"/></i></li></router-link>
    			<router-link to="/class"><li class="button-nav-story">天才艺术<i class="button-icon"/></i></li></router-link>
    			<router-link to="/class"><li class="button-nav-story">瑞德英语<i class="button-icon"/></i></li></router-link>
    		</ul>
    	</div>
    	<div class="header">启蒙基础课程</div>
    	<i class="line"></i>
    	<div class="button">
    		<ul class="button-nav">
    			<router-link to="/class"><li class="button-nav-story">毛毛虫班<i class="button-icon"/></i></li></router-link>
    			<router-link to="/class"><li class="button-nav-story">小乌龟班<i class="button-icon"/></i></li></router-link>
    			<router-link to="/class"><li class="button-nav-story">小企鹅班<i class="button-icon"/></i></li></router-link>
    			<router-link to="/class"><li class="button-nav-story">小猴子班<i class="button-icon"/></i></li></router-link>
    			<router-link to="/class"><li class="button-nav-story">小袋鼠班<i class="button-icon"/></i></li></router-link>
    		</ul>
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
                msg:'index2'
            }
        },
        components:{
        	zdd
        }
    }
</script>

<style scoped>
.a a{ color: #f00; }
.abouts{width:100%; height:1.83rem; background: #0a9fdb;}
.abouts-img{width:100%; height:1.83rem; vertical-align: middle;}
.header{ width:100%; height:0.67rem; background: url(./images/tel-bg.jpg) repeat; background-size: 100% 100%; color:#008dce; font-size:0.3rem; font-weight: bold; text-align: center; line-height: 0.67rem;}
.button{width:100%; padding:0.47rem 0 0.7rem 0.34rem; background: #f1f2f2;}
.button-nav{}
.line{display:block; width:100%; height:0.02rem; background: #00afd5; border-top:0.01rem solid #0b6aa6; border-bottom:0.01rem solid #0b6aa6;}
.button-nav li{width:5.74rem; height:0.86rem; border-radius:0.04rem; background: #fff; border:1px solid #d4d4d4; line-height: 0.86rem; text-align: center; font-size:0.3rem; color:#3c3535;position: relative; margin-bottom: 0.03rem;}
.button-icon{display:block; background: url(./images/icon.png) no-repeat;width: 0.12rem; height: 0.2rem; background-size: 0.12rem 0.2rem;position: absolute; right:0.33rem; top:0.33rem;}
.button-nav li:hover{background: url(images/bg.png) no-repeat; background-size:5.74rem 0.86rem;  color:#fff;}
.button-nav li:hover .button-icon{ background: url(./images/icon2.png) no-repeat;width: 0.12rem; height: 0.2rem; background-size: 0.12rem 0.2rem;}
</style>