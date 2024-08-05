<template>
    <div class="findme">
      <p>Find me on</p>
      <p>
        <a href="https://github.com/abdielbytes">GitHub</a>
        <a href="https://x.com/abdielbytes">X.com</a>
        <a href="https://web.facebook.com/abdiel.wilson.79/">Facebook</a>
        <a href="#">YouTube</a>
        <a href="#">Medium</a>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FindMe'
  }
  </script>
  
  <style scoped>
  .findme {
    line-height: 1.5em; /* Adjusted for better readability */
  }
  
  .findme a {
    text-decoration: underline;
    margin-right: 10px; /* Add some space between links */
    color: #ffffff; /* Ensure links are visible on a dark background */
    transition: color 0.3s;
  }
  
  .findme a:hover {
    color: #a19d9d; /* Change color on hover for better user experience */
  }
  </style>
  