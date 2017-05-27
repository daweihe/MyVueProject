import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import mutations from './mutations';
import actions from './action'
//需要导出Store对象
export default new Vuex.Store({
    modules: {
        mutations
    },
    actions
});