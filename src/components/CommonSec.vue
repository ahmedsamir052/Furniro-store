<template>
  <div class="background-container" data-aos="fade-up">
    <div class="blurred-bg"></div>
    <div class="content">
      <img :src="logo" alt="Logo" />
      <h1>{{ NamePage }}</h1>
      <p><span>Home > </span>{{ NamePage }}</p>
    </div>
  </div>
</template>

<script setup>
import logo from "@/assets/imgs/logo.png";
defineProps({
  NamePage: String,
  SpanText: String,
});
</script>

<style scoped>
.background-container {
  position: relative;
  height: 360px;
  overflow: hidden;
  margin-bottom: 5rem;
}
.blurred-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/assets/imgs/1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg");
  background-size: cover;
  background-position: center;
  background-color: white;
  opacity: 0.6;
  filter: blur(2px);
  z-index: 1;
}
.content {
  position: relative;
  z-index: 2;
  padding: 20px;
  text-align: center;
  top: 15%;
}
.content img {
  position: relative;
  z-index: 2;
  width: 77px;
  height: 77px;
  margin: 0;
}
.content h1 {
  font-weight: 500;
  font-size: 48px;
}
.content p {
  font-size: 16px;
}
.content p span {
  font-weight: 500;
  font-size: 16px;
  color: #000000;
}
@media screen and (max-width: 576px) {
  .background-container {
    height: 170px;
    margin-bottom: 1.5rem;
    width: 100%;
  }
  .content img {
    width: 40px;
    height: 40px;
  }
  .content h1 {
    font-size: 18px;
    margin-bottom: 0;
  }
  .content p {
    font-size: 10px;
  }
  .content p span {
    font-size: 10px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .background-container {
    height: 190px;
    margin-bottom: 1.5rem;
    width: 100%;
  }
  .content img {
    width: 45px;
    height: 45px;
  }
  .content h1 {
    font-size: 20px;
    margin-bottom: 0;
  }
  .content p {
    font-size: 10px;
  }
  .content p span {
    font-size: 12px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .background-container {
    height: 220px;
    width: 100%;
    margin-bottom: 2rem;
  }
  .filter-sec {
    margin-bottom: 2rem;
  }
  .content img {
    width: 55px;
    height: 55px;
  }
  .content h1 {
    font-size: 22px;
    margin-bottom: 0;
  }
  .content p {
    font-size: 12px;
  }
  .content p span {
    font-size: 14px;
  }
}
</style>
