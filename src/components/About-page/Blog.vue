<template>
  <div class="blog" data-aos="fade-up">
    <div class="blog-data">
      <div class="blog-card">
        <div class="img">
          <img :src="About1" alt="" />
        </div>
        <div class="card-logo">
          <span><i class="fa-solid fa-user-tie"></i>Admin</span>
          <span><i class="fa-solid fa-calendar"></i>14 Oct 2022</span>
          <span><i class="fa-solid fa-tag"></i>Wood</span>
        </div>
        <h2>Going all-in with millennial design</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <button>Read more</button>
      </div>
      <div class="blog-card">
        <div class="img">
          <img :src="About2" alt="" />
        </div>
        <div class="card-logo">
          <span><i class="fa-solid fa-user-tie"></i>Admin</span>
          <span><i class="fa-solid fa-calendar"></i>14 Oct 2022</span>
          <span><i class="fa-solid fa-tag"></i>Wood</span>
        </div>
        <h2>Exploring new ways of decorating</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <button>Read more</button>
      </div>
      <div class="blog-card">
        <div class="img">
          <img :src="About3" alt="" />
        </div>
        <div class="card-logo">
          <span><i class="fa-solid fa-user-tie"></i>Admin</span>
          <span><i class="fa-solid fa-calendar"></i>14 Oct 2022</span>
          <span><i class="fa-solid fa-tag"></i>Wood</span>
        </div>
        <h2>Handmade pieces that took time to make</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <button>Read more</button>
      </div>
    </div>
    <div class="blog-sidebar">
      <div class="search">
        <input type="text" />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div class="categories">
        <p>Categories</p>
        <span class="Category-name d-flex justify-content-between">
          <p>Crafts</p>
          <p>2</p>
        </span>
        <span class="Category-name d-flex justify-content-between">
          <p>Design</p>
          <p>8</p>
        </span>
        <span class="Category-name d-flex justify-content-between">
          <p>Handmade</p>
          <p>7</p>
        </span>
        <span class="Category-name d-flex justify-content-between">
          <p>Interior</p>
          <p>1</p>
        </span>
        <span class="Category-name d-flex justify-content-between">
          <p>Wood</p>
          <p>6</p>
        </span>
      </div>
      <div class="recent-posts">
        <p class="tittle">Recent Posts</p>
        <div class="posts">
          <div class="post">
            <div class="img">
              <img :src="About4" alt="" />
            </div>
            <div class="text">
              <span>Going all-in with millennial design</span>
              <p>03 Aug 2022</p>
            </div>
          </div>
          <div class="post">
            <div class="img">
              <img :src="About5" alt="" />
            </div>
            <div class="text">
              <span>Exploring new ways of decorating</span>
              <p>03 Aug 2022</p>
            </div>
          </div>
          <div class="post">
            <div class="img">
              <img :src="About6" alt="" />
            </div>
            <div class="text">
              <span>Handmade pieces that took time to make</span>
              <p>03 Aug 2022</p>
            </div>
          </div>
          <div class="post">
            <div class="img">
              <img :src="About7" alt="" />
            </div>
            <div class="text">
              <span>Modern home in Milan</span>
              <p>03 Aug 2022</p>
            </div>
          </div>
          <div class="post">
            <div class="img">
              <img :src="About8" alt="" />
            </div>
            <div class="text">
              <span>Colorful office redesign</span>
              <p>03 Aug 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="nums" data-aos="fade-up">
    <div class="num1">1</div>
    <div class="num">2</div>
    <div class="num">3</div>
    <button class="next-btn">Next</button>
  </div>
</template>
<script setup>
import About1 from "@/assets/imgs/About1.jpg";
import About2 from "@/assets/imgs/About2.jpg";
import About3 from "@/assets/imgs/About3.jpg";
import About4 from "@/assets/imgs/About4.jpg";
import About5 from "@/assets/imgs/About5.jpg";
import About6 from "@/assets/imgs/About6.jpg";
import About7 from "@/assets/imgs/About7.jpg";
import About8 from "@/assets/imgs/About8.jpg";
</script>
<style scoped>
/* Blog */
.blog {
  width: 86%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

/* Blog Data */
.blog-data {
  width: 61%;
  margin-right: 0;
  padding-right: 0;
}

/* Blog Card */
.blog-card {
  width: 100%;
  margin-bottom: 3.5rem;
}
/* Blog IMG */
.blog-card .img {
  width: 100%;
  aspect-ratio: 830 / 540;
  overflow: hidden;
  margin: auto;
  border-radius: 10px;
}
.blog-card .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 10px;
}
/* Card Logo */
.card-logo {
  padding: 1rem 0;
}
.card-logo span {
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: #9f9f9f;
  margin-right: 2rem;
}
.card-logo span .fa-user-tie,
.fa-calendar,
.fa-tag {
  margin-right: 0.5rem;
}

.blog-card h2 {
  font-weight: 500;
  font-size: 30px;
}
.blog-card p {
  font-weight: 400;
  font-size: 16px;
  text-align: justify;
  color: #9f9f9f;
}
button {
  font-weight: 400;
  font-size: 16px;
  text-align: justify;
  color: #000000;
  border: none;
  padding-bottom: 10px;
  background-color: white;
  border-bottom: 1px solid #000000;
}
.blog-sidebar {
  width: 35%;
}
/* Search Bar */
.search {
  width: 73%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #9f9f9f;
  padding: 0.2rem;
  margin-bottom: 2rem;
}
.search input {
  border: none;
  height: 45px;
}
.fa-magnifying-glass {
  padding-right: 0.5rem;
}

/* categories section */
.categories {
  width: 300px;
  margin: auto;
}
.categories p {
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 2rem;
}
.Category-name p {
  font-weight: 400;
  font-size: 16px;
  color: #9f9f9f;
}
/* Posts */
.recent-posts {
  width: 300px;
  margin: auto;
  margin-top: 5rem;
}
.recent-posts .tittle {
  font-weight: 500;
  font-size: 24px;
  width: 100%;
  margin-bottom: 2rem;
}
.posts .post {
  display: flex;
  gap: 1rem;
  width: 100%;
}
.post {
  margin-bottom: 2rem;
}
.post .img {
  width: 80px;
  height: 80px;
}
.img img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
}
.text {
  width: 46.5%;
}
.text span {
  font-weight: 400;
  font-size: 14px;
  color: #000000;
}
.text p {
  font-weight: 400;
  font-size: 12px;
  color: #9f9f9f;
  width: 100%;
}
.nums {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  margin: auto;
  margin-bottom: 3rem;
}
.num1 {
  width: 50px;
  height: 50px;
  background-color: #b88e2f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
}
.num {
  width: 50px;
  height: 50px;
  background-color: #f9f1e7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  line-height: 30px;
  font-weight: 400;
  font-size: 20px;
}
.next-btn {
  background-color: #f9f1e7;
  color: white;
  border: none;
  padding: 0 1.5rem;
  height: 50px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 400;
  color: #000000;
}
@media screen and (max-width: 576px) {
  .categories,
  .recent-posts {
    display: none;
  }
  .blog {
    flex-direction: column-reverse;
  }
  .blog-data {
    width: 100%;
  }
  .blog-card {
    width: 100%;
    margin-bottom: 1.5rem;
  }
  .card-logo {
    padding: 0.3rem 0;
  }
  .card-logo span {
    font-size: 12px;
    padding: 0;
  }
  .blog-card h2 {
    font-weight: 500;
    font-size: 15px;
  }
  .blog-card p {
    font-size: 10px;
  }
  button {
    font-size: 10px;
    padding-bottom: 0;
  }
  .blog-sidebar {
    width: 100%;
  }
  .search {
    width: 85%;
    margin-bottom: 1.5rem;
  }
  .search input {
    height: 26px;
  }
  .nums {
    width: 35%;
    margin-bottom: 2rem;
  }
  .num1,
  .num,
  .next-btn {
    width: 30px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    line-height: 25px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .categories,
  .recent-posts {
    display: none;
  }
  .blog {
    flex-direction: column-reverse;
  }
  .blog-data {
    width: 100%;
  }
  .blog-card {
    width: 100%;
    margin-bottom: 1.5rem;
  }
  .card-logo {
    padding: 0;
  }
  .card-logo span {
    font-size: 12px;
    padding: 0 0;
  }
  .blog-card h2 {
    font-size: 16px;
    margin-top: 0.2rem;
  }
  .blog-card p {
    font-size: 12px;
    margin-bottom: 0;
  }
  button {
    font-size: 13px;
    padding-bottom: 0;
  }
  .blog-sidebar {
    width: 60%;
    margin: auto;
  }
  .search {
    width: 85%;
    margin-bottom: 1.5rem;
  }
  .search input {
    height: 26px;
  }
  .nums {
    width: 37%;
    margin-bottom: 2rem;
  }
  .num1,
  .num,
  .next-btn {
    width: 32px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .categories,
  .recent-posts {
    display: none;
  }
  .blog {
    flex-direction: column-reverse;
  }
  .blog-data {
    width: 100%;
  }
  .blog-card {
    width: 100%;
    margin-bottom: 1.5rem;
  }
  .card-logo {
    padding: 0;
  }
  .card-logo span {
    font-size: 14px;
    padding: 0 0;
  }
  .blog-card h2 {
    font-size: 18px;
    margin-top: 0.2rem;
  }
  .blog-card p {
    font-size: 14px;
    margin-bottom: 0;
  }
  button {
    font-size: 15px;
    padding-bottom: 0;
  }
  .blog-sidebar {
    width: 60%;
    margin: auto;
  }
  .search {
    width: 90%;
    margin-bottom: 1.5rem;
  }
  .search input {
    height: 26px;
  }
  .nums {
    width: 28%;
    margin-bottom: 2rem;
    margin-top: 0.5rem;
  }
  .num1,
  .num,
  .next-btn {
    width: 35px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1440px) {
  .nums {
    width: 25%;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  .num1,
  .num,
  .next-btn {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
