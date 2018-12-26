<template>
	<div class="slide">
		<swiper v-if="swiperSlides.length>1" :options="swiperOption">
		    <swiper-slide  v-for="slide in swiperSlides"><img v-bind:src="slide.imgSrc" alt=""></swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
		    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>	
		</swiper>
		<w-recommend/>
	</div>
	
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import wRecommend from '../recommendToday/Recommend'

import Foods from '../../foodImgs/foodsImg'
export default {
  name: 'wslide',
  data () {
    return {
    	title:'今日推荐的pazza!',
    	swiperOption:{
    		autoplay:true,
    		observer: true,//修改swiper自己或子元素时，自动初始化swiper
          	observeParents: true,//修改swiper的父元素时，自动初始化swiper
    		loop:true,
    		speed:1000,
    		prevButton:'.swiper-button-prev',
    		nextButton:'.swiper-button-next',
    		//autoplayDisableOnInteraction:false,
    		pagination:{
	    		 el:'.swiper-pagination',
	    		 clickable:true
	    	},
	    	navigation:{
	    		prevEl:'.swiper-button-prev',
	    		nextEl:'.swiper-button-next',
	    	}		
    	},
    	/*swiperSlides:[
    		{src:require("../../assets/pazza1.jpg"),active:true},
    		{src:require("../../assets/pazza2.jpg"),active:false},
    		{src:require("../../assets/pazza3.jpg"),active:false},
    		{src:require("../../assets/pazza4.jpg"),active:false},
    		{src:require("../../assets/pazza5.jpg"),active:false}
    	]*/
    	swiperSlides:[]
    }
  },
  components:{
  	swiper,
  	swiperSlide,
  	wRecommend
  },
  mounted:function(){
  	/*setInterval(() => {
        console.log('simulate async data')
        if (this.swiperSlides.length <5) {
          this.swiperSlides.push(this.swiperSlides.length + 1)
        }
    }, 3000)*/
    //alert("mounted....");
    //this.getPhotos();
    this.sixImg();
  },
  methods:{
  	getPhotos:function(){
  		this.$http.get("http://jsonplaceholder.typicode.com/photos").then(function(data){
  			console.log(data)
  			for(let i=0;i<6;i++){
  				this.swiperSlides.push(data.body[i]);
  			}
  			//console.log(this.swiperSlides)
  		},function(){
  			console.log("请求数据失败！！")
  		})
  	},
  	sixImg:function(){
  		let len=0;
  		if(Foods.foodImgs.length>6){
  			len=6;
  		}else{
  			len=Foods.foodImgs.length;
  		}
  		for(let i=0;i<len;i++){
  			this.swiperSlides.push(Foods.foodImgs[i]);
  		}
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.swiper-container{
		height: 400px;
	}
	.swiper-container img{
		width: 100%;
		height: 100%;
	}
</style>
