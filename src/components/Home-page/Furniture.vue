<template>
  <div class="Furniture">
    <p>Share your setup with</p>
    <h1>#FuniroFurniture</h1>
    <img :src="img" alt="" />
  </div>
</template>

<script setup>
import img from "@/assets/imgs/Images.png";
</script>
<style scope>
.Furniture {
  width: 100%;
  margin-bottom: 3rem;
  margin-top: 4rem;
}
.Furniture p {
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: #616161;
  align-items: center;
}
.Furniture h1 {
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  color: #3a3a3a;
}
.Furniture img {
  width: 100%;
}
@media screen and (max-width: 576px) {
  .Furniture {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .Furniture p {
    font-size: 11px;
    margin-bottom: 0.5rem;
  }
  .Furniture h1 {
    font-weight: 700;
    font-size: 16px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px)  {
  .Furniture {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .Furniture p {
    font-size: 16px;
    margin-bottom: 0.2rem;
  }
  .Furniture h1 {
    font-size: 24px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .Furniture {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .Furniture p {
    font-size: 18px;
    margin-bottom: 0.2rem;
  }
  .Furniture h1 {
    font-size: 26px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1440px) {
   .Furniture {
    margin-bottom: 2rem;
    margin-top: 2.5rem;
  }
  .Furniture p {
    margin-bottom: 0.3rem;
  }
}
</style>
