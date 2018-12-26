<template>
	<div class="contact">
    <div class="card text-dark bg-light mb-3">
      <div class="card-header">联系我们</div>
      <div class="card-body">
        <h5 class="card-title">联系我们</h5>
        <p class="card-text"><a href="">1153792327@qq.com</a></p>
      </div>
      <div class="card-body">
        <router-link tag="span" :to="{name:'phoneLink'}">电话</router-link>
        <router-link tag="span" :to="{name:'personLink'}">联系人</router-link>
        <router-view></router-view>
      </div>
       
    </div>
	</div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
    	
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
  .contact{
    margin-top: 8px;
    min-height: 500px;
  }
  .card-body{
    padding:.5rem 1.25rem;
  }
  .card-body span{
    cursor: default;
  }
</style>
