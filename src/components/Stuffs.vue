<template>
    <div class="stuffs">
      <div>
        <p>
          Engineering cool stuff is something I particularly love doing. You can find a full list of my projects 
          <a href="#">here</a>. I'm also a writer and I write lots and lots of poetry, check out my books 
          <a href="#">here</a>. And oh yeah I give people demos too, check them out 
          <a href="#">here</a>.
        </p>
      </div>
      <div>
        <p>
          I write blog posts about open-source, coding, and basically anything that interests me in tech. And I post 
          videos on YouTube too.
        </p>
      </div>
      <div>
        <p>
          Outside programming, I enjoy baking, watching anime, obsessing over football and my favorite, gaming and chess 
          too in case you're one of those that do not consider chess gaming.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StuffsSection'
  }
  </script>
  
  <style scoped>
  .stuffs div + div {
    margin-top: 50px;
  }
  </style>
  