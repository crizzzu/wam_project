import axios from 'axios';

const state = {
    users: []
};

const getters = {
    allUsers: state => state.users
};

const actions = {
    loadUsersData({commit}) {
        axios.get("https://private-517bb-wad20postit.apiary-mock.com/users/1")
            .then(response => {
                console.log(response.data)
                let users = response.data
                commit('setUsers', users)
            })
            .catch(error => {
                console.log(error);
            })
    }
};

const mutations = {
    setUsers: (state, users) => (state.users = users)
};

export default {
    state,
    getters,
    actions,
    mutations
};