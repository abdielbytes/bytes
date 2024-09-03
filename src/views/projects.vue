<template>
  <div class="prd">
    <h1>Projects</h1>

    <p>Projects I have created, contributed to, or currently maintain.</p>
    
    <!-- Category Filters -->
    <div class="category-filters">
      <button v-for="cat in categories" :key="cat" @click="filterByCategory(cat)">
        {{ cat }}
      </button>
    </div> 

    <!-- Projects Display -->
    <div class="projects">
      <div v-for="category in uniqueCategories" :key="category" class="category-section">
        <!-- Category Header -->
        <h1 class="category-header" v-if="category !== 'all'">{{ category }}</h1>

        <!-- Projects for the Current Category -->
        <div class="projects-grid">
          <div v-for="project in filteredProjects(category)" :key="project.id" class="project-card">
            <div>
              <img :src="getImagePath(project.image)" :alt="project.name" class="project-image" />
            </div>
            <div class="project-content">
              <h2>{{ project.name }}</h2>
              <p>{{ project.description }}</p>
              <div class="project-links">
                <a :href="project.link" target="_blank">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import projectsData from '@/assets/data/projects.json'; 
  
  export default {
    name: 'ProjectsPage',
    data() {
      return {
        projects: projectsData,
        selectedCategory: 'all',
        categories: ['all', 'web apps', 'plugins', 'games', 'cli'] 
      };
    },
    computed: {
      uniqueCategories() {
        const categories = new Set(this.projects.map(project => project.category));
        return ['all', ...categories];
      },
      filteredProjects() {
        return category => {
          if (this.selectedCategory === 'all' || category === this.selectedCategory) {
            return this.projects.filter(project => project.category === category);
          }
          return [];
        };
      }
    },
    methods: {
    filterByCategory(category) {
      this.selectedCategory = category;
    },
    getImagePath(image) {
      return require(`@/assets/images/${image}`);
    }
  }
};
  </script>
  
<style scoped>
  

  .prd{
    text-align: center;
  }

  .category-filters {
  text-align: center;
  margin-bottom: 20px;
}

.category-filters button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  background-color: #131313;
  color: #fff;
  cursor: pointer;
}

.category-filters button:hover {
  background-color: #f9f9f9;
  color: black;
}

.category-section {
  margin-bottom: 40px;
}

.category-header {
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 24px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three equal-width columns */
  gap: 20px;
  justify-content: center;
}

.project-card {
  border-radius: 8px;
  width: 350px;
  height: 100px;
  display: flex;
  flex-direction: row; /* Horizontal layout */
  align-items: center; /* Center content vertically */
  transition: border 0.3s ease;
  border: 2px solid transparent;
  text-align: left; /* Align text to the left */
  padding: 10px; /* Add padding for spacing */
}

.project-card:hover {
  border: 2px solid #ffffff;
}

.project-image {
  width: 60px; /* Set the width of the image */
  height: 60px; /* Set the height of the image */
  margin-right: 10px; /* Add space between image and text */
  object-fit: cover; /* Ensure the image fits within the specified size */
}

.project-content {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  flex-grow: 1;
}

.project-content h2 {
  margin: 0; /* Remove margin to save space */
  font-size: 14px; /* Reduced font size */
}

.project-content p {
  margin: 2px 0;
  font-size: 12px; /* Reduced font size */
  text-overflow: ellipsis; /* Handle overflow text */
  white-space: nowrap; /* Prevent text wrapping */
  overflow: hidden;
}

.project-links {
  margin-top: 5px;
  display: flex;
  justify-content: center;
}

.project-links a {
  color: #5f6060;
  text-decoration: none;
  font-weight: bold;
  font-size: 12px; /* Reduced font size */
}

.project-links a:hover {
  text-decoration: underline;
}



</style>
  