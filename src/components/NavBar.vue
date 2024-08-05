<template>
    <div class="navParent">
      <div>
        <img src="@/assets/images/favicon.png" alt="Logo">
    </div>
      <div class="navChild">
        <ul class="navArea">
          <li><a href="https://medium.com/@abdielbytes">Blog</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Sponsors</a></li>
          <li><a href="chat"><i class="fa fa-comments-o" aria-hidden="true"></i></a></li>
          <li><a href="x"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
          <li><a href="demos"><i class="fa fa-info-circle" aria-hidden="true"></i></a></li>
          <li><a href="github"><i class="fa fa-github" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
.navParent {
    background-color: #000000;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    height: 80px;
}

.navParent img {
    height: 100%;
    width: 80px;
}

.navChild {
    display: flex;
    align-items: center;
}

.navArea {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
}

.navArea li {
    display: inline;
}

.navArea li a {
    text-decoration: none;
    color: #a19d9d;
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

.navArea li a:hover {
    color: #ffffff;
}  </style>
  