<template>
    <div class="a">
    	<img src="./images/mba.jpg"  class="mba"/>
    	<div class="header">成长指标</div>
    	<i class="line"></i>
    	<ul>
    		<li class="mba-li">两岁到两岁半的儿童如何运动？</li>
    		<li class="mba-li">一岁半到两岁的宝宝如何运动？</li>
    		<li class="mba-li">14-18个月的宝宝如何做运动？</li>
    		<li class="mba-li">10-14个月的宝宝如何做运动？</li>
    		<li class="mba-li">0-10个月的宝宝如何做运动</li>
    		<li class="mba-li">宝宝从小做运动有什么好处</li>
    	</ul>
    	<div class="header">智力开发</div>
    	<i class="line"></i>
    	<ul>
    		<li class="mba-li">如何提高孩子的记忆力？</li>
    		<li class="mba-li">如何提高孩子注意力</li>
    		<li class="mba-li">学习障碍之注意力障碍</li>
    		<li class="mba-li">学习障碍之空间知觉障碍</li>
    		<li class="mba-li">学习障碍之触觉障碍</li>
    		<li class="mba-li">什么是学习障碍？</li>
    	</ul>
    	<div class="header">智力开发</div>
    	<i class="line"></i>
    	<ul>
    		<li class="mba-li">如何提高孩子的记忆力？</li>
    		<li class="mba-li">如何提高孩子注意力</li>
    		<li class="mba-li">学习障碍之注意力障碍</li>
    		<li class="mba-li">学习障碍之空间知觉障碍</li>
    		<li class="mba-li">学习障碍之触觉障碍</li>
    		<li class="mba-li">什么是学习障碍？</li>
    	</ul>
    	<div class="header">智力开发</div>
    	<i class="line"></i>
    	<ul>
    		<li class="mba-li">如何提高孩子的记忆力？</li>
    		<li class="mba-li">如何提高孩子注意力</li>
    		<li class="mba-li">学习障碍之注意力障碍</li>
    		<li class="mba-li">学习障碍之空间知觉障碍</li>
    		<li class="mba-li">学习障碍之触觉障碍</li>
    		<li class="mba-li">什么是学习障碍？</li>
    	</ul>
    	<div class="header">智力开发</div>
    	<i class="line"></i>
    	<ul>
    		<li class="mba-li">如何提高孩子的记忆力？</li>
    		<li class="mba-li">如何提高孩子注意力</li>
    		<li class="mba-li">学习障碍之注意力障碍</li>
    		<li class="mba-li">学习障碍之空间知觉障碍</li>
    		<li class="mba-li">学习障碍之触觉障碍</li>
    		<li class="mba-li">什么是学习障碍？</li>
    	</ul>
       <div><!--{{msg}}--></div><zdd>
            	
            </zdd>
    </div>
</template>
<script>

	import zdd from './common/zdd.vue';
    export default{
        data(){
            return{
                msg:'index5'
            }
        },
        components:{
        	zdd
        }
    }
</script>

<style scoped>
.a a{ color: #f00; }
.mba{display:block; width:100%; height:1.83rem;}
.header{ padding-left: 0.1rem; height:0.67rem; background: url(./images/tel-bg.jpg) repeat; background-size: 100% 100%; color:#008dce; font-size:0.3rem; font-weight: bold; line-height: 0.67rem; color:#000;}
.line{display:block; width:100%; height:0.02rem; background: #00afd5; border-top:0.01rem solid #0b6aa6; border-bottom:0.01rem solid #0b6aa6;}
.mba-li{width:100%; height:0.66rem; background: #f1f2f2; border-bottom: 1px solid #d4d4d4; line-height: 0.66rem; text-align: center; margin-bottom: 1px;}
</style>