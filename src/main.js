/**
 * Created by zhu on 2016/10/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routers';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueRouter);//转载插件
Vue.use(VueResource);//转载插件

Vue.config.silent = false;
Vue.config.devtools = true;

const route=new VueRouter({
    routes:router,
    base:__dirname,
    mode:'history'
});

new Vue({
    router:route,
    render:h=>h(App)
}).$mount('#app');

function fontAuto(width){//width表示效果图的宽度
	var screenWidth=document.documentElement.clientWidth;//屏幕的宽度
	//document.documentElement表示html标签
	if(screenWidth>=width)//当设备的宽度大于等于效果图的宽度
	{
		document.documentElement.style.fontSize="625%";
	}
	else{//当设备的宽度小于效果图的宽度
		document.documentElement.style.fontSize=(625*screenWidth/width)+"%";
	}
	
}

fontAuto(640);//网页加载的时候触发

window.onresize=function(){//当网页宽度发生变化时触发函数
	fontAuto(640);
}

var mySwiper = new Swiper('.swiper-container',{
		pagination : '.swiper-pagination',
		//pagination : '#swiper-pagination1',
	});

