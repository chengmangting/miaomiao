<template>
	<div>
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		     <slot></slot>
		    </div>
		    <!-- Add Scrollbar -->
		    <div class="swiper-pagination"></div>
		  </div>
	</div>
</template>

<script>
import Swiper from 'swiper' // js
import 'swiper/css/swiper.min.css'

export default {
  mounted () {
		  var swiper = new Swiper('.swiper-container', {
		  			       slidesPerView: 'auto',
		  			       spaceBetween: 10,
		  			       freeMode: true,
		  				   autoHeight: true ,
						   observer:true,
						   roundLengths : true,
		  			       pagination: {
		  			         el: '.swiper-pagination',
		  			         clickable: true
		    }
		  })
				  
  }
}

</script>
<style lang="scss" scoped="scoped">
	.swiper-container{
		// margin-bottom: 10px;
		opacity: 1;
	}
	.swiper-slide{
		width: 150px;
		// height: 400px;
	}
</style>
