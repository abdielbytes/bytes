<template>
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
</template>

<script>
import historyData from '@/assets/data/history.json';

export default {
  name: 'HistorySection',
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
};
</script>


<style scoped>
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
