<template>
   <div class="create">
      <div class="containerCreate">
         <TitlePage msg='Usuários' />
         <button @click="toggleVisible" class="btn" v-show="!visible">Novo usuário</button>
         <button @click="toggleVisible" class="btn2" v-show="visible">Cancelar</button>
      </div>

      <form @submit.prevent="submitUser" class="containerForm" v-show="visible">
         <div class="containerInput">
            <div class="text">Nome do usuário</div>
            <input v-model="newUser.first_name" placeholder="Nome" required class="input">
         </div>

         <div class="containerInput">
            <div class="text">Função do usuário</div>
            <select v-model="newUser.job" required class="input" id="hidden">
               <option value="" selected hidden>Selecione a função</option>
               <option value="Desenvolvedor">Desenvolvedor</option>
               <option value="Gerente de Projetos">Gerente de Projetos</option>
               <option value="Tech Lead">Tech Lead</option>
               <option value="UI/UX Designer">UI/UX Designer</option>
            </select>
         </div>

         <button type="submit" class="btn">Salvar dados do usuário</button>
      </form>
   </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TitlePage from '../components/TitlePage.vue';

export default {
   name: 'UserCreate',
   components: {
      TitlePage
   },
   data() {
      return {
         newUser: {
            first_name: '',
            job: '',
         },
         visible: false,
      };
   },
   computed: {
      ...mapState(['users']),
   },
   methods: {
      ...mapActions(['fetchUsers', 'createUser']),
      submitUser() {
         this.createUser(this.newUser);
      },
      toggleVisible() {
         this.visible = !this.visible;
      }
   },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.create {
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   margin-top: 95px;
}

.containerCreate {
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   max-width: 592px;
   margin-bottom: 40px;

   @media (max-width: 500px) {
      flex-direction: column;
      gap: 10px;
   }
}

.containerCreate button {
   max-width: 185px;
}

.containerForm {
   display: flex;
   flex-direction: column;
   align-items: start;
   gap: 24px;
   width: 100%;
   max-width: 592px;
   margin-bottom: 40px;
}

.btn {
   width: 100%;
   height: 55px;
   background-color: #000000;
   border: none;
   border-radius: 5px;
   color: #ffffff;
   font-size: 15px;
   font-weight: 600;
   font-family: "Montserrat", sans-serif;
}

.btn:hover {
   opacity: 0.8;
}

.btn2 {
   width: 100%;
   height: 55px;
   background-color: #F7F7F7;
   border: none;
   border-radius: 5px;
   color: #000000;
   font-size: 15px;
   font-weight: 600;
   font-family: "Montserrat", sans-serif;
}

.btn2:hover {
   background-color: #d3d3d3;
}

.containerInput {
   display: flex;
   flex-direction: column;
   align-items: start;
   gap: 12px;
   width: 100%;
}

.text {
   font-size: 16px;
   font-weight: 600;
   font-family: "Montserrat", sans-serif;
}

.input {
   width: 100%;
   height: 55px;
   padding-left: 20px;
   border: 1px solid #E5E5E5;
   border-radius: 5px;
   box-sizing: border-box;
}
</style>