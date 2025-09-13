<template>
    <CartHero/>
    <Shopping />
    <Features/>
</template>
<script setup>

// import CartHero from './CartHero.vue';
// import Shopping from './Shopping.vue';
// import Features from '../Features.vue';
// const emit = defineProps(['quantity']);
import CartHero from '@/components/Cart-page/CartHero.vue'
import Shopping from '@/components/Cart-page/Shopping.vue'
import Features from '@/components/Features.vue'
const emit = defineProps(['quantity'])

</script> 