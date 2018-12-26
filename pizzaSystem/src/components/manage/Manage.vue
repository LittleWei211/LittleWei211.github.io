<template>
	<div class="manage">
    <!-- <button class="btn btn-success">添加菜单</button>
    <button class="btn btn-danger">删除菜单</button> -->
      <div class="row">
        <div class="col-sm-6 col-md-3" v-for="(foods,index) in menuData">
          <img :src="foods.imgSrc" alt="">
          <div class="caption">
            <h3>{{foods.pName}}</h3>
            <p>{{foods.pazzaPrice}}</p>
            <button class="btn btn-primary" v-on:click="deleteFood(index)">删除</button>
          </div>
        </div>
      </div>
	</div>
</template>

<script>
import Foods from '../../foodImgs/foodsImg'
export default {
  name: 'manage',
  data () {
    return {
    	menuData:[]
    }
  },
  components:{
  },
  created(){
    this.cloneData();
  }, 
  methods:{
    cloneData:function(){
      console.log(this.menuData.length)
      for(let i=0,len=Foods.foodImgs.length;i<len;i++){
        this.menuData.push(Foods.foodImgs[i]);
      }     
    },
  	deleteFood:function(index){
      this.menuData.splice(index,1)
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .manage{
    margin: 40px auto;
    /*text-align: center;*/
    min-height: 500px;
  }
  .manage .btn{
    /*margin: 0 20px;*/
    margin-bottom: 1rem;
  }

  .manage li{
    list-style: none;
  }

  .manage .row img{
    width: 100%;
    max-height: 160px;
    border-radius: 5px;
  }
  .caption h3{
    margin: 0;
  }
  .caption p{
    margin:.5rem 0;
  }
</style>
