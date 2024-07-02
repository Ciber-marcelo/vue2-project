<template>
  <div class="details">
    <div class="container1">
      <TitlePage :msg='"#" + user.id' />
      <router-link to="/">
        <button class="btn">Voltar</button>
      </router-link>
    </div>

    <div class="container2">
      <img :src='user.avatar' alt="img" class="image">
      <div class="containerText">
        <div class="subText">Primero nome</div>
        <div class="text">{{ user.first_name }}</div>
      </div>
      <div class="containerText">
        <div class="subText">Último nome</div>
        <div class="text">{{ user.last_name }}</div>
      </div>
    </div>

    <div class="container3">
      <div class="containerText">
        <div class="subText">Endereço de email</div>
        <div class="text">{{ user.email }}</div>
      </div>
      <div class="containerText">
        <div class="subText">Link de avatar</div>
        <div class="text">{{ user.avatar }}</div>
      </div>
      <div class="containerText">
        <div class="subText">Link de suporte</div>
        <div class="text">{{ support.url }}</div>
      </div>
      <div class="containerText">
        <div class="subText">Descrição do usuário</div>
        <div class="text">{{ support.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import TitlePage from '@/components/TitlePage.vue';
import axios from 'axios';

export default {
  name: 'DetailsUser',
  components: {
    TitlePage
  },
  props: ['id'],

  data() {
    return {
      user: '',
      support: '',
    };
  },
  
  async created() {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${this.id}`);
      this.user = response.data.data;
      this.support = response.data.support;
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 95px;
}

.container1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 588px;
  margin-bottom: 42px;
}

.container2 {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 34px;
  width: 100%;
  max-width: 588px;
  margin-bottom: 30px;

  @media (max-width: 400px) {
    gap: 17px;
  }
}

.container2 img {
  width: 120px;
  height: 120px;
  border-radius: 5px;
}

.container3 {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 588px;
  overflow: hidden;
  white-space: nowrap;
}

.containerText {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 7px;
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
}

.container2 .containerText{
  @media (max-width: 400px) {
    align-items: center;
  }
}

.subText {
  font-size: 14px;
  color: #797979;
}

.text {
  font-weight: 600;
}

.btn {
  width: 185px;
  height: 55px;
  background-color: #F7F7F7;
  border: none;
  border-radius: 5px;
  color: #000000;
  font-size: 15px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
}

.btn:hover {
  background-color: #d8d8d8;
}
</style>