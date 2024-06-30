<template>
  <div class="home">
    <UserCreate />
    <UserList/>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue';
import UserCreate from '@/components/UserCreate.vue';

export default {
  name: 'HomeUsers',
  components: {
    UserCreate,
    UserList,
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>