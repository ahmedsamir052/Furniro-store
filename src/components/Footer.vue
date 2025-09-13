<template>
  <div class="border"></div>
  <div class="footer" data-aos="fade-up">
    <div class="footer-top">
      <div class="footer_logo">
        <h3>Funiro.</h3>
        <p>
          400 University Drive Suite 200 Coral<br />
          Gables,<br />
          FL 33134 USA
        </p>
      </div>
      <div class="footer_links">
        <div class="links">
          <ul>
            <p>Links</p>
            <li class="list-unstyled">
              <a href="" class="text-decoration-none">Home</a>
            </li>
            <li class="list-unstyled">
              <a href="" class="text-decoration-none">Shop</a>
            </li>
            <li class="list-unstyled">
              <a href="" class="text-decoration-none">About</a>
            </li>
            <li class="list-unstyled">
              <a href="" class="text-decoration-none">Contact</a>
            </li>
          </ul>
        </div>
        <div class="help">
          <ul>
            <p>Help</p>
            <li class="list-unstyled">
              <a href="" class="text-decoration-none">Payment Options</a>
            </li>
            <li class="list-unstyled">
              <a href="" class="text-decoration-none">Returns</a>
            </li>
            <li class="list-unstyled">
              <a href="" class="text-decoration-none">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div class="NewsLetter">
          <p>NewsLetter</p>
          <form class="form">
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>2023 furino. All rights reverved</p>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.border {
  border-top: 1px solid #d9d9d9;
}
.footer {
  width: 86%;
  margin: auto;
  margin-bottom: 3rem;
  padding-top: 3rem;
}
.footer-top {
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
}
.footer-top .footer_logo {
  width: 30%;
}
.footer_logo h3 {
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  margin-bottom: 2rem;
}
.footer_logo p {
  font-weight: 400;
  font-size: 16px;
  color: #9f9f9f;
}
.footer-top .footer_links {
  width: 67.5%;
  display: flex;
  justify-content: space-between;
}
.links {
  width: 25%;
}
.links p {
  font-weight: 500;
  font-size: 16px;
  color: #9f9f9f;
  margin-bottom: 2rem;
}
.links li {
  margin-bottom: 2rem;
}
.links li a {
  font-weight: 500;
  font-size: 16px;
  color: #000000;
}
.help {
  width: 22%;
}
.help p {
  font-weight: 500;
  font-size: 16px;
  color: #9f9f9f;
  margin-bottom: 2rem;
}
.help li {
  margin-bottom: 2rem;
}
.help li a {
  font-weight: 500;
  font-size: 16px;
  color: #000000;
}
.NewsLetter {
  width: 50%;
}
.form {
  display: flex;
  align-items: flex-end;
  gap: 20px;
}
.form input {
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  padding: 6px 0;
  font-size: 14px;
  color: #333;
  width: 55%;
}
.form input::placeholder {
  color: #999;
  font-weight: 400;
}
.form button {
  background: none;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  padding: 6px 0;
  color: #000;
}
.form button:hover {
  opacity: 0.8;
}
.NewsLetter p {
  font-weight: 500;
  font-size: 16px;
  color: #9f9f9f;
  margin-bottom: 2rem;
}
.footer-bottom p {
  margin: 1.5rem 0;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
}
@media screen and (max-width: 576px),(min-width: 577px) and (max-width: 768px) {
  .footer_links .help {
    display: none;
  }
  .links p,
  .NewsLetter p {
    display: none;
  }
  .footer {
    width: 65%;
    padding-top: 1rem;
  }
  .footer-top {
    gap: 1rem;
  }
  .footer-top .footer_logo {
    width: 65%;
  }
  .footer_logo h3 {
    font-size: 15px;
    margin-bottom: 0;
  }
  .footer_logo p {
    font-size: 9px;
  }
  .footer-top .footer_links {
    display: block;
  }
  .links {
    width: 60%;
    height: 0px;
    margin-bottom: 2rem;
  }
  .links ul {
    padding: 0;
  }
  .links li {
    margin-bottom: 0;
    margin-right: 1.3rem;
  }
  .links li a {
    font-size: 8px;
    border-bottom: 1px solid #b88e2f;
    font-weight: normal;
  }
  .footer_links .links ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
  }
  .NewsLetter {
    width: 50%;
  }
  .form {
    gap: 20px;
  }
  .form input {
    border-bottom: 1px solid #b88e2f;
    padding: 0;
    font-size: 8px;
    width: 100px;
    height: 20px;
  }
  .form button {
    border-bottom: 1px solid #b88e2f;
    font-size: 8px;
    font-weight: 500;
    padding: 6px 0;
  }
  .form button:hover {
    opacity: 0.8;
  }
  .footer-bottom p {
    margin: 0.5rem 0;
    font-weight: 400;
    font-size: 12px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .footer {
    width: 95%;
    padding-top: 2rem;
  }
  .footer-top .footer_logo {
    width: 35%;
  }
  .footer_logo h3 {
    font-weight: 600;
    font-size: 21px;
    margin-bottom: 1.5rem;
  }
  .footer_logo p {
    font-size: 15px;
  }
  .footer-top .footer_links {
    width: 67.5%;
  }
  .links {
    width: 15%;
  }
  .links p {
    font-size: 12px;
    margin-bottom: 1.5rem;
  }
  .links li {
    margin-bottom: 1rem;
  }
  .links li a {
    font-weight: 500;
    font-size: 12px;
  }
  .help {
    width: 22%;
  }
  .help p {
    font-size: 12px;
    margin-bottom: 1.5rem;
  }
  .help li {
    margin-bottom: 1rem;
  }
  .help li a {
    font-weight: 500;
    font-size: 12px;
  }
  .NewsLetter {
    width: 50%;
  }
  .form {
    gap: 10px;
  }
  .form input {
    padding: 2px 0;
    font-size: 10px;
  }
  .form input::placeholder {
    font-weight: 400;
  }
  .form button {
    font-size: 10px;
    padding: 2px 0;
  }
  .form button:hover {
    opacity: 0.8;
  }
  .NewsLetter p {
    font-size: 12px;
    margin-bottom: 1.5rem;
  }
}
</style>
