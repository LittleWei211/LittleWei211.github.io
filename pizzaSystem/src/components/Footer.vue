<template>
	<div class="foot">
		<footer>
			<!-- <p><a href="">关于我们</a><a href="">pazza文化</a></p> -->
			<p><router-link class="nav-link" :to="{name:'about'}">关于我们</router-link><router-link class="nav-link" :to="{name:'cultureLink'}">pazza文化</router-link></p>
			<p>加盟电话：4008208820</p>
		</footer>			
	</div>
</template>

<script>
export default {
  name: 'wfooter',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.foot{
		padding: 20px 0;	
		text-align: center;
		background-color: #eee;	
	}
	.foot p{
		margin-bottom: 0;
		padding: 5px 0;
	}
	.foot p a{
		display: inline;
		padding: 0 10px;
	}
</style>
