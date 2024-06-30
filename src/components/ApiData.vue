<template>
   <div class="api">
      <UserCard v-for="item in items" :key="item.id" :id="item.id" :photo="item.avatar" :name="item.first_name"
         :email="item.email" />
   </div>
</template>

<script>
import axios from 'axios';
import UserCard from './UserCard.vue';

export default {
   name: 'ApiData',
   components: {
      UserCard
   },

   //os dados são armazenados em "items", utilizando a propriedade "data()""
   data() {
      return {
         items: []
      };
   },

   //O ciclo de vida "created", é chamado asim que o componente é criado (ele é parecido com o useEfect do React).
   created() {
      this.fetchData();
   },

   methods: {
      async fetchData() {
         try {
            const response = await axios.get('https://reqres.in/api/users?page=1');
            this.items = response.data.data;
            console.log(this.items)
         } catch (error) {
            console.error('Erro ao buscar os dados:', error);
         }
      }
   }
};
</script>

<style scoped>
.api {
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   gap: 15px;
}
</style>