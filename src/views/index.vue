<template>
    <div class="intro">
      <h1>Abdiel John Wilson</h1>
      <p>Hey, I'm Abdiel, a die-hard open-source aficionado.</p>
    </div>
    <div class="history">
    <div v-for="(historyItem, index) in historyData.history" :key="index" class="history-item">
      <p>{{ historyItem.title }}</p>
      <ul class="history-list">
        <li v-for="(item, idx) in historyItem.items" :key="idx" class="historyDescription">
          <a :href="item.url" class="button-link">
            <img v-if="item.image" class="historyImage" :src="getImagePath(item.image)" :alt="item.alt">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
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
  import historyData from '@/assets/data/history.json';

  export default {
    name: 'IndexPage',

    data() {
    return {
      historyData
    };
  },
  methods: {
    getImagePath(image) {
      return require(`@/assets/images/${image}`);
    }
  }
}

  </script>
  
  <style scoped>

.intro h1{
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
  font-style: normal;
}
.intro p {
    font-size: 18px;
    color: #ffffff;
}
.stuffs div + div {
    margin-top: 50px;
  }
  .history {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  line-height: 0.3em;
}

.history-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.history-item p {
  font-weight: bold;
  margin: 0;
}

.history-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0.2rem;
}

.history-list .historyDescription {
  margin: 0;
  padding: 0;
}

.button-link {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: rgba(35, 36, 38, 0.5);
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  text-decoration: none;
  transition: background-color 0.2s;
  height: 15px;
}

.button-link:hover {
  background-color: rgba(75, 85, 99, 0.5);
}

.historyImage {
  max-width: 25px;
  margin-right: 0.5rem;
}

.main h1 {
  font-size: 36px;
  color: #ffffff;
}
  </style>
  

