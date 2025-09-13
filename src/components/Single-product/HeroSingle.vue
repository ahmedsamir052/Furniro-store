<template>
  <div class="hero-bg" data-aos="fade-up">
    <div class="hero">
      <div class="text">
        <!-- <div class="ddd"> -->
          <p class="word">Home</p>
          <p class="icon"><i class="fa-solid fa-angle-right"></i></p>
          <p class="word">Shop</p>
          <p class="icon"><i class="fa-solid fa-angle-right"></i></p>
        <!-- </div> -->
      </div>
      <div class="border1">
        <div class="divider"></div>
      </div>
      <div class="sofa">
        <p>Asgaard sofa</p>
      </div>
    </div>
  </div>
  <!-- <div class="hero-bg" data-aos="fade-up">
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
  </div> -->
</template>
<style scoped>
.hero-bg {
  background-color: #f9f1e7;
  height: 100px;
  align-content: center;
}
.hero {
  width: 86%;
  margin: auto;
  display: flex;
  /* justify-content: space-between; */
}
.text{
  width: 13%;
  display: flex;
  align-items: center;
}
.ddd{
  width: 100%;
  display: flex;
  align-items: center;
}
.text .word{
  width: 25%;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  color: #9f9f9f;
}
.text .icon{
  width: 25%;
  text-align: center;
  font-size: 13px;
}
.border1{
  width: 1%;
  border: none;
}
.divider {
  width: 2px;
  height: 2rem;
  background-color: #9f9f9f;
}
.sofa{
  font-size: 16px;
  font-weight: 400;
  width: 10%;
}
@media screen and (max-width: 576px) {
  .hero-bg {
    height: 50px;
  }
  .hero {
    width: 90%;
  }
  .text {
    width: 60%;
    margin-bottom: 0;
  }
  .text .word {
    width: 20%;
    font-size: 10px;
    margin-right: 5px;
    margin-bottom: 0;
  }
  .text .icon {
    width: 20%;
    font-size: 10px;
    margin-right: 5px;
    margin-bottom: 0;
  }
  .border1{
    width: 5%;
  }
  .divider {
    height: 1rem;
    margin: 0rem;
    margin-right: 5px;
  }
  .sofa {
    width: 100%;
  }
  .sofa p{
    margin-bottom: 0;
    font-weight: 400;
    font-size: 12px;
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
  .text .word {
    font-size: 13px;
    margin-right: 0px;
  }
  .text .icon {
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
