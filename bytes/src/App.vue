<template>
  <div id="app">
    <NavBar />
    <div class="main">
    <IntroSection />
    <!-- <History /> -->
    <!-- <Stuffs /> -->
    <!-- <FindMe /> -->
    <!-- <Footer /> -->
  </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import IntroSection from './components/Intro.vue'
// import History from './components/History.vue'
// import Stuffs from './components/Stuffs.vue'
// import FindMe from './components/FindMe.vue'
// import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    IntroSection,
    // History,
    // Stuffs,
    // FindMe,
    // Footer
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
    /* width: 800px; */
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}
</style>
