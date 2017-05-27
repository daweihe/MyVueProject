import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Follow from '../components/Follow.vue'
import Column from '../components/Column.vue'
import Userinfo from '../components/userinfo.vue'
import UserLogin from '../components/UserLogin.vue'
import UserReg from '../components/UserReg.vue'
import Loading from '../components/loading'
import Article from '../components/Article.vue'

/*import filters from '../filters'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
*/

Vue.use(Router)
Vue.use(Loading)

export default new Router({
    mode: 'history', //切换路径模式，变成history模式
    scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        }, {
            path: '/follow',
            component: Follow
        },
        {
            path: '/column',
            component: Column
        }, {
            path: '/userinfo',
            component: Userinfo
        }, {
            path: '/user-login',
            component: UserLogin
        }, {
            path: '/user-reg',
            component: UserReg
        }, {
            path: '/article/:id',
            component: Article
        }
    ]
})