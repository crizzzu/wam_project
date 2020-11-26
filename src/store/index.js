import Vuex from 'vuex';
import Vue from 'vue';
import users from './modules/users';
import profiles from './modules/profiles';
import posts from './modules/posts';



Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        users,
        profiles,
        posts
    }
});