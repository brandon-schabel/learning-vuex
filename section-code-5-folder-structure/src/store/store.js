import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

//this will import all actions as a object named actions
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

//since everything gets combined into one file you have to be careful with naming convetions, you can create 
// a types.js file to assign unique file naming 
//vuex version 2.1+ has auto-namespacing feature to avoid having to setup all the namespaces manually 
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    //since we imported actions, mutations, getters as objects we can use them just by calling it here
    getters,
    mutations,
    actions,
    modules: {
        //below we import the module state related stuff 
        counter: counter
    }
});