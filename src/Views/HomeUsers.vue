<template>
  <div class="home">
    <UserCreate />
    <ApiData/>
  </div>
</template>

<script>
import ApiData from '@/components/ApiData.vue';
import UserCreate from '@/components/UserCreate.vue';

export default {
  name: 'HomeUsers',
  components: {
    UserCreate,
    ApiData,
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 15px;
}
</style>