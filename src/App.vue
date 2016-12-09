<template>
	<div>
		<navRR></navRR>
    	<router-view></router-view>
    </div>
</template>

<script>
	import navRR from './components/common/nav.vue';
	export default{
        components:{
        	navRR
        }
    }
</script>

