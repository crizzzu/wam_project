import axios from 'axios';

const state = {
    posts: []
};

const getters = {
    allPosts: state => state.posts
};

const actions = {
    loadPosts({commit}) {
        axios.get("https://private-517bb-wad20postit.apiary-mock.com/posts")
            .then(response => {
                console.log(response.data)
                let posts = response.data
                commit('setPosts', posts)
            })
            .catch(error => {
                console.log(error);
            })
    },

};

const mutations = {
    setPosts: (state, posts) => (state.posts = posts)
};

export default {
    state,
    getters,
    actions,
    mutations
};