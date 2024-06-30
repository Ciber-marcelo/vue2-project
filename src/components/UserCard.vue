<template>
   <div class="card"> 
      <div class="rectangle"></div>
      <div class="container">
         <img :src='photo' alt="user-img" class="photo">
         <div class="info">
            <div class="userNumber">#{{ id }}</div>
            <div class="name">{{ name }}</div>
            <div class="email">{{ email }}</div>
         </div>
         <div class="icons">
            <button class="btn">
               <img src="../assets/icons/editBox.png" style="width: 17px; height: 17px;" alt="edit">
            </button>
            <button class="btn">
               <img src="../assets/icons/trash.png" style="width: 15px; height: 17px;" alt="trash">
            </button>
            <button class="btn">
               <img src="../assets/icons/eye.png" style="width: 22px; height: 16px;" alt="view">
            </button>
         </div>
      </div>
   </div>
</template>

<script>

export default {
   name: 'UserCard',
   props: {
      // msg: String,
      id: Number,
      photo: String,
      name: String,
      email: String
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

.name {
   margin: 10px 0 3px 0;
   font-size: 18px;
   color: #000000;
   font-weight: 600;
}

.icons {
   display: flex;
   align-items: center;
   gap: 12px;

   @media (max-width: 600px) {
      flex-direction: column;
      justify-content: space-between;
      gap: 0;
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
</style>