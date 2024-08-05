<template>
    <div class="history">
      <div class="history-item">
        <p>Working at:</p>
        <ul class="history-list">
          <li class="historyDescription">
            <a href="https://softsuite.ng/" class="button-link">
              <img class="historyImage" :src="require('@/assets/images/softsuite.png')" alt="SoftSuite logo">SoftSuite
            </a>
          </li>
        </ul>
      </div>
      <div class="history-item">
        <p>Creator of:</p>
        <ul class="history-list">
          <li class="historyDescription">
            <a href="https://pypi.org/project/email-in-validate/" class="button-link">
              <img class="historyImage" :src="require('@/assets/images/Python-Symbol.png')" alt="Python Symbol">email-in-validate
            </a>
          </li>
          <li class="historyDescription">
            <a href="http://goodiesridesgo.org/login" class="button-link">
              GoodiesRides
            </a>
          </li>
        </ul>
      </div>
      <div class="history-item">
        <p>Core team of:</p>
        <ul class="history-list">
          <li class="historyDescription">
            <a href="https://softsuite.ng/" class="button-link">
              <img class="historyImage" :src="require('@/assets/images/softsuite.png')" alt="SoftSuite logo">SoftSuite
            </a>
          </li>
        </ul>
      </div>
      <div class="history-item">
        <p>Maintaining:</p>
        <ul class="history-list">
          <li class="historyDescription">
            <a href="https://pypi.org/project/email-in-validate/" class="button-link">
              <img class="historyImage" :src="require('@/assets/images/Python-Symbol.png')" alt="Python Symbol">email-in-validate
            </a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HistorySection'
  }
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
  