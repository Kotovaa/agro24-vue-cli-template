import Vue from 'vue';
import Vuex from 'vuex';

// Register vuex
Vue.use(Vuex);

// Import main module
import { state, mutations, actions, getters } from './modules/main';

// Import other modules
import modules from './modules';

// Create store instance
const store = new Vuex.Store({
    modules,
    state,
    mutations,
    actions,
    getters
});

export default store;
