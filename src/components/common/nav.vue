<template>
    <div class="nav">
    	<div class="top clearfix">
    		<div class="top-ico">
    			<div class="top-nav">
    				<ul>
    					<li><img src="./../images/1.1.jpg" /></li>
    				</ul>
    			</div>
    		</div>
    		<div class="top-text"></div>
    		<div class="top-tel"></div>
    	</div>
    	
       <!--<router-link :to="nav.url" v-for="nav in navJson">{{nav.name}}</router-link>-->
       
    </div>
</template>
<script>
    export default{
        data(){
            return{
                navJson:[
                    {
                        url:"/",
                        name:"首页"
                    },
                    {
                        url:"/index1",
                        name:"一一"
                    },
                    {
                        url:"/index2",
                        name:"二二"
                    },
                    {
                        url:"/index3",
                        name:"三三"
                    },
                    {
                        url:"/index4",
                        name:"四四"
                    },
                    {
                        url:"/index5",
                        name:"五五"
                    },
                    {
                        url:"/class",
                        name:"六六"
                    },
                    {
                        url:"/address",
                        name:"七七"
                    }
                ]
            }
        }
    }
    
</script>
<style>
.top{width:100%; height:0.84rem; background:url(../images/top-bg.jpg) no-repeat; background-size:100% 0.84rem;}
.top-ico{width:0.68rem; height:0.55rem; background: url(../images/top-ico.jpg) no-repeat 0.33rem 0.3rem; background-size:0.34rem 0.25rem; float: left;}
.top-text{width:3.58rem; height:0.36rem; background: url(../images/top-text.png) no-repeat; background-size:3.58rem 0.36rem; float: left; margin:0.24rem 0 0 0.56rem;}
.top-tel{width:0.44rem; height:0.44rem; background: url(../images/top-tel.jpg) no-repeat; float: right; margin: 0.19rem 0.21rem 0 0; background-size:0.44rem 0.44rem;}
.swiper-container{ height: 3.7rem; width:6.4rem;}
.flash{width:100%; height:3.7rem;}
.top-nav{display: none;}
</style>






























