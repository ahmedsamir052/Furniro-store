<template>
  <div class="hero-bg" data-aos="fade-up">
    <div class="hero">
      <div class="text">
        <p>Home</p>

        <span><i class="fa-solid fa-angle-right"></i></span>
        <p>Shop</p>
        <span><i class="fa-solid fa-angle-right"></i></span>
      </div>
      <div class="divider"></div>
      <p class="sofa">Asgaard sofa</p>
    </div>
  </div>
</template>
<style scoped>
.hero-bg {
  background-color: #f9f1e7;
  height: 100px;
  align-content: center;
}
.hero {
  width: 89%;
  margin: auto;
  display: flex;
}
.text {
  display: flex;
  gap: 1rem;
  text-align: center;
  width: 10%;
}
.text p {
  font-weight: 400;
  font-size: 16px;
  color: #9f9f9f;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}
.text span {
  font-size: 13px;
  display: flex;
  align-items: center;
}
.divider {
  width: 2px;
  height: 2rem;
  background-color: #9f9f9f;
  margin-left: 3rem;
  margin-right: 1rem;
}
.sofa {
  margin-bottom: 0;
  width: 10%;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
}
@media screen and (max-width: 576px) {
  .hero-bg {
    height: 50px;
  }
  .hero {
    width: 50%;
    margin: 0;
  }
  .text {
    width: 100%;
    margin-bottom: 0;
  }
  .text p {
    font-size: 10px;
    margin-right: 5px;
  }
  .text span {
    font-size: 10px;
    margin-right: 5px;
  }
  .divider {
    height: 1rem;
    margin: 0rem;
    margin-right: 5px;
  }
  .sofa {
    font-weight: 400;
    font-size: 12px;
    width: 100%;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .hero-bg {
    height: 50px;
  }
  .hero {
    width: 50%;
    margin: 0;
    padding-left: 1rem;
  }
  .text {
    width: 30%;
    margin-bottom: 0;
    gap: 0.5rem;
  }
  .text p {
    font-size: 13px;
    margin-right: 0px;
  }
  .text span {
    font-size: 10px;
    margin-right: 0px;
  }
  .divider {
    height: 1rem;
    margin: 0rem;
    margin: 0 10px;
  }
  .sofa {
    font-weight: 400;
    font-size: 13px;
    width: 100%;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .hero-bg {
    height: 60px;
  }
  .hero {
    width: 50%;
    margin: 0;
    padding-left: 1rem;
  }
  .text {
    width: 30%;
    margin-bottom: 0;
    gap: 0.5rem;
  }
  .text p {
    font-size: 15px;
  }
  .text span {
    font-size: 10px;
  }
  .divider {
    height: 1.5rem;
    margin: 0 10px;
  }
  .sofa {
    font-weight: 400;
    font-size: 15px;
    width: 100%;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1440px) {
  .hero-bg {
    height: 70px;
  }
  .hero {
    width: 50%;
    margin: 0;
    padding-left: 1rem;
  }
  .text {
    width: 30%;
    gap: 0.5rem;
  }
  .text p {
    font-size: 16px;
  }
  .text span {
    font-size: 10px;
  }
  .divider {
    height: 1.5rem;
    margin: 0 10px;
  }
  .sofa {
    font-size: 16px;
    width: 100%;
  }
}
</style>
