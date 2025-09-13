<template>
   <div v-if="loading" class="spinner-border" role="status">
    <span class="sr-only"> </span>
  </div>
  <div v-else class="products" data-aos="fade-up">
    <div class="cards">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="card"
        @click="goToDetails(product.id)"
        style="cursor: pointer"
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
  </div>

  <div class="nums">
    <div class="num1">1</div>
    <div class="num">2</div>
    <div class="num">3</div>
    <button class="next-btn">Next</button>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getAllProducts } from "@/services/api";
import { useRouter } from "vue-router";
const router = useRouter();

const products = ref([]);

onMounted(async () => {
  const original = await getAllProducts();
  const repeated = [...original];
  while (repeated.length < 16) {
    repeated.push(...original);
  }
  products.value = repeated.slice(0, 16);
});
function goToDetails(id) {
  router.push({ name: "ProductDetails", params: { id } });
}
</script>

<style scoped>
.products {
  width: 86%;
  margin: auto;
}
.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
}
.card {
  width: 23%;
  border: none;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.img-cont {
  position: relative;
  width: 100%;
  height: auto;
  flex-shrink: 0;
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
  line-height: 150%;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
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
  line-height: 150%;
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
  line-height: 150%;
  color: #ffffff;
}
span i {
  width: 16px;
  height: 16px;
}
.card:hover .overlay {
  opacity: 1;
}
.nums {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  margin: auto;
  margin-bottom: 4rem;
  margin-top: 4rem;
}
.num1 {
  width: 50px;
  height: 50px;
  background-color: #b88e2f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
}
.num {
  width: 50px;
  height: 50px;
  background-color: #f9f1e7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
}
.next-btn {
  background-color: #f9f1e7;
  color: white;
  border: none;
  padding: 0 1.5rem;
  height: 50px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 400;
  line-height: 30px;
  color: #000000;
}
@media screen and (max-width: 576px) {
  .cards {
    gap: 0.3rem;
  }
  .card {
    width: 100%;
    margin: auto;
  }
  .discount-label {
    top: 15px;
    right: 15px;
    font-size: 10px;
    width: 25px;
    height: 25px;
  }
  h6 {
    font-size: 14px;
  }
  p {
    font-size: 12px;
  }
  span .disprice {
    font-size: 12px;
  }
  span .price {
    font-size: 14px;
  }
  .nums {
    width: 35%;
    margin: auto;
    margin-top: 0rem;
    margin-bottom: 2rem;
  }
  .num1,
  .num,
  .next-btn {
    width: 30px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    line-height: 25px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
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
  .nums {
    width: 37%;
    margin-bottom: 2rem;
    margin-top: 0;
  }
  .num1,
  .num,
  .next-btn {
    width: 32px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
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
  .overlay {
    display: none;
  }
  .nums {
    width: 28%;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  .num1,
  .num,
  .next-btn {
    width: 35px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1440px) {
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
  .nums {
    width: 25%;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  .num1,
  .num,
  .next-btn {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
