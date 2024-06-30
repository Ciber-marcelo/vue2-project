<template>
   <div class="create">
      <div class="containerCreate">
         <TitlePage msg='Usuários' />
         <ButtonPage name="Novo usuário" />
      </div>
   </div>
</template>

<script>
import TitlePage from '../components/TitlePage.vue';
import ButtonPage from '@/components/ButtonPage.vue';

export default {
   name: 'UserCreate',
   components: {
      TitlePage,
      ButtonPage
   },
   // props: {
   //    id: Number,
   //    photo: String,
   //    name: String,
   //    email: String
   // }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.create {
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   gap: 15px;
}

.containerCreate {
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   max-width: 592px;
   margin-bottom: 25px;

   @media (max-width: 500px) {
      flex-direction: column;
      gap: 10px;
   }
}
</style>