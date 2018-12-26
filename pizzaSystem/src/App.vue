<template>
  <div id="app">
    <div class="container">
      <w-header/>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>     
    <div class="container">
      <w-footer></w-footer>
    </div>    
  </div>
</template>

<script>
import wHeader from '@/components/header'
import wContent from '@/components/content'
import wSlide from '@/components/effects/slide'
//import wRecommend from '@/components/recommendToday/Recommend'
export default {
    name: 'App',
    components:{
      wHeader,
      wContent,
      wSlide
      //wRecommend
    },
    data(){
      return{
      }      
    },
    methods:{
      getData:function(data){
        for(let i=0;i<data.length;i++){
          this.slideList.push(data[i]);
        }
      }
    },
    mounted(){
      //this.getData();
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
