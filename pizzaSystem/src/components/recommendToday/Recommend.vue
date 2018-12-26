<template>
	<div class="recommend">
    <div class="containner">
      <h4 class="reTitle">{{title}}<span></span></h4>
      <div class="row">
        <div class="col-sm-6 col-md-4" v-for="pazza in recommendPazzaList">
          <div class="card">
            <img :src="pazza.imgSrc" alt="" class="card-img-top">
            <div class="card-body">
              <h4 class="card-title">{{pazza.pazzaName}}</h4>
              <p class="card-text">{{pazza.textTips}}</p>
              <a href="" class="btn btn-primary">查看详情</a>
            </div>
          </div>
        </div>       
      </div>
    </div>
	</div>
</template>

<script>
import Foods from '../../foodImgs/foodsImg'
export default {
  name: 'recommend',
  data () {
    return {
    	title:'今日推荐',
      /*recommendPazzaList:[
        {src:require('../../assets/pazza1.jpg'),pazzaName:'超级至尊',textTips:'至尊披萨是意大利比萨的一个品种,其品牌代言人为著名主持人李湘和李维嘉。'},

        {src:require('../../assets/pazza2.jpg'),pazzaName:'海鲜至尊',textTips:'至尊比萨从本质上改变了人们头脑中饼状比萨的传统概念'},

        {src:require('../../assets/pazza3.jpg'),pazzaName:'黑椒牛肉比萨',textTips:'该配方主要食材有酱牛肉、面粉、马苏里拉奶酪、黑胡椒、青椒、圣女果等。'},

        {src:require('../../assets/pazza4.jpg'),pazzaName:'新奥尔良风情烤肉比萨',textTips:'以金黄香浓的车打芝士酱和蘑菇等烤制，美味口中尽享'},

        {src:require('../../assets/pazza1.jpg'),pazzaName:'香脆鸡肉比萨',textTips:'底层芝士马苏里拉和车打芝士底层芝士马苏里拉和车打芝士'},

        {src:require('../../assets/pazza2.jpg'),pazzaName:'鲜香培根比萨',textTips:'蕃茄酱2汤匙(30ml) ，奶酪100G ，火腿50G ，口蘑50G ，香菇20G ，洋葱20G '},
      ]*/
      recommendPazzaList:[]
    }
  },
  created(){
    this.recomPazza();
  },
  components:{
  }, 
  methods:{
  	recomPazza:function(){
      let len=0;
      if(Foods.foodImgs.length>6){
        len=6;
      }else{
        len=Foods.foodImgs.length;
      }
      for(let j=0;j<len;j++){
        this.recommendPazzaList.push(Foods.foodImgs[j]);
      }
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @keyframes colorChangeRight{
    form{ border-color: transparent transparent transparent blue; }
    to{ border-color: transparent transparent transparent red; }
  }
  @keyframes colorChangeLeft{
    form{ border-color: transparent blue transparent transparent; }
    to{ border-color: transparent red transparent transparent; }
  }
  /*@keyframes move{
    0%{left:0;}
    50%{ left: 89%; }
    100%{ left:0; }
  }*/
  .recommend{
    margin:20px auto; 
  }
  .reTitle{
    position: relative;
    padding: 0 20px;
    /*animation: move 10s infinite linear;*/
    display: inline-block;
    margin: 0 0 -20px 0;
  }
  .reTitle:after{
    content: "";
    width: 0;
    height: 0;
    border-width: 16px;
    border-style: solid;
    border-color: transparent transparent transparent blue;
    display: block;
    position: absolute;
    left: 120px;
    top: 0;
  }
  .reTitle:before{
    content: "";
    width: 0;
    height: 0;
    border-width: 16px;
    border-style: solid;
    border-color: transparent blue transparent transparent ;
    display: block;
    position: absolute;
    left: -16px;
    top: 0;
  }
  .reTitle:after{
    animation: colorChangeRight 2s infinite;
  }
  .reTitle:before{
    animation: colorChangeLeft 2s infinite;
  }
  .reTitle span{
    display: block;
    width: 0;
    height: 0;
    border-width: 16px;
    border-style: solid;
    border-color:blue transparent transparent   transparent ;
    margin: 10px auto 0 auto;
  }
  .card{
    margin:15px 0;
  }
  .card-img-top{
    max-height:232px; 
  }
</style>
