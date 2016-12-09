<template>
    <div class="a">
    	<div class="header">中心位置查询</div>
    	<i class="line"></i>
    	<div class="find">
    		<select class="find-select">
    			<option>请选择</option>
	    		<option>1</option>
	    		<option>2</option>
	    		<option>3</option>
	    		<option>4</option>
	    	</select>
	    	<p class="find-text">ADD：深圳市宝安区这行字显示你选择的中心的地址有时可能要两行<br/>TEL：86-755-9999999</p>
    	</div>
    	<img src="./images/map.jpg"  class="map"/> 
       <div><!--{{msg}}--></div><zdd>
            	
            </zdd>
    </div>
</template>
<script>

	import zdd from './common/zdd.vue';
    export default{
        data(){
            return{
                msg:'address'
            }
        },
        components:{
        	zdd
        }
    }
</script>

<style scoped>
.a a{ color: #f00; }
.header{ padding-left: 0.1rem; height:0.67rem; background: url(./images/tel-bg.jpg) repeat; background-size: 100% 100%; color:#000; font-size:0.3rem; font-weight: bold; line-height: 0.67rem;}
.line{display:block; width:100%; height:0.02rem; background: #00afd5; border-top:0.01rem solid #0b6aa6; border-bottom:0.01rem solid #0b6aa6;}
.find{ height:2.03rem;background: #f1f2f2; padding-top:0.3rem; padding-left: 0.41rem; padding-right: 0.25rem;}
.find-select{width:5.41rem; height:0.42rem; margin-bottom: 0.18rem;}
.find-text{line-height: 0.36rem; font-size: 0.22rem;}
.map{display:block; width:100%; height:5.04rem; margin:0.18rem 0 0.22rem 0;}
</style>