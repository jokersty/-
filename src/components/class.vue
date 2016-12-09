<template>
    <div class="a">
    	<div class="header">特色课程</div>
    	<i class="line"></i>
    	<div class="class-content">
    		<img class="class-content-xialy" src="./images/xialy.png" />
    		<p class="class-content-text"><i></i>深圳瑞德启蒙教育投资有限公司（0-12岁美式启蒙教育专家）秉承“全球启蒙 卓越思维（Global Inspiration Fantastic Thinking）”的理念。源自美国百年教育出版社--美国麦格希教育集团。麦格希集团成立于1884，是全球领先的教育出版与服务品牌，在33个国家 设有分支机构，以65种语言提供儿童早期教育、中小学教育、高等教育、专业教育、测评与报告等领域的产品和服务。</p>
    		<p class="class-content-text"><i></i>深圳瑞德启蒙教育投资有限公司（0-12岁美式启蒙教育专家）秉承“全球启蒙 卓越思维（Global Inspiration Fantastic Thinking）”的理念。源自美国百年教育出版社--美国麦格希教育集团。麦格希集团成立于1884，是全球领先的教育出版与服务品牌，在33个国家 设有分支机构，以65种语言提供儿童早期教育、中小学教育、高等教育、专业教育、测评与报告等领域的产品和服务。</p>
    		<p class="class-content-text"><i></i>深圳瑞德启蒙教育投资有限公司（0-12岁美式启蒙教育专家）秉承“全球启蒙 卓越思维（Global Inspiration Fantastic Thinking）”的理念。源自美国百年教育出版社--美国麦格希教育集团。麦格希集团成立于1884，是全球领先的教育出版与服务品牌，在33个国家 设有分支机构，以65种语言提供儿童早期教育、中小学教育、高等教育、专业教育、测评与报告等领域的产品和服务。</p>
    		<p class="class-content-text"><i></i>深圳瑞德启蒙教育投资有限公司（0-12岁美式启蒙教育专家）秉承“全球启蒙 卓越思维（Global Inspiration Fantastic Thinking）”的理念。源自美国百年教育出版社--美国麦格希教育集团。麦格希集团成立于1884，是全球领先的教育出版与服务品牌，在33个国家 设有分支机构，以65种语言提供儿童早期教育、中小学教育、高等教育、专业教育、测评与报告等领域的产品和服务。</p>
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
                msg:'class'
            }
        },
        components:{
        	zdd
        }
    }
</script>

<style scoped>
.a a{ color: #f00; }
.header{ width:100%; height:0.67rem; background: url(./images/tel-bg.jpg) repeat; background-size: 100% 100%; color:#008dce; font-size:0.3rem; font-weight: bold; text-align: center; line-height: 0.67rem;}
.line{display:block; width:100%; height:0.02rem; background: #00afd5; border-top:0.01rem solid #0b6aa6; border-bottom:0.01rem solid #0b6aa6;}
.class-content{width:100%;background: #f1f2f2; padding:0.32rem 0.29rem 0.5rem 0.29rem;}
.class-content-xialy{width:5.84rem; height:2.35rem;}
.class-content-text{ line-height: 0.42rem; margin-top: 0.2rem; font-size: 0.24rem;}
.class-content-text i{width:0;margin-right:0.48rem;}
</style>