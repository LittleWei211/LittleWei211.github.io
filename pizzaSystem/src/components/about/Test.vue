<template>
	<div class="test">
    <img class="img-circle" :src="img" alt="">
	</div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
    	img:require("../../assets/pazza1.jpg")
    }
  },
  components:{
  }, 
  methods:{
  	
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .test{
    min-height: 500px;
  }
  .test img{
    width: 300px;
    height: 280px;
    border-radius: 50%;
    display: block;
    margin:0 auto;
  }
</style>
