<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div v-else-if="error">This product does not exist</div>
  <div v-else class="shopping" data-aos="fade-up">
    <div class="item">
      <div class="card-data">
        <tbody>
          <tr class="first-row">
            <th></th>
            <th class="heading">Product</th>
            <th class="heading">Price</th>
            <th class="heading">Quantity</th>
            <th class="heading">Subtotal</th>
            <th></th>
          </tr>
          <tr class="second-row">
            <th class="img">
              <div v-if="product" class="product-img">
                <img :src="product.image_path" alt="Product Image" />
              </div>
            </th>
            <th>
              <p>{{ product.name }}</p>
            </th>
            <th>
              <p>Rs. {{ product.discount_price }}</p>
            </th>
            <th>
              <button class="btn1">{{ quantity }}</button>
            </th>
            <th>
              <span>
                <p>Rs. {{ subtotal }}</p>
              </span>
            </th>
            <th class="button"><i class="fa-solid fa-trash"></i></th>
          </tr>
        </tbody>
      </div>
    </div>
    <div class="total-price">
      <h1>Cart Totals</h1>
      <div class="sub">
        <p>Subtotal</p>
        <span class="subtotal">Rs. {{ subtotal }}</span>
      </div>
      <div class="sub">
        <p>Total</p>
        <span class="total">Rs. {{ subtotal }}</span>
      </div>
      <div class="btn-Check">
        <button @click="goToCheckout">Check Out</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { quantity } from "@/services/quantityStore";
const route = useRoute();
const router = useRouter();
const id = route.params.id;

const product = ref(null);
const loading = ref(true);
const error = ref(false);
defineProps(["quantity"]);
onMounted(() => {
  axios
    .get("https://furniture-api.fly.dev/v1/products")
    .then((res) => {
      product.value = res.data.data.find((p) => p.id === id);
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
});
import { computed } from "vue";
const subtotal = computed(() => {
  if (!product.value) return 0;
  return quantity.value * product.value.discount_price;
});
function goToCheckout() {
  router.push({ name: "Checkout" });
}
</script>
<style scoped>
.shopping {
  width: 86%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
}
/* Item --------------- */
.item {
  width: 68%;
}
.item .card-data {
  width: 100%;
}
/* Frist Row */
.first-row {
  background-color: #f9f1e7;
}
.first-row .heading {
  padding: 1rem 0;
  font-weight: 500;
  font-size: 16px;
}
.first-row th {
  width: 20%;
  gap: 1rem;
}
/* Second Row */
.card-data .img {
  width: 10%;
}
.img img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-top: 3.5rem;
}
.second-row th p {
  margin-top: 3.5rem;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 16px;
  color: #9f9f9f;
}
.second-row th span p {
  margin-top: 3.5rem;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
}
.btn1 {
  margin-top: 3.5rem;
  width: 35px;
  height: 35px;
  border: 1px solid #9f9f9f;
  color: #000000;
  background-color: #fff;
  border-radius: 5px;
}
.button .fa-trash {
  margin-top: 3.5rem;
  color: #b88e2f;
  font-size: 20px;
  padding-right: 1rem;
}
/* Total Price ---------------*/
.total-price {
  background-color: #f9f1e7;
  width: 28%;
  text-align: center;
  padding-bottom: 5rem;
}
.total-price h1 {
  font-weight: 600;
  font-size: 32px;
  color: #000000;
  margin-top: 0.7rem;
  margin-bottom: 3rem;
}
.sub {
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.sub p {
  font-weight: 500;
  font-size: 16px;
}
.subtotal {
  font-weight: 400;
  font-size: 16px;
  color: #9f9f9f;
}
.total {
  font-weight: 500;
  font-size: 18px;
  color: #b88e2f;
}
.btn-Check {
  margin-top: 2rem;
}
.btn-Check button {
  font-weight: 400;
  font-size: 20px;
  border: 1px solid #000000;
  padding: 0.6rem 3.5rem;
  background-color: #f9f1e7;
  border-radius: 15px;
}
@media screen and (max-width: 576px) {
  .shopping {
    margin-bottom: 1.5rem;
    display: block;
  }
  .item {
    width: 100%;
  }
  .first-row .heading {
    padding: 0.5rem 0;
    font-weight: 700;
    font-size: 10px;
  }
  .card-data .img {
    width: 10%;
  }
  .img img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    margin-top: 1rem;
  }
  .second-row th p {
    margin-top: 1rem;
    font-weight: 400;
    font-size: 10px;
  }
  .second-row th span p {
    margin-top: 1rem;
    font-size: 10px;
  }
  .btn1 {
    margin-top: 1rem;
    width: 20px;
    height: 20px;
    font-size: 10px;
    border-radius: 5px;
  }
  .button .fa-trash {
    margin-top: 1rem;
    color: #b88e2f;
    font-size: 12px;
    padding-right: 1rem;
  }
  /* Total Price ---------------*/
  .total-price {
    width: 100%;
    margin: auto;
    padding-bottom: 2rem;
  }
  .total-price h1 {
    font-size: 15px;
    padding-top: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .sub {
    width: 90%;
    margin-bottom: 1rem;
  }
  .sub p {
    font-size: 12px;
    margin-bottom: 0;
  }
  .subtotal {
    font-size: 14px;
  }
  .total {
    font-size: 15px;
  }
  .btn-Check {
    margin-top: 1rem;
  }
  .btn-Check button {
    font-size: 12px;
    padding: 0.2rem 1rem;
    border-radius: 20px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .shopping {
    margin-bottom: 1.5rem;
    display: block;
  }
  .item {
    width: 100%;
  }
  .first-row .heading {
    padding: 0.5rem 0;
    font-size: 13px;
  }
  .img img {
    width: 65px;
    height: 65px;
    margin-top: 1rem;
  }
  .second-row th p {
    margin-top: 1rem;
    font-size: 13px;
  }
  .second-row th span p {
    margin-top: 1rem;
    font-size: 13px;
  }
  .btn1 {
    margin-top: 1rem;
    width: 25px;
    height: 25px;
    font-size: 12px;
  }
  .button .fa-trash {
    margin-top: 1rem;
    font-size: 15px;
    padding-right: 1rem;
  }
  .total-price {
    width: 100%;
    margin: auto;
    padding-bottom: 2rem;
  }
  .total-price h1 {
    font-size: 18px;
    padding-top: 1rem;
    margin: 1rem 0;
  }
  .sub {
    width: 90%;
    margin-bottom: 1rem;
  }
  .sub p {
    font-size: 15px;
    margin-bottom: 0;
  }
  .subtotal {
    font-size: 15px;
  }
  .total {
    font-size: 15px;
  }
  .btn-Check {
    margin-top: 1rem;
  }
  .btn-Check button {
    font-size: 15px;
    padding: 0.3rem 1.1rem;
    border-radius: 20px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .shopping {
    margin-bottom: 1.5rem;
    display: block;
  }
  .item {
    width: 100%;
  }
  .first-row .heading {
    padding: 0.5rem 0;
    font-size: 15px;
  }
  .img img {
    width: 80px;
    height: 80px;
    margin-top: 1rem;
  }
  .second-row th p {
    margin-top: 1rem;
    font-size: 15px;
  }
  .second-row th span p {
    margin-top: 1rem;
    font-size: 15px;
  }
  .btn1 {
    margin-top: 1rem;
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
  .button .fa-trash {
    margin-top: 1rem;
    font-size: 17px;
    padding-right: 1rem;
  }
  .total-price {
    width: 100%;
    margin: auto;
    padding-bottom: 2rem;
  }
  .total-price h1 {
    font-size: 20px;
    padding-top: 1rem;
    margin: 1rem 0;
  }
  .sub {
    width: 90%;
    margin-bottom: 1rem;
  }
  .sub p {
    font-size: 17px;
    margin-bottom: 0;
  }
  .subtotal {
    font-size: 17px;
  }
  .total {
    font-size: 17px;
  }
  .btn-Check {
    margin-top: 1rem;
  }
  .btn-Check button {
    font-size: 17px;
    padding: 0.4rem 1.3rem;
    border-radius: 20px;
  }
}
</style>
