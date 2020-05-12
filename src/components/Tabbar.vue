<template>
	<nav>
		<ul>
		<router-link to="/film" tag="li" active-class="myactive"><i class="iconfont icon-Dyanjing"></i>film</router-link>
		<router-link to="/cinema" tag="li" active-class="myactive"><i class="iconfont icon-caidan"></i>cinema</router-link>
		<router-link to="/center" tag="li" active-class="myactive"><i class="iconfont icon-kabao"></i>center</router-link>
		</ul>
	</nav>
</template>

<script>
</script>

<style lang="scss" scoped="scoped">
	.myactive{
		color: red;
	}
	nav{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		height: 50px;
		background-color: white;
		ul{
			display: flex;
			li{
				flex: 1;
				line-height: 50px;
				text-align: center;
			}
		}
	}
</style>
