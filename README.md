һ��ʹ��vue-cli���ּܴ��������
		npm init webpack myprotectname
		
������src/assets�ļ����ﵼ������ľ�̬��Դ
		css��js��
		
����ɾ��App.vue�����ݣ��Լ�����App.vue	

�ġ���indexҳ������mata����Ϣ
		
�塢��JS������cssģ�飬��������style-loader css-loader
	npm install style-loader  css-style -D
	
	Ȼ����Ҫ��webpack.config.js�����������Ϣ
		 { test: /\.css$/, loader: 'style-loader!css-loader' }
		 
	�����style������cssģ��
		@import './assets/css/index.css';

����ȫ������base.css
	require('./assets/css/base.css'); //ȫ������  main.js ��
	require("./assets/js/font.js");
	require("./assets/js/jquery-1.7.2.js");
	require("./assets/js/swipe.js");	
		
�ߡ�д�ֲ�ͼ
	��App��дJS
		
�ˡ���ҳ��������������

�š�����·��		
	��indexҳ��������·�ɣ����ȵ�����������Ȼ������·��
	
	
	·���ض�������
		Ĭ��������ҳû��Ĭ����ʽ
		ʹ��redirect
	-------------------------------
	
	��Ŀǰλ�ã�ҳ�������ɣ����漴��ʹ���������ļ���
	
ʮ��ʹ��vuex��������״̬
	1.��srcĿ¼���½�vuex�ļ��У����store.js�ļ�
	2.��main.js�ļ�������store�ļ�
	

ʮһ��
	��·���ļ���������һ��ѡ�
		mode: 'history', //�л�·��ģʽ�����historyģʽ
		scrollBehavior: () => ({ y: 0 }), // ��������������Ϊ���������Ĭ�Ͼͻ����ԭ����������λ��
	
	
ʮ����ʹ�õ��������loading	

ʮ����ʹ��axios
	������Ϣ��
		//axios��һЩ���ã����緢��������ʾloading���������loading��ʧ֮���
		//
		axios.interceptors.request.use(function (config) {  //���÷����������Ϣ
		  stores.dispatch('showLoading')  
		  return config;
		}, function (error) {
		  return Promise.reject(error);
		});

		axios.interceptors.response.use(function (response) { //���������������Ϣ
		  stores.dispatch('hideLoading')
		  return response;
		}, function (error) {

		  return Promise.reject(error);
		});

	Vue.prototype.$http = axios  //����ҳ����ʹ��axios��ʱ��ֱ��  this.$http�Ϳ�����
	
	
	������Դ
		 this.$http.get('http://localhost:8080/static/data/index.data').then(function(res) {
                    console.log(res);
                }).catch(function(err) {
                    console.log(err);
                });
	
		������Դ�Ƿ���dataĿ¼�£���������ʧ�ܣ����ŵ���static�ļ���������ɹ�
		
		�ٶȷ�������ļ�����vue-cli���÷��������Ⱪ¶�ľ�̬�ļ���
		
		���Ҳ�����Լ�����
			��build/dev-server.jsĿ¼��
			
			app.use('/example',express.static(''./example));   //�����example���Զ�����ļ���
	
	