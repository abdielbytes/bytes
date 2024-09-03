<template>
  <div id="app">
    <NavBar />
    <div class="main">
      <router-view />
    </div>
    <FooterSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterSection,
  }
}
</script>

<style>
html, body, #app {
  background-color: #000000;
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 400;
  font-style: normal;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main {
    padding: 50px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}
.main h1 {
    font-size: 36px;
    color: #ffffff;
}
a {
    text-decoration: none;
    color: #ffffff;
}
</style>
