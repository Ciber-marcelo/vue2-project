<template>
   <div class="list">
      <UserCard v-for="user in users" :key="user.id" :id="user.id" :photo="user.avatar" :name="user.first_name + ' ' + user.last_name"
         :email="user.email" />
   </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import UserCard from './UserCard.vue';

export default {
   name: 'UserList',
   components: {
      UserCard
   },

   computed: {
      ...mapState(['users']),
   },

   //O ciclo de vida "created", é chamado asim que o componente é criado (ele é parecido com o useEfect do React).
   created() {
      this.fetchUsers();
   },

   methods: {
      ...mapActions(['fetchUsers', 'createUser']),
      submitUser() {
         this.createUser(this.newUser);
      },
   },
};
</script>

<style scoped>
.list {
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   gap: 15px;
   margin-bottom: 95px;
}
</style>