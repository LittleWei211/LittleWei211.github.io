import Vue from 'vue'
import RouterView from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import wHeader from '../components/Header'
import wMenu from '@/components/menu/Menu'
import wSlide from '../components/effects/Slide'
import wManage from '../components/manage/Manage'
import wAbout from '../components/about/About'

//二级路由
import wLocation from '../components/about/Location'
import wContact from '../components/about/Contact'
import wCulture from '../components/about/Culture'
//import wTest from '../components/about/Test'

//三级路由
import wPhone from '../components/about/contact/Phone'
import wPerson from '../components/about/contact/Person'

Vue.use(RouterView)
//配置路由项

export default new RouterView({
	routes:[
		{
	      path: '/',
	      name:'slide',
	      component: wSlide
	    },
	    {
	      path: '/menu',
	      name:'menuList',
	      component: wMenu
	    },
	    {
	      path: '/manage',
	      name:'manage',
	      component: wManage
	    },
	    {
	      path: '/about',
	      name:'about',
	      component: wAbout,
	      redirect:'/location',
	      children:[
	      	{path:'/location',name:'locationLink',component:wLocation},
	      	{path:'/contact',name:'contactLink',redirect:'/phone',component:wContact,children:[
	      		{path:'/phone',name:'phoneLink',component:wPhone},
	      		{path:'/person',name:'personLink',component:wPerson}
	      	]},
	      	{path:'/culture',name:'cultureLink',component:wCulture}
	    	//{path: '/test',name:'testLink',component: wTest}
	      ]
	    },
	    {
	    	path:'/',
	    	redirect:'/'
	    }

	],
	mode:'history'
})

