<template>
  <nav>
    <div class="navbar">
      <div class="logo">
        <div class="img">
          <img :src="logo" alt="Logo" />
        </div>
        <div class="logo-name">
          <h1>Furniro</h1>
        </div>
      </div>
      <div class="menu">
        <button @click="toggleMenu" style="border: none">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      <div
        class="links d-flex justify-content-between"
        :class="{ 'mobile-visible': showMenu }"
      >
        <RouterLink to="/Home" @click.native="closeMenu" class="link text-decoration-none"
          >Home</RouterLink
        >
        <RouterLink to="/Shop" @click.native="closeMenu" class="link text-decoration-none"
          >Shop</RouterLink
        >
        <RouterLink to="/About" @click.native="closeMenu" class="link text-decoration-none"
          >About</RouterLink
        >
        <RouterLink to="/Contact" @click.native="closeMenu" class="link text-decoration-none"
          >Contact</RouterLink
        >
      </div>
      <div class="icons d-flex justify-content-between">
        <i class="fa-regular fa-user"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-regular fa-heart"></i>
        <button @click="toggleCart" style="background: none; border: none">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
    <div class="side-bar" v-show="showCart">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div v-else class="shopping">
        <div class="title">
          <h4>Shopping Cart</h4>
          <button @click="toggleCart" class="close-btn" aria-label="Close Cart">
            <i class="fa-regular fa-rectangle-xmark"></i>
          </button>
        </div>
        <div class="bottom-border"></div>
        <div class="side-data">
          <div class="img">
            <div v-if="product" class="product-img">
              <img :src="product.image_path" alt="Product Image" />
            </div>
          </div>
          <div class="data" v-if="product">
            <h6>{{ product.name }}</h6>
            <div v-if="product" class="data-price">
              <p>{{ quantity }}</p>
              <span class="x">X</span>
              <span class="price"> Rs. {{ product.discount_price }}</span>
            </div>
          </div>
          <div class="icon"><i class="fa-solid fa-circle-xmark"></i></div>
        </div>
        <div class="subtotal">
          <p>Subtotal</p>
          <span>Rs. {{ subtotal }}</span>
        </div>
        <div class="bottom-border2"></div>
        <div class="buttons">
          <RouterLink :to="{ name: 'CartMain' }"
            ><button>Cart</button></RouterLink
          >
          <RouterLink to="/Checkout-page"><button>Checkout</button></RouterLink>
          <button>Comparison</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from "@/assets/imgs/logo.png";
import { RouterLink } from "vue-router";
import { ref, onMounted, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { quantity } from "@/services/quantityStore";
const showCart = ref(false);
const showMenu = ref(false);
const route = useRoute();
const router = useRouter();
const id = ref(route.params.id);

const product = ref(null);
const loading = ref(false);
const error = ref(false);

const closeMenu = () => {
  showMenu.value = false;
}; 

const fetchProduct = () => {
  loading.value = true;
  error.value = false;
  axios
    .get("https://furniture-api.fly.dev/v1/products")
    .then((res) => {
      product.value = res.data.data.find((p) => p.id === id.value);
      if (!product.value) {
        error.value = true;
      }
      loading.value = false;
    })
    .catch((err) => {
      console.error(err);
      error.value = true;
      loading.value = false;
    });
};

onMounted(fetchProduct);
watch(
  () => route.params.id,
  (newId) => {
    id.value = newId;
    fetchProduct();
  }
);
const subtotal = computed(() => {
  if (!product.value) return 0;
  return quantity.value * product.value.discount_price;
});
const toggleCart = () => {
  showCart.value = !showCart.value;
};
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
  
};

</script>

<style scoped>
nav {
  width: 100%;
  height: 100px;
  left: 0px;
  top: 0px;
  align-items: center;
  margin: auto;
}
.navbar {
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar .logo {
  display: flex;
  align-items: center;
  padding: 0px;
}
.logo .img {
  width: 73px;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo .img img {
  width: 100%;
  height: 100%;
}
h1 {
  margin-bottom: 0;
  font-weight: 700;
  font-size: 34px;
  color: #000000;
}
.navbar .links {
  width: 29%;
}
.navbar .links a {
  color: black;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease;
}
.links a:hover {
  color: #b88e2f;
}
.navbar .icons {
  width: 13%;
  align-items: center;
}
.menu {
  display: none;
}
/* side bar-------------- */
.side-bar {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  padding: 1.5rem;
  width: 30%;
  z-index: 2;
  box-shadow: 0 4px 8px rgba(20, 19, 19, 0.3);
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
}
.bottom-border {
  border-bottom: 1px solid #d9d9d9;
  width: 80%;
  margin-bottom: 2.5rem;
}
.title h4 {
  font-weight: 600;
  font-size: 24px;
  color: #000000;
}
.title button {
  border: none;
  background-color: white;
}
.title .fa-rectangle-xmark {
  color: #9f9f9f;
}
.side-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15rem;
}
.img {
  width: 10%;
}
.img img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
}
.data h6 {
  font-weight: 500;
  font-size: 16px;
}
.data .data-price {
  display: flex;
  align-items: center;
  text-align: center;
}
.data-price p {
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 0;
}
.data-price .x {
  font-weight: 400;
  font-size: 12px;
  padding: 0 1rem;
}
.data-price .price {
  font-weight: 500;
  font-size: 14px;
  color: #b88e2f;
}
.fa-circle-xmark {
  color: #9f9f9f;
}
.subtotal {
  display: flex;
  justify-content: space-between;
  width: 75%;
}
.subtotal p {
  font-weight: 400;
  font-size: 16px;
}
.subtotal span {
  font-weight: 600;
  font-size: 16px;
  color: #b88e2f;
}
.bottom-border2 {
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  /* margin-bottom: 2.5rem; */
}
.buttons {
  margin-top: 2rem;
  margin-bottom: 0rem;
}
.buttons button {
  font-weight: 400;
  font-size: 12px;
  color: #000000;
  padding: 0.3rem 2rem;
  border-radius: 50px;
  margin-right: 1.5rem;
  border: 1px solid #000000;
  background: #fff;
}
@media screen and (max-width: 576px) {
  nav {
    width: 95%;
    height: 55px;
  }
  .logo .img {
    width: 40px;
    height: 40px;
  }
  h1 {
    font-weight: 500;
    font-size: 20px;
  }
  .links,
  .icons {
    display: none !important;
    flex-direction: column;
    align-items: flex-start;
    background-color: #f9f9f9;
    padding: 10px;
    width: 100%;
  }
  .navbar .links {
    width: 100%;
  }
  .mobile-visible {
    display: flex !important;
    width: 100%;
    z-index: 2;
    align-items: center;
    background-color: white;
  }
  .links a {
    padding-bottom: 0.2rem;
    border-bottom: 2px solid #b88e2f;
    margin-bottom: 1rem;
  }
  .menu {
    display: block;
  }
  .navbar {
    flex-wrap: wrap;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  nav {
    width: 95%;
    height: 70px;
  }
  .logo .img {
    width: 55px;
    height: 55px;
  }
  h1 {
    font-weight: 500;
    font-size: 26px;
  }
  .links,
  .icons {
    display: none !important;
    flex-direction: column;
    align-items: flex-start;
    background-color: #f9f9f9;
    padding: 10px;
    width: 100%;
  }
  .navbar .links {
    width: 100%;
  }
  .mobile-visible {
    display: flex !important;
    width: 100%;
    z-index: 2;
    align-items: center;
    background-color: white;
  }
  .links a {
    padding-bottom: 0.2rem;
    border-bottom: 2px solid #b88e2f;
    margin-bottom: 1rem;
  }
  .menu {
    display: block;
  }
  .navbar {
    flex-wrap: wrap;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  nav {
    width: 95%;
    height: 70px;
  }
  .logo .img {
    width: 50px;
    height: 50px;
  }
  h1 {
    font-weight: 500;
    font-size: 25px;
  }
  .navbar .links {
    width: 35%;
  }
  .navbar .links a {
    font-size: 15px;
  }
  .navbar .icons {
    width: 20%;
  }
  .side-bar {
    top: 10.2%;
    padding: 1rem;
    width: 45%;
    z-index: 2;
  }
  .title {
    padding-bottom: 0.7rem;
  }
  .bottom-border {
    width: 80%;
    margin-bottom: 2rem;
  }
  .title h4 {
    font-size: 20px;
  }
  .side-data {
    padding-bottom: 10rem;
  }
  .img {
    width: 20%;
  }
  .img img {
    width: 80px;
    height: 80px;
  }
  .data h6 {
    font-weight: 400;
    font-size: 15px;
  }
  .data-price p {
    font-size: 12px;
  }
  .data-price .x {
    font-size: 10px;
    padding: 0 0.5rem;
  }
  .data-price .price {
    font-size: 12px;
  }
  .subtotal {
    display: flex;
    justify-content: space-between;
    width: 75%;
  }
  .subtotal p {
    font-size: 15px;
    margin-bottom: 0.5rem;
  }
  .subtotal span {
    font-size: 15px;
  }
  .buttons {
    margin-top: 1rem;
    margin-bottom: 0rem;
  }
  .buttons button {
    padding: 0.3rem 1.5rem;
    margin-right: 0.5rem;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1440px) {
  .side-bar {
    width: 33%;
  }
  .side-data {
    padding-bottom: 10rem;
  }
  .img {
    width: 20%;
  }
  .img img {
    width: 80px;
    height: 80px;
  }
  .data h6 {
    font-weight: 400;
    font-size: 15px;
  }
  .data-price p {
    font-size: 12px;
  }
  .data-price .x {
    font-size: 10px;
    padding: 0 0.5rem;
  }
  .data-price .price {
    font-size: 12px;
  }
  .subtotal {
    display: flex;
    justify-content: space-between;
    width: 75%;
  }
  .subtotal p {
    font-size: 15px;
    margin-bottom: 0.5rem;
  }
  .subtotal span {
    font-size: 15px;
  }
  .buttons {
    margin-top: 1rem;
    margin-bottom: 0rem;
  }
  .buttons button {
    padding: 0.3rem 1.3rem;
    margin-right: 0.5rem;
  }
}
</style>
