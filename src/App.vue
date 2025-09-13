<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav_bar from './components/Nav_bar.vue'
import Footer from './components/Footer.vue'
import { ref } from 'vue'
const quantity = ref(1)

function handleQuantityChanged(newQty) {
  quantity.value = newQty
}
</script>

<template>
  <Nav_bar/>
  <RouterView @quantityChanged="handleQuantityChanged" />
  <Footer/>
</template>

<style scoped>
main{
  min-height: 80vh ;
}
</style>
