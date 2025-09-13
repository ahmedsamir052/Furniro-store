<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="sr-only"> </span>
  </div>
  <div v-else class="browse">
    <h1>Browse the Range</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div class="cards">
      <div
        v-for="product in products.slice(3, 6)"
        :key="product.id"
        class="card"
      >
        <img :src="product.image_path" />
        <h5>{{ product.wood_type }}</h5>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getAllProducts } from "@/services/api";

const products = ref([]);
const loading = ref(true);
onMounted(async () => {
  products.value = await getAllProducts();
  loading.value = false;
});
</script>

<style scoped>
.browse {
  width: 86%;
  margin: auto;
  margin-bottom: 2rem;
}
.browse h1 {
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  color: #333333;
}
.browse p {
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #666666;
}
.cards {
  display: flex;
  justify-content: space-between;
  width: 93%;
  margin: auto;
  margin-top: 4rem;
}
.card {
  border: none;
}
.card img {
  width: 96.5%;
  height: 100%;
  border-radius: 10px;
}
.card h5 {
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  margin-top: 1rem;
}
@media screen and (max-width: 576px) {
  .browse {
    margin-bottom: 1rem;
  }
  .browse h1 {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 0;
  }
  .browse p {
    font-weight: 400;
    font-size: 10px;
    margin-bottom: 0;
  }
  .cards {
    margin-top: 1rem;
  }
  .card img {
    width: 90%;
    height: auto;
    border-radius: 10px;
  }
  .card h5 {
    font-weight: 500;
    font-size: 13px;
    margin-top: 0.5rem;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .browse {
    margin-bottom: 2rem;
  }
  .browse h1 {
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 0;
  }
  .browse p {
    font-size: 11px;
  }
  .cards {
    margin-top: 1rem;
  }
  .card img {
    width: 95%;
    height: auto;
  }
  .card h5 {
    font-size: 12px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .browse {
    margin-bottom: 2rem;
  }
  .browse h1 {
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 0.2rem;
  }
  .browse p {
    font-size: 16px;
  }
  .cards {
    margin-top: 1rem;
  }
  .card img {
    width: 95%;
    height: auto;
  }
  .card h5 {
    font-size: 17px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1440px) {
  .browse h1 {
    font-weight: 600;
    font-size: 29px;
    margin-bottom: 0.2rem;
  }
  .browse p {
    font-size: 18px;
  }
  .cards {
    margin-top: 3rem;
  }
  .card img {
    width: 95%;
    height: auto;
  }
  .card h5 {
    font-size: 21px;
  }
}
</style>
