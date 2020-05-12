<template>
	<div>
		detail---{{id}}
	</div>
</template>

<script>
// import bus from '../bus/index.js'
export default {
  props: ['id'],
  beforeMount () {
    // bus.$emit("maoyan",false)
    // this.$store.state.isTabbarShow = false
    this.$store.commit('hide', false)
  },
  beforeDestroy () {
    // bus.$emit("maoyan", true)
    this.$store.commit('show', true)
  }
}
</script>

<style>
</style>
