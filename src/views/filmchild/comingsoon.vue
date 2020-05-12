<template>
	<div>
		<ul>
			<li v-for="data in $store.getters.cominglistfile" :key="data.id" @click="handleChangePage(data.id)">
				<img :src="data.img | filter" />
				<h3>{{data.nm}}</h3>
				<p>{{data.comingTitle}}</p>
				<p>{{data.rt}}</p>
				<p>{{data.star}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

Vue.filter('filter', function (value) {
  if (value != null) {
    return value.replace('w.h', '138.180')
  }
})

export default {
  data () {
    return {
	  // list: []
    }
  },

  mounted () {
		  // axios.get('/ajax/comingList?ci=288&token=').then(res => {
			 //  console.log(res.data)
		  //   this.list = res.data.coming
		  // })
    if (this.$store.state.comingList.length == 0) {
      this.$store.dispatch('getComingList')
    }
  },

  methods: {
	  handleChangePage (data) {
		  console.log(data)
		  // 编程式导航---路径跳转
		  // this.$router.push('/detail/${data}')

		  // 编程式导航---名字跳转
		  this.$router.push({
			  name: 'detail',
			  params: { id: data }
		  })
	  }
  }
}

</script>

<style lang="scss" scoped="scoped">
	ul{
		li{
			overflow: hidden;
			img{
				float: left;
			}
		}
	}
</style>
