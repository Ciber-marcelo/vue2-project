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
               avatar: user.avatar,
               job: ''
            })
         });
      },
      ADD_USER(state, user) {
         state.users.push({
            id: parseInt(user.id),
            email: user.first_name.toLowerCase() + '@reqres.in',
            first_name: user.first_name,
            last_name: '',
            job: user.job,
            avatar: 'https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-avatar-ou-icone-de-pessoa-simbolo-de-perfil-silhueta-de-genero-neutro-foto-de-avatar-de-botao-de-circulo-ilustracao-vetorial-imagem-de-stock_797523-1722.jpg'
         });
      },
      UPDATE_USER(state, updatedUser) {
         //'findIndex retorna o indice de um usuauro dentro de "users", mas se n encontrar nenhum ele retorna "-1"
         const index = state.users.findIndex(user => user.id === updatedUser.id);
         if (index !== -1) {
            //"vue.set" é uma maneira melhor do que a convencional para atualizar um item, pesquise mais sobre se tiver duvidas
            Vue.set(state.users, index, updatedUser);
         }
      },
      DELETE_USER(state, userId) {
         state.users = state.users.filter(user => user.id !== userId);
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
      async updateUser({ commit }, user) {
         try {
            const response = await axios.put(`https://reqres.in/api/users/${user.id}`, user);
            commit('UPDATE_USER', response.data);
         } catch (error) {
            console.error('Error updating user:', error);
         }
      },
      async deleteUser({ commit }, userId) {
         try {
            await axios.delete(`https://reqres.in/api/users/${userId}`);
            commit('DELETE_USER', userId);
         } catch (error) {
            console.error('Error deleting user:', error);
         }
      },
   },
   getters: {
      users: state => state.users,
   }
});