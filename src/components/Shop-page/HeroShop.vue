<template>
  <div class="background-container">
    <div class="blurred-bg"></div>
    <div class="content">
      <h1>Shop</h1>
      <p><span>Home > </span>Shop</p>
    </div>
  </div>
  <div class="filter-sec">
    <div class="header">
      <div class="left-side">
        <div class="filtering">
          <span class="filter-icon"
            ><i class="fa-solid fa-rectangle-list"></i
          ></span>
          <span class="filter-text">Filter</span>
        </div>
        <i class="fa-solid fa-grip"></i>
        <i class="fa-solid fa-list"></i>
        <div class="divider"></div>
        <span class="showing-text">Showing 1–16 of 32 results</span>
      </div>
      <div class="right-side">
        <span class="show-text">Show</span>
        <div class="show-count">16</div>
        <span class="sort-text">Short by</span>
        <div class="sort-dropdown">Default</div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.background-container {
  position: relative;
  height: 360px;
  overflow: hidden;
}
.blurred-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("src/assets/imgs/common.jpg");
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
  top: 35%;
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
.filter-sec {
  width: 100%;
  background-color: #f9f1e7;
  margin-bottom: 4rem;
}
.header {
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 86%;
  margin: auto;
  padding: 1rem 0;
}
.left-side {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.filtering {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.filter-icon {
  width: 1.25rem;
  height: 1.25rem;
}
.filter-text {
  font-weight: 400;
  font-size: 20px;
  color: #000000;
}
.divider {
  width: 2px;
  height: 1.25rem;
  background-color: #9f9f9f;
}
.showing-text {
  font-weight: 400;
  font-size: 16px;
}
.right-side {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.show-text,
.sort-text {
  font-weight: 400;
  font-size: 20px;
}
.sort-text {
  margin: 0.5rem;
}
.show-count {
  width: 45px;
  height: 45px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  color: #9f9f9f;
  margin: 0 0.5rem;
}
.sort-dropdown {
  width: 188px;
  height: 45px;
  font-size: 20px;
  font-weight: 400;
  color: #9f9f9f;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1.5rem;
}
@media screen and (max-width: 576px) {
  .background-container {
    height: 170px;
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
  .filter-sec {
    margin-bottom: 2rem;
    width: 100%;
  }
  .header {
    width: 100%;
    margin: auto;
    margin-right: 0;
    margin-left: 0;
    padding: 1rem;
  }
  .left-side {
    gap: 0.3rem;
  }
  .filtering {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }
  .filter-icon {
    width: 1.25rem;
    height: 1.7rem;
  }
  .filter-icon .fa-rectangle-list {
    width: 13px;
    height: 13px;
  }
  .filter-text {
    font-size: 12px;
  }
  .fa-grip,
  .fa-list {
    width: 13px;
    height: 13px;
  }
  .showing-text {
    font-size: 10px;
  }
  .right-side {
    gap: 0.2rem;
  }
  .show-text,
  .sort-text {
    font-weight: 700;
    font-size: 10px;
  }
  .sort-text {
    margin: 0rem;
  }
  .show-count {
    width: 22px;
    height: 20px;
    font-size: 12px;
    margin: 0rem;
  }
  .sort-dropdown {
    width: 55px;
    height: 25px;
    font-size: 12px;
    padding-left: 0.3rem;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .background-container {
    height: 190px;
    width: 100%;
  }
  .filter-sec {
    margin-bottom: 2rem;
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
  .header {
    width: 100%;
    margin: auto;
    margin-right: 0;
    margin-left: 0;
    padding: 1rem 2rem;
  }
  .left-side {
    gap: 0.5rem;
  }
  .filtering {
    gap: 0.25rem;
  }
  .filter-icon {
    width: 1.25rem;
    height: 1.55rem;
  }
  .filter-icon .fa-rectangle-list {
    width: 15px;
    height: 15px;
  }
  .filter-text {
    font-size: 14px;
    font-weight: 500;
  }
  .fa-grip,
  .fa-list {
    width: 15px;
    height: 15px;
  }
  .showing-text {
    font-size: 15px;
    font-weight: 500;
  }
  .right-side {
    gap: 0.5rem;
  }
  .show-text,
  .sort-text {
    font-weight: 600;
    font-size: 15px;
  }
  .sort-text {
    margin: 0rem;
  }
  .show-count {
    width: 26px;
    height: 24px;
    font-size: 13px;
    margin: 0rem;
  }
  .sort-dropdown {
    width: 60px;
    height: 25px;
    font-size: 13px;
    padding-left: 0.3rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .background-container {
    height: 220px;
    width: 100%;
  }
  .filter-sec {
    margin-bottom: 2rem;
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
  .header {
    width: 100%;
    margin: auto;
    margin-right: 0;
    margin-left: 0;
    padding: 1rem 2rem;
  }
  .left-side {
    gap: 0.5rem;
  }
  .filtering {
    gap: 0.5rem;
  }
  .filter-icon {
    width: 1.25rem;
    height: 1.5rem;
  }
  .filter-icon .fa-rectangle-list {
    width: 18px;
    height: 18px;
  }
  .filter-text {
    font-size: 18px;
    font-weight: 500;
  }
  .fa-grip,
  .fa-list {
    width: 18px;
    height: 18px;
  }
  .showing-text {
    font-size: 16px;
    font-weight: 500;
  }
  .right-side {
    gap: 0.5rem;
  }
  .show-text,
  .sort-text {
    font-weight: 500;
    font-size: 17px;
  }
  .sort-text {
    margin: 0rem;
  }
  .show-count {
    width: 28px;
    height: 26px;
    font-size: 15px;
    margin: 0rem;
  }
  .sort-dropdown {
    width: 65px;
    height: 30px;
    font-size: 15px;
    padding-left: 0.3rem;
  }
}
</style>
