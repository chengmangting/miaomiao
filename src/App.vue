<template>
	<div>

		<!-- 路由容器 -->
		<router-view></router-view>
		<tabbar v-show="$store.state.isTabbarShow"></tabbar>
	</div>
</template>

<script>
import Vue from 'vue'
import navbar from './components/Navbar.vue'
import sidebar from './components/Sidebar.vue'
import tabbar from './components/Tabbar.vue'
// import bus from './bus/index.js'

Vue.component('navbar', navbar)
Vue.component('sidebar', sidebar)
Vue.component('tabbar', tabbar)
export default {
  // data () {
  //   isShow: true
  // },
  // beforeMount () {
  //   bus.$on("maoyan",(data)=>{
  //   	this.isShow = data
  //   })
  // }

}
</script>
<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	html{
		height: 100%;
	}
	li{
		list-style: none;
	}
	body{
	}
</style>
