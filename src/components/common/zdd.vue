<template>
    <div class="a">
    	<div class="tel">
    		<div class="consul"></div>
    		<router-link to="/address"><div class="address"></div></router-link>
    	</div>
    	<i class="line"></i>
    	<div class="version"><span>移动版</span></div>
    	<div class="bottom">瑞德启蒙教育© 2013 版权所有</div>
       <!--<router-link to="/">{{msg}}</router-link>-->
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'首页'
            }
        }
    }
</script>

<style scoped>
.a a{ color:#000;}
.tel{width:100%; height:0.67rem; background: url(../images/tel-bg.jpg) repeat; background-size: 100% 100%;}
.consul{width:1.57rem; height:0.39rem; background: url(../images/consul.jpg) no-repeat; background-size:100% 100%; float: left; margin:0.14rem 0 0 0.64rem;}
.address{width:2.11rem; height:0.42rem; background: url(../images/address.jpg) no-repeat; background-size:100% 100%; float:right; margin:0.13rem 0.47rem 0 0 ;}
.line{display:block; width:100%; height:0.02rem; background: #00afd5; border-top:0.01rem solid #0b6aa6; border-bottom:0.01rem solid #0b6aa6;}
.version{width:100%; height:0.49rem; background: #e6e6e6; text-align: center;line-height: 0.49rem; color:#747474; font-size:0.18rem;}
.bottom{width:100%; height:0.46rem; text-align: center;line-height: 0.46rem; color:#858585; font-size:0.18rem; }
</style>