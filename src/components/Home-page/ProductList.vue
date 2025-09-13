<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="sr-only"> </span>
  </div>
  <div v-else class="products">
    <h1>Our Products</h1>
    <div class="cards">
      <div
        v-for="product in products.slice(2, 10)"
        :key="product.id"
        class="card"
      >
        <div class="img-cont">
          <img :src="product.image_path" />
          <div class="discount-label">-30%</div>
        </div>
        <div class="text">
          <h6>{{ product.wood_type }}</h6>
          <p>{{ product.name }}</p>
          <span>
            <p class="disprice">Rp {{ product.discount_price }}</p>
            <p class="price">Rp {{ product.price }}</p>
          </span>
        </div>
        <div class="overlay">
          <button class="add-to-cart">Add to cart</button>
          <div class="icons">
            <span>
              <i class="fa-solid fa-share-nodes"></i>
              <p>Share</p>
            </span>
            <span>
              <i class="fa-solid fa-code-compare"></i>
              <p>Compare</p>
            </span>
            <span>
              <i class="fa-regular fa-heart"></i>
              <p>Like</p>
            </span>
          </div>
        </div>
      </div>
    </div>
    <RouterLink to="/Shop" class="text-decoration-none">
      <div class="btn-show">
        <button>Show More</button>
      </div>
    </RouterLink>
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
.products {
  width: 86%;
  margin: auto;
}
.products h1 {
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  color: #3a3a3a;
  margin-bottom: 2.5rem;
  margin-top: 1rem;
}

.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
  align-items: stretch;
}

.card {
  width: 23%;
  border: none;
  position: relative;
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.img-cont {
  position: relative;
  width: 100%;
  height: auto;
}
.img-cont img {
  width: 100%;
  display: block;
}

.discount-label {
  position: absolute;
  top: 8px;
  right: 8px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background-color: #e97171;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.text {
  padding: 1rem;
  background-color: #f4f5f7;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h6 {
  font-weight: 600;
  font-size: 24px;
}
p {
  font-weight: 500;
  font-size: 16px;
  color: #898989;
  margin-bottom: 0.5rem;
  width: 100%;
}

span {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span .disprice {
  font-weight: 600;
  font-size: 20px;
  color: #3a3a3a;
}
span .price {
  font-weight: 400;
  font-size: 16px;
  text-decoration-line: line-through;
  color: #b0b0b0;
}

.btn-show {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  margin-bottom: 4rem;
}
.btn-show button {
  padding: 0.8rem 6rem;
  font-weight: 600;
  font-size: 16px;
  color: #b88e2f;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #b88e2f;
  transition: all 0.3s ease;
  border-radius: 5px;
}
.btn-show button:hover {
  background: #b88e2f;
  color: #ffffff;
  box-shadow: 0 0 12px rgb(125, 121, 121);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
  gap: 12px;
}

.add-to-cart {
  background-color: white;
  color: #b0853b;
  border: none;
  padding: 10px 3rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-size: 16px;
  color: #b88e2f;
}

.icons {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: white;
  font-size: 14px;
}
.icons span {
  gap: 3px;
}
span p {
  margin-bottom: 0;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
}
span i {
  width: 16px;
  height: 16px;
}

.card:hover .overlay {
  opacity: 1;
}

@media screen and (max-width: 576px) {
  .products h1 {
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 1.2rem;
  }
  .cards {
    align-items: stretch;
  }
  .card {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  .img-cont {
    height: 100%;
  }
  .img-cont img {
    height: 100%;
  }
  .discount-label {
    top: 15px;
    right: 15px;
    font-size: 10px;
    width: 25px;
    height: 25px;
  }
  .text {
    flex-grow: 1;
  }
  h6 {
    font-weight: 600;
    font-size: 15px;
  }
  p {
    font-weight: 500;
    font-size: 12px;
  }
  span .disprice {
    font-size: 12px;
  }
  span .price {
    font-size: 12px;
  }
  .btn-show {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .btn-show button {
    padding: 0.4rem 2rem;
    font-size: 10px;
  }
  .overlay {
    display: none;
  }
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  .products h1 {
    font-size: 23px;
    margin-bottom: 1rem;
  }
  .cards {
    gap: 1rem;
    align-items: stretch;
  }
  .card {
    width: 48%;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  }
  .text {
    flex-grow: 1;
  }
  .discount-label {
    top: 15px;
    right: 15px;
    font-size: 10px;
    width: 25px;
    height: 25px;
  }
  h6 {
    font-size: 18px;
  }
  p {
    font-size: 15px;
    font-weight: 400;
  }
  span .disprice,
  span .price {
    font-size: 15px;
  }
  .btn-show {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .btn-show button {
    padding: 0.4rem 1.5rem;
    font-size: 10px;
  }
  .overlay {
    display: none;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .products h1 {
    font-size: 26px;
    margin-bottom: 1rem;
  }
  .cards {
    gap: 0.7rem;
    align-items: stretch;
  }
  .card {
    width: 32%;
    margin-bottom: 1rem;
  }
  .text {
    flex-grow: 1;
  }
  .discount-label {
    top: 12px;
    right: 12px;
    font-size: 12px;
    width: 35px;
    height: 35px;
  }
  h6 {
    font-size: 20px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
  span .disprice,
  span .price {
    font-size: 16px;
  }
  .btn-show {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .btn-show button {
    padding: 0.4rem 2rem;
    font-size: 12px;
  }
  .overlay {
    display: none;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1440px) {
  .products h1 {
    font-size: 30px;
  }
  .cards {
    gap: 1rem;
  }
  .card {
    width: 32%;
    margin-bottom: 1rem;
  }
  .discount-label {
    top: 14px;
    right: 14px;
    font-size: 14px;
    width: 40px;
    height: 40px;
  }
  h6 {
    font-size: 22px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
  span .disprice,
  span .price {
    font-size: 18px;
  }
  .btn-show {
    margin-top: 0.5rem;
  }
  .btn-show button {
    padding: 0.6rem 4rem;
  }
}
</style>
