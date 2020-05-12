<template>
	<div>
		<h4>近期最受期待</h4>
			<swiper>
				<li v-for="data in $store.state.expectlist" :key="data.id" class="swiper-slide">
					<img :src="data.img | filter" style="width: 138px; height: 180px;"/>
					<h5>{{data.nm}}</h5>
					<h6>{{data.comingTitle}}</h6>
				</li>
			</swiper>
		<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50"
		 infinite-scroll-immediate-check='false' class="content">
			<li v-for="data in this.$store.state.nowplayingList" :key="data.id" @click="handleChangePage(data)">
				<img :src="data.img | filter" />
				<h3>{{data.nm}}</h3>
				<h5><span>{{data.wish}}</span> 人想看</h5>
				<h5 class="opc1">主演：{{data.star}}</h5>
				<h5 class="opc2">{{data.rt}} 大陆上映</h5>
			</li>
		</ul>
		<div v-show="yorn">正在加载中...</div>
		<div v-show="!yorn">已经到底了哦！</div>
	</div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import swiper from '@/views/filmchild/swiper.vue'

Vue.filter('filter', function (value) {
  if (value != null) {
    return value.replace('/w.h/', '/138.180/')
  }
})

Vue.component('swiper',swiper)

export default {
  data () {
    return {
      yorn: true,
      idlist: [],
      index: 0,
      list: [],
      loading: true
    }
  },

  mounted () {
    console.log('length', this.$store.state.nowplayingList.length)
    console.log(this.index, this.$store.state.ids)
    console.log('page:' + this.$store.state.pages)
    setTimeout(() => {
      this.loading = false
    }, 2000)
    if (this.$store.state.nowplayingList.length == 0) {
      // axios.get('/ajax/comingList?ci=288&token=').then(res => {
      // 			  console.log(res.data)
      //   this.list = res.data.coming
      // })
      this.$store.dispatch('getNowList')
      this.$store.dispatch('getExpectList')
      this.list = this.$store.state.nowplayingList
      console.log(this.$store.state.nowplayingList)
      console.log('firstlist:' + this.list)
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
        params: {
          id: data
        }
      })
    },
    loadMore () {
      this.loading = true
      if (this.index < Math.ceil((this.$store.state.ids.length) / 10) || this.index == Math.ceil((this.$store.state.ids.length) / 10)) {
        this.idlist = this.$store.state.ids
        console.log('idlist:' + this.idlist)
        console.log(this.$store.state.pages)
        // this.idlist = this.idlist.slice(this.index*10,(this.index*10+9))

        this.idlist = this.idlist.slice(this.index * 10, (this.index * 10 + 9)).join('%2C')
        // this.idlist = this.idlist.substring(10,19).join('&')
        console.log('changeidlist：' + this.idlist)
        console.log('/ajax/moreComingList?ci=288&token=&limit=10&movieIds=' + this.idlist)
        axios.get('/ajax/moreComingList?ci=288&token=&limit=10&movieIds=' + this.idlist).then(res => {
          console.log(res.data.coming)
          this.list.push.apply(this.list, res.data.coming)
          console.log('anotherlist:' + this.list)
        })
        setTimeout(() => {
          this.$store.state.nowplayingList = this.list
          this.loading = false
          this.index++
          console.log(this.index)
        }, 2500)
      } else {
        this.yorn = false
      }
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
	.content {
		li {
			overflow: hidden;
			padding-bottom: 10px;
			border-bottom: 1px solid #969896;
			img {
				float: left;
				margin-right: 10px;
			}
			
			h5{
				margin-bottom: 5px;
				span{
					color: yellow;
					font-weight: 600;
					font-size: 20px;
				}
			}
		}
		opc1 {
			opacity: 0.5;
		}
		opc2 {
			opacity: 0.3;
		}
	}
</style>
