import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      users: []
   },
   mutations: {
      SET_USERS(state, users) {
         state.users = users.map((user) => {
            return ({
               id: user.id,
               email: user.email,
               first_name: user.first_name,
               last_name: user.last_name,
               avatar: user.avatar
            })
         });
      },
      ADD_USER(state, user) {
         state.users.push({
            id: parseInt(user.id),
            email: user.first_name.toLowerCase() + '@reqres.in',
            first_name: user.first_name,
            last_name: '',
            avatar: 'https://steamuserimages-a.akamaihd.net/ugc/1840293437825343403/5B80946AB11E24DE4D798CF82F1B1C2E3EB36ADA/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
         });
      },
   },
   actions: {
      async fetchUsers({ commit }) {
         try {
            const response = await axios.get('https://reqres.in/api/users?page=1');
            commit('SET_USERS', response.data.data);
         } catch (error) {
            console.error('Erro ao buscar usuários:', error);
         }
      },

      async createUser({ commit }, user) {
         try {
            const response = await axios.post('https://reqres.in/api/users', user);
            commit('ADD_USER', response.data);
         } catch (error) {
            console.error('Erro ao criar usuário:', error);
         }
      },
   },
   getters: {
      users: state => state.users,
   }
});