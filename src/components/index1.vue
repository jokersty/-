<template>
    <div class="a">
    	<div class="abouts"><img class="abouts-img" src="./images/aboutus.jpg"/></div>
    	<div class="button">
    		<ul class="button-nav">
    			<router-link to="/index5"><li class="button-nav-story">品牌故事<i class="button-icon"/></i></li></router-link>
    			<router-link to="/index5"><li class="button-nav-story">品牌历史<i class="button-icon"/></i></li></router-link>
    			<router-link to="/index5"><li class="button-nav-story">师资团队<i class="button-icon"/></i></li></router-link>
    			<router-link to="/index5"><li class="button-nav-story">中心掠影<i class="button-icon"/></i></li></router-link>
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
                msg:'index1'
            }
        },
        components:{
        	zdd
        }
    }
</script>

<style scoped>
.a a{ color: #f00;}
.abouts{width:100%; height:1.83rem; background: #0a9fdb;}
.abouts-img{width:100%; height:1.83rem; vertical-align: middle;}
.button{width:100%; padding:0.47rem 0 2.3rem 0.34rem; background: #f1f2f2;}
.button-nav{}
.button-nav li{width:5.74rem; height:0.86rem; border-radius:0.04rem; background: #fff; border:1px solid #d4d4d4; line-height: 0.86rem; text-align: center; font-size:0.3rem; color:#3c3535;position: relative; margin-bottom: 0.03rem;}
.button-icon{display:block; background: url(./images/icon.png) no-repeat;width: 0.12rem; height: 0.2rem; background-size: 0.12rem 0.2rem;position: absolute; right:0.33rem; top:0.33rem;}
.button-nav li:hover{background: url(images/bg.png) no-repeat; background-size:5.74rem 0.86rem;  color:#fff;}
.button-nav li:hover .button-icon{ background: url(./images/icon2.png) no-repeat;width: 0.12rem; height: 0.2rem; background-size: 0.12rem 0.2rem;}
</style>