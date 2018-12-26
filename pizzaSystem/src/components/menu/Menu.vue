<template>
	<div class="menu">
    <div class="row">
      <div class="col-sm-6 col-md-3" v-for="foods in menuList">
        <img :src="foods.imgSrc" alt="">
        <div class="caption">
          <h3>{{foods.pName}}</h3>
          <p>{{foods.pazzaPrice}}</p>
          <p>
            <a href="" class="btn btn-primary">订餐</a>
            <a href="" class="btn btn-default">查看详情</a> 
          </p>
        </div>
      </div>
    </div>
    <div class="noMore" v-show="noMore"><p>没有数据了！！！</p></div>
	</div>
</template>

<script>
import Foods from '../../foodImgs/foodsImg'
export default {
  name: 'menuList',
  data () {
    return {
      n:10,
      noMore:false,
      menuList:Foods.foodImgs
      /*menuList:[
          {imgSrc:require("../../assets/pazza1.jpg"),pName:'Monkey',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza2.jpg"),pName:'Dog',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza3.jpg"),pName:'Snake',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Bear',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Tiger',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza1.jpg"),pName:'Horse',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza2.jpg"),pName:'Cat',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza3.jpg"),pName:'Zebra',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Lion',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Deer',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Kangaroo',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza1.jpg"),pName:'Monkey',pazzaPrice:28}
      ]*/,
    	/*menuListSource:[
          {imgSrc:require("../../assets/pazza1.jpg"),pName:'Monkey',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza2.jpg"),pName:'Dog',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza3.jpg"),pName:'Snake',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Bear',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Tiger',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza1.jpg"),pName:'Horse',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza2.jpg"),pName:'Cat',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza3.jpg"),pName:'Zebra',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Lion',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Deer',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Kangaroo',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza1.jpg"),pName:'Monkey',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza2.jpg"),pName:'Dog',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza3.jpg"),pName:'Snake',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Bear',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Tiger',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza1.jpg"),pName:'Horse',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza2.jpg"),pName:'Cat',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza3.jpg"),pName:'Zebra',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Lion',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Deer',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Kangaroo',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza1.jpg"),pName:'Monkey',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza2.jpg"),pName:'Dog',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza3.jpg"),pName:'Snake',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Bear',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Tiger',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza1.jpg"),pName:'Horse',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza2.jpg"),pName:'Cat',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza3.jpg"),pName:'Zebra',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Lion',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Deer',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Kangaroo',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Ox',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza1.jpg"),pName:'Monkey',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza2.jpg"),pName:'Dog',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza3.jpg"),pName:'Snake',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Bear',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Tiger',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza1.jpg"),pName:'Horse',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza2.jpg"),pName:'Cat',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza3.jpg"),pName:'Zebra',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Lion',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Deer',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Kangaroo',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza1.jpg"),pName:'Monkey',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza2.jpg"),pName:'Dog',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza3.jpg"),pName:'Snake',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Bear',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Tiger',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza1.jpg"),pName:'Horse',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza2.jpg"),pName:'Cat',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza3.jpg"),pName:'Zebra',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Lion',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Deer',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Kangaroo',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza1.jpg"),pName:'Monkey',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza2.jpg"),pName:'Dog',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza3.jpg"),pName:'Snake',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Bear',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Tiger',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza1.jpg"),pName:'Horse',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza2.jpg"),pName:'Cat',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza3.jpg"),pName:'Zebra',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Lion',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Deer',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza4.jpg"),pName:'Kangaroo',pazzaPrice:28},
          {imgSrc:require("../../assets/pazza5.jpg"),pName:'Ox',pazzaPrice:28}
      ]*/
    }
  },
  components:{
  }, 
  mounted(){
    //this.getPic();
    //window.addEventListener("scroll",this.toBottom)
  },

  methods:{ 
    /*getPic:function(){
      this.$http.get("http://jsonplaceholder.typicode.com/photos").then(function(res){
        this.menuList=[];
        for(let i=0;i<this.n;i++){
          this.menuList.push(res.body[i]);
        }
      },function(){
        console.log("请求数据失败！！")
      });
    },*/
  	toBottom(){
      
      var scrollValue=document.body.scrollTop||document.documentElement.scrollTop;
      //console.log(document.documentElement.clientHeight,scrollValue,document.body.clientHeight)
      if(((document.documentElement.clientHeight + scrollValue) >= (document.body.clientHeight))){
        //console.log(11)
        this.menuList=[];
        this.n+=10;
        if(this.n>=40){
          this.n=40;
          this.noMore=true;
          console.log(this.menuList)
        }
        for(let i=0;i<this.n;i++){
          this.menuList.push(this.menuListSource[i]);
        }        
        
        //console.log(this.n)
        //this.getPic();
      }

    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu{
    margin-top: 20px;
  }
  .menu .row img{
    width: 100%;
    border-radius: 5px;
  }
  .noMore{
    text-align: center;
    color: red;
    font-size: 22px;
  }
</style>
