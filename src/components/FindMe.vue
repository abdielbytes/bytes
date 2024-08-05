<template>
  <div class="findme">
    <p>Find me on</p>
    <p>
      <a href="https://github.com/abdielbytes">GitHub</a>
      <a href="https://x.com/abdielbytes">X.com</a>
      <a href="https://web.facebook.com/abdiel.wilson.79/">Facebook</a>
      <a href="#">YouTube</a>
      <a href="https://www.linkedin.com/in/abdielbytes/">LinkedIn</a>
      <a href="https://medium.com/@abdielbytes">Medium</a>
      <a href="https://www.instagram.com/abdielbytes/">Instagram</a>
      <a href="https://t.me/+OrFeujJARUY0MmFk">Telegram</a>
    </p>
    <p>Or mail me at</p>
    <a href="mailto:your.email@example.com">wilsonabdiel86@gmail.com</a>
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
