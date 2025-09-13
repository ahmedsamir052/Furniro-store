<template>
  <section class="hero-section">
    <img
      src="@/assets/imgs/hero.jpg"
      alt="Background"
      class="background-image"
    />
    <div class="overlay-card">
      <div class="card">
        <div class="arrival">New Arrival</div>
        <h1>Discover our New Collection</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <div class="btn1">
          <button>BUY NOW</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  margin-bottom: 5rem;
}

.background-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-position: center;
  z-index: 0;
  object-fit: cover;
}

.overlay-card {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card {
  background-color: #fef0db;
  padding: 2.5rem;
  border-radius: 10px;
  border: none;
  position: absolute;
  top: 60%;
  left: 72%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 55%;
}
.card .arrival {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 3px;
  color: #333333;
  margin-top: 1rem;
}
.card h1 {
  margin: 0;
  font-weight: 700;
  font-size: 52px;
  color: #b88e2f;
  width: 70%;
}
.card p {
  width: 80%;
  font-size: 16px;
  color: #333;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.btn1 {
  cursor: pointer;
}
button {
  font-weight: 600;
  color: #fff;
  background-color: #b8860b;
  border: none;
  padding: 23px 60px;
  font-size: 16px;
  transition: all 0.3s ease;
  border-radius: 5px;
}
.btn1 button:hover {
  background: #d7a93e;
  color: #ffffff;
  box-shadow: 0 0 12px rgb(125, 121, 121);
}
@media screen and (max-width: 576px) {
  .hero-section {
    margin-bottom: 1.5rem;
  }
  .card {
    width: 43%;
    height: auto;
    padding: 0rem;
    padding: 0.2rem 0.5rem;
    transform: translate(-50%, -50%);
  }
  .card .arrival {
    font-weight: 600;
    font-size: 9px;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  .card h1 {
    font-size: clamp(11px, 0.61px + 3.017vw, 18px);
    margin-top: 0rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
  }
  .card p {
    width: 100%;
    font-size: clamp(6px, 4.0416px + 0.86vw, 9px);
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  button {
    border: none;
    padding: 5px 9px;
    font-size: 7px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .hero-section {
    margin-bottom: 1.5rem;
  }
  .card {
    width: 43%;
    height: auto;
    padding: 0rem;
    padding: 1rem 0.8rem;
  }
  .card .arrival {
    font-weight: 600;
    font-size: 13px;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  .card h1 {
    width: 90%;
    font-size: 20px;
    margin-top: 0rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
  }
  .card p {
    width: 100%;
    font-size: 10px;
    margin-top: 0rem;
    margin-bottom: 1rem;
  }
  button {
    border: none;
    padding: 5px 9px;
    font-size: 10px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .hero-section {
    margin-bottom: 1.5rem;
  }
  .card {
    width:40%;
    height: auto;
    padding: 0rem;
    padding: 1rem 0.8rem;
  }
  .card .arrival {
    font-size: 15px;
    margin-top: 0rem;
    margin-bottom: 0.5rem;
  }
  .card h1 {
    width: 90%;
    font-size: 25px;
  }
  .card p {
    width: 100%;
    font-size: 12px;
    margin-top: 0rem;
    margin-bottom: 1rem;
  }
  button {
    border: none;
    padding: 7px 11px;
    font-size: 12px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1440px) {
 .hero-section {
    margin-bottom: 1.5rem;
  }
  .card {
    width:40%;
    height: auto;
    padding: 0rem;
    padding: 1rem 0.8rem;
  }
  .card .arrival {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .card h1 {
    width: 90%;
    font-size: 35px;
  }
  .card p {
    width: 100%;
    font-size: 14px;
    margin-top: 0rem;
    margin-bottom: 1rem;
  }
  button {
    border: none;
    padding: 10px 14px;
    font-size: 14px;
  }
}
</style>
