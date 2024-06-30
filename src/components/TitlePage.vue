<template>
      <div>{{ msg }}</div>
</template>

<script>
export default {
   name: 'TitlePage',
   props: {
      msg: {
         type: String,
         required: true
      } 
   }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

div {
   color: #000000;
   font-size: 50px;
   font-weight: bold;
   font-family: "Montserrat", sans-serif;
}
</style>