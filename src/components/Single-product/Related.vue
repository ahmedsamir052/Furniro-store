<template>
  <div class="related" data-aos="fade-up">
    <h1>Related Products</h1>
    <div class="cards">
      <div class="card">
        <div class="img-cont">
          <img :src="Related1" alt="" />
          <div class="discount-label">-30%</div>
        </div>
        <div class="text">
          <h6>Syltherine</h6>
          <p>Stylish cafe chair</p>
          <span>
            <p class="disprice">Rp 2.500.000</p>
            <p class="price">Rp 3.500.000</p>
          </span>
        </div>
      </div>
      <div class="card">
        <div class="img-cont">
          <img :src="Related2" alt="" />
        </div>
        <div class="text">
          <h6>Leviosa</h6>
          <p>Stylish cafe chair</p>
          <span>
            <p class="disprice">Rp 2.500.000</p>
          </span>
        </div>
      </div>
      <div class="card">
        <div class="img-cont">
          <img :src="Related3" alt="" />
          <div class="discount-label">-50%</div>
        </div>
        <div class="text">
          <h6>Lolito</h6>
          <p>Luxury big sofa</p>
          <span>
            <p class="disprice">Rp 7.000.000</p>
            <p class="price">Rp 14.000.000</p>
          </span>
        </div>
      </div>
      <div class="card">
        <div class="img-cont">
          <img :src="Related4" alt="" />
          <div class="new-label">New</div>
        </div>
        <div class="text">
          <h6>Respira</h6>
          <p>Outdoor bar table and stool</p>
          <span>
            <p class="disprice">Rp 500.000</p>
          </span>
        </div>
      </div>
    </div>
    <RouterLink to="/Shop-page" class="text-decoration-none">
      <div class="btn-show">
        <button>Show More</button>
      </div>
    </RouterLink>
  </div>
</template>

src/assets/imgs/Related1.png
<script setup>
import Related1 from "@/assets/imgs/Related1.png";
import Related2 from "@/assets/imgs/Related2.png";
import Related3 from "@/assets/imgs/Related3.png";
import Related4 from "@/assets/imgs/Related4.png";
</script>

<style scoped>
.related {
  width: 86%;
  margin: auto;
  margin-top: 5rem;
}
.related h1 {
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  color: #3a3a3a;
  margin-bottom: 2.5rem;
  margin-top: 1rem;
}
.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
}
.card {
  width: 23%;
  border: none;
}
.img-cont {
  width: 100%;
  height: 60%;
}
.img-cont img {
  width: 100%;
  height: 100%;
  display: block;
}
.discount-label {
  position: absolute;
  top: 8px;
  right: 8px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background-color: #e97171;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.new-label {
  position: absolute;
  top: 8px;
  right: 8px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background-color: #2ec1ac;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.text {
  padding: 1rem;
  background-color: #f4f5f7;
  width: 100%;
}
h6 {
  font-weight: 600;
  font-size: 24px;
}
p {
  font-weight: 500;
  font-size: 16px;
  color: #898989;
  margin-bottom: 0.5rem;
  width: 100%;
}
span {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span .disprice {
  font-weight: 600;
  font-size: 20px;
  color: #3a3a3a;
}
span .price {
  font-weight: 400;
  font-size: 16px;
  text-decoration-line: line-through;
  color: #b0b0b0;
}
.btn-show {
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
}
.btn-show button {
  padding: 0.8rem 6rem;
  font-weight: 600;
  font-size: 16px;
  color: #b88e2f;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #b88e2f;
}

@media screen and (max-width: 576px) {
  .related {
    margin-top: 1.5rem;
  }
  .related h1 {
    font-size: 20px;
    margin-bottom: 1.2rem;
  }
  .cards {
    gap: 0.3rem;
  }
  .card {
    width: 60%;
    margin: auto;
  }
  .discount-label {
    top: 15px;
    right: 15px;
    font-size: 10px;
    width: 25px;
    height: 25px;
  }
  .new-label {
    top: 15px;
    right: 15px;
    font-size: 10px;
    width: 25px;
    height: 25px;
  }
  h6 {
    font-size: 14px;
  }
  p {
    font-size: 12px;
  }
  span .disprice {
    font-size: 12px;
  }
  span .price {
    font-size: 14px;
  }
  .btn-show {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .btn-show button {
    padding: 0.4rem 2rem;
    font-size: 10px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .related {
    margin-top: 1.5rem;
  }
  .related h1 {
    font-size: 22px;
    margin-bottom: 1.2rem;
  }
  .cards {
    gap: 1rem;
    align-items: stretch;
  }
  .card {
    width: 48%;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  }
  .text {
    flex-grow: 1;
  }
  .discount-label {
    top: 15px;
    right: 15px;
    font-size: 10px;
    width: 25px;
    height: 25px;
  }
  .new-label {
    top: 15px;
    right: 15px;
    font-size: 10px;
    width: 25px;
    height: 25px;
  }
  h6 {
    font-size: 18px;
  }
  p {
    font-size: 15px;
    font-weight: 400;
  }
  span .disprice,
  span .price {
    font-size: 15px;
  }
  .btn-show {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .btn-show button {
    padding: 0.4rem 1.5rem;
    font-size: 10px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .related {
    margin-top: 1.5rem;
  }
  .related h1 {
    font-size: 25px;
    margin-bottom: 1.2rem;
  }
  .cards {
    gap: 0.7rem;
    align-items: stretch;
  }
  .card {
    width: 32%;
    margin-bottom: 1rem;
  }
  .text {
    flex-grow: 1;
  }
  .discount-label {
    top: 12px;
    right: 12px;
    font-size: 12px;
    width: 35px;
    height: 35px;
  }
  h6 {
    font-size: 20px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
  span .disprice,
  span .price {
    font-size: 16px;
  }
  .btn-show {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .btn-show button {
    padding: 0.4rem 2rem;
    font-size: 12px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1440px) {
  .cards {
    gap: 1rem;
  }
  .card {
    width: 32%;
    margin-bottom: 1rem;
  }
  .discount-label {
    top: 14px;
    right: 14px;
    font-size: 14px;
    width: 40px;
    height: 40px;
  }
  h6 {
    font-size: 22px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
  span .disprice,
  span .price {
    font-size: 18px;
  }
}
</style>
