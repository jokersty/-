<template>
    <div class="a">
        <div class="swiper-container sliper01">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><img class="flash" src="./images/flash.jpg"/></div>
		        <div class="swiper-slide">Slide 2</div>
		        <div class="swiper-slide">Slide 3</div>
		        <div class="swiper-slide">Slide 4</div>
		    </div>
		    <div class="swiper-pagination swiper-button-white">
		    	<span class="swiper-button-white swiper-button-black-active"></span>
		    	<span class="swiper-button-white"></span>
		    	<span class="swiper-button-white"></span>
		    	<span class="swiper-button-white"></span>
		    </div>
		    <div class="icobg"></div>
		</div>
		<div class="content">
			<ul class="content-all clearfix">
				<li class="content-nav content-nav1">
					<router-link to="/index1">
						<img class="img1" src="./images/1.png"/>
						<p>瑞德品牌</p>
					</router-link>
				</li>
				<li class="content-nav content-nav2">
					<router-link to="/index2">
						<img class="img2" src="./images/2.png"/>
						<p>课程介绍</p>
					</router-link>
				</li>
				<li class="content-nav content-nav3">
					<router-link to="/index3">
						<img class="img3" src="./images/3.png"/>
						<p>活动资讯</p>
					</router-link>
				</li>
				<li class="content-nav content-nav4">
					<router-link to="/index5">
						<img class="img4" src="./images/4.png"/>
						<p>父母MBA</p>
					</router-link>
				</li>
				<li class="content-nav content-nav5">
					<router-link to="/index5">
						<img class="img5" src="./images/5.png"/>
						<p>新闻中心</p>
					</router-link>
				</li>
				<li class="content-nav content-nav6">
					<router-link to="/index6">
						<img class="img6" src="./images/6.png"/>
						<p>预约试听</p>
					</router-link>
				</li>
			</ul>
		</div>
    	<div><!--{{msg}}<br />-->
            <zdd>
            	
            </zdd>
       </div>
    	
    </div>
</template>

<script lang="babel">

	import zdd from './common/zdd.vue';

    export default{
        data(){
            return{
                msg:'index'
            }
        },
        components:{
        	zdd
        }
    }
    
</script>

//scoped表示局部使用
<style lang="less" scoped>
.a {
    a{color: #0f0;} 
}
.swiper-container{ height: 3.7rem; width:6.4rem;}
.flash{width:100%; height:3.7rem;}
.sliper01{position:relative;}
.icobg{position: absolute; width:100%; height:0.44rem; bottom: 0;filter:progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr='#99FFFFFF', endColorstr='#99FFFFFF');background:rgba(255,255,255,0.6); z-index:999;}
.swiper-pagination{margin-bottom: -0.15rem;}
.content{width:100%; height:4.77rem; background: #F1F2F2; border-top:1px solid #7f858b; overflow: hidden;}
.content-all{width:110%;}
.content-nav{float:left; width: 1.92rem; height:1.48rem; background: #0bbebb; border-radius: 0.03rem; margin:0.13rem 0.11rem 0.11rem 0.11rem; }
.content-nav1{ background: #0bbebb;}
.content-nav2{ background: #afd23a;}
.content-nav3{ background: #f48221;}
.content-nav4{ background: #de0000;}
.content-nav5{ background: #3eb7ee;}
.content-nav6{ background: #6eb943;}
.content-nav p{text-align: center; margin:0.05rem 0 0 -0.05rem; color: #fff;}
.content-nav .img1{display:block; width:0.65rem; height:0.74rem; margin: 0.3rem 0 0 0.58rem;}
.content-nav .img2{display:block; width:0.58rem; height:0.72rem; margin: 0.29rem 0 0 0.67rem;}
.content-nav .img3{display:block; width:0.84rem; height:0.76rem; margin: 0.29rem 0 0 0.55rem;}
.content-nav .img4{display:block; width:0.92rem; height:0.58rem; margin: 0.45rem 0 0 0.48rem;}
.content-nav .img5{display:block; width:0.65rem; height:0.66rem; margin: 0.41rem 0 0 0.63rem;}
.content-nav .img6{display:block; width:0.65rem; height:0.64rem; margin: 0.39rem 0 0 0.63rem;}










</style>