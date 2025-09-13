<template>
  <div class="features" data-aos="fade-up">
    <div class="features-container">
      <div class="feature-item">
        <div class="icon"><i class="fa-solid fa-trophy"></i></div>
        <div class="text">
          <h4>High Quality</h4>
          <p>crafted from top materials</p>
        </div>
      </div>

      <div class="feature-item">
        <div class="icon"><i class="fa-solid fa-certificate"></i></div>
        <div class="text">
          <h4>Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
      </div>

      <div class="feature-item">
        <div class="icon"><i class="fa-solid fa-hand-holding-dollar"></i></div>
        <div class="text">
          <h4>Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
      </div>

      <div class="feature-item">
        <div class="icon"><i class="fa-solid fa-headset"></i></div>
        <div class="text">
          <h4>24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.features {
  background-color: #faf3ea;
  width: 100%;
  padding: 3rem 0;
  margin: 0.5rem 0;
}
.features-container {
  width: 86%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  flex-wrap: wrap;
}
.feature-item {
  display: flex;
  align-items: center;
  width: 25%;
  gap: 1rem;
}
.icon {
  font-size: 50px;
  color: #000;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.feature-item .text {
  width: 75%;
}
.text h4 {
  font-weight: 600;
  font-size: 23px;
  color: #242424;
  margin-bottom: 0;
}
.text p {
  font-weight: 500;
  font-size: 15px;
  color: #898989;
  width: 100%;
}
@media screen and (max-width: 576px) {
  .features {
    padding: 1rem 0;
    margin: 0;
  }
  .features-container {
    width: 95%;
    padding: 0;
  }
  .feature-item {
    width: 25%;
    gap: 0.5rem;
  }
  .icon {
    font-size: 15px;
    min-width: 0px;
  }
  .feature-item .text {
    width: 100%;
    margin-bottom: 0;
  }
  .text h4 {
    font-size: 10px;
    margin-bottom: 0.2rem;
  }
  .text p {
    font-size: 8px;
    margin-bottom: 0;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .features {
    padding: 0.5rem 0;
    margin: 0;
  }
  .features-container {
    width: 85%;
    padding: 0.5rem 0 ;
  }
  .feature-item {
    width: 24%;
    gap: 0.5rem;
  }
  .icon {
    font-size: 18px;
    min-width: 0px;
  }
  .feature-item .text {
    width: 100%;
    margin-bottom: 0;
  }
  .text h4 {
    font-size: 15px;
    margin-bottom: 0.2rem;
    width: 100%;
  }
  .text p {
    font-size: 10px;
    margin-bottom: 0;
    width: 100%;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .features {
    padding: 0.5rem 0;
    margin: 0;
  }
  .features-container {
    width: 85%;
    padding: 0.5rem 0 ;
  }
  .feature-item {
    width: 24%;
    gap: 0.5rem;
  }
  .icon {
    font-size: 25px;
    min-width: 0px;
  }
  .feature-item .text {
    width: 100%;
    margin-bottom: 0;
  }
  .text h4 {
    font-size: 17px;
    margin-bottom: 0.2rem;
    width: 100%;
  }
  .text p {
    font-size: 13px;
    margin-bottom: 0;
    width: 100%;
  }
}
</style>
