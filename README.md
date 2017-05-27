一、使用vue-cli脚手架搭建开发环境
		npm init webpack myprotectname
		
二、向src/assets文件夹里导入所需的静态资源
		css、js等
		
三、删除App.vue内内容，自己创建App.vue	

四、在index页面引入mata等信息
		
五、在JS中引入css模块，首先下载style-loader css-loader
	npm install style-loader  css-style -D
	
	然后需要在webpack.config.js中配置相关信息
		 { test: /\.css$/, loader: 'style-loader!css-loader' }
		 
	最后在style中引入css模块
		@import './assets/css/index.css';

六、全局引入base.css
	require('./assets/css/base.css'); //全局引入  main.js 中
	require("./assets/js/font.js");
	require("./assets/js/jquery-1.7.2.js");
	require("./assets/js/swipe.js");	
		
七、写轮播图
	在App中写JS
		
八、将页面各个部分组件化

九、设置路由		
	在index页面里设置路由，首先导入各个组件，然后配置路径
	
	
	路由重定向问题
		默认跳到首页没有默认样式
		使用redirect
	-------------------------------
	
	到目前位置，页面基本完成，下面即将使用其他核心技术
	
十、使用vuex管理各组件状态
	1.在src目录下新建vuex文件夹，存放store.js文件
	2.在main.js文件中引入store文件
	

十一、
	在路由文件夹下配置一下选项：
		mode: 'history', //切换路径模式，变成history模式
		scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	
	
十二、使用第三方组件loading	

十三、使用axios
	配置信息：
		//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
		//
		axios.interceptors.request.use(function (config) {  //配置发送请求的信息
		  stores.dispatch('showLoading')  
		  return config;
		}, function (error) {
		  return Promise.reject(error);
		});

		axios.interceptors.response.use(function (response) { //配置请求回来的信息
		  stores.dispatch('hideLoading')
		  return response;
		}, function (error) {

		  return Promise.reject(error);
		});

	Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了
	
	
	请求资源
		 this.$http.get('http://localhost:8080/static/data/index.data').then(function(res) {
                    console.log(res);
                }).catch(function(err) {
                    console.log(err);
                });
	
		本来资源是放在data目录下，但是请求失败，最后放到了static文件夹下请求成功
		
		百度发现这个文件夹是vue-cli内置服务器向外暴露的静态文件夹
		
		这个也可以自己配置
			在build/dev-server.js目录下
			
			app.use('/example',express.static(''./example));   //这里的example是自定义的文件夹
	
	