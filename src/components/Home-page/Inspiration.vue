<template>
  <div class="furniture-cont">
    <div class="furniture">
      <div class="text">
        <h1>50+ Beautiful rooms inspiration</h1>
        <p>
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you
        </p>
        <button>Explore more</button>
      </div>
      <div class="hero-images">
        <div class="images-row">
          <div class="main-image">
            <img
              :src="images[currentIndex].src"
              :alt="images[currentIndex].title"
            />
            <div class="image-title">
              <div class="text-title">
                <p>0{{ currentIndex + 1 }} — Bed Room</p>
                <h3>{{ images[currentIndex].title }}</h3>
              </div>
              <div class="arrow">
                <i class="icon fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div class="thumbnail">
            <img :src="images[nextIndex].src" :alt="images[nextIndex].title" />
          </div>
          <button class="arrow-button" @click="nextImage">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import img1 from "@/assets/imgs/img1.png";
import img2 from "@/assets/imgs/img2.png";
import img3 from "@/assets/imgs/img3.png";

const images = [
  { src: img1, title: "Inner Peace" },
  { src: img2, title: "Calm Light" },
  { src: img3, title: "Modern Touch" },
];

const currentIndex = ref(0);

const nextIndex = computed(() => {
  return (currentIndex.value + 1) % images.length;
});

const nextImage = () => {
  currentIndex.value = nextIndex.value;
};
</script>

<style scope>
.furniture-cont {
  background-color: #fcf8f3;
  padding: 2rem;
}
.furniture {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.text {
  width: 40%;
  align-content: center;
}
.text h1 {
  font-weight: 700;
  font-size: 40px;
  color: #3a3a3a;
}
.text p {
  font-weight: 500;
  font-size: 16px;
  color: #616161;
  width: 70%;
}
.text button {
  background: #b88e2f;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  border: none;
  padding: 1rem 2.5rem;
  transition: all 0.3s ease;
  border-radius: 5px;
}
.text button:hover {
  background: #d7a93e;
  color: #ffffff;
  box-shadow: 0 0 12px rgb(125, 121, 121);
}
.hero-images {
  width: 60%;
}
.images-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.main-image {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 48%;
}
.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.image-title {
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 10px 16px;
  display: flex;
  width: 100%;
}
.text-title {
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  opacity: 0.9;
}
.image-title .text-title p {
  font-size: 12px;
  color: #777;
  margin: 0;
}

.image-title .text-title h3 {
  margin: 4px 0 0;
  font-size: 18px;
  color: #333;
}
.image-title .arrow {
  display: flex;
  flex-direction: column-reverse;
  width: 10%;
}
.image-title .arrow .fa-arrow-right {
  background-color: #b88e2f;
  width: 15px;
  height: 15px;
  padding: 10px;
  display: inline-block;
  color: white;
}
.thumbnail {
  flex: 1;
  overflow: hidden;
  height: 10%;
  width: 43%;
}
.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.arrow-button {
  align-self: center;
  background: white;
  border: none;
  border-radius: 50%;
  padding: 10px 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 48px;
  width: 48px;
  font-size: 18px;
  color: #b88e2f;
}
@media screen and (max-width: 576px) {
  .furniture-cont {
    padding: 2rem;
    padding-right: 0;
  }
  .furniture {
    display: flex;
    flex-direction: column;
  }
  .text {
    width: 63%;
    margin: auto;
    margin-bottom: 1rem;
  }
  .text h1 {
    font-weight: 700;
    font-size: 19px;
  }
  .text p {
    width: 100%;
    font-weight: 500;
    font-size: 11.2px;
  }
  .text button {
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    padding: 0.5rem 1rem;
  }
  .hero-images {
    width: 100%;
  }
  .main-image {
    width: 45%;
  }
  .main-image img {
    width: 100%;
    height: 100%;
  }
  .image-title {
    bottom: 0px;
    left: 0px;
    padding: 10px 10px;
  }
  .text-title {
    padding: 0.5rem;
  }
  .image-title .text-title p {
    font-size: 11px;
  }
  .image-title .text-title h3 {
    margin: 0;
    font-size: 16px;
  }
  .image-title .arrow {
    width: 10%;
  }
  .image-title .arrow .fa-arrow-right {
    padding: 5px;
  }
  .arrow-button {
    padding: 8px 12px;
    height: 40px;
    width: 40px;
    font-size: 16px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .furniture-cont {
    padding: 2rem;
    padding-right: 0;
  }
  .furniture {
    display: flex;
    flex-direction: column;
  }
  .text {
    width: 60%;
    margin: auto;
    margin-bottom: 1rem;
  }
  .text h1 {
    font-size: 21px;
    margin-bottom: 0;
  }
  .text p {
    width: 74%;
    font-weight: 400;
    font-size: 10px;
    margin-bottom: 0.5rem;
  }
  .text button {
    font-size: 10px;
    padding: 0.3rem 0.8rem;
  }
  .hero-images {
    width: 100%;
  }
  .main-image {
    width: 45%;
  }
  .main-image img {
    width: 100%;
    height: 100%;
  }
  .image-title {
    bottom: 0px;
    left: 0px;
    padding: 10px 10px;
  }
  .text-title {
    padding: 0.5rem;
  }
  .image-title .text-title p {
    font-size: 11px;
  }
  .image-title .text-title h3 {
    margin: 0;
    font-size: 16px;
  }
  .image-title .arrow {
    width: 10%;
  }
  .image-title .arrow .fa-arrow-right {
    padding: 5px;
  }
  .arrow-button {
    height: 48px;
    width: 48px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .furniture-cont {
    padding: 2rem;
    padding-right: 0;
  }
  .furniture {
    display: flex;
    flex-direction: column;
  }
  .text {
    width: 60%;
    margin: auto;
    margin-bottom: 1rem;
  }
  .text h1 {
    font-size: 25px;
    margin-bottom: 0;
  }
  .text p {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 0.5rem;
  }
  .text button {
    font-size: 14px;
    padding: 0.4rem 1rem;
  }
  .hero-images {
    width: 100%;
  }
  .main-image {
    width: 47%;
  }
  .image-title {
    bottom: 0px;
    left: 0px;
    padding: 10px 10px;
  }
  .text-title {
    padding: 0.5rem;
  }
  .image-title .text-title p {
    font-size: 13px;
  }
  .image-title .text-title h3 {
    margin: 0;
    font-size: 17px;
  }
  .image-title .arrow {
    width: 19%;
  }
  .image-title .arrow .fa-arrow-right {
    padding: 7px;
  }
  .arrow-button {
    height: 50px;
    width: 50px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1440px) {
  .furniture-cont {
    padding: 2rem;
    padding-right: 0;
  }
  .text h1 {
    font-size: 33px;
  }
  .text p {
    width: 50%;
  }
  .text button {
    font-size: 12px;
    padding: 0.7rem 2rem;
  }
  .main-image {
    width: 45%;
  }
  .image-title {
    bottom: 0px;
    left: 0px;
    padding: 7px 13px;
  }
  .image-title .text-title p {
    font-size: 10px;
  }
  .image-title .text-title h3 {
    font-size: 16px;
  }
}
</style>
