<template>
   <div class="card">
      <div class="rectangle"></div>
      <div class="container">
         <img :src='photo' alt="user-img" class="photo">

         <div class="info" v-show="!edit">
            <div class="userNumber">#{{ id }}</div>
            <div class="name">{{ name }}</div>
            <div class="email">{{ email }}</div>
         </div>

         <form @submit.prevent="submitEdit" class="info2" v-show="edit">
            <div class="userNumber">#{{ id }}</div>
            <div>Nome:</div>
            <input v-model="user.first_name" class="input">
            <div>Email:</div>
            <input v-model="user.email" class="input">
            <div>Função:</div>
            <input v-model="user.job" class="input">
            <button type="submit" class="formButton">Atualizar</button>
         </form>

         <div class="icons">
            <button @click="toggleEdit" class="btn">
               <img src="../assets/icons/editBox.png" style="width: 17px; height: 17px;" alt="edit">
            </button>
            <button @click="deleteUserHandler(user.id)" class="btn">
               <img src="../assets/icons/trash.png" style="width: 15px; height: 17px;" alt="trash">
            </button>
            <!-- o "button" de view só aparece pros usuarios da propia api, ele n aparecera para usuarios criados -->
            <button @click="goToDetailsUser(id)" class="btn" v-show="id <= 6">
               <img src="../assets/icons/eye.png" style="width: 22px; height: 16px;" alt="view">
            </button>
         </div>
      </div>
   </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
   name: 'UserCard',
   props: {
      id: Number,
      photo: String,
      name: String,
      email: String,
      job: String,
   },
   data() {
      return {
         edit: false,
         user: {
            id: this.id,
            avatar: this.photo,
            first_name: this.name,
            last_name: '',
            email: this.email,
            job: this.job
         },
      };
   },
   computed: {
      ...mapState(['users']),
   },
   methods: {
      goToDetailsUser(userId) {
         this.$router.push({ name: 'User', params: { id: userId } })
      },
      toggleEdit() {
         this.edit = !this.edit;
      },
      ...mapActions(['updateUser', 'deleteUser']),
      submitEdit() {
         this.updateUser(this.user);
         this.edit = !this.edit;
      },
      deleteUserHandler(userId) {
         this.deleteUser(userId);
      },
   }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.card {
   display: flex;
   width: 100%;
   max-width: 592px;
}

.rectangle {
   width: 4px;
   min-width: 4px;
   height: 20px;
   margin-top: 20px;
   background-color: rgba(0, 0, 0, 1);
}

.container {
   display: flex;
   gap: 25px;
   width: 100%;
   box-sizing: border-box;
   padding: 20px 30px;
   border-radius: 5px;
   background-color: #f7f7f7;
}

.photo {
   width: 80px;
   height: 80px;
   border-radius: 5px;
}

.info {
   display: flex;
   flex-direction: column;
   align-items: start;
   width: 100%;
   padding: 3px 0 2px 0;
   color: #797979;
   font-family: "Montserrat", sans-serif;
   overflow: hidden;
   white-space: nowrap;
}

.info2 {
   display: flex;
   flex-direction: column;
   align-items: start;
   gap: 6px;
   width: 100%;
   padding-top: 3px;
   font-family: "Montserrat", sans-serif;
   overflow: hidden;
}

.name {
   margin: 10px 0 3px 0;
   font-size: 18px;
   color: #000000;
   font-weight: 600;
}

.icons {
   display: flex;
   gap: 12px;
   padding-top: 32px;

   @media (max-width: 600px) {
      flex-direction: column;
      gap: 6px;
      padding-top: 0px;
   }
}

.btn {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 22px;
   height: 22px;
   background-color: #f7f7f7;
   padding: 0;
   border: none;
   border-radius: 5px;
   cursor: pointer;
}

.btn:hover {
   background-color: #d3d3d3;
}

.input {
   width: 100%;
   height: 32px;
   padding-left: 10px;
   border: 1px solid #E5E5E5;
   border-radius: 5px;
   box-sizing: border-box;
}

.formButton {
   width: 100%;
   height: 30px;
   background-color: #000000;
   border: none;
   border-radius: 5px;
   color: #ffffff;
   margin-top: 14px;
   font-size: 14px;
   font-weight: 600;
   font-family: "Montserrat", sans-serif;
   white-space: nowrap;
}

.formButton:hover {
   opacity: 0.8;
}
</style>