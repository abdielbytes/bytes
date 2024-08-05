<template>
  <div class="findme">
    <p>Find me on</p>
    <p class="linkes">
      <a href="https://github.com/abdielbytes">GitHub</a>
      <a href="https://x.com/abdielbytes">X.com</a>
      <a href="https://web.facebook.com/abdiel.wilson.79/">Facebook</a>
      <a href="#">YouTube</a>
      <a href="https://www.linkedin.com/in/abdielbytes/">LinkedIn</a>
      <a href="https://medium.com/@abdielbytes">Medium</a>
      <a href="https://www.instagram.com/abdielbytes/">Instagram</a>
      <a href="https://t.me/+OrFeujJARUY0MmFk">Telegram</a>
      <a href="https://dev.to/abdielbytes">Dev.to</a>
    </p>
    <p>Or mail me at</p>
    <a href="mailto:your.email@example.com">wilsonabdiel86@gmail.com</a>
    <div class="sponsor-button">
      <a href="https://github.com/sponsors/abdielbytes" class="sponsor-link"><i class="fa fa-heart-o" aria-hidden="true"></i>  Sponsor Me</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindMe'
}
</script>

<style scoped>
.findme {
  line-height: 1.5em; 
}

.linkes{
  text-decoration: underline;
}
.findme a {
  margin-right: 10px; 
  color: #ffffff; 
  transition: color 0.3s;
}

.findme a:hover {
  color: #a19d9d; 
}
.sponsor-button {
  margin-top: 20px;
}

.sponsor-link {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 10px; 
  backdrop-filter: blur(10px); 
  color: #ffffff; 
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.sponsor-link:hover {
  background: rgba(255, 255, 255, 0.3); 
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); 
}

</style>
