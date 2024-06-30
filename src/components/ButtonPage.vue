<template>
   <button class="button">
      {{ name }}
   </button>
</template>

<script>
export default {
   name: 'ButtonPage',
   props: {
      name: {
         type: String,
         required: true
      }
   }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.button {
   width: 185px;
   height: 55px;
   background-color: #000000;
   border: none;
   border-radius: 5px;
   color: #ffffff;
   font-size: 15px;
   font-weight: 600;
   font-family: "Montserrat", sans-serif;
}

.button:hover {
   opacity: 0.8;
}
</style>