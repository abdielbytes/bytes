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
      <a href="mailto:wilsonabdiel86@gmail.com">wilsonabdiel86@gmail.com</a>
      <div class="sponsor-button">
        <a href="https://github.com/sponsors/abdielbytes" class="sponsor-link"><i class="fa fa-heart-o" aria-hidden="true"></i>  Sponsor Me</a>
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
  