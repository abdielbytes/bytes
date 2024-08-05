<template>
    <div class="under-construction">
      <h1>Under Construction</h1>
      <p>We are working hard to bring this page to you. Please check back later!</p>
      <img src="@/assets/images/under-construction.png" alt="Under Construction">
    </div>
  </template>
  
  <script>
  export default {
    name: 'UnderConstruction'
  }
  </script>
  
  <style scoped>
  .under-construction {
    text-align: center;
    padding: 50px;
    background-color: #000;
    color: #fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .under-construction img {
    margin-top: 20px;
    width: 200px;
    height: auto;
  }
  </style>
  