import axios from 'axios';

const state = {
    profiles: []
};

const getters = {
    allProfiles: state => state.profiles
};

const actions = {
    loadProfilesData({commit}) {
        axios.get("https://private-517bb-wad20postit.apiary-mock.com/profiles")
            .then(response => {
                console.log(response.data)
                let profiles = response.data
                commit('setProfiles', profiles)
            })
            .catch(error => {
                console.log(error);
            })
    }
};

const mutations = {
    setProfiles: (state, profiles) => (state.profiles = profiles)
};

export default {
    state,
    getters,
    actions,
    mutations
};