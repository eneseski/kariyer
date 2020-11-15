import axios from "axios"
import Vuex from "vuex"


const store = () => {
    return new Vuex.Store({
        state: {
            users: [],
            searchKeyword: ""
        },
        mutations: {
            setUser(state, users) {
                state.users = users
            },
            searchKeyword(state, payload) {
                state.searchKeyword = payload
            }
        },
        actions: {
            nuxtServerInit(vuexVal, val) {
                return axios
                    .get("https://jsonplaceholder.typicode.com/users/")
                    .then(response => {
                        vuexVal.commit('setUser', response.data)
                    })
                    .catch(error => {
                        console.log("Problem var. Uyarı göster kullanıcıya", error)
                    })
            },
            searchKeyword({ commit }, payload) {
                commit('searchKeyword', payload)
            }
        },
        getters: {
            getUsers(state) {
                return state.users
            },
            filteredKeyword(state) {
                return state.users.filter((users) => {
                    return users.name.includes(state.searchKeyword);
                });
            },
            filteredUserName(state) {
                return state.users.filter((users) => {
                    return users.username.includes(state.searchKeyword);
                });
            }
        },
    })
}

export default store