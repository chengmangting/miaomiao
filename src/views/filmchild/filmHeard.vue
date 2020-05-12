<template>
	<div>
		<ul>
	<router-link tag="li" to="/film/nowplaying" active-class="active">正在热播</router-link>
	<router-link tag="li" to="/film/comingsoon" active-class="active">即将播出</router-link>
	</ul>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="scss">
	.active{
		color: red;
	}
	ul{
		display: flex;
		li{
			flex: 1;
			height: 40px;
			line-height: 40px;
			text-align: center;
			background-color: white;
		}
	}
</style>
