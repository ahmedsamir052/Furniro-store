<template>
  <HeroSingle />
  <ProductDetails @quantityChanged="emit('quantityChanged', $event)" />
  <Information />
  <Related />
</template>

<script setup>
// import HeroSingle from './HeroSingle.vue';
// import Information from './Information.vue';
// import ProductDetails from './ProductDetails.vue';
// import Related from './Related.vue';
// const emit = defineEmits(['quantityChanged'])
import HeroSingle from '@/components/Single-product/HeroSingle.vue'
import ProductDetails from '@/components/Single-product/ProductDetails.vue'
import Information from '@/components/Single-product/Information.vue'
import Related from '@/components/Single-product/Related.vue'

const emit = defineEmits(['quantityChanged'])

</script>


