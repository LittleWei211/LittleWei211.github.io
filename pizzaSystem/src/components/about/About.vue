<template>
	<div class="about">
    <div class="row">
      <div class="col-md-4">
        <div class="list-group mb-t">
          <router-link tag="li" class="nav-link" :to="{name:'locationLink'}">
            <a href="" class="list-group-item list-group-item-action list-group-item-active">我的位置</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
            <a href="" class="list-group-item list-group-item-action list-group-item-active">联系我们</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'cultureLink'}">
            <a href="" class="list-group-item list-group-item-action list-group-item-active">pazaa文化</a>
          </router-link>
          <!-- <router-link tag="li" class="nav-link" :to="{name:'testLink'}">
            <a href="" class="list-group-item list-group-item-action list-group-item-active">图片测试</a>
          </router-link> -->
        </div>
      </div>
      <div class="col-md-8">
        <router-view></router-view>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'about',
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
  .about{
    margin: 20px auto;
  }
  
</style>
