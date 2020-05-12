import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow: true,
    comingList: [],
    nowplayingList: [],
    ids: [],
    pages: null,
    expectlist: []
  },
  getters: {
    cominglistfile (state) {
      return state.comingList.filter((item, index) => index < 3)
    }
  },
  mutations: {
    hide (state, data) {
      state.isTabbarShow = data
    },
    show (state, data) {
      state.isTabbarShow = data
    },
    putComingList (state, data) {
      state.comingList = data
    },
    putNowList (state, data) {
      state.nowplayingList = data
    },
    putids (state, data) {
      state.ids = data
    },
    putpages (state, data) {
      state.pages = data
    },
    putExpect (state, data) {
      state.expectlist = data
    }
  },
  actions: {
    getComingList (store) {
      axios.get('/ajax/comingList?ci=288&token=').then(res => {
        store.commit('putComingList', res.data.coming)
      })
    },
    getNowList (store) {
      axios.get('/ajax/comingList?ci=288&token=').then(res => {
        store.commit('putNowList', res.data.coming)
        store.commit('putids', res.data.movieIds)
      })
    },
    getExpectList (store) {
      axios.get('/ajax/mostExpected?ci=288&limit=10&offset=0&token=').then(res => {
        store.commit('putExpect', res.data.coming)
        store.commit('putpages', res.data.paging.total)
      })
    }
  },
  modules: {}
})
