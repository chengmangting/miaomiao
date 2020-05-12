<template>
	<div>
		<swiper :key="num.length" ref="myscroll">
			<li class="swiper-slide" v-for="data in num" :key="data.id"><img :src="data.img | filter" /></li>
		</swiper>
		<tabbar :class="isFixed?'fixed':''"></tabbar>
		<router-view></router-view>
	</div>
</template>

<script>
import swiper from './filmchild/swiper.vue'
import axios from 'axios'
import tabbar from './filmchild/filmHeard.vue'
import Vue from 'vue'

// import {
// 	Indicator
// } from 'mint-ui'

Vue.filter('filter', function (value) {
  return value.replace('w.h', '138.180')
})
export default {
  data () {
    return {
      num: [],
      isFixed: false
    }
  },
  components: {
    swiper,
    tabbar
  },
  mounted () {
    Indicator.open()
    axios.get('/ajax/comingList?ci=288&limit=10&offset=0&token=').then(res => {
      console.log(res.data)
      this.num = res.data.coming
      Indicator.close()
    }).catch(error => console.log(error))

    window.onscroll = this.handleScroll
  },
  beforeDestroy () {
    window.onscroll = null
  },
  methods: {
    handleScroll () {
      if (document.documentElement.scrollTop >= this.$refs.myscroll.$el.offsetHeight) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
	img {
		width: 138px !important;
		height: 180px !important;
	}

	.fixed {
		position: fixed;
		left: 0;
		top: 0;
		background-color: white;
		width: 100%;
		height: 40px;
	}
</style>
