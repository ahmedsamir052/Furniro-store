<template>
  <div class="border"></div>
  <div class="info" data-aos="fade-up">
    <div class="title">
      <span>Description</span>
      <p>Additional Information</p>
      <p>Reviews [5]</p>
    </div>
    <div class="description">
      <p>
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable
        active stereo speaker takes the unmistakable look and sound of Marshall,
        unplugs the chords, and takes the show on the road.
      </p>
      <p>
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of
        vintage styled engineering. Setting the bar as one of the loudest
        speakers in its class, the Kilburn is a compact, stout-hearted hero with
        a well-balanced audio which boasts a clear midrange and extended highs
        for a sound that is both articulate and pronounced. The analogue knobs
        allow you to fine tune the controls to your personal preferences while
        the guitar-influenced leather strap enables easy and stylish travel.
      </p>
    </div>
    <div class="imgs">
      <div class="img1">
        <img :src="discript1" alt="" />
      </div>
      <div class="img2">
        <img :src="discript2" alt="" />
      </div>
    </div>
  </div>
  <div class="border"></div>
</template>
<script setup>
import discript1 from "@/assets/imgs/discript1.png";
import discript2 from "@/assets/imgs/discript2.png";
</script>
<style scoped>
.border {
  margin-bottom: 1rem;
}
.info {
  margin: 2rem 0;
}
.info .title {
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.title span {
  font-weight: 500;
  font-size: 24px;
  color: #000000;
}
.title p {
  font-weight: 400;
  font-size: 24px;
  color: #9f9f9f;
}
.info .description {
  width: 70%;
  margin: auto;
}
.info .description p {
  font-weight: 400;
  font-size: 16px;
  text-align: justify;
  color: #9f9f9f;
  margin-top: 1.5rem;
}
.imgs {
  width: 86%;
  margin: auto;
  margin-bottom: 3rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}
.img1,
.img2 {
  width: 49%;
  height: 350px;
  background-color: #f9f1e7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.img1 img {
  width: 130%;
  object-fit: contain;
  display: block;
  margin-bottom: 11rem;
  margin-right: 2rem;
}
.img2 img {
  width: 110%;
  object-fit: contain;
  display: block;
  margin-bottom: 14rem;
}
@media screen and (max-width: 576px) {
  .info {
    margin: 1rem 0;
  }
  .info .title {
    width: 53%;
  }
  .title span {
    font-size: 14px;
  }
  .title p {
    font-size: 14px;
  }
  .info .description p {
    font-size: 9px;
    margin-top: 0rem;
  }
  .imgs {
    width: 80%;
    margin: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: block;
  }
  .img1,
  .img2 {
    width: 100%;
    height: 270px;
    margin-bottom: 1rem;
  }
  .img1 img {
    margin-bottom: 10rem;
  }
  .img2 img {
    margin-bottom: 11rem;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .info {
    margin: 1rem 0;
  }
  .info .title {
    width: 62%;
  }
  .title span {
    font-size: 16px;
  }
  .title p {
    font-size: 16px;
  }
  .description{
    width: 75%;
  }
  .info .description p {
    font-size: 11px;
    margin-top: 0rem;
  }
   .imgs {
    width: 80%;
    margin: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: block;
  }
  .img1,
  .img2 {
    width: 100%;
    height: 270px;
    margin-bottom: 1rem;
  }
  .img1 img {
    margin-bottom: 10rem;
  }
  .img2 img {
    margin-bottom: 11rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .info {
    margin: 1rem 0;
  }
  .info .title {
    width: 62%;
  }
  .title span {
    font-size: 19px;
  }
  .title p {
    font-size: 19px;
  }
  .info .description p {
    font-size: 14px;
    margin-top: 0rem;
  }
   .imgs {
    width: 80%;
    margin: auto;
    display: block;
  }
  .img1,
  .img2 {
    width: 100%;
    height: 270px;
    margin-bottom: 1rem;
  }
  .img1 img {
    margin-bottom: 10rem;
  }
  .img2 img {
    margin-bottom: 11rem;
  }
}
</style>
