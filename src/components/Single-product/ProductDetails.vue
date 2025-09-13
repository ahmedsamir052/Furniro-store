<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div v-else class="details" data-aos="fade-up">
    <div class="imgs">
      <div class="img-left">
        <img
          v-for="product in products2.slice(0, 4)"
          :key="product.id"
          :src="product.image_path"
        />
      </div>
      <div class="img-right">
        <div v-if="product" class="product-img">
          <img :src="product.image_path" alt="Product Image" />
        </div>
      </div>
    </div>
    <div class="descrip">
      <div class="sec-top">
        <h1>{{ product.name }}</h1>
        <p>Rs. {{ product.discount_price }}</p>
        <div class="rating">
          <div class="rat-left">
            <i v-for="n in 4" :key="n" class="fas fa-star"></i>
            <i class="fa-solid fa-star-half"></i>
          </div>
          <div class="divider"></div>
          <div class="rat-right">
            <p>5 Customer Review</p>
          </div>
        </div>
        <div class="description">
          <p>{{ product.description }}</p>
        </div>
        <div class="sec-size">
          <h4>Size</h4>
          <div class="options">
            <span class="size1">L</span>
            <span class="size">XL</span>
            <span class="size">XS</span>
          </div>
        </div>
        <div class="sec-color">
          <h4>Color</h4>
          <div class="colors">
            <span class="color purple"></span>
            <span class="color black"></span>
            <span class="color gold"></span>
          </div>
        </div>
        <div class="actions">
          <div class="quantity">
            <button @click="decrease">-</button>
            <span>{{ quantity }}</span>
            <button @click="increase">+</button>
          </div>

          <button
            class="btn"
            @click="goToCart(product.id), goToNavbar(product.id)"
          >
            Add To Cart
          </button>
          <button class="btn secondary">+ Compare</button>
        </div>
      </div>
      <div class="sec-bottom">
        <span>
          <div class="name">
            <p>SKU</p>
          </div>
          <div class="text">
            <p>: {{ product.sku }}</p>
          </div>
        </span>
        <span>
          <div class="name">
            <p>Category</p>
          </div>
          <div class="text">
            <p>: {{ product.category }}</p>
          </div>
        </span>
        <span>
          <div class="name">
            <p>Tags</p>
          </div>
          <div class="text">
            <p>: Sofa, Chair, Home, Shop</p>
          </div>
        </span>
        <span>
          <div class="name">
            <p>Share</p>
          </div>
          <div class="text">
            <p>
              : <i class="fa-brands fa-facebook"> </i
              ><i class="fa-brands fa-linkedin"> </i
              ><i class="fa-brands fa-square-twitter"></i>
            </p>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { quantity } from "@/services/quantityStore";
const router = useRouter();
const route = useRoute();

const id = route.params.id;
const product = ref(null);
const products2 = ref();
const loading = ref(true);
const error = ref(false);

onMounted(() => {
  axios
    .get("https://furniture-api.fly.dev/v1/products")
    .then((response) => {
      products2.value = response.data.data;
      product.value = response.data.data.find((p) => p.id === id);
      if (!product.value) {
        error.value = true;
      }
      loading.value = false;
    })
    .catch((err) => {
      console.error("Error:", err);
      error.value = true;
      loading.value = false;
    });
});

const emit = defineEmits(["quantityChanged"]);

onMounted(() => {
  emit("quantityChanged", quantity.value);
});

const increase = () => {
  quantity.value++;
  emit("quantityChanged", quantity.value);
};

const decrease = () => {
  if (quantity.value > 1) {
    quantity.value--;
    emit("quantityChanged", quantity.value);
  }
};

function goToCart(id) {
  router.push({ name: "Cart", params: { id } });
}
function goToNavbar(id) {
  router.push({ name: "Navbar", params: { id } });
}
</script>
<style scoped>
.details {
  width: 86%;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.imgs {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
.img-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 15%;
}
.img-left img {
  width: 85px;
  border-radius: 10px;
}
.img-right {
  width: 82%;
}
.img-right .product-img {
  width: 100%;
}
.img-right img {
  height: 550px;
  width: 100%;
  border-radius: 10px;
}
.descrip {
  width: 42%;
}
.sec-top {
  border-bottom: 1px solid #d9d9d9;
}
.sec-top h1 {
  font-weight: 500;
  font-size: 35px;
  margin-bottom: 0;
}
.sec-top p {
  font-weight: 500;
  font-size: 24px;
  color: #9f9f9f;
  margin-bottom: 0;
}
.sec-top .rating {
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
}
.rating .fa-star,
.fa-star-half {
  color: #ffc700;
  padding-right: 5px;
  width: 18px;
}
.rating .rat-right p {
  font-weight: 400;
  font-size: 13px;
  color: #9f9f9f;
}
.rating .divider {
  width: 1px;
  height: 2rem;
  background-color: #9f9f9f;
  margin: 0 1rem;
}
.description p {
  font-weight: 400;
  font-size: 13px;
  color: #000000;
  width: 70%;
}
.sec-size {
  margin: 1rem 0;
}
.sec-size h4 {
  font-weight: 400;
  font-size: 14px;
  color: #9f9f9f;
}
.options {
  display: flex;
  gap: 0.8rem;
  align-items: center;
}
.options .size1 {
  width: 30px;
  height: 30px;
  background-color: #b88e2f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 400;
  font-size: 13px;
}
.options .size {
  width: 30px;
  height: 30px;
  background-color: #f9f1e7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 400;
  font-size: 13px;
  color: #000000;
}
.sec-color {
  margin-bottom: 1rem;
}
.sec-color h4 {
  font-weight: 400;
  font-size: 14px;
  color: #9f9f9f;
}
.colors {
  display: flex;
  gap: 10px;
}

.color {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}
.color.purple {
  background-color: #816dfa;
}
.color.black {
  background-color: #000000;
}
.color.gold {
  background-color: #b88e2f;
}
.actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 5rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.quantity {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
}

.quantity button {
  padding: 0.7rem 0.8rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.quantity span {
  padding: 0 1rem;
}

.btn {
  color: #fff;
  padding: 0.7rem 2.5rem;
  border: 1px #000000 solid;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
}

.btn.secondary {
  background-color: transparent;
  color: #000;
  border: 1px solid #000;
}
.sec-bottom {
  margin: 3rem 0;
}
.sec-bottom span {
  display: flex;
  margin-bottom: 0.5rem;
}
.name {
  width: 14%;
}
.text {
  width: 80%;
}
p {
  width: 100%;
}
.text .fa-facebook,
.fa-linkedin,
.fa-square-twitter {
  margin-right: 1.2rem;
  width: 20px;
  height: 20px;
}
@media screen and (max-width: 576px) {
  .details {
    width: 90%;
    margin-top: 1rem;
    display: block;
  }
  .imgs {
    width: 100%;
    margin-bottom: 1rem;
  }
  .img-left {
    display: none;
  }
  .img-right {
    width: 100%;
  }
  .img-right .product-img {
    height: 100%;
  }
  .img-right img {
    height: 100%;
  }
  .descrip {
    width: 80%;
  }
  .sec-top h1 {
    font-size: 17px;
  }
  .sec-top p {
    font-size: 14px;
  }
  .sec-top .rating {
    margin: 0.2rem 0;
  }
  .rating .fa-star,
  .fa-star-half {
    width: 12px;
  }
  .rating .rat-right p {
    font-size: 12px;
  }
  .rating .divider {
    height: 1rem;
    margin: 0 0.2rem;
  }
  .description p {
    font-size: 10px;
    width: 100%;
  }
  .sec-size {
    margin: 0.5rem 0;
  }
  .sec-size h4 {
    font-size: 12px;
  }
  .options .size1 {
    width: 17px;
    height: 17px;
    font-size: 9px;
  }
  .options .size {
    width: 17px;
    height: 17px;
    font-size: 9px;
  }
  .sec-color {
    margin-bottom: 1rem;
  }
  .sec-color h4 {
    font-size: 12px;
  }
  .color {
    width: 17px;
    height: 17px;
  }
  .actions {
    margin-bottom: 2rem;
    margin-top: 0rem;
    gap: 0.5rem;
  }
  .quantity {
    border-radius: 20px;
  }
  .quantity button {
    padding: 0.43rem 0.4rem;
    font-size: 10px;
  }
  .quantity span {
    padding: 0 1rem;
    font-size: 10px;
  }
  .btn {
    padding: 0.5rem 0.6rem;
    font-size: 9px;
    line-height: 10px;
  }
  .sec-bottom {
    width: 100%;
    margin: 1rem 0;
  }
  .sec-bottom span {
    display: flex;
    margin-bottom: 0rem;
    width: 100%;
  }
  .name {
    width: 30%;
  }
  .name p {
    font-size: 12px;
  }
  .text {
    width: 100%;
  }
  .text p {
    font-size: 12px;
    margin-bottom: 0;
    width: 100%;
  }
  .text .fa-facebook,
  .fa-linkedin,
  .fa-square-twitter {
    margin-right: 0.5rem;
    width: 12px;
    height: 12px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .details {
    width: 90%;
    margin-top: 1rem;
  }
  .imgs {
    width: 100%;
    margin-bottom: 1.5rem;
  }
  .img-right {
    width: 80%;
  }
  .img-right .product-img {
    height: 100%;
  }
  .img-right img {
    height: 100%;
  }
  .descrip {
    width: 80%;
  }
  .sec-top h1 {
    font-size: 20px;
    margin-bottom: 1rem;
  }
  .sec-top p {
    font-size: 14px;
    margin: 0.5rem 0;
  }
  .sec-top .rating {
    margin: 0.2rem 0;
  }
  .rating .fa-star,
  .fa-star-half {
    width: 15px;
  }
  .rating .rat-right p {
    font-size: 14px;
  }
  .rating .divider {
    height: 1.3rem;
    margin: 0 0.2rem;
  }
  .description p {
    font-size: 11px;
    width: 100%;
  }
  .sec-size {
    margin: 0.5rem 0;
  }
  .sec-size h4 {
    font-size: 16px;
    margin-bottom: 0.5rem;
  }
  .options .size1 {
    width: 25px;
    height: 25px;
    font-size: 10px;
  }
  .options .size {
    width: 25px;
    height: 25px;
    font-size: 10px;
  }
  .sec-color {
    margin-bottom: 1rem;
  }
  .sec-color h4 {
    font-size: 16px;
    margin-bottom: 0.5rem;
  }
  .color {
    width: 25px;
    height: 25px;
  }
  .actions {
    margin-bottom: 2rem;
    margin-top: 0rem;
  }
  .quantity {
    border-radius: 20px;
  }
  .quantity button {
    padding: 0.4rem 0.4rem;
    font-size: 12px;
  }
  .quantity span {
    padding: 0 1.5rem;
    font-size: 12px;
  }
  .btn {
    padding: 0.4rem 1rem;
    font-size: 11px;
  }
  .sec-bottom {
    margin: 1rem 0;
  }
  .sec-bottom span {
    margin-bottom: 0rem;
  }
  .name {
    width: 20%;
  }
  .name p {
    font-size: 15px;
  }
  .text {
    width: 100%;
  }
  .text p {
    font-size: 15px;
    margin-bottom: 0;
    width: 100%;
  }
  .text .fa-facebook,
  .fa-linkedin,
  .fa-square-twitter {
    margin-right: 0.5rem;
    width: 15px;
    height: 15px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .details {
    width: 90%;
    margin-top: 1rem;
  }
  .imgs {
    width: 100%;
    margin-bottom: 1.5rem;
  }
  .img-left img {
    width: 100%;
  }
  .img-right {
    width: 81%;
  }
  .img-right .product-img {
    height: 100%;
  }
  .img-right img {
    height: 100%;
  }
  .descrip {
    width: 80%;
  }
  .sec-top h1 {
    font-size: 23px;
    margin-bottom: 1rem;
  }
  .sec-top p {
    font-size: 17px;
    margin: 0.5rem 0;
  }
  .sec-top .rating {
    margin: 0.2rem 0;
  }
  .rating .fa-star,
  .fa-star-half {
    width: 18px;
  }
  .rating .rat-right p {
    font-size: 17px;
  }
  .rating .divider {
    height: 1.3rem;
    margin: 0 0.2rem;
  }
  .description p {
    font-size: 14px;
    width: 100%;
  }
  .sec-size {
    margin: 0.5rem 0;
  }
  .sec-size h4 {
    font-size: 19px;
    margin-bottom: 0.5rem;
  }
  .options .size1 {
    width: 32px;
    height: 32px;
    font-size: 13px;
  }
  .options .size {
    width: 32px;
    height: 32px;
    font-size: 13px;
  }
  .sec-color {
    margin-bottom: 1rem;
  }
  .sec-color h4 {
    font-size: 19px;
    margin-bottom: 0.5rem;
  }
  .color {
    width: 30px;
    height: 30px;
  }
  .actions {
    margin-bottom: 2rem;
    margin-top: 0rem;
  }
  .quantity {
    border-radius: 20px;
  }
  .quantity button {
    padding: 0.4rem 0.4rem;
    font-size: 15px;
  }
  .quantity span {
    padding: 0 1.5rem;
    font-size: 15px;
  }
  .btn {
    padding: 0.4rem 1rem;
    font-size: 14px;
  }
  .sec-bottom {
    margin: 1rem 0;
  }
  .sec-bottom span {
    margin-bottom: 0rem;
  }
  .name {
    width: 20%;
  }
  .name p {
    font-size: 17px;
  }
  .text {
    width: 100%;
  }
  .text p {
    font-size: 17px;
    margin-bottom: 0;
    width: 100%;
  }
  .text .fa-facebook,
  .fa-linkedin,
  .fa-square-twitter {
    margin-right: 0.5rem;
    width: 19px;
    height: 19px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1440px) {
  .img-left img {
    width: 80px;
  }
  .img-right {
    width: 78%;
  }
  .img-right img {
    height: 480px;
  }
  .descrip {
    width: 45%;
  }
  .quantity button {
    padding: 0.7rem 0.5rem;
    font-size: 1rem;
  }
  .quantity span {
    padding: 0 0.9rem;
  }
  .btn {
    padding: 0.6rem 1.5rem;
    font-size: 17px;
  }
  .name {
    width: 18%;
  }
  .text {
    width: 80%;
  }
}
</style>
